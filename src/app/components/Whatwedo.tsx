"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";
import { QueueWords } from "./QueueWords";
import StatsCard from "./StatsCard";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;

const CardsTabs = [
  { count: "150+", label: "Projects Completed" },
  { count: "120", label: "Happy Clients" },
  { count: "50", label: "Awards Won" },
];

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
        className="relative flex flex-col gap-8 items-center justify-center px-4 py-16 text-black"
      >
        <div className="text-3xl sm:text-5xl lg:text-6xl font-bold text-center leading-tight tracking-wide">
          <QueueWords />
        </div>
      </motion.div>

      {/* Stats Cards Section */}
      <div className="flex flex-wrap justify-center gap-8 px-4 py-10">
        {CardsTabs.map((card, i) => (
          <StatsCard
            key={i}
            count={card.count}
            label={card.label}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          />
        ))}
      </div>

      {/* Text Section */}
      <div className="px-4 py-10 max-w-4xl mx-auto text-lg leading-relaxed text-center">
        <TextGenerateEffect words={words} />
      </div>
    </AuroraBackground>
  );
}
