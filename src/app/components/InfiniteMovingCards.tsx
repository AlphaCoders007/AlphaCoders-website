"use client";

import React from "react";
import { InfiniteMovingCardsUI } from "./ui/infinite-moving-cards";

export function InfiniteMovingCards() {
  return (
    <section className="bg-black text-white">
      {/* Title Section */}
      <div className="px-6 text-center py-10">
        <h2 className="text-4xl md:text-6xl font-thicccboi tracking-tight leading-tight">
          Our Design Philosophy
        </h2>
      </div>

      {/* Infinite Cards Section */}
      <div className="h-[40rem] flex flex-col items-center justify-center relative overflow-hidden bg-white dark:bg-black">
        <InfiniteMovingCardsUI
          items={testimonials}
          direction="right"
          speed="slow"
          className="w-full max-w-screen-lg"
        />
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "Understanding the user is at the heart of our design process. We ensure every design decision reflects their needs, challenges, and expectations.",
    title: "Empathy for Users",
  },
  {
    quote:
      "Simplicity is the key to impactful designs. We strive to create clean, streamlined experiences that are intuitive and easy to navigate.",
    title: "Innovation through Simplicity",
  },
  {
    quote:
      "Every design we create aligns with your brand’s personality, values, and goals. Consistency in visuals and messaging builds trust and recognition.",
    title: "Alignment with Your Brand Identity",
  },
];