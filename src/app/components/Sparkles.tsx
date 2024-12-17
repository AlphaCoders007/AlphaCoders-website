"use client";
import React from "react";
import { useTheme } from "@/app/components/hooks/useTheme"
import { SparklesCore } from "./ui/sparkles";

export function Sparkles() {
  const { isDarkMode } = useTheme();
  return (
    <div className="h-[45rem] w-full bg-background-light transition-colors flex flex-col items-center justify-center overflow-hidden relative">
      {/* Title Section */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center relative z-20 max-w-4xl px-6">
        We Design
      </h1>

      {/* Gradient and Sparkles Core Container */}
      <div className="w-[40rem] h-40 relative my-10">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Sparkles Core */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1000} // Slightly reduced particle density for performance
          className="w-full h-full "
          particleColor={isDarkMode ? "#FFFFFF" : "#3A98B9"}
        />

        {/* Radial Gradient Mask */}
        <div className="absolute inset-0 w-full h-full transition-colors [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>

      {/* Description Section */}
      <h1 className="text-l md:text-3xl font-thicccboi text-center relative z-20 max-w-5xl px-6">
        Design is where imagination takes form. Our team crafts thoughtful, user-centric designs that are as functional as they are beautiful. Each design we create solves problems, enhances experiences, and stands the test of time.
      </h1>
    </div>
  );
}