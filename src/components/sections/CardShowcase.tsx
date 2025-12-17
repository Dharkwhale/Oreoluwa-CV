// src/components/sections/CardShowcase.tsx
"use client"

import Image from "next/image"

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
    // part: "UI/UX Case Study",
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
    // part: "Landing page",
    tags: ["UI Design", "UX Design"],
    key: 5,
  },
]

const extendedCards = [...cards, ...cards]

export default function CardShowcase() {
  return (
    <div className="relative w-full overflow-hidden py-20 mt-10">
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

              {/* Overlay */}
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
  )
}
