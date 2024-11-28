"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";
import { QueueWords } from "./QueueWords";
import StatsCard from "./StatsCard";
import { TextRevealByLine } from "./ui/text-generate-effect";

const words = `As pioneers in alpha coding, our expertise extends to spearheading advancements in revolutionary technologies such as GenAI.`; // Original sentence to be split into words

const CardsTabs = [
  { count: "150+", label: "Projects Completed" },
  { count: "120", label: "Happy Clients" },
  { count: "50", label: "Awards Won" },
];

export function Whatwedo() {
  return (
    <AuroraBackground>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-8 items-center justify-center px-6 py-16 text-white w-full overflow-hidden"
      >
        {/* Heading with Animated Queue Words */}
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight tracking-wide lg:px-12 sm:px-6 md:px-8">
          <QueueWords />
        </div>
      </motion.div>

      {/* Stats Cards Section */}
      <div className="flex flex-wrap justify-center gap-8 px-4  w-full">
        {CardsTabs.map((card, i) => (
          <StatsCard
            key={i}
            count={card.count}
            label={card.label}
            className="flex flex-col items-center bg-white/10 text-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-1/3 md:w-1/4 lg:w-1/5 max-w-sm"
          />
        ))}
      </div>

      {/* Text Generator Section */}
      <div className="px-6 max-w-3xl mx-auto text-lg leading-relaxed text-center w-full">
        <TextRevealByLine text="AlphaCoders Innovations is a cutting-edge software solutions company dedicated to empowering businesses through transformative technology. With a focus on innovation, creativity, and precision, we design and develop digital solutions tailored to meet the unique needs of our clients." />
      </div>
    </AuroraBackground>
  );
}
