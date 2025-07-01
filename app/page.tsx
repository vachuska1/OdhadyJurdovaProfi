import Header from "@/components/header"
import HeroSlider from "@/components/hero-slider"
import IntroSection from "@/components/intro-section" // New import
import ServicesSection from "@/components/services-section"
import PropertyAppraisalsSection from "@/components/property-appraisals-section"
import QualificationsSection from "@/components/qualifications-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import { LocaleProvider } from "@/context/locale-context"
import { Toaster } from "@/components/ui/toaster" // For toast messages

export default function Home() {
  return (
    <LocaleProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <HeroSlider />
          <IntroSection /> {/* New section added here */}
          <ServicesSection />
          <PropertyAppraisalsSection />
          <QualificationsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
      <Toaster /> {/* Add Toaster for notifications */}
    </LocaleProvider>
  )
}
