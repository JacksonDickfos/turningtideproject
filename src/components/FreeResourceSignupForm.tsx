"use client";

import { useState } from "react";

export function FreeResourceSignupForm({
  slug,
  ctaLabel,
}: {
  slug: string;
  ctaLabel?: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch(`/api/free-resources/${slug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data = (await res.json()) as { ok: boolean; message?: string };
      if (!res.ok || !data.ok) throw new Error(data.message ?? "Request failed");
      setStatus("success");
      setMessage(data.message ?? "Success!");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <form className="freeForm" onSubmit={onSubmit}>
      <div className="stack" style={{ gap: 10 }}>
        <label className="stack" style={{ gap: 6 }}>
          <span className="muted">Name</span>
          <input
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
          />
        </label>
        <label className="stack" style={{ gap: 6 }}>
          <span className="muted">Email</span>
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </label>

        <button className="button" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : ctaLabel ?? "Send me the PDF"}
        </button>

        {message ? (
          <p className="muted" style={{ margin: 0 }}>
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}

