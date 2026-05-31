"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

import { site } from "@/content/site";

export function StayConnectedTrigger() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const modal =
    open && mounted ? (
      <div
        className="modalOverlay"
        role="presentation"
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div
          className="modalPanel"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <button
            type="button"
            className="modalClose"
            onClick={close}
            aria-label="Close"
          >
            ×
          </button>
          <div className="modalPanelInner stack" style={{ gap: "1rem" }}>
            <h2 className="h3" id={titleId} style={{ margin: 0, paddingRight: "1.5rem" }}>
              {site.stayConnected.heading}
            </h2>
            <p className="muted" style={{ margin: 0 }}>
              {site.stayConnected.blurb}
            </p>
            <StayConnectedForm onSuccess={close} />
          </div>
        </div>
      </div>
    ) : null;

  return (
    <>
      <button
        type="button"
        className="navActionBtn"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        Stay Connected
      </button>
      {mounted && modal ? createPortal(modal, document.body) : null}
    </>
  );
}

function StayConnectedForm({ onSuccess }: { onSuccess: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch("/api/stay-connected", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data = (await res.json()) as { ok: boolean; message?: string };
      if (!res.ok || !data.ok) throw new Error(data.message ?? "Request failed");
      setStatus("success");
      setMessage(data.message ?? site.stayConnected.successMessage);
      setTimeout(() => onSuccess(), 1800);
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <p className="muted" style={{ margin: 0 }}>
        {message}
      </p>
    );
  }

  return (
    <form className="stayConnectedForm" onSubmit={onSubmit}>
      <div className="stack" style={{ gap: 10 }}>
        <label className="stack" style={{ gap: 6 }}>
          <span className="muted">First Name</span>
          <input
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="given-name"
            name="firstName"
          />
        </label>
        <label className="stack" style={{ gap: 6 }}>
          <span className="muted">Email Address</span>
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            name="email"
          />
        </label>

        <button
          className="navActionBtn navActionBtn--block"
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : site.stayConnected.ctaLabel}
        </button>

        <p className="muted freeFormDisclosure" style={{ margin: 0 }}>
          {site.stayConnected.disclosureNote}
        </p>

        {message && status === "error" ? (
          <p className="muted" style={{ margin: 0 }}>
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
