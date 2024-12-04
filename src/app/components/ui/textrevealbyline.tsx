"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
import { cn } from "@/app/lib/utils"

interface TextRevealByLineProps {
  text: string
  className?: string
  lineHeight?: number
  fontSize?: string
  textColor?: string
  fontStyle?: string
}

export function TextRevealByLine({
  text,
  className,
  lineHeight = 1.5,
  fontSize = "3xl", // Default font size
  textColor = "text-black dark:text-white",
  fontStyle = "font-Inter", // Use a clean, modern font
}: TextRevealByLineProps) {
  const targetRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const words = text.split(" ")

  return (
    <div ref={targetRef} className={cn("relative z-0", className)}>
      <div
        className={cn(
          "sticky top-0 mx-auto flex flex-wrap items-center bg-transparent px-4 py-20",
          `leading-[${lineHeight}]`,
          "tracking-wide text-gray-800 dark:text-gray-200" // Better tracking and color
        )}
      >
        {words.map((word, index) => {
          const start = index / words.length
          const end = (index + 1) / words.length

          return (
            <Line
              key={index}
              text={word}
              progress={scrollYProgress}
              range={[start, end]}
              fontSize={fontSize}
              textColor={textColor}
              fontStyle={fontStyle}
            />
          )
        })}
      </div>
    </div>
  )
}

interface LineProps {
  text: string
  progress: MotionValue<number>
  range: [number, number]
  fontSize: string
  textColor: string
  fontStyle: string
}

function Line({ text, progress, range, fontSize, textColor, fontStyle }: LineProps) {
  const modifiedRange = [range[0] * 0.6, range[1] * 0.8]; // Adjust animation range

  const opacity = useTransform(progress, modifiedRange, [0, 1]) // Only animate opacity

  return (
    <motion.span
      style={{ opacity }} // Removed the y transform
      className={cn(
        "mx-1",
        `text-${fontSize}`, // Dynamically apply font size
        textColor,
        fontStyle,
        "tracking-wide" // Add consistent spacing
      )}
    >
      {text}
    </motion.span>
  )
}