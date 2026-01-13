// src/components/sections/CardShowcase.tsx
"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Card data
const cards = [
  {
    src: "/images/img6.png",
    project: "Renov* - A home renovation",
    part: "Landing page",
    tags: ["UI Design", "UX Design"],
    key: 1,
  },
  {
    src: "/images/img3.png",
    project: "Wayfarer - A Travel App",
    tags: ["UI Design", "UX Design"],
    key: 2,
  },
  {
    src: "/images/img4.png",
    project: "Butterfly - An e-commerce web",
    part: "Hero section",
    tags: ["UI Design", "UX Design"],
    key: 3,
  },
  {
    src: "/images/img5.png",
    project: "Threadlytics - A Clothing Brand",
    part: "Dashboard",
    tags: ["UI Design", "UX Design"],
    key: 4,
  },
  {
    src: "/images/img6.png",
    project: "Hackathon - Landing page",
    tags: ["UI Design", "UX Design"],
    key: 5,
  },
]

const extendedCards = [...cards, ...cards]

export default function CardShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)
  }

  return (
    <>
      {/* DESKTOP VIEW - Auto-scrolling carousel */}
      <div className="hidden md:block relative w-full overflow-hidden py-20 mt-10">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex whitespace-nowrap min-w-full animate-scroll-left hover:[animation-play-state:paused]">
          {extendedCards.map((card, index) => (
            <div
              key={`${card.key}-${index}`}
              className="flex-shrink-0 w-90 h-[380px] px-3 transition-transform duration-500 hover:scale-[1.05]"
            >
              <div className="relative w-full h-full bg-black rounded-xl shadow-2xl overflow-hidden">
                <Image src={card.src || "/placeholder.svg"} alt={card.project} fill className="object-cover" />

                <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="mb-3">
                    <p className="text-white font-medium text-lg leading-snug">{card.project}</p>
                    {card.part && <p className="text-white/70 text-sm leading-tight">{card.part}</p>}
                  </div>

                  <div className="flex gap-2">
                    {card.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-white text-xs font-medium border border-white/30 rounded-full px-3 py-1 bg-black/30 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE VIEW - Static card with navigation arrows */}
      <div className="md:hidden relative w-full py-16 mt-10 px-4">
        <div className="relative max-w-md mx-auto">
          {/* Card */}
          <div className="relative w-full h-[400px] bg-black rounded-xl shadow-2xl overflow-hidden">
            <Image 
              src={cards[currentIndex].src || "/placeholder.svg"} 
              alt={cards[currentIndex].project} 
              fill 
              className="object-cover" 
            />

            <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-black/80 to-transparent">
              <div className="mb-3">
                <p className="text-white font-medium text-lg leading-snug">
                  {cards[currentIndex].project}
                </p>
                {cards[currentIndex].part && (
                  <p className="text-white/70 text-sm leading-tight">{cards[currentIndex].part}</p>
                )}
              </div>

              <div className="flex gap-2 flex-wrap">
                {cards[currentIndex].tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-white text-xs font-medium border border-white/30 rounded-full px-3 py-1 bg-black/30 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition z-10"
            aria-label="Previous card"
          >
            <ChevronLeft size={24} className="text-black" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition z-10"
            aria-label="Next card"
          >
            <ChevronRight size={24} className="text-black" />
          </button>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-blue-600 w-6" : "bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}