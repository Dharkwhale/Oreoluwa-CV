"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Linkedin } from "lucide-react";

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const images = [
    "/images/curveimg2.png",
    "/images/curveimg3.png",
    "/images/curveimg4.png",
    "/images/curveimg5.png",
    "/images/curveimg6.png",
  ];
  
  // Desktop positions
  const desktopPositions = [
    { tx: -30, ty: -2, rotate: -31, z: 20 },
    { tx: -15, ty: -8, rotate: -15, z: 30 }, 
    { tx: 0, ty: -10, rotate: 0, z: 40 }, 
    { tx: 15, ty: -8, rotate: 15, z: 30 },
    { tx: 30, ty: -2, rotate: 30, z: 20 },
  ];

  // Mobile positions (much tighter spacing - only 3 images)
  const mobilePositions = [
    { tx: -5, ty: 0, rotate: -12, z: 20 },     // Left
    { tx: 0, ty: -3, rotate: 0, z: 30 },       // Center (slightly higher)
    { tx: 5, ty: 0, rotate: 12, z: 20 },       // Right
  ];

  return (
    <section id="contact" className="w-full bg-[#EAECE3] pt-12 md:pt-20 pb-20 md:pb-32 text-center overflow-hidden px-4">
      
      {/* Images Container */}
      <div className="relative w-full max-w-7xl mx-auto h-64 sm:h-80 md:h-96">
        
        {images.map((img, idx) => {
          // On mobile: show only middle 3 images (indexes 1, 2, 3)
          if (isMobile && (idx === 0 || idx === 4)) {
            return null;
          }

          // Map mobile indexes: 1->0, 2->1, 3->2
          const mobileIndexMap: Record<number, number> = { 1: 0, 2: 1, 3: 2 };
          const mappedIdx = isMobile ? mobileIndexMap[idx] : idx;

          const position = (isMobile ? mobilePositions[mappedIdx] : desktopPositions[idx]) || 
            { tx: 0, ty: 0, rotate: 0, z: 10 };
          
          const { tx, ty, rotate, z } = position;
          
          return (
            <div
              key={idx}
              className="absolute transition-all duration-300 left-1/2 bottom-0"
              style={{
                transform: `translate(calc(-50% + ${tx}rem), ${ty}rem) rotate(${rotate}deg)`,
                width: 'clamp(120px, 25vw, 200px)',
                height: 'clamp(144px, 30vw, 240px)',
                zIndex: z,
              }}
            >
              <Image
                src={img}
                alt={`Contact photo ${idx + 1}`}
                fill
                className="rounded-lg md:rounded-xl shadow-2xl object-cover hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          );
        })}
      </div>
      
      {/* Heading */}
      <h2 className="font-unbounded text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-medium -mt-12 md:-mt-20 px-4">
        Let&apos;s create something <br />
        <span className="block gradient-text-blue font-unbounded text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-medium pt-3 md:pt-5">
          incredible together
        </span>
      </h2>

      {/* Subtext */}
      <p className="text-[#000000] mt-4 max-w-xl mx-auto text-normal font-outfit text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-relaxed px-4">
        Available for freelance projects and full-time opportunities.
        If you need a designer who sweats the details, let&apos;s talk.
      </p>

      {/* Buttons */}
      <div className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-4 max-w-md sm:max-w-none mx-auto">
        <button className="px-6 md:px-8 py-2.5 md:py-3 bg-[#2563eb] text-white rounded-md font-medium hover:bg-blue-700 transition text-[16px] md:text-base w-full sm:w-auto">
          Get in Touch
        </button>

        <a
          href="https://www.linkedin.com/in/akinola-oreoluwa"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 md:px-8 py-2.5 md:py-3 border border-black/20 rounded-md font-medium flex items-center justify-center gap-2 hover:bg-black/5 transition text-[16px] md:text-base w-full sm:w-auto"
        >
          <Linkedin size={18} />
          LinkedIn
        </a>
      </div>
      
    </section>
  );
}