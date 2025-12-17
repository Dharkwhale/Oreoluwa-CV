
import ProjectCard from "@/components/sections/ProjectCard";

export default function Proje() {
  return (
    <section id="projects" className="w-full bg-[#dbdcd6] rounded-t-[60px] pb-20 pt-12 md:pt-16">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Title */}
        <h2 className="text-center text-[40px] md:text-4xl font-unbounded font-semibold">
          Selected <span className="gradient-text-blue">Work</span>
        </h2>

        {/* Subtitle */}
        <p className="text-center mt-3 text-[#000000] font-outfit text-normal text-[24px] md:text-base">
          Projects that blend creativity with business impact
        </p>

        <div className="mt-12 flex flex-col gap-10">
          
          {/* 1 — RUSHL.Y */}
          <ProjectCard
            image="/images/project1.png"
            title="RUSHLY"
            sector="A Delivery Platform"
            description="Designed a three-sided marketplace delivery platform that enables customers to shop effortlessly, vendors to manage and add their products, and riders to handle deliveries efficiently. The platform focuses on clarity, usability, and speed, creating a smooth, cohesive experience across all touchpoint"
            tags={["Client Project", "Figma", "Web Design"]}
            year="2025"
            caseStudyLink="https://www.figma.com/proto/7HdwmdjrQ4SIFxRIxjCLvO/Rushly?node-id=1-9056&t=meC4hNeyQQlDTJ06-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
            views="3 users type, 1 seamless experience"
          />

          {/* 2 — PARETO */}
          <ProjectCard
            image="/images/project2.png"
            title="PARETO"
            sector="Global finance"
            description="Worked on a sleek fintech design for a platform that makes sending and managing money across borders way easier. The layout breaks down all the complicated finance stuff into simple, easy steps, helping A handle payments and currency fluctuations without stress."
            tags={["Client Project", "Fintech", "B2B"]}
            year="2023"
            
            webCaseStudyLink="https://www.figma.com/proto/UFjL9ky8eWf2zRtTd7pomt/Pareto?node-id=1-310&t=ycXLyzCdLMcyQdGE-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
            mobileCaseStudyLink="https://www.figma.com/proto/UFjL9ky8eWf2zRtTd7pomt/Pareto?node-id=1-4414&t=zutQNIvt7aVZcT9K-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A4197"

            views="Simplified cross-border payments"
          />


          {/* 3 — AGRIMASTER */}
          <ProjectCard
            image="/images/project3.png"
            title="AGRIMASTER"
            sector="Farm Management"
            description="Designed a comprehensive agricultural management platform that allows farmers to monitor crops, track resources, and plan operations efficiently. The platform focuses on clarity, usability, and actionable insights, providing a smooth, intuitive experience that helps users make informed decisions and optimize farm productivity."
            tags={["Agrimaster", "Figma", "Mobile Design"]}
            year="2025"
            caseStudyLink="https://www.figma.com/proto/1M6PG0iJ7VKwOlzhaelusy/Agrimaster?node-id=1-3006&p=f&t=VFINi4wCReOjLYSf-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
            views="Field-optimized interface"
          />

          {/* 4 — CHOPAM */}
          <ProjectCard
            image="/images/project4.png"
            title="CHOPAM"
            sector="Bill splitting app"
            description="A streamlined bill-splitting platform that allows users to easily split expenses, track payments, and settle debts with friends or groups. The app focuses on clarity, speed, and usability, creating a smooth, intuitive experience that makes managing shared expenses effortless and stress-free."
            tags={["Mobile Design", "Fintech", "Social"]}
            year="2025"
            caseStudyLink="#"
            views="Field-optimized interface"
          />

        </div>
      </div>
    </section>
  );
}
