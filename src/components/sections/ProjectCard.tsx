"use client";
import { ExternalLink, Eye } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  image: string;
  title: string;
  sector: string;
  description: string;
  tags: string[];
  year: string;

  caseStudyLink?: string;      
  webCaseStudyLink?: string;   
  mobileCaseStudyLink?: string;

  views: string;
}

export default function ProjectCard({
  image,
  title,
  sector,
  description,
  tags,
  year,

  caseStudyLink,
  webCaseStudyLink,
  mobileCaseStudyLink,

  views
}: ProjectCardProps) {
  const hasTwoLinks = webCaseStudyLink && mobileCaseStudyLink;

  return (
    <div className="w-full bg-[#eaebe2] rounded-3xl p-6 md:p-8 shadow-sm border border-black/5 flex flex-col md:flex-row gap-6 md:gap-10">
      
      {/* Left: Project Image */}
      <div className="md:w-1/3 w-full">
        <div className="relative w-full h-80 md:h-80 rounded-2xl overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-2/3 w-full flex flex-col justify-between">

        {/* Title & Text */}
        <div>
          <h3 className="text-xl md:text-2xl font-unbounded text-[24px] gradient-text-blue font-semibold mb-1">
            {title}
          </h3>
          <p className="text-[20px] md:text-base text-[#000000] font-outfit font-normal">
            {sector}
          </p>

          <p className="mt-4 text-[#000000] text-[16px] md:text-base leading-relaxed font-outfit font-normal">
            {description}
          </p>

          <div className="flex flex-wrap gap-3 mt-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 border border-[#000000] rounded-full text-[16px] font-outfit font-normal"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#000000] my-4"></div>

        {/* Bottom Row */}
        <div>
          {/* Year */}
          <div className="flex flex-row items-center justify-between text-sm font-outfit">
            <span className="text-[#000000]">Year</span>
            <span className="font-medium">{year}</span>
          </div>

          {/* Case Study Links + Views */}
          <div className="mt-4">

            {/* CASE 1: Only ONE link (all projects except #2) */}
            {!hasTwoLinks && caseStudyLink && (
              <div className="flex justify-between items-center">
                <a
                  href={caseStudyLink}
                  target="_blank"
                  className="flex items-center gap-2 text-blue-600 text-[16px] font-normal font-outfit hover:underline"
                >
                  View Case Study <ExternalLink size={16} />
                </a>

                <div className="flex items-center gap-1 text-[#000000] text-[16px] font-normal font-outfit">
                  <Eye size={16} />
                  <span>{views}</span>
                </div>
              </div>
            )}

            {/* CASE 2: Two stacked links (only PARETO) */}
            {hasTwoLinks && (
              <>
                {/* First line: Web CS + Views */}
                <div className="flex justify-between pb-5 items-center">
                  <a
                    href={webCaseStudyLink}
                    target="_blank"
                    className="flex items-center gap-2 text-blue-600 text-[16px] font-normal font-outfit hover:underline"
                  >
                    View Web Case Study <ExternalLink size={16} />
                  </a>

                  <div className="flex items-center gap-1 text-[#000000] text-[16px] font-normal font-outfit">
                    <Eye size={16} />
                    <span>{views}</span>
                  </div>
                </div>

                {/* Second line: Mobile CS */}
                <a
                  href={mobileCaseStudyLink}
                  target="_blank"
                  className="flex items-center gap-2 text-blue-600 text-[16px] font-normal font-outfit hover:underline mt-2"
                >
                  View Mobile Case Study <ExternalLink size={16} />
                </a>
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
