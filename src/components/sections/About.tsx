import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="container mx-auto pt-24 md:pt-32 pb-12 md:pb-16">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-stretch">

        {/* LEFT SIDE */}
        <div>
          {/* Small Label */}
          <p className="text-sm text-[#2563eb] font-medium tracking-wide mb-4 flex items-center gap-2">
            <span className="text-[#2563eb] text-lg">◆</span> ABOUT ME
          </p>

          {/* Big Title */}
          <p className="text-[40px] font-unbounded font-semibold md:text-2xl sm:text-lg leading-tight mb-6">
            Obsessed with the details
            <br />
            <span className="gradient-text-blue">that most people miss</span>
          </p>

          

          {/* Description Paragraphs */}
          <div className="text-[24px] max-w-5xl font-outfit font-normal md:text-lg text-black/80 leading-relaxed">
            <p>
              I design digital products that solve real problems, systems where users
              need answers fast and errors aren&apos;t an option.
            </p><p>
              I focus on understanding the actual problem, designing for clarity under
              complexity, and sweating the details that make experiences feel polished.
              The goal isn&apos;t to make things pretty, it&apos;s to make them work better.
            </p><p>
              Outside of work, you&apos;ll find me with Afrobeats on repeat, deep in a
              novel, watching movies, or staying crafty.
            </p>
          </div>

          {/* Stacks - Web3 first */}
          <div className="mt-8">
          <div className="flex flex-wrap gap-3 whitespace-nowrap mb-6">
            <Tag label="Web3" />
            <Tag label="Website Design" />
            <Tag label="UI/UX Design" />
            <Tag label="Mobile Design" />
            <Tag label="Dashboard" />
          </div>

          {/* LINE 2 */}
          <div className="flex flex-wrap gap-3 mb-6 whitespace-nowrap">
            <Tag label="SaaS" />
            <Tag label="B2B" />
          </div>
          </div>
        </div>

        {/* RIGHT SIDE — IMAGE */}
        
        <div className="flex justify-center md:justify-end">
          <div className="">
            <Image
              src="/images/profileimg.png" // replace with your exported Figma image
              alt="Profile"
              
              width={420}
              height={340}
              className="object-cover rounded-lg"
              
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ——————————————————————————————
   Reusable Tag Component
——————————————————————————————*/
function Tag({ label }: { label: string }) {
  return (
    <span className="px-2 py-2 border border-black/20 rounded-full text-sm md:text-base font-outfit whitespace-nowrap">
      {label}
    </span>
  );
}
