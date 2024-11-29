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
  fontSize = "3xl", // Increased font size
  textColor = "text-black dark:text-white",
  fontStyle = "normal", // Default font style
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
          "font-Montserrat tracking-[0.02rem] text-white ~text-global-font-sm-h3/global-font-h3" // Add the new classes
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
  const opacity = useTransform(progress, range, [0, 1])
  const y = useTransform(progress, range, [20, 0])

  return (
    <motion.span
      style={{ opacity, y }}
      className={cn(
        "mx-1 font-bold",
        `text-${fontSize}`,
        textColor,
        fontStyle, 
        "font-Montserrat tracking-[0.02rem] text-white ~text-global-font-sm-h3/global-font-h3"
      )}
    >
      {text}
    </motion.span>
  )
}