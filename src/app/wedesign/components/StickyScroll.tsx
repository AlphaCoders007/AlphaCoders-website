"use client";
import React from "react";
import { StickyScroll } from "../UI/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "User Experience Design (UX)",
    description:
      "We focus on creating seamless and intuitive experiences that resonate with users. Our process includes extensive research and analysis to understand user needs, goals, and pain points. By designing user flows, wireframes, and prototypes, we ensure a frictionless and engaging journey for users interacting with your product.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-xl"
          alt="UX Design Process Visual"
        />
      </div>
    ),
  },
  {
    title: "Interface Design (UI)",
    description:
      "A visually appealing interface is critical for a successful product. Our UI design process emphasizes aesthetics while ensuring functionality. We create consistent, clean, and impactful designs that align with your brand identity, enhance usability, and elevate the overall user experience.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-xl"
          alt="UI Design Concept"
        />
      </div>
    ),
  },
  {
    title: "Prototyping",
    description:
      "To bring ideas to life, we use advanced tools to create prototypes that visually represent your concept. Whether it’s simple wireframes or high-fidelity, interactive prototypes, we help you visualize the final product and refine it based on feedback before development.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-xl"
          alt="Prototyping Process"
        />
      </div>
    ),
  },
];

export function StickyScrollReveal() {
  return (
    <div className="overflow-hidden">
      <div className="px-6 py-20 bg-background-light text-center">
        <h2 className="text-4xl md:text-6xl font-thicccboi tracking-tight">
          What We Offer
        </h2>
        
      </div>

      <StickyScroll content={content} />
    </div>
  );
}