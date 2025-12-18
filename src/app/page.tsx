
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-28">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

