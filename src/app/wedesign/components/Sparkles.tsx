"use client";
import React from "react";
import { useTheme } from "@/app/components/hooks/useTheme";
import { SparklesCore } from "../UI/sparkles";

export function Sparkles() {
  const { isDarkMode } = useTheme();
  return (
    <div className="h-[45rem] w-full bg-background-light transition-colors text-textcolor-lightcolor dark:text-textcolor-yellow flex flex-col items-center justify-center overflow-hidden relative">
      {/* Title Section */}

      {/* Gradient and Sparkles Core Container */}
      <div className="w-[60rem] h-60 relative my-10">
        
        {/* Sparkles Core */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1000} 
          className="w-full h-full bg-background-dark"
          particleColor={isDarkMode ? "#FFFFFF" : "#3A98B9"}
        />

        {/* Radial Gradient Mask */}
        <div className="flex items-center justify-center absolute inset-0 w-full h-full  ">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-thicccboi  relative z-20 max-w-4xl  ">
            We Design
          </h1>
        </div>
      </div>

      {/* Description Section */}
      <h1 className="text-l md:text-3xl font-thicccboi text-center text-black dark:text-white relative z-20 max-w-5xl px-6">
        Design is where imagination takes form. Our team crafts thoughtful,
        user-centric designs that are as functional as they are beautiful. Each
        design we create solves problems, enhances experiences, and stands the
        test of time.
      </h1>
    </div>
  );
}
