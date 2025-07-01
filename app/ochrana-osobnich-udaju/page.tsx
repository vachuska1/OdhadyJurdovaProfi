"use client"

import { LocaleProvider } from "@/context/locale-context"
import { useLocale } from "@/context/locale-context"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <LocaleProvider>
      <PrivacyPolicyContent />
    </LocaleProvider>
  )
}

function PrivacyPolicyContent() {
  const { locale, t } = useLocale()

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16 mt-20">
      <h1 className="text-4xl font-bold mb-8">{locale === "cs" ? "Ochrana osobních údajů" : "Privacy Policy"}</h1>
      <div className="prose max-w-none">
        <p>
          {locale === "cs"
            ? "Tato stránka popisuje, jak shromažďujeme, používáme a chráníme vaše osobní údaje."
            : "This page describes how we collect, use, and protect your personal data."}
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          {locale === "cs" ? "Shromažďování a použití informací" : "Information Collection and Use"}
        </h2>
        <p>
          {locale === "cs"
            ? "Shromažďujeme různé typy informací pro různé účely, abychom vám mohli poskytovat a zlepšovat naše služby."
            : "We collect several different types of information for various purposes to provide and improve our Service to you."}
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3">
          {locale === "cs" ? "Typy shromažďovaných údajů" : "Types of Data Collected"}
        </h3>
        <p>
          {locale === "cs"
            ? "Osobní údaje: Při používání naší služby vás můžeme požádat o poskytnutí určitých osobně identifikovatelných informací, které lze použít k vaší identifikaci nebo kontaktování. Osobně identifikovatelné informace mohou zahrnovat, ale nejsou omezeny na: jméno, e-mailovou adresu, telefonní číslo, adresu nemovitosti."
            : "Personal Data: While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to: Name, Email address, Phone number, Property address."}
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">{locale === "cs" ? "Použití údajů" : "Use of Data"}</h2>
        <p>
          {locale === "cs"
            ? "Vaše údaje používáme k poskytování a udržování naší služby, k upozornění na změny v naší službě, k umožnění účasti na interaktivních funkcích naší služby, k poskytování zákaznické podpory, ke shromažďování analýz nebo cenných informací, abychom mohli naši službu zlepšit, ke sledování používání naší služby, k detekci, prevenci a řešení technických problémů."
            : "We use your data to provide and maintain our Service, to notify you about changes to our Service, to allow you to participate in interactive features of our Service when you choose to do so, to provide customer support, to gather analysis or valuable information so that we can improve our Service, to monitor the usage of our Service, to detect, prevent and address technical issues."}
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          {locale === "cs" ? "Zveřejnění údajů" : "Disclosure of Data"}
        </h2>
        <p>
          {locale === "cs"
            ? "Vaše osobní údaje můžeme zveřejnit v dobré víře, že takové jednání je nezbytné pro: dodržení zákonné povinnosti, ochranu a obranu práv nebo majetku společnosti, prevenci nebo vyšetřování možného protiprávního jednání v souvislosti se službou, ochranu osobní bezpečnosti uživatelů služby nebo veřejnosti, ochranu před právní odpovědností."
            : "We may disclose your Personal Data in the good faith belief that such action is necessary to: Comply with a legal obligation, Protect and defend the rights or property of the Company, Prevent or investigate possible wrongdoing in connection with the Service, Protect the personal safety of users of the Service or the public, Protect against legal liability."}
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          {locale === "cs" ? "Bezpečnost údajů" : "Security of Data"}
        </h2>
        <p>
          {locale === "cs"
            ? "Bezpečnost vašich údajů je pro nás důležitá, ale pamatujte, že žádný způsob přenosu přes internet nebo způsob elektronického ukládání není 100% bezpečný. I když se snažíme používat komerčně přijatelné prostředky k ochraně vašich osobních údajů, nemůžeme zaručit jejich absolutní bezpečnost."
            : "The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security."}
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          {locale === "cs" ? "Odkazy na jiné stránky" : "Links to Other Sites"}
        </h2>
        <p>
          {locale === "cs"
            ? "Naše služba může obsahovat odkazy na jiné stránky, které nejsou provozovány námi. Pokud kliknete na odkaz třetí strany, budete přesměrováni na stránky této třetí strany. Důrazně vám doporučujeme, abyste si prostudovali zásady ochrany osobních údajů každé stránky, kterou navštívíte."
            : "Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit."}
        </p>
        <p className="mt-8">
          <Link href="/" className="text-blue-600 hover:underline">
            {locale === "cs" ? "Zpět na hlavní stránku" : "Back to Home Page"}
          </Link>
        </p>
      </div>
    </div>
  )
}
