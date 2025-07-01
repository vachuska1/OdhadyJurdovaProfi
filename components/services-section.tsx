"use client"

import { useLocale } from "@/context/locale-context"

export default function ServicesSection() {
  const { locale, t } = useLocale() // Destructure locale directly

  const servicesHeading = t("services", "heading") as string
  const marketAppraisal = t("services", "marketAppraisal") as {
    title: { cs: string; en: string }
    description: { cs: string; en: string }
  }
  const ascertainedPrice = t("services", "ascertainedPrice") as {
    title: { cs: string; en: string }
    description: { cs: string; en: string }
  }
  const rentAmount = t("services", "rentAmount") as {
    title: { cs: string; en: string }
    description: { cs: string; en: string }
  }
  const rentAmountOriginal = t("services", "rentAmountOriginal") as {
    title: { cs: string; en: string }
    description: { cs: string; en: string }
  }

  return (
    <section id="services" className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <h3 className="mb-4 text-2xl font-semibold">{servicesHeading}</h3>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border p-6 shadow-sm">
          <h4 className="mb-2 text-xl font-semibold">{marketAppraisal.title[locale]}</h4>
          <p className="text-gray-700">{marketAppraisal.description[locale]}</p>
        </div>
        <div className="rounded-lg border p-6 shadow-sm">
          <h4 className="mb-2 text-xl font-semibold">{ascertainedPrice.title[locale]}</h4>
          <p className="text-gray-700">{ascertainedPrice.description[locale]}</p>
        </div>
        <div className="rounded-lg border p-6 shadow-sm">
          <h4 className="mb-2 text-xl font-semibold">{rentAmount.title[locale]}</h4>
          <p className="text-gray-700">{rentAmount.description[locale]}</p>
        </div>
        <div className="rounded-lg border p-6 shadow-sm">
          <h4 className="mb-2 text-xl font-semibold">{rentAmountOriginal.title[locale]}</h4>
          <p className="text-gray-700">{rentAmountOriginal.description[locale]}</p>
        </div>
      </div>
    </section>
  )
}
