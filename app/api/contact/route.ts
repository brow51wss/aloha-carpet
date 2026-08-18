import { NextResponse } from "next/server"
import { Resend } from "resend"
import { contactFormSchema } from "@/lib/contact-schema"

export async function POST(request: Request) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 })
  }

  if (
    typeof body === "object" &&
    body !== null &&
    "company" in body &&
    typeof body.company === "string" &&
    body.company.trim().length > 0
  ) {
    return NextResponse.json({ ok: true })
  }

  const parsed = contactFormSchema.safeParse(body)

  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? "Invalid form data."
    return NextResponse.json({ error: message }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    return NextResponse.json(
      { error: "Quote requests are not configured yet. Call or text (808) 631-1103." },
      { status: 503 },
    )
  }

  const { name, phone, email, service, message } = parsed.data
  const to = process.env.CONTACT_TO_EMAIL ?? "absolutecarpetcleankauai@gmail.com"
  const from = process.env.RESEND_FROM_EMAIL ?? "Absolute Carpet Clean Kauai <onboarding@resend.dev>"

  const text = [
    `New quote request from the website.`,
    ``,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Service: ${service}`,
    `Message: ${message || "(none)"}`,
  ].join("\n")

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `Quote request: ${service} — ${name}`,
    text,
  })

  if (error) {
    return NextResponse.json(
      { error: "Could not send the request. Call or text (808) 631-1103." },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
