"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const gradientClass = "bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text";

const words: string[] = [
  "We Imagine",
  "We Design",
  "We Create",
  "We are AlphaCoders",
];

export const QueueWords: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="flex items-center space-x-2 text-2xl sm:text-6xl md:text-7xl xl:text-5xl">
      {words[currentWordIndex] !== "We are AlphaCoders" && (
        <motion.p
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: -90, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0"
        >
          With you
        </motion.p>
      )}
      <motion.div
        key={currentWordIndex}
        initial={{ rotateX: 90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        exit={{ rotateX: -90, opacity: 0 }}
        transition={{ duration: 1 }}
        className={`px-2 py-1 sm:px-4 sm:py-2 border-4 border-transparent rounded-md ${gradientClass}`}
        style={{
          background: "linear-gradient(to right, #bf00ff, #ff5633)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        {words[currentWordIndex]}
      </motion.div>
    </div>
  );
};