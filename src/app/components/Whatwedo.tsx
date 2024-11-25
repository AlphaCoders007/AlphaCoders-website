"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";
import { QueueWords } from "./Stackui";

// Updated AuroraBackgrounds component with white background styling
export function Whatwedo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 py-16 text-black"
      >
        <div className="text-3xl sm:text-5xl lg:text-7xl font-bold text-center flex gap-2">
          <QueueWords />
        </div>
      </motion.div>
    </AuroraBackground>
  );
}