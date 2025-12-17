"use client";

// src/components/sections/Hero.tsx

import Image from "next/image";
import CardShowcase from "./CardShowcase";

export default function Hero() {
  return (
    <>
      {/* SECTION 1: Constrained Content (Title, Text, Buttons) */}
      <section className="container mx-auto text-center mt-8 md:mt-16 px-4">
        {/* Small Label */}
        <p className="text-sm md:text-lg text-[#2563eb] font-medium tracking-wide mb-8 md:mb-12">
          ◆ PRODUCT DESIGNER
        </p>

        {/* Big heading */}
        <div className="flex flex-col">
          <h1 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-unbounded font-semibold leading-tight">
            Design that feels
          </h1>
          <h1 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-unbounded font-semibold leading-tight gradient-text-blue pt-4 md:pt-10">
            effortlessly right
          </h1>
        </div>

        {/* The key layout */}
        <div className="pt-6 max-w-6xl mx-auto leading-relaxed text-center">
          {/* Mobile: Stack vertically, Desktop: Inline */}
          <div className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-outfit font-normal">
            {/* FIRST LINE */}
            <span className="inline-flex flex-wrap items-center justify-center gap-2">
              <span>I&apos;m Oreoluwa</span>
              <Image
                src="/images/img1.png"
                alt="Slanted icon"
                width={62}
                height={62}
                className="w-8 h-8 sm:w-10 sm:h-10 rotate-12 rounded-md transition-all duration-300 ease-in-out hover:w-16 hover:h-16 sm:hover:w-24 sm:hover:h-24 md:hover:w-32 md:hover:h-32 hover:rotate-6 cursor-pointer"
              />
            </span>{" "}
            <span className="inline">
              I turn user chaos into clarity. The best design doesn&apos;t announce
            </span>

            {/* SECOND LINE */}
            {" "}
            <span className="text-[#000000] inline">
              itself, it disappears into the experience while doing the heavy
              lifting behind the scenes.
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-4">
          <button className="text-[18px] sm:text-[20px] md:text-[24px] font-outfit font-normal px-5 py-2.5 md:px-6 md:py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition cursor-pointer w-full sm:w-auto">
            Let&apos;s Talk
          </button>

          <a
            href="https://drive.google.com/file/d/1imGpjSGbGaG3jifOsY-t2wTG6ll66imL/view"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[18px] sm:text-[20px] md:text-[24px] font-outfit font-normal underline px-5 py-2.5 md:px-6 md:py-3 border border-black/20 rounded-md hover:bg-black/5 transition cursor-pointer inline-block w-full sm:w-auto text-center"
          >
            Download my CV
          </a>
        </div>
      </section>

      {/* SECTION 2: Full-Width Card Showcase */}
      <CardShowcase />
    </>
  );
}