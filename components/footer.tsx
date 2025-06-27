"use client"

import type React from "react"

import { useLocale } from "@/context/locale-context"
import Link from "next/link"
import { Instagram } from "lucide-react"

export default function Footer() {
  const { locale, t } = useLocale()

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const footerNav = t("footer", "nav") as {
    intro: { cs: string; en: string }
    qualifications: { cs: string; en: string }
    appraisals: { cs: string; en: string }
    contact: { cs: string; en: string }
  }
  const contactInfo = t("contact") as any
  const footerContactHeading = t("footer", "contactHeading") as string
  const instagramText = t("footer", "instagram") as string
  const copyrightText = t("footer", "copyright") as string

  return (
    <footer className="bg-gray-800 py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {/* Left: Navigation Menu */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="mb-4 text-lg font-semibold">{t("header", "nav", "intro")}</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="#hero-section"
                className="hover:text-gray-400"
                onClick={(e) => handleScroll(e, "hero-section")}
              >
                {footerNav.intro[locale]}
              </Link>
              <Link
                href="#qualifications"
                className="hover:text-gray-400"
                onClick={(e) => handleScroll(e, "qualifications")}
              >
                {footerNav.qualifications[locale]}
              </Link>
              <Link href="#appraisals" className="hover:text-gray-400" onClick={(e) => handleScroll(e, "appraisals")}>
                {footerNav.appraisals[locale]}
              </Link>
              <Link href="#contact" className="hover:text-gray-400" onClick={(e) => handleScroll(e, "contact")}>
                {footerNav.contact[locale]}
              </Link>
            </nav>
          </div>

          {/* Center: Contact Info */}
          <div className="flex flex-col items-center text-center">
            <h3 className="mb-4 text-lg font-semibold">{footerContactHeading[locale]}</h3>
            <p>{contactInfo.name[locale]}</p>
            <p>{contactInfo.ic[locale]}</p>
            <p>
              <a href={`tel:${contactInfo.phone[locale]}`} className="hover:underline">
                {contactInfo.phone[locale]}
              </a>
            </p>
            <p>
              <a href={`mailto:${contactInfo.email[locale]}`} className="hover:underline">
                {contactInfo.email[locale]}
              </a>
            </p>
          </div>

          {/* Right: Instagram Profile */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h3 className="mb-4 text-lg font-semibold">{instagramText[locale]}</h3>
            <a
              href="https://www.instagram.com/odhadyjurdova/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-gray-400"
              aria-label="Instagram Profile"
            >
              <Instagram className="h-6 w-6" />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
          <p>{copyrightText[locale]}</p>
        </div>
      </div>
    </footer>
  )
}
