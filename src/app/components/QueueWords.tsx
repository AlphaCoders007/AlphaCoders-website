"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const gradientClass = 'bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text';

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
    <div className="flex justify-center items-center text-2xl sm:text-6xl md:text-7xl xl:text-5xl overflow-hidden">
      {words[currentWordIndex] !== "We are AlphaCoders" && <p className="">With you</p>}
      
      <motion.div
        key={currentWordIndex}  
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}  
        className={`px-4 py-2 border-4 border-transparent rounded-md ${gradientClass} text-center`}
        style={{
          background: 'linear-gradient(to right, #bf00ff, #ff5633)',  
          WebkitBackgroundClip: 'text',  
          color: 'transparent',
          lineHeight: "7rem",
        }}
      >
        {words[currentWordIndex]}  
      </motion.div>
    </div>
  );
};
