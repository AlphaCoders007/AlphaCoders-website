"use client";

import { cn } from "@/app/lib/utils";
import React, { useEffect, useState, useRef } from "react";

// TypeScript interface for the props
interface CardItem {
  quote: string;
  title: string;
}

interface InfiniteMovingCardsUIProps {
  items: CardItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCardsUI: React.FC<InfiniteMovingCardsUIProps> = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      setDirection();
      setSpeed();
      setStart(true);
    }
  };

  const setDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const setSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-6 py-4 w-max flex-nowrap", // Adjust gap for better spacing
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="relative flex-shrink-0 w-[90vw] sm:w-[350px] md:w-[450px] lg:w-[550px] max-w-full rounded-2xl border border-b-0 border-slate-700 px-6 py-8 sm:py-10 md:py-12 lg:py-16 h-[300px] lg:h-[250px] bg-gradient-to-b from-slate-800 to-slate-900" // Responsive card width, height, and padding
          >
            <blockquote className="relative z-20">
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-1 pointer-events-none border-2 border-transparent"
              ></div>
              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-100">{item.title}</h3>
              {/* Quote */}
              <p className="mt-4 text-sm text-gray-300 leading-[1.6]">{item.quote}</p>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};