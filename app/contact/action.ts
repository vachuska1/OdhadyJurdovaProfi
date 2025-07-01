"use server"

import { Resend } from "resend"
import { z } from "zod"

// Log the API key to see if it's being picked up
console.log("RESEND_API_KEY in action.ts:", process.env.RESEND_API_KEY ? "****** (present)" : "undefined (missing)")

const schema = z.object({
  nameSurname: z.string().min(3, { message: "Jméno musí mít alespoň 3 znaky." }),
  phone: z.string().optional(),
  email: z.string().email({ message: "Neplatný email." }),
  propertyAddress: z.string().optional(),
  subjectValuation: z.string().optional(),
  purposeValuation: z.string().optional(),
  note: z.string().optional(),
  // Checkbox value is 'on' when checked, undefined when unchecked in FormData
  personalDataConsent: z.literal("on", {
    errorMap: () => ({ message: "Je nutné souhlasit se zpracováním osobních údajů." }),
  }),
})

const SENDER_EMAIL = "onboarding@resend.dev" // Changed to Resend's default sender domain
const RECIPIENT_EMAIL = "aless.vachuska@seznam.cz"

const RESEND_KEY = process.env.RESEND_API_KEY
const resend = RESEND_KEY ? new Resend(RESEND_KEY) : null

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    nameSurname: formData.get("nameSurname"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    propertyAddress: formData.get("propertyAddress"),
    subjectValuation: formData.get("subjectValuation"),
    purposeValuation: formData.get("purposeValuation"),
    note: formData.get("note"),
    personalDataConsent: formData.get("personalDataConsent"), // Get raw value 'on' or undefined
  })

  if (!validatedFields.success) {
    console.log("Validation errors:", validatedFields.error.flatten().fieldErrors)
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Chyba při odesílání. Zkontrolujte prosím vyplněná pole.",
    }
  }

  const { nameSurname, phone, email, propertyAddress, subjectValuation, purposeValuation, note } = validatedFields.data

  try {
    // In preview/dev without an API key we just log the email payload
    if (!resend) {
      console.log("📬 [DEV] Email payload (simulated send):", {
        nameSurname,
        phone,
        email,
        propertyAddress,
        subjectValuation,
        purposeValuation,
        note,
        personalDataConsent: true, // Assume true for simulation if validation passed
      })
      return {
        success: true,
        message: "Náhled: Email by byl odeslán. Pro skutečné odesílání nastavte proměnnou RESEND_API_KEY.",
      }
    }

    const { data, error } = await resend.emails.send({
      from: `Contact Form <${SENDER_EMAIL}>`,
      to: [RECIPIENT_EMAIL],
      subject: `Nová poptávka od ${nameSurname}`,
      html: `
      <p><strong>Jméno a příjmení:</strong> ${nameSurname}</p>
      <p><strong>Telefon:</strong> ${phone || "Nezadáno"}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Adresa nemovitosti:</strong> ${propertyAddress || "Nezadáno"}</p>
      <p><strong>Předmět ocenění:</strong> ${subjectValuation || "Nezadáno"}</p>
      <p><strong>Účel ocenění:</strong> ${purposeValuation || "Nezadáno"}</p>
      <p><strong>Poznámka:</strong> ${note || "Nezadáno"}</p>
      <p><strong>Souhlas se zpracováním osobních údajů:</strong> Ano</p>
    `, // Consent is guaranteed true by schema validation
    })

    if (error) {
      console.error("Resend API error:", error)
      return { error: "Nepodařilo se odeslat email. Zkuste to prosím znovu." }
    }

    console.log("Email sent successfully:", data)
    return { success: true, message: "Vaše zpráva byla úspěšně odeslána!" }
  } catch (error) {
    console.error("Unexpected error during form submission:", error)
    return { error: "Došlo k neočekávané chybě. Zkuste to prosím znovu." }
  }
}
