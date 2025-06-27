"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useLocale } from "@/context/locale-context"

export default function Header() {
  const { locale, setLocale, t } = useLocale()

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-20 w-full items-center shadow-md bg-white">
      <div className="flex h-full items-center bg-header-dark px-4 text-white md:w-1/3 lg:w-1/4">
        <Link href="#" className="text-lg font-bold" onClick={(e) => handleScroll(e, "hero-section")}>
          {t("header", "title")}
        </Link>
      </div>
      <div className="flex h-full flex-1 items-center justify-between bg-header-light px-4 md:px-6">
        <nav className="hidden md:flex flex-1 justify-center space-x-6 lg:space-x-8">
          <Link
            href="#hero-section"
            className="text-gray-800 hover:text-gray-600 font-medium"
            onClick={(e) => handleScroll(e, "hero-section")}
          >
            {t("header", "nav", "intro")}
          </Link>
          <Link
            href="#qualifications"
            className="text-gray-800 hover:text-gray-600 font-medium"
            onClick={(e) => handleScroll(e, "qualifications")}
          >
            {t("header", "nav", "qualifications")}
          </Link>
          <Link
            href="#appraisals"
            className="text-gray-800 hover:text-gray-600 font-medium"
            onClick={(e) => handleScroll(e, "appraisals")}
          >
            {t("header", "nav", "appraisals")}
          </Link>
          <Link
            href="#contact"
            className="text-gray-800 hover:text-gray-600 font-medium"
            onClick={(e) => handleScroll(e, "contact")}
          >
            {t("header", "nav", "contact")}
          </Link>
        </nav>
        <div className="flex items-center space-x-2 ml-auto">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLocale("cs")}
            className={`h-8 w-8 ${locale === "cs" ? "ring-2 ring-primary" : ""}`}
            aria-label={locale === "cs" ? "Current language: Czech" : "Switch to Czech"}
          >
            <Image src="/images/flag-cz.png" alt="Czech Flag" width={24} height={24} className="rounded-sm" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLocale("en")}
            className={`h-8 w-8 ${locale === "en" ? "ring-2 ring-primary" : ""}`}
            aria-label={locale === "en" ? "Current language: English" : "Switch to English"}
          >
            <Image src="/images/flag-gb.png" alt="UK Flag" width={24} height={24} className="rounded-sm" />
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden bg-transparent ml-4">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link href="#" className="text-lg font-bold" onClick={(e) => handleScroll(e, "hero-section")}>
              {t("header", "title")}
            </Link>
            <div className="grid gap-2 py-6">
              <Link
                href="#hero-section"
                className="flex w-full items-center py-2 text-lg font-semibold"
                onClick={(e) => handleScroll(e, "hero-section")}
              >
                {t("header", "nav", "intro")}
              </Link>
              <Link
                href="#qualifications"
                className="flex w-full items-center py-2 text-lg font-semibold"
                onClick={(e) => handleScroll(e, "qualifications")}
              >
                {t("header", "nav", "qualifications")}
              </Link>
              <Link
                href="#appraisals"
                className="flex w-full items-center py-2 text-lg font-semibold"
                onClick={(e) => handleScroll(e, "appraisals")}
              >
                {t("header", "nav", "appraisals")}
              </Link>
              <Link
                href="#contact"
                className="flex w-full items-center py-2 text-lg font-semibold"
                onClick={(e) => handleScroll(e, "contact")}
              >
                {t("header", "nav", "contact")}
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
