"use server"

import { Resend } from "resend"
import { z } from "zod"

const schema = z.object({
  nameSurname: z.string().min(3, { message: "Jméno musí mít alespoň 3 znaky." }),
  phone: z.string().optional(),
  email: z.string().email({ message: "Neplatný email." }),
  propertyAddress: z.string().optional(),
  subjectValuation: z.string().optional(),
  purposeValuation: z.string().optional(),
  note: z.string().optional(),
  personalDataConsent: z.boolean().refine((val) => val === true, {
    message: "Je nutné souhlasit se zpracováním osobních údajů.",
  }),
})

const SENDER_EMAIL = "noreply@form.novyjicin-reality.cz"
const RECIPIENT_EMAIL = "info@novyjicin-reality.cz"

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
    personalDataConsent: formData.get("personalDataConsent") === "true",
  })

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors)
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Chyba při odesílání.",
    }
  }

  const { nameSurname, phone, email, propertyAddress, subjectValuation, purposeValuation, note, personalDataConsent } =
    validatedFields.data

  try {
    // In preview/dev without an API key we just log the email payload
    if (!resend) {
      console.log("📬 [DEV] Email payload:", {
        nameSurname,
        phone,
        email,
        propertyAddress,
        subjectValuation,
        purposeValuation,
        note,
        personalDataConsent,
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
      <p><strong>Souhlas se zpracováním osobních údajů:</strong> ${personalDataConsent ? "Ano" : "Ne"}</p>
    `,
    })

    if (error) {
      console.error("Resend error:", error)
      return { error: "Nepodařilo se odeslat email. Zkuste to prosím znovu." }
    }

    console.log("Email sent successfully:", data)
    return { success: true, message: "Vaše zpráva byla úspěšně odeslána!" }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { error: "Došlo k neočekávané chybě. Zkuste to prosím znovu." }
  }
}
