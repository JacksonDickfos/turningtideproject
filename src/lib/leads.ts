import { createHash } from "crypto";

export type LeadSource = "stay-connected" | "carer-burnout-quiz";

export type SaveLeadInput = {
  name: string;
  email: string;
  source: LeadSource;
  quizScore?: number;
  quizResultLabel?: string;
};

export function validateLead(name?: string, email?: string) {
  const trimmedName = name?.trim();
  const trimmedEmail = email?.trim();

  if (!trimmedName || !trimmedEmail) {
    return { ok: false as const, message: "Please enter your name and email." };
  }

  if (!/\S+@\S+\.\S+/.test(trimmedEmail)) {
    return { ok: false as const, message: "Please enter a valid email address." };
  }

  return { ok: true as const, name: trimmedName, email: trimmedEmail };
}

function mailchimpConfig() {
  const apiKey = process.env.MAILCHIMP_API_KEY?.trim();
  const listId = process.env.MAILCHIMP_AUDIENCE_ID?.trim();
  if (!apiKey || !listId) return null;

  const dc = apiKey.split("-").pop();
  if (!dc) return null;

  return { apiKey, listId, dc };
}

function subscriberHash(email: string) {
  return createHash("md5").update(email.toLowerCase()).digest("hex");
}

function splitName(fullName: string) {
  const parts = fullName.trim().split(/\s+/);
  const first = parts[0] ?? "";
  const last = parts.slice(1).join(" ");
  return { FNAME: first, LNAME: last };
}

function buildTags(input: SaveLeadInput): string[] {
  const tags =
    input.source === "stay-connected" ? ["Stay Connected"] : ["Carer Burnout Quiz"];

  if (input.quizResultLabel) {
    tags.push(`Quiz result: ${input.quizResultLabel}`);
  }

  if (typeof input.quizScore === "number") {
    tags.push(`Quiz score: ${input.quizScore}`);
  }

  return tags;
}

async function mailchimpRequest(
  config: { apiKey: string; dc: string },
  path: string,
  init: RequestInit
) {
  const res = await fetch(`https://${config.dc}.api.mailchimp.com/3.0${path}`, {
    ...init,
    headers: {
      Authorization: `apikey ${config.apiKey}`,
      "Content-Type": "application/json",
      ...(init.headers ?? {}),
    },
  });

  const text = await res.text();
  let data: { detail?: string; title?: string } | null = null;
  if (text) {
    try {
      data = JSON.parse(text) as { detail?: string; title?: string };
    } catch {
      data = null;
    }
  }

  return { res, data };
}

async function upsertMailchimpMember(
  config: { apiKey: string; listId: string; dc: string },
  input: SaveLeadInput
) {
  const hash = subscriberHash(input.email);
  const { res, data } = await mailchimpRequest(
    config,
    `/lists/${config.listId}/members/${hash}`,
    {
      method: "PUT",
      body: JSON.stringify({
        email_address: input.email,
        status_if_new: "subscribed",
        merge_fields: splitName(input.name),
      }),
    }
  );

  if (!res.ok) {
    const message = data?.detail ?? data?.title ?? "Mailchimp subscription failed";
    throw new Error(message);
  }
}

async function applyMailchimpTags(
  config: { apiKey: string; listId: string; dc: string },
  email: string,
  tagNames: string[]
) {
  const hash = subscriberHash(email);
  const { res, data } = await mailchimpRequest(
    config,
    `/lists/${config.listId}/members/${hash}/tags`,
    {
      method: "POST",
      body: JSON.stringify({
        tags: tagNames.map((name) => ({ name, status: "active" })),
      }),
    }
  );

  if (!res.ok) {
    const message = data?.detail ?? data?.title ?? "Mailchimp tagging failed";
    throw new Error(message);
  }
}

/**
 * Saves a marketing lead to Mailchimp when MAILCHIMP_API_KEY and MAILCHIMP_AUDIENCE_ID
 * are set. Without those env vars, accepts the lead but does not persist it server-side.
 */
export async function saveLead(
  input: SaveLeadInput
): Promise<{ ok: true } | { ok: false; message: string }> {
  const config = mailchimpConfig();
  if (!config) {
    if (process.env.NODE_ENV === "development") {
      console.info("[leads] Mailchimp not configured — lead accepted locally only:", {
        source: input.source,
        quizResultLabel: input.quizResultLabel,
        quizScore: input.quizScore,
      });
    }
    return { ok: true };
  }

  try {
    await upsertMailchimpMember(config, input);
    await applyMailchimpTags(config, input.email, buildTags(input));
    return { ok: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unable to save your details";
    console.error("[leads] Mailchimp error:", message);
    return { ok: false, message };
  }
}
