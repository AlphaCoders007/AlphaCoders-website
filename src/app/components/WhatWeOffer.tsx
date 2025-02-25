"use client";
import React from "react";
import { Carousel, Card } from "@/app/components/ui/what-we-offerui";

interface CardData {
  category: string;
  title: string;
  src: string;
}

interface WhatweofferProps {
  data: CardData[];
  title: string; 
}


export function Whatweoffer({ data, title }: WhatweofferProps) {
  const cards = data.map((card) => (
    <Card key={card.src} card={card} />
  ));

  return (
    <div className="relative w-full h-full  bg-background-light transition-colors z-20">
       <div className="px-6 text-center py-10 ">
        <h2 className="text-4xl md:text-8xl font-thicccboi dark:text-white text-black tracking-tight ">
          {title}
        </h2>
      </div>
      <Carousel items={cards} />
    </div>
  );
}
