"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import clsx from "clsx";

interface CardProps {
  title: string;
  technology: string[];
  description: string;
  reversed?: boolean;
  imagesSrc: string; // Image source
}

// Animation variants for image scaling effect
const imageVariants = {
  enter: { scale: 0.7, opacity: 1, transition: { duration: 1 } },
  leave: { scale: 1.0, opacity: 0.8, transition: { duration: 1 } },
};

// Animation variants for text sliding and fading in
const textVariants = {
  enter: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  leave: { opacity: 0, y: 20, transition: { duration: 1, ease: "easeIn" } },
};

export const Card: React.FC<CardProps> = ({
  title,
  description,
  technology,
  reversed = false, // Default to non-reversed layout
  imagesSrc,
}) => {
  const controls = useAnimation();
  const imageControls = useAnimation();
  const textControls = useAnimation();
  const [isInView, setIsInView] = useState(false);

  // Handle animation start and stop based on visibility
  useEffect(() => {
    if (isInView) {
      controls.start("enter");
      imageControls.start("enter");
      textControls.start("enter");
    } else {
      controls.start("leave");
      imageControls.start("leave");
      textControls.start("leave");
    }
  }, [isInView, controls, imageControls, textControls]);

  return (
    <motion.div
      className="w-[90%] h-[70%] sticky top-10 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-xl overflow-hidden my-12 m-12 mb-12"
      initial="initial"
      animate={controls}
      onViewportEnter={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
      viewport={{
        once: false,
        amount: 0.7, // Ensures that the card starts to exit only after 70% of it has left the viewport
      }}
    >
      <div
        className={clsx(
          "flex flex-col",
          reversed ? "lg:flex-row-reverse" : "lg:flex-row",
          "items-center w-full h-full bottom-5"
        )}
      >
        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2 h-1/2 lg:h-full flex-shrink-0"
          variants={imageVariants}
          animate={imageControls}
          whileInView={{
            scale: 1.05, // A subtle zoom effect when the image enters the viewport
            opacity: 1,
            transition: { duration: 1 },
          }}
          viewport={{ once: true, amount: 0.2 }} // Activate after a certain scroll threshold
        >
          <img
            src={imagesSrc}
            alt={title}
            className="w-[80%] h-[60%] object-cover rounded-lg" // Use object-cover for better image fit
          />
        </motion.div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full p-9 flex flex-col justify-center">
          {/* Title */}
          <motion.h3
            className="text-3xl lg:text-7xl font-mono font-bold text-white"
            variants={textVariants}
            animate={textControls}
          >
            {title}
          </motion.h3>

          {/* Technology Tags */}
          <motion.div className="flex flex-wrap gap-4 mt-5">
            {technology.map((tech, i) => (
              <motion.div
                key={i}
                className="bg-white text-black p-3 rounded-full text-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>

          {/* Description */}
          <div className="text-3xl text-white py-5 flex-1 overflow-hidden">
            <motion.p
              className="text-lg lg:text-2xl leading-relaxed break-words"
              variants={textVariants}
              animate={textControls}
            >
              {description}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
