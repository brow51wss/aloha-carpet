import { z } from "zod"

export const SERVICES = [
  "Carpet & Upholstery",
  "Window Cleaning",
  "Tile & Grout Restoration",
  "Industrialized Services",
  "Other / Multiple services",
] as const

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(30),
  email: z.string().trim().email("Enter a valid email").max(120),
  service: z.enum(SERVICES, { message: "Select a service" }),
  message: z.string().trim().max(2000).optional().default(""),
  company: z.string().trim().max(0).optional().default(""),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
