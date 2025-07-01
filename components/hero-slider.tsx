"use client"

import Image from "next/image"
import { useState, useEffect, useCallback, useRef } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const IMAGES = ["/images/hero-1.png", "/images/hero-2.png", "/images/hero-3.png", "/images/hero-4.png"]

const AUTOPLAY_INTERVAL = 5000 // 5 seconds

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
    resetAutoplay()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
    resetAutoplay()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  const startAutoplay = useCallback(() => {
    if (emblaApi) {
      autoplayRef.current = setInterval(() => {
        emblaApi.scrollNext()
      }, AUTOPLAY_INTERVAL)
    }
  }, [emblaApi])

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
  }, [])

  const resetAutoplay = useCallback(() => {
    stopAutoplay()
    startAutoplay()
  }, [stopAutoplay, startAutoplay])

  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)

    startAutoplay()

    return () => {
      stopAutoplay()
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect, startAutoplay, stopAutoplay])

  return (
    <section id="hero-section" className="relative w-full overflow-hidden" style={{ paddingTop: "80px" }}>
      <div className="embla relative" ref={emblaRef} onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay}>
        <div className="embla__container flex">
          {IMAGES.map((src, index) => (
            <div className="embla__slide relative min-w-0 flex-[0_0_100%]" key={index}>
              <Image
                src={src || "/placeholder.svg"}
                alt={`Hero image ${index + 1}`}
                width={1200}
                height={600}
                className="h-[400px] w-full object-cover md:h-[600px]"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <Button
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/50 p-2 text-gray-800 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/50 p-2 text-gray-800 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {IMAGES.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${index === selectedIndex ? "bg-gray-800" : "bg-gray-400"}`}
            onClick={() => {
              emblaApi && emblaApi.scrollTo(index)
              resetAutoplay()
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
