"use client";
import React, { useEffect, useRef, useState, createContext, useContext } from "react";
import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content?: React.ReactNode;
};

export const CarouselContext = createContext<{
  currentIndex: number;
}>({
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  return (
    <CarouselContext.Provider value={{ currentIndex }}>
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
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

export const Card = ({
    card,
    layout = false,
  }: {
    card: Card;
    layout?: boolean;
  }) => {
    return (
      <motion.div
        layoutId={layout ? `card-${card.title}` : undefined}
        className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10 shadow-lg"
      >
        {/* Enhanced Overlay */}
        <div className="absolute  h-full top-0 inset-x-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8  ">
          {/* Category Text */}
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className=" text-xs text-textcolor-yellow    md:text-lg lg:text-lg font-thicccboi text-left drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] tracking-wide  mb-2"
          >
            {card.category}
          </motion.p>
          {/* Title Text */}
          <motion.h2
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white text-sm sm:text-xl py-5 md:text-2xl lg:text-xl font-thicccboi max-w-xs text-left leading-tight md:leading-snug mt-4 drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)]"
          >
            {card.title}
          </motion.h2>
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