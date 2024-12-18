import { cn } from "@/app/lib/utils";
import React from "react";
import { BentoGridUI, BentoGridItem } from "../UI/bento-gridUI";

export function BentoGrid() {
  return (
    <>
      {/* Add the new heading section here */}
      <div className="px-6 z-10 bg-background-light transition-colors text-center py-10">
        <h2 className="text-4xl md:text-6xl font-thicccboi tracking-tight leading-tight">
          Technologies We Leverage
        </h2>
      </div>

      {/* Existing BentoGridUI component displaying Technologies */}
      <BentoGridUI className="z-10 bg-background-light transition-colors ">
        {technologies.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.imgSrc ? <img src={item.imgSrc} alt={item.title} className="w-full h-40 object-cover rounded-xl" /> : <div className="w-full h-40 bg-neutral-200 rounded-xl"></div>}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGridUI>
    </>
  );
}

// Updated items data with imgSrc pointing to "image1.jpg" for all items
const technologies = [
  {
    title: "Figma",
    description: "Collaborative design tool for creating and testing interfaces in real time.",
    imgSrc: "Figma (2).png", 
  },
  {
    title: "Adobe XD",
    description: "Streamlined for UI/UX design with prototyping capabilities.",
    imgSrc: "Adobe XD.png", 
  },
  {
    title: "Sketch",
    description: "A powerful design tool for creating user interfaces, icons, and prototypes.",
    imgSrc: "Sketch.png", 
  },
  {
    title: "InVision",
    description: "Prototyping tool that lets you create clickable designs and gather feedback.",
    imgSrc: "InVision.png", 
  },
  {
    title: "Axure RP",
    description: "Advanced prototyping tool with rich interactions and dynamic content.",
    imgSrc: "Azure rp.png",
  },
  {
    title: "Marvel",
    description: "Create interactive prototypes and gather user feedback quickly.",
    imgSrc: "Marvel.png", 
  },
  {
    title: "Hotjar",
    description: "Heatmaps, session recordings, and user feedback for behavioral insights.",
    imgSrc: "Hotjar.png", 
  },
  {
    title: "Maze",
    description: "Remote usability testing platform for gathering actionable feedback.",
    imgSrc: "Maze (2).png", 
  },
  {
    title: "UsabilityHub",
    description: "Validate design decisions with real users through a variety of tests.",
    imgSrc: "UsabilityHub.png", 
  },
];