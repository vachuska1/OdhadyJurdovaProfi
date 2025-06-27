"use client"

import { useLocale } from "@/context/locale-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactSection() {
  const { locale, t } = useLocale() // Destructure locale directly

  const contactInfo = t("contact") as any
  const formInfo = t("contact", "form") as any

  return (
    <section id="contact" className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <h2 className="mb-8 text-3xl font-bold md:text-4xl">{contactInfo.heading[locale]}</h2> {/* Corrected */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-4">
          <p className="text-lg font-semibold">{contactInfo.name[locale]}</p> {/* Corrected */}
          <p className="text-gray-700">{contactInfo.ic[locale]}</p> {/* Corrected */}
          <p className="text-gray-700">
            <a href={`tel:${contactInfo.phone[locale]}`} className="hover:underline">
              {" "}
              {/* Corrected */}
              {contactInfo.phone[locale]} {/* Corrected */}
            </a>
          </p>
          <p className="text-gray-700">
            <a href={`mailto:${contactInfo.email[locale]}`} className="hover:underline">
              {" "}
              {/* Corrected */}
              {contactInfo.email[locale]} {/* Corrected */}
            </a>
          </p>
          <p className="text-gray-700">{contactInfo.serviceArea[locale]}</p> {/* Corrected */}
          <div className="mt-6">
            <h3 className="mb-2 text-xl font-semibold">{contactInfo.addressHeading[locale]}</h3> {/* Corrected */}
            <p className="text-gray-700">{contactInfo.address.line1[locale]}</p> {/* Corrected */}
            <p className="text-gray-700">{contactInfo.address.line2[locale]}</p> {/* Corrected */}
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
            <CardTitle>{formInfo.title[locale]}</CardTitle> {/* Corrected */}
          </CardHeader>
          <CardContent>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name-surname">{formInfo.nameSurname[locale]}</Label> {/* Corrected */}
                <Input id="name-surname" placeholder={formInfo.nameSurname[locale]} /> {/* Corrected */}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">{formInfo.phone[locale]}</Label> {/* Corrected */}
                <Input id="phone" type="tel" placeholder={formInfo.phone[locale]} /> {/* Corrected */}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">{formInfo.email[locale]}</Label> {/* Corrected */}
                <Input id="email" type="email" placeholder={formInfo.email[locale]} /> {/* Corrected */}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="property-address">{formInfo.propertyAddress[locale]}</Label> {/* Corrected */}
                <Input id="property-address" placeholder={formInfo.propertyAddress[locale]} /> {/* Corrected */}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject-valuation">{formInfo.subjectValuation[locale]}</Label> {/* Corrected */}
                <Select>
                  <SelectTrigger id="subject-valuation">
                    <SelectValue placeholder={formInfo.subjectValuation[locale]} /> {/* Corrected */}
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
                <Label htmlFor="purpose-valuation">{formInfo.purposeValuation[locale]}</Label> {/* Corrected */}
                <Select>
                  <SelectTrigger id="purpose-valuation">
                    <SelectValue placeholder={formInfo.purposeValuation[locale]} /> {/* Corrected */}
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
                <Label htmlFor="note">{formInfo.note[locale]}</Label> {/* Corrected */}
                <Textarea id="note" placeholder={formInfo.note[locale]} className="min-h-[100px]" /> {/* Corrected */}
              </div>
              <Button type="submit" className="w-full">
                {formInfo.send[locale]} {/* Corrected */}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
