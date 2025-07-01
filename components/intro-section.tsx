"use client"

import Image from "next/image"
import { useLocale } from "@/context/locale-context"
import { Button } from "@/components/ui/button"
import type React from "react"

export default function IntroSection() {
  const { locale, t } = useLocale()

  const introSectionContent = t("introSection") as any

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="intro" className="container mx-auto px-4 pt-24 pb-12 md:px-6 lg:py-16 mt-16">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div className="flex justify-center md:justify-start">
          <Image
            src="/images/Jurdova_profil.jpeg"
            alt="Ing. Natálie Jurdová"
            width={500} // Increased width
            height={500} // Increased height
            className="rounded-lg object-cover shadow-md max-h-[500px] w-auto" // Adjusted max-h
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold md:text-4xl">{introSectionContent.heading[locale]}</h2>
          <p className="text-lg text-gray-700">{introSectionContent.text[locale]}</p>
          <h3 className="text-2xl font-semibold">{introSectionContent.introQuestion[locale]}</h3>
          <ul className="list-disc pl-5 text-lg text-gray-700">
            {introSectionContent.introPoints.map((point: any, index: number) => (
              <li key={index}>{point[locale]}</li>
            ))}
          </ul>
          <Button asChild className="mt-4">
            <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
              {introSectionContent.button[locale]}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
