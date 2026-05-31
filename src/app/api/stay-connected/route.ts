import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let body: { name?: string; email?: string };
  try {
    body = (await req.json()) as { name?: string; email?: string };
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request" }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();

  if (!name || !email) {
    return NextResponse.json(
      { ok: false, message: "Please enter your name and email." },
      { status: 400 }
    );
  }

  // TODO: Subscribe to Mailchimp audience / marketing list.
  return NextResponse.json({
    ok: true,
    message: "Thanks for staying connected! We'll be in touch soon.",
  });
}
