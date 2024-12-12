"use client";
import React from "react";
import { Carousel, Card } from "@/app/components/ui/whatweofferUI";

export function Whatweoffer() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="relative w-full h-full py-20 bg-white z-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-3xl md:text-6xl text-black  font-thicccboi">
        What we offer...
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Ideation Workshops",
    title: "Collaborative sessions to refine your ideas..",
    src: "/workshop.webp",
    
  },
  {
    category: "Market Research",
    title: "Insights to align your vision with market needs.",
    src: "/research.webp",
    
  },
  {
    category: "Concept Validation",
    title: "Feasibility analysis to ensure success.",
    src: "/validation2.webp",
    
  },
];