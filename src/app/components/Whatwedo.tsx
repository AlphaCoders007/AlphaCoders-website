"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { QueueWords } from "./QueueWords";
import StatsCard from "./StatsCard";
import { TextRevealByLine } from "./ui/textrevealbyline";

const cardsTabs = [
  { label: "We Imagine", text: "Where Ideas Are Born" },
  { label: "We Design", text: "Transfom  vision into form" },
  { label: "We Created", text: "Building  ideas to life" },
];

export function Whatwedo() {
  const [textAnimationComplete, setTextAnimationComplete] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll();

  const sectionHeight = useTransform(scrollYProgress, [0, 0.9], ["100vh", "auto"]);



  return (
    <AuroraBackground className="w-full h-full pb-8 z-20"> 
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.3,
      duration: 1.5,
      ease: "easeInOut",
    }}
    className="relative flex flex-col gap-4 sm:gap-6 lg:gap-8 items-center justify-center px-6 py-16 text-white w-full overflow-hidden"
  >
    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center leading-tight tracking-wide lg:px-12 sm:px-6 md:px-8">
      <QueueWords />
    </div>
  </motion.div>

      <div className="flex flex-col lg:flex-col-reverse w-full gap-4 sm:gap-6 lg:gap-8">

        <motion.div
          ref={sectionRef}
          className="relative overflow-hidden"
          style={{
            transition: "height 2s ease-in-out",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onAnimationComplete={() => setTextAnimationComplete(true)}
            transition={{
              duration: 5,
            }}
            className="px-6 max-w-5xl mx-auto text-lg leading-8 text-center w-full min-h-[40vh] flex items-center"
          >
            <TextRevealByLine
              text="AlphaCoders Innovations is a cutting-edge software solutions company dedicated to empowering businesses through transformative technology."
              textColor="text-white"
              fontSize="2xl sm:text-4xl  "
              className="animated-text font-Montserrat "
            />
          </motion.div>
        </motion.div>


        <div className="flex flex-col sm:flex-row justify-center gap-8 items-center w-full">
          {cardsTabs.map((card, i) => (
            <StatsCard
              key={i}
              label={card.label}
              text={card.text}
              className="flex flex-col items-center bg-white/10 text-white  rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl w-full h-[10vh] sm:h-[20vh] max-w-sm"
            />
          ))}
        </div>
      </div>
    </AuroraBackground>
  );
}