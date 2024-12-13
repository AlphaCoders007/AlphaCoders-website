"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { cn } from "@/app/lib/utils";

interface TextRevealByLineProps {
  text: string;
  className?: string;
  lineHeight?: number;
  fontSize?: string;
  textColor?: string;
  fontStyle?: string;
  onAnimationComplete?: () => void;
}

export function TextRevealByLine({
  text,
  className,
  lineHeight = 1.5,
  fontSize = "text-3xl",
  textColor = "text-black dark:text-white",
  fontStyle = "font-Montserrat",
  onAnimationComplete,
}: TextRevealByLineProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const words = text.split(" ");
  const totalWords = words.length;

  const [completedWords, setCompletedWords] = useState(0);

  const handleWordAnimationComplete = () => {
    setCompletedWords((prev) => prev + 1);
  };

  useEffect(() => {
    if (completedWords === totalWords && onAnimationComplete) {
      onAnimationComplete(); // Notify when all words are animated
    }
  }, [completedWords, totalWords, onAnimationComplete]);

  return (
    <div
      ref={targetRef}
      className={cn("relative z-0", className)}
      style={{ lineHeight }}
    >
      <div
        className={cn(
          "sticky top-0 mx-auto flex flex-wrap items-center justify-center",
          "bg-transparent px-4",
          "tracking-wide text-gray-800 dark:text-gray-200"
        )}
      >
        {words.map((word, index) => {
          const start = index / words.length;
          const end = (index + 1) / words.length;

          return (
            <Line
              key={index}
              text={word}
              progress={scrollYProgress}
              range={[start, end]}
              fontSize={fontSize}
              textColor={textColor}
              fontStyle={fontStyle}
              onComplete={handleWordAnimationComplete}
            />
          );
        })}
      </div>
    </div>
  );
}

interface LineProps {
  text: string;
  progress: MotionValue<number>;
  range: [number, number];
  fontSize: string;
  textColor: string;
  fontStyle: string;
  onComplete?: () => void;
}

function Line({
  text,
  progress,
  range,
  fontSize,
  textColor,
  fontStyle,
  onComplete,
}: LineProps) {
  const modifiedRange = [range[0] * 0.6, range[1] * 0.8];
  const opacity = useTransform(progress, modifiedRange, [0, 1]);
  const translateY = useTransform(progress, modifiedRange, [20, 0]);

  // Trigger onComplete when opacity reaches 1
  useEffect(() => {
    const unsubscribe = opacity.onChange((value) => {
      if (value === 1 && onComplete) {
        onComplete();
      }
    });
    return () => unsubscribe();
  }, [opacity, onComplete]);

  return (
    <motion.span
      style={{ opacity, transform: translateY }}
      className={cn(
        "mx-1 inline-block",
        fontSize,
        textColor,
        fontStyle,
        "tracking-wide whitespace-nowrap"
      )}
    >
      {text}
    </motion.span>
  );
}