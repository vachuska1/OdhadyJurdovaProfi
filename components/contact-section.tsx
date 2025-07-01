"use client"

import { useLocale } from "@/context/locale-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { useActionState } from "react"
import { submitContactForm } from "@/app/contact/action"
import { toast } from "@/hooks/use-toast"

export default function ContactSection() {
  const { locale, t } = useLocale()
  const [state, formAction, isPending] = useActionState(submitContactForm, null)

  const contactInfo = t("contact") as any
  const formInfo = t("contact", "form") as any

  // Display toast messages based on the action state
  if (state?.success) {
    toast({
      title: "Success!",
      description: state.message,
      variant: "default",
    })
    state.success = false // Reset to prevent re-triggering
  } else if (state?.error) {
    toast({
      title: "Error!",
      description: state.message,
      variant: "destructive",
    })
    state.error = false // Reset to prevent re-triggering
  }

  return (
    <section id="contact" className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <h2 className="mb-8 text-3xl font-bold md:text-4xl">{contactInfo.heading[locale]}</h2>
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-4">
          <p className="text-lg font-semibold">{contactInfo.name[locale]}</p>
          <p className="text-gray-700">{contactInfo.ic[locale]}</p>
          <p className="text-gray-700">
            <a href={`tel:${contactInfo.phone[locale]}`} className="hover:underline">
              {contactInfo.phone[locale]}
            </a>
          </p>
          <p className="text-gray-700">
            <a href={`mailto:${contactInfo.email[locale]}`} className="hover:underline">
              {contactInfo.email[locale]}
            </a>
          </p>
          <p className="text-gray-700">{contactInfo.serviceArea[locale]}</p>
          <div className="mt-6">
            <h3 className="mb-2 text-xl font-semibold">{contactInfo.addressHeading[locale]}</h3>
            <p className="text-gray-700">{contactInfo.address.line1[locale]}</p>
            <p className="text-gray-700">{contactInfo.address.line2[locale]}</p>
          </div>
          {/* Map */}
          <div className="mt-8 h-[300px] w-full overflow-hidden rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2586.0000000000005!2d15.999999999999998!3d49.200000000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4706111111111111%3A0x1111111111111111!2sKlu%C4%8Dov%2078%2C%20675%2052%20Klu%C4%8Dov!5e0!3m2!1sen!2scz!4v1719500000000!5m2!1sen!2scz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location of Klučov 78"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>{formInfo.title[locale]}</CardTitle>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name-surname">{formInfo.nameSurname[locale]}</Label>
                <Input id="name-surname" name="nameSurname" placeholder={formInfo.nameSurname[locale]} required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">{formInfo.phone[locale]}</Label>
                <Input id="phone" name="phone" type="tel" placeholder={formInfo.phone[locale]} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">{formInfo.email[locale]}</Label>
                <Input id="email" name="email" type="email" placeholder={formInfo.email[locale]} required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="property-address">{formInfo.propertyAddress[locale]}</Label>
                <Input id="property-address" name="propertyAddress" placeholder={formInfo.propertyAddress[locale]} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject-valuation">{formInfo.subjectValuation[locale]}</Label>
                <Select name="subjectValuation">
                  <SelectTrigger id="subject-valuation">
                    <SelectValue placeholder={formInfo.subjectValuation[locale]} />
                  </SelectTrigger>
                  <SelectContent>
                    {formInfo.subjectOptions.map((option: any) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option[locale]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="purpose-valuation">{formInfo.purposeValuation[locale]}</Label>
                <Select name="purposeValuation">
                  <SelectTrigger id="purpose-valuation">
                    <SelectValue placeholder={formInfo.purposeValuation[locale]} />
                  </SelectTrigger>
                  <SelectContent>
                    {formInfo.purposeOptions.map((option: any) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option[locale]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="note">{formInfo.note[locale]}</Label>
                <Textarea id="note" name="note" placeholder={formInfo.note[locale]} className="min-h-[100px]" />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="personal-data-consent" name="personalDataConsent" required value="true" />
                <Label htmlFor="personal-data-consent">
                  {formInfo.personalDataConsent[locale].split(formInfo.privacyPolicyLinkText[locale])[0]}
                  <Link
                    href={formInfo.privacyPolicyLink[locale]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {formInfo.privacyPolicyLinkText[locale]}
                  </Link>
                </Label>
              </div>
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? "Odesílám..." : formInfo.send[locale]}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
