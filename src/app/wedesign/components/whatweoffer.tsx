"use client";
import React from "react";
import { Carousel, Card } from "@/app/wedesign/UI/whatweofferUI";

export function Whatweoffer() {
  const cards = data.map((card) => (
    <Card key={card.src} card={card}  />
  ));

  return (
    <div className="relative w-full h-full py-20 bg-background-light transition-colors z-20">
       {/* Title Section */}
       <div className="px-6 text-center py-10">
        <h2 className="text-4xl md:text-6xl font-thicccboi tracking-tight leading-tight">
          Our Design Philosophy
        </h2>
      </div>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Empathy for Users",
    title: "Understanding the user is at the heart of our design process. We ensure every design decision reflects their needs, challenges, and expectations.",
    src: "/workshop.webp",
    
  },
  {
    category: "Innovation through Simplicity",
    title: "Simplicity is the key to impactful designs. We strive to create clean, streamlined experiences that are intuitive and easy to navigate.",
    src: "/research.webp",
    
  },
  {
    category: "Alignment with Your Brand Identity",
    title: "Every design we create aligns with your brand’s personality, values, and goals. Consistency in visuals and messaging builds trust and recognition.",
    src: "/validation2.webp",
    
  },
];