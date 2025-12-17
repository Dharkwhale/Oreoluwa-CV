"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("NAVBAR MOUNTED");
  }, []);

  console.log("NAVBAR RENDER, MENU OPEN:", isOpen);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-4 pt-6">
        <div className="mx-auto max-w-2xl relative">
          
          {/* Nav bar */}
          <div className="flex items-center justify-between gap-6 px-6 py-3 bg-[#f0f2e4] rounded-full border border-black/5">
            
            {/* Logo */}
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image
                src="/icon/orlogo.svg"
                alt="Logo"
                width={36}
                height={36}
              />
            </Link>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-[20px] font-outfit hover:text-blue-600">
                About Me
              </a>
              <a href="#projects" className="text-[20px] font-outfit hover:text-blue-600">
                Projects
              </a>
              <a
                href="#contact"
                className="text-[20px] font-outfit underline flex items-center gap-1 px-4 py-2 rounded-full hover:bg-blue-600"
              >
                Let’s Connect <ArrowUpRight size={18} />
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => {
                console.log("HAMBURGER CLICKED");
                setIsOpen((prev) => !prev);
              }}
              className="md:hidden p-2 rounded-full hover:bg-black/5"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile dropdown */}
          {isOpen && (
            <div className="md:hidden absolute top-full mt-4 w-full bg-[#f0f2e4] rounded-3xl border border-black/5 shadow-lg z-50 animate-fade-in">
              <div className="flex flex-col p-6 gap-4">
                <a
                  href="#about"
                  onClick={() => setIsOpen(false)}
                  className="text-[20px] font-outfit py-3 border-b border-black/10"
                >
                  About Me
                </a>

                <a
                  href="#projects"
                  onClick={() => setIsOpen(false)}
                  className="text-[20px] font-outfit py-3 border-b border-black/10"
                >
                  Projects
                </a>

                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="text-[20px] font-outfit underline flex items-center justify-center gap-2 px-4 py-3 rounded-full hover:bg-blue-600"
                >
                  Let’s Connect <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar
