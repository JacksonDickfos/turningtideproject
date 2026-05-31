import { NextResponse } from "next/server";

import { saveLead, validateLead, type LeadSource } from "@/lib/leads";

type StayConnectedBody = {
  name?: string;
  email?: string;
  source?: LeadSource;
  quizScore?: number;
  quizResultLabel?: string;
};

export async function POST(req: Request) {
  let body: StayConnectedBody;
  try {
    body = (await req.json()) as StayConnectedBody;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request" }, { status: 400 });
  }

  const validated = validateLead(body.name, body.email);
  if (!validated.ok) {
    return NextResponse.json({ ok: false, message: validated.message }, { status: 400 });
  }

  const source: LeadSource =
    body.source === "carer-burnout-quiz" ? "carer-burnout-quiz" : "stay-connected";

  const saved = await saveLead({
    name: validated.name,
    email: validated.email,
    source,
    quizScore:
      typeof body.quizScore === "number" && Number.isFinite(body.quizScore)
        ? body.quizScore
        : undefined,
    quizResultLabel: body.quizResultLabel?.trim() || undefined,
  });

  if (!saved.ok) {
    return NextResponse.json({ ok: false, message: saved.message }, { status: 502 });
  }

  const message =
    source === "carer-burnout-quiz"
      ? "Thanks! Your full results are below."
      : "Thanks for joining the community! We'll be in touch soon.";

  return NextResponse.json({ ok: true, message });
}
