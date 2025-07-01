"use client"

import { useLocale } from "@/context/locale-context"

export default function PropertyAppraisalsSection() {
  const { locale, t } = useLocale() // Destructure locale directly

  const propertyAppraisalsHeading = t("propertyAppraisals", "heading") as string
  const propertyAppraisalsSubheading = t("propertyAppraisals", "subheading") as string
  const land = t("propertyAppraisals", "land") as {
    title: { cs: string; en: string }
    types: { cs: string; en: string }[]
  }
  const residential = t("propertyAppraisals", "residential") as {
    title: { cs: string; en: string }
    types: { cs: string; en: string }[]
  }
  // Removed commercial object as requested

  return (
    <section id="appraisals" className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <h2 className="mb-6 text-3xl font-bold md:text-4xl">{propertyAppraisalsHeading}</h2>
      <h3 className="mb-8 text-xl text-gray-700">{propertyAppraisalsSubheading}</h3>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border p-6 shadow-sm">
          <h4 className="mb-4 text-xl font-semibold">{land.title[locale]}</h4>
          <ul className="list-disc pl-5 text-gray-700">
            {land.types.map((type, index) => (
              <li key={index}>{type[locale]}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border p-6 shadow-sm">
          <h4 className="mb-4 text-xl font-semibold">{residential.title[locale]}</h4>
          <ul className="list-disc pl-5 text-gray-700">
            {residential.types.map((type, index) => (
              <li key={index}>{type[locale]}</li>
            ))}
          </ul>
        </div>
        {/* The commercial section is removed */}
      </div>
    </section>
  )
}
