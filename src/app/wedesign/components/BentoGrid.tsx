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
      <BentoGridUI className="z-10 grid grid-cols-2 bg-background-light transition-colors ">
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
    description: "We collaborate in real-time to design and test interfaces efficiently.",
    imgSrc: "Figma (2).png", 
  },
  {
    title: "Adobe XD",
    description: "We streamline our UI/UX design process with its prototyping capabilities.",
    imgSrc: "Adobe XD.png", 
  },
  {
    title: "Sketch",
    description: "We craft user interfaces, icons, and prototypes with its powerful design tools.",
    imgSrc: "Sketch.png", 
  },
  {
    title: "InVision",
    description: "We create clickable prototypes and gather feedback seamlessly.",
    imgSrc: "InVision.png", 
  },
  {
    title: "Axure RP",
    description: "We build advanced prototypes with rich interactions and dynamic content.",
    imgSrc: "Azure rp.png",
  },
  {
    title: "Marvel",
    description: "We quickly create interactive prototypes and collect user feedback.",
    imgSrc: "Marvel.png", 
  },
  {
    title: "Hotjar",
    description: "We analyze heatmaps, session recordings, and user feedback to gain behavioral insights.",
    imgSrc: "Hotjar.png", 
  },
  {
    title: "Maze",
    description: "We conduct remote usability testing to gather actionable feedback.",
    imgSrc: "Maze (2).png", 
  },
  {
    title: "UsabilityHub",
    description: " We validate our design decisions with real users through various tests.",
    imgSrc: "UsabilityHub.png", 
  },
];