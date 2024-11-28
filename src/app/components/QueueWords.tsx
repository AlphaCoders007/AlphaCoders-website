"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const gradientClass = 'bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text';

const words: string[] = [
  "Designers",
  "Developers",
  "Creators",
  "AlphaCoders",
];

export const QueueWords: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);

  useEffect(() => {
    // Transition to the next word every 5 seconds
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Loop through words
    }, 2000); // Change word every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="flex justify-center items-center text-4xl sm:text-6xl md:text-7xl xl:text-5xl overflow-hidden">
      <p className="">We Are</p>
      <motion.div
        key={currentWordIndex}  // Change word on index update
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}  // Fade transition between words
        className={`px-4 py-2 border-4 border-transparent rounded-md ${gradientClass} text-center`}
        style={{
          background: 'linear-gradient(to right, #bf00ff, #ff5633)',  // Set the gradient border
          WebkitBackgroundClip: 'text',  // Clip the background to the text
          color: 'transparent',
          lineHeight: "7rem",
        }}
      >
        {words[currentWordIndex]}  {/* Display the current word */}
      </motion.div>
    </div>
  );
};
