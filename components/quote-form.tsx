"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { SERVICES } from "@/lib/contact-schema"

const fieldClass =
  "h-12 border-2 border-gray-200 bg-white text-[#283B7B] text-base shadow-none focus-visible:border-[#419FBE] focus-visible:ring-[#419FBE]/30"

type FormStatus = "idle" | "submitting" | "success" | "error"

export function QuoteForm() {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [error, setError] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("submitting")
    setError("")

    const form = event.currentTarget
    const data = new FormData(form)

    const payload = {
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      service: String(data.get("service") ?? ""),
      message: String(data.get("message") ?? ""),
      company: String(data.get("company") ?? ""),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const result = (await response.json()) as { ok?: boolean; error?: string }

      if (!response.ok) {
        setStatus("error")
        setError(result.error ?? "Something went wrong. Call or text (808) 631-1103.")
        return
      }

      form.reset()
      setStatus("success")
    } catch {
      setStatus("error")
      setError("Network error. Call or text (808) 631-1103.")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border-2 border-[#F9DB16] bg-white p-8 text-center">
        <h3 className="text-2xl font-bold text-[#283B7B] mb-3">Request received</h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          Thank you. We will follow up about your quote. For a faster response, call or text{" "}
          <a href="tel:8086311103" className="font-semibold text-[#419FBE] hover:underline">
            (808) 631-1103
          </a>
          .
        </p>
        <Button
          type="button"
          onClick={() => setStatus("idle")}
          className="bg-[#283B7B] text-white hover:bg-[#419FBE] font-semibold"
        >
          Send another request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-[#283B7B] font-semibold">
            Name
          </Label>
          <Input id="name" name="name" required autoComplete="name" className={fieldClass} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-[#283B7B] font-semibold">
            Phone
          </Label>
          <Input id="phone" name="phone" type="tel" required autoComplete="tel" className={fieldClass} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-[#283B7B] font-semibold">
          Email
        </Label>
        <Input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="service" className="text-[#283B7B] font-semibold">
          Service needed
        </Label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className={`${fieldClass} flex w-full rounded-md px-3 outline-none`}
        >
          <option value="" disabled>
            Select a service
          </option>
          {SERVICES.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-[#283B7B] font-semibold">
          Message <span className="font-normal text-gray-500">(optional)</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          className="min-h-32 border-2 border-gray-200 bg-white text-[#283B7B] text-base shadow-none focus-visible:border-[#419FBE] focus-visible:ring-[#419FBE]/30"
        />
      </div>

      {status === "error" && error ? (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="w-full h-14 bg-[#F9DB16] text-[#283B7B] hover:bg-[#F9DB16]/90 font-semibold text-lg"
      >
        {status === "submitting" ? "Sending…" : "Request a Free Quote"}
      </Button>
    </form>
  )
}
