"use client";

import { FC, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/app/lib/utils";
import { MotionValue } from "framer-motion";

interface TextRevealByLineProps {
  text: string; // Single string prop
  className?: string;
}

export const TextRevealByLine: FC<TextRevealByLineProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  // Access scrollYProgress using the useScroll hook
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Split the text into words
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex flex-wrap items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        {words.map((word, index) => {
          const start = index / words.length;  // Start from the first word
          const end = (index + 1) / words.length;  // End at the last word

          return (
            <Line
              key={index}
              text={word}
              progress={scrollYProgress}
              range={[start, end]}
            />
          );
        })}
      </div>
    </div>
  );
};

interface LineProps {
  text: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Line: FC<LineProps> = ({ text, progress, range }) => {
  // Use useTransform correctly to map scrollYProgress to opacity
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, [20, 0]); // For smooth vertical movement

  return (
    <motion.span
      style={{ opacity, y }}
      className={"mx-1 text-2xl font-bold text-black dark:text-white"}
    >
      {text}
    </motion.span>
  );
};