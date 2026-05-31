"use client";

import Link from "next/link";
import { Montserrat } from "next/font/google";
import { useState, type CSSProperties } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const OLIVE = "#708238";
const OLIVE_DARK = "#556430";
const OLIVE_LIGHT = "#f0f4e8";
const PINK = "#FFF0F5";
const CREAM = "#F1E3D3";
const WHITE = "#FFFFFF";

const FONT = montserrat.style.fontFamily;

type QuizStep = "intro" | "quiz" | "teaser" | "result";

type QuestionOption = { text: string; score: number };

type Question = { q: string; options: QuestionOption[] };

type ResultBand = {
  emoji: string;
  label: string;
  range: [number, number];
  accent: string;
  bg: string;
  border: string;
  summary: string;
  full: string;
};

const questions: Question[] = [
  {
    q: "1. How often do you feel emotionally drained by your caring role?",
    options: [
      { text: "Rarely — I generally feel okay", score: 0 },
      { text: "Sometimes — I have good and bad days", score: 1 },
      { text: "Often — I feel emptied out most days", score: 2 },
      { text: "Almost always — I have nothing left to give", score: 3 },
    ],
  },
  {
    q: "2. How connected do you feel to your own identity outside of being a carer?",
    options: [
      { text: "Very connected — I still feel like myself", score: 0 },
      { text: "Somewhat — I catch glimpses of who I am", score: 1 },
      { text: "Barely — caring has become my whole identity", score: 2 },
      { text: "Not at all — I've lost track of who I used to be", score: 3 },
    ],
  },
  {
    q: "3. When you take time for yourself, how do you feel?",
    options: [
      { text: "Comfortable — I know I need it", score: 0 },
      { text: "A little uneasy, but I manage", score: 1 },
      { text: "Very guilty — it's hard to relax", score: 2 },
      { text: "I rarely or never take time for myself", score: 3 },
    ],
  },
  {
    q: "4. How would you describe your sleep?",
    options: [
      { text: "Generally restful and enough", score: 0 },
      { text: "Interrupted but manageable", score: 1 },
      { text: "Poor — I wake often or can't switch off", score: 2 },
      { text: "Exhausted no matter how much I sleep", score: 3 },
    ],
  },
  {
    q: "5. How physically tired do you feel on a daily basis?",
    options: [
      { text: "I have reasonable energy most days", score: 0 },
      { text: "I get tired but can usually push through", score: 1 },
      { text: "I'm exhausted most of the time", score: 2 },
      { text: "I'm running on empty — my body is struggling", score: 3 },
    ],
  },
  {
    q: "6. How connected do you feel to friends, family, or community?",
    options: [
      { text: "Well connected — I have people around me", score: 0 },
      { text: "Somewhat — I stay in touch but it's limited", score: 1 },
      { text: "Quite isolated — I've drifted from most people", score: 2 },
      { text: "Very alone — no one really understands my life", score: 3 },
    ],
  },
  {
    q: "7. How often do you feel like your efforts as a carer go unseen or unappreciated?",
    options: [
      { text: "Rarely — I feel acknowledged", score: 0 },
      { text: "Sometimes — it stings but I manage", score: 1 },
      { text: "Often — I feel invisible", score: 2 },
      { text: "Always — no one sees what I sacrifice", score: 3 },
    ],
  },
  {
    q: "8. How often do you feel trapped or like there's no break from your responsibilities?",
    options: [
      { text: "Rarely — I have some flexibility", score: 0 },
      { text: "Sometimes — I feel the weight of it", score: 1 },
      { text: "Often — I can't see a way out", score: 2 },
      { text: "Constantly — I feel completely stuck", score: 3 },
    ],
  },
  {
    q: "9. How easy is it for you to ask for or accept help?",
    options: [
      { text: "Easy — I reach out when I need to", score: 0 },
      { text: "A bit hard, but I do it when necessary", score: 1 },
      { text: "Very hard — I find it difficult to let others in", score: 2 },
      { text: "I don't — it feels impossible or pointless", score: 3 },
    ],
  },
  {
    q: "10. When you think about your future, how do you feel?",
    options: [
      { text: "Hopeful — I can see possibilities ahead", score: 0 },
      { text: "Uncertain — but I try to stay positive", score: 1 },
      { text: "Flat or anxious — it's hard to picture things improving", score: 2 },
      { text: "Hopeless — I can't see beyond where I am now", score: 3 },
    ],
  },
];

const results: ResultBand[] = [
  {
    emoji: "🌊",
    label: "Treading Water",
    range: [0, 10],
    accent: OLIVE,
    bg: OLIVE_LIGHT,
    border: OLIVE,
    summary: "You're managing, but the weight is quietly building.",
    full: "You're doing a remarkable job keeping things together. While you're coping day to day, some early signs of strain are present — and that matters. This is the ideal time to invest in yourself before burnout takes hold. You deserve support not just when things fall apart, but right now, while you're still standing strong.",
  },
  {
    emoji: "🌀",
    label: "Caught in the Current",
    range: [11, 20],
    accent: "#8a6d3b",
    bg: CREAM,
    border: "#c9a96e",
    summary: "Burnout is pulling at you. It's time to reach for support.",
    full: "You've been carrying a heavy load for a long time, and it's starting to take a real toll — emotionally, physically, and personally. What you're feeling is valid, and it's a signal worth listening to. Reclaiming yourself isn't selfish — it's necessary. The right support can help you find your footing again.",
  },
  {
    emoji: "🆘",
    label: "Pulled Under",
    range: [21, 30],
    accent: "#b05070",
    bg: PINK,
    border: "#e8a0b8",
    summary: "You've been carrying too much for too long. You deserve help now.",
    full: "You have given so much of yourself — more than most people will ever understand. But you cannot pour from an empty vessel, and right now you need someone in your corner. This is not a sign of weakness; it's a sign that you are human, and that you have reached your limit. Please know: you are seen, you matter, and support is available to you.",
  },
];

const getResult = (score: number) =>
  results.find((r) => score >= r.range[0] && score <= r.range[1]) ?? results[0];

const Header = () => (
  <div style={{ textAlign: "center", marginBottom: "28px" }}>
    <div
      style={{
        fontSize: "11px",
        fontWeight: "700",
        letterSpacing: "0.15em",
        color: OLIVE,
        textTransform: "uppercase",
        marginBottom: "4px",
        fontFamily: FONT,
      }}
    >
      ✦ The Turning Tides Project ✦
    </div>
    <div
      style={{
        height: "2px",
        background: `linear-gradient(90deg, transparent, ${OLIVE}, transparent)`,
        margin: "0 auto",
        maxWidth: "200px",
      }}
    />
  </div>
);

const Footer = () => (
  <div style={{ textAlign: "center", marginTop: "28px" }}>
    <div
      style={{
        height: "1px",
        background: `linear-gradient(90deg, transparent, ${CREAM}, transparent)`,
        marginBottom: "12px",
      }}
    />
    <div
      style={{
        fontSize: "11px",
        color: "#bbb",
        letterSpacing: "0.14em",
        fontFamily: FONT,
        textTransform: "uppercase",
      }}
    >
      * Turning Tides, Changing Lives *
    </div>
  </div>
);

export default function CarerBurnoutQuiz() {
  const [step, setStep] = useState<QuizStep>("intro");
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [form, setForm] = useState({ name: "", email: "" });
  const [formError, setFormError] = useState("");
  const [submitError, setSubmitError] = useState("");

  const score = answers.reduce<number>((s, a) => s + (a ?? 0), 0);
  const result = getResult(score);
  const answered = answers.filter((a) => a !== null).length;
  const allAnswered = answered === questions.length;

  const select = (qi: number, val: number) => {
    const u = [...answers];
    u[qi] = val;
    setAnswers(u);
  };

  const handleSubmitQuiz = () => {
    if (!allAnswered) {
      setSubmitError(
        `Please answer all 10 questions. You have ${questions.length - answered} remaining.`
      );
      return;
    }
    setSubmitError("");
    setStep("teaser");
  };

  const handleSubmitForm = () => {
    if (!form.name.trim() || !form.email.trim()) {
      setFormError("Please enter your name and email to receive your results.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setFormError("Please enter a valid email address.");
      return;
    }
    setFormError("");
    setStep("result");
  };

  const wrap: CSSProperties = {
    fontFamily: FONT,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "0 16px 2rem",
  };

  const card: CSSProperties = {
    background: WHITE,
    borderRadius: "24px",
    boxShadow: "0 6px 40px rgba(112,130,56,0.13)",
    maxWidth: "620px",
    width: "100%",
    padding: "40px 36px",
    border: `1px solid ${CREAM}`,
  };

  const h1: CSSProperties = {
    fontFamily: FONT,
    fontSize: "24px",
    fontWeight: "800",
    color: OLIVE_DARK,
    margin: "0 0 14px",
    lineHeight: 1.3,
  };

  const body: CSSProperties = {
    fontSize: "15px",
    color: "#555",
    lineHeight: 1.8,
    marginBottom: "16px",
  };

  const btn: CSSProperties = {
    background: OLIVE,
    color: WHITE,
    border: "none",
    borderRadius: "50px",
    padding: "15px 32px",
    fontSize: "15px",
    fontWeight: "700",
    cursor: "pointer",
    width: "100%",
    fontFamily: FONT,
    letterSpacing: "0.03em",
  };

  const inputStyle: CSSProperties = {
    width: "100%",
    padding: "13px 16px",
    border: `2px solid ${CREAM}`,
    borderRadius: "12px",
    fontSize: "15px",
    color: "#333",
    marginBottom: "16px",
    boxSizing: "border-box",
    fontFamily: FONT,
    outline: "none",
    background: "#fafaf8",
  };

  const labelStyle: CSSProperties = {
    display: "block",
    fontSize: "12px",
    fontWeight: "700",
    color: OLIVE_DARK,
    marginBottom: "6px",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
  };

  if (step === "intro") {
    return (
      <div className={`carerBurnoutQuiz ${montserrat.className}`} style={wrap}>
        <div style={card}>
          <Header />
          <h1 style={h1}>Are You Experiencing Carer Burnout?</h1>
          <p style={{ ...body, fontStyle: "italic", color: OLIVE_DARK, fontSize: "16px" }}>
            &ldquo;You give so much to others. But how are <em>you</em> really doing?&rdquo;
          </p>
          <p style={body}>
            This free assessment has been designed specifically for unpaid carers — those
            quietly holding everything together for a loved one, often at great personal
            cost.
          </p>
          <p style={body}>
            In just 10 questions, you&apos;ll receive a personalised result that reflects
            where you are right now — with compassion, not judgement.
          </p>
          <div
            style={{
              background: OLIVE_LIGHT,
              borderRadius: "12px",
              padding: "14px 20px",
              marginBottom: "24px",
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {["3 minutes", "10 questions", "No right or wrong answers"].map((t) => (
              <span
                key={t}
                style={{ fontSize: "13px", color: OLIVE_DARK, fontWeight: "600" }}
              >
                ✓ {t}
              </span>
            ))}
          </div>
          <button type="button" style={btn} onClick={() => setStep("quiz")}>
            Begin the Assessment →
          </button>
          <Footer />
        </div>
      </div>
    );
  }

  if (step === "quiz") {
    return (
      <div className={`carerBurnoutQuiz ${montserrat.className}`} style={wrap}>
        <div style={card}>
          <Header />
          <h1 style={{ ...h1, fontSize: "20px", marginBottom: "6px" }}>
            Carer Burnout Assessment
          </h1>
          <p style={{ fontSize: "13px", color: "#aaa", marginBottom: "24px" }}>
            Answer all 10 questions honestly — there are no right or wrong answers.
          </p>
          <div style={{ marginBottom: "28px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "13px",
                color: "#aaa",
                marginBottom: "6px",
              }}
            >
              <span>{answered} of 10 answered</span>
              <span style={{ color: OLIVE, fontWeight: "700" }}>
                {Math.round((answered / 10) * 100)}% complete
              </span>
            </div>
            <div
              style={{
                height: "7px",
                borderRadius: "10px",
                background: CREAM,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${(answered / 10) * 100}%`,
                  background: `linear-gradient(90deg, ${OLIVE}, #9db058)`,
                  borderRadius: "10px",
                  transition: "width 0.4s",
                }}
              />
            </div>
          </div>
          {questions.map((q, qi) => (
            <div
              key={q.q}
              style={{
                marginBottom: "28px",
                borderBottom: `1px solid ${CREAM}`,
                paddingBottom: "24px",
              }}
            >
              <p
                style={{
                  fontWeight: "700",
                  fontSize: "15px",
                  color: OLIVE_DARK,
                  marginBottom: "14px",
                  lineHeight: 1.5,
                }}
              >
                {q.q}
              </p>
              {q.options.map((opt) => {
                const sel = answers[qi] === opt.score;
                return (
                  <button
                    key={opt.text}
                    type="button"
                    onClick={() => select(qi, opt.score)}
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      background: sel ? OLIVE_LIGHT : "#fafaf8",
                      border: `2px solid ${sel ? OLIVE : CREAM}`,
                      borderRadius: "12px",
                      padding: "12px 16px",
                      fontSize: "14px",
                      color: sel ? OLIVE_DARK : "#555",
                      cursor: "pointer",
                      marginBottom: "8px",
                      fontFamily: FONT,
                      fontWeight: sel ? "700" : "400",
                      transition: "all 0.15s",
                    }}
                  >
                    {sel ? "✓ " : ""}
                    {opt.text}
                  </button>
                );
              })}
            </div>
          ))}
          {submitError ? (
            <p
              style={{
                color: "#c0392b",
                fontSize: "13px",
                marginBottom: "12px",
                fontWeight: "600",
              }}
            >
              {submitError}
            </p>
          ) : null}
          <button
            type="button"
            style={{
              ...btn,
              background: allAnswered ? OLIVE : "#c5d4a0",
              cursor: allAnswered ? "pointer" : "not-allowed",
            }}
            onClick={handleSubmitQuiz}
          >
            {allAnswered
              ? "See My Results →"
              : `Answer All Questions to Continue (${questions.length - answered} remaining)`}
          </button>
          <Footer />
        </div>
      </div>
    );
  }

  if (step === "teaser") {
    return (
      <div className={`carerBurnoutQuiz ${montserrat.className}`} style={wrap}>
        <div style={card}>
          <Header />
          <h1 style={{ ...h1, fontSize: "22px" }}>Your Results Are Ready</h1>
          <p style={body}>
            We&apos;ve assessed your responses. Here&apos;s a glimpse of where you are right
            now:
          </p>
          <div
            style={{
              background: result.bg,
              border: `2px solid ${result.border}`,
              borderRadius: "18px",
              padding: "28px",
              marginBottom: "28px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "48px" }}>{result.emoji}</div>
            <p
              style={{
                fontFamily: FONT,
                fontWeight: "800",
                fontSize: "22px",
                color: result.accent,
                margin: "10px 0 6px",
              }}
            >
              {result.label}
            </p>
            <p style={{ fontSize: "14px", color: "#666", margin: 0, fontStyle: "italic" }}>
              {result.summary}
            </p>
          </div>
          <p style={body}>
            Enter your details below to unlock your full personalised result — including
            what it means for you and where to find support.
          </p>
          <label style={labelStyle}>
            Your Name
            <input
              style={{ ...inputStyle, marginTop: "6px" }}
              type="text"
              placeholder="e.g. Sarah"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </label>
          <label style={labelStyle}>
            Email Address
            <input
              style={{ ...inputStyle, marginTop: "6px" }}
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </label>
          {formError ? (
            <p
              style={{
                color: "#c0392b",
                fontSize: "13px",
                marginBottom: "12px",
                fontWeight: "600",
              }}
            >
              {formError}
            </p>
          ) : null}
          <button type="button" style={btn} onClick={handleSubmitForm}>
            Unlock My Full Results →
          </button>
          <p
            style={{
              fontSize: "12px",
              color: "#ccc",
              textAlign: "center",
              marginTop: "12px",
            }}
          >
            We respect your privacy. Your information will never be shared or sold.
          </p>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className={`carerBurnoutQuiz ${montserrat.className}`} style={wrap}>
      <div style={card}>
        <Header />
        <h1 style={{ ...h1, fontSize: "22px" }}>
          Your Results, {form.name.split(" ")[0]}
        </h1>
        <p style={body}>
          Thank you for taking this courageous step. Here is what your responses reveal:
        </p>
        <div
          style={{
            background: result.bg,
            border: `2px solid ${result.border}`,
            borderRadius: "18px",
            padding: "32px",
            marginBottom: "24px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "16px" }}>
            <div style={{ fontSize: "52px" }}>{result.emoji}</div>
            <p
              style={{
                fontFamily: FONT,
                fontWeight: "800",
                fontSize: "24px",
                color: result.accent,
                margin: "10px 0 4px",
              }}
            >
              {result.label}
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "#777",
                fontStyle: "italic",
                margin: 0,
              }}
            >
              {result.summary}
            </p>
          </div>
          <div
            style={{
              height: "1px",
              background: result.border,
              opacity: 0.3,
              margin: "16px 0",
            }}
          />
          <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.85, margin: 0 }}>
            {result.full}
          </p>
        </div>
        <div
          style={{
            background: PINK,
            borderRadius: "14px",
            padding: "20px 24px",
            marginBottom: "24px",
            borderLeft: `4px solid ${OLIVE}`,
          }}
        >
          <p
            style={{
              fontSize: "11px",
              fontWeight: "700",
              color: OLIVE,
              marginBottom: "8px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            A message from our founder
          </p>
          <p
            style={{
              fontSize: "15px",
              color: "#555",
              lineHeight: 1.8,
              margin: 0,
              fontStyle: "italic",
            }}
          >
            &ldquo;You were never meant to do this alone. At The Turning Tides Project, we
            exist to help carers like you feel seen, supported, and capable of reclaiming
            themselves — without guilt. Free and paid resources are waiting for you.&rdquo;
          </p>
        </div>
        <Link href="/" className="carerBurnoutQuizCta">
          Visit The Turning Tides Project →
        </Link>
        <p
          style={{
            fontSize: "12px",
            color: "#ccc",
            textAlign: "center",
            marginTop: "12px",
          }}
        >
          Free and paid resources available. You deserve support too.
        </p>
        <Footer />
      </div>
    </div>
  );
}
