"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <footer className="w-full bg-[#dbdcd6] py-10 mt-10 border-t border-black/10">
        <div className="container mx-auto px-4">

          {/* Top Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

            {/* Logo + Name */}
            <div className="flex items-center gap-3">
              <Image
                src="/icon/orlogo.svg"
                alt="Logo"
                width={28}
                height={28}
                className="rounded-full"
              />
              <span className="font-outfit font-medium text-[24px]">Oreoluwa</span>
            </div>

            {/* Email */}
            <a
              href="mailto:akinolaoreoluwa128@gmail.com"
              className="text-sm font-outfit underline hover:text-black/70"
            >
              akinolaoreoluwa128@gmail.com
            </a>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row justify-between mt-6 gap-6">

            {/* Links */}
            <div className="flex flex-wrap gap-6 text-sm font-outfit">
              <a href="https://www.behance.net/akinolaoreoluwa1" className="hover:text-black/70" target="_blank" rel="noopener noreferrer">Behance</a>
              <a href="https://www.linkedin.com/in/akinola-oreoluwa" className="hover:text-black/70" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://instantfind.me/buyikunmi" className="hover:text-black/70" target="_blank" rel="noopener noreferrer">Instantfundme</a>
              <a href="#" className="hover:text-black/70">Twitter</a>
            </div>

            {/* Static Back To Top (in footer) */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scroll({ top: 0, left: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 text-sm font-outfit hover:text-black/70 transition cursor-pointer self-start md:self-auto"
              aria-label="Scroll back to top"
            >
              Back to top
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </footer>

      {/* Floating Back To Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scroll({ top: 0, left: 0, behavior: 'smooth' });
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 p-3 rounded-full cursor-pointer bg-cyan-700 text-white shadow-lg hover:bg-cyan-600 focus:outline-none z-50 flex items-center gap-2"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
}