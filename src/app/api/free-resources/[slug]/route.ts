import { NextResponse } from "next/server";

import { getFreeResource } from "@/content/catalog";

export async function POST(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const resource = getFreeResource(slug);
  if (!resource) {
    return NextResponse.json({ ok: false, message: "Not found" }, { status: 404 });
  }

  // TODO: Integrate with Mailchimp/transactional email to actually deliver the PDF.
  // For now, we return success so the UI and routing structure are in place.
  return NextResponse.json({
    ok: true,
    message: "Thanks! Check your email for your download link shortly.",
  });
}

