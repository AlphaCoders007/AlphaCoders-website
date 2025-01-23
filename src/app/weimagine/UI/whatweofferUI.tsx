"use client";
import React, { useEffect, useRef,  createContext } from "react";
import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

export const CarouselContext = createContext<{
  currentIndex: number;
}>({
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
    }
  }, [initialScroll]);

  return (
    <CarouselContext.Provider value={{ currentIndex: 0 }}>
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
        >
          <div className="absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l"></div>
          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "max-w-7xl mx-auto" // Adjust carousel width if needed
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 * index, ease: "easeOut" } }}
                key={"card" + index}
                className="rounded-3xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({ card }: { card: { src: string; title: string; category: string; } }) => {
  return (
    <motion.div
      className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10 shadow-lg"
    >
      {/* Enhanced Overlay */}
      <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent z-30 pointer-events-none" />
      <div className="relative z-40 p-8">
        {/* Category Text */}
        <motion.p className="dark:text-textcolor-yellow text-textcolor-lightcolor text-sm md:text-2xl font-thicccboi text-left drop-shadow-lg">
          {card.category}
        </motion.p>
        {/* Title Text */}
        <motion.p className="text-white text-xl md:text-lg font-thicccboi max-w-xs text-left [text-wrap:balance] mt-2 drop-shadow-lg">
          {card.title}
        </motion.p>
      </div>
      {/* Background Image */}
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute z-10 inset-0" 
      />
    </motion.div>
  );
};