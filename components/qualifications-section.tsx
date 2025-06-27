"use client"

import { useLocale } from "@/context/locale-context"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function QualificationsSection() {
  const { locale, t } = useLocale()

  const qualificationsHeading = t("qualifications", "heading") as string
  const qualificationsPoints = t("qualifications", "points") as {
    cs: string
    en: string
    file: string
  }[]

  return (
    <section id="qualifications" className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <h2 className="mb-6 text-3xl font-bold md:text-4xl">{qualificationsHeading}</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {qualificationsPoints.map((point, index) => (
          <Button key={index} asChild variant="outline" className="h-auto justify-start p-4 text-left bg-transparent">
            <a href={point.file} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <FileText className="h-6 w-6 flex-shrink-0" />
              <span className="flex-grow text-lg font-medium">{point[locale]}</span>
            </a>
          </Button>
        ))}
      </div>
    </section>
  )
}
