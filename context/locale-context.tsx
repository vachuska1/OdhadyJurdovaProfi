"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { translations, type Locale, type Translations } from "@/lib/translations"

interface LocaleContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: keyof Translations, subKey?: string, subSubKey?: string) => string | any
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("cs") // Default to Czech

  const t = (key: keyof Translations, subKey?: string, subSubKey?: string) => {
    let text: any = translations[key]
    if (subKey) {
      text = text[subKey]
    }
    if (subSubKey) {
      text = text[subSubKey]
    }

    if (typeof text === "object" && text !== null && (text.cs || text.en)) {
      return text[locale] || text.cs // Fallback to Czech if translation not found
    }
    return text // Return the object if it's an array or complex structure
  }

  return <LocaleContext.Provider value={{ locale, setLocale, t }}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}
