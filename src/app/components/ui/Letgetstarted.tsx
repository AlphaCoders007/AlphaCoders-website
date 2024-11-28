"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Letsgetstarted: React.FC = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  // Handle Scroll Effect
  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      ScrollTrigger.create({
        trigger: videoElement,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onEnter: () => setIsExpanded(true),
      });

      if (isExpanded) {
        gsap.to(videoElement, {
          width: "100vw",
          height: "100vh",
          borderRadius: "0px",
          duration: 1.5,
          ease: "power3.inOut",
        });
      }
    }
  }, [isExpanded]);

  // Handle Click Expansion
  const handleClick = () => {
    setIsExpanded(true);
    const videoElement = videoRef.current;

    if (videoElement) {
      gsap.to(videoElement, {
        width: "100vw",
        height: "100vh",
        borderRadius: "0px",
        duration: 1.5,
        ease: "power3.inOut",
      });
    }
  };

  return (
    <div className="relative h-[200vh] w-full">
      {/* Video Section */}
      <div
        ref={videoRef}
        className={`absolute top-0 left-0 flex items-center justify-center ${
          isExpanded
            ? "w-full h-screen"
            : "w-[80px] h-[40px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
        } transition-all duration-300 ease-in-out overflow-hidden`}
      >
        {/* Video or Button */}
        {!isExpanded ? (
          <button
            ref={buttonRef}
            className="text-white text-sm font-bold"
            onClick={handleClick}
          >
            Get Started
          </button>
        ) : (
          <video
            src="portfolio-demo.mp4"
            className="w-full h-full object-cover"
            preload="auto"
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline="true"
            x5-playsinline="true"
          />
        )}
      </div>

      {/* Content Section */}
      <div className="relative h-full flex items-center justify-center bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-700">
          Scroll down or click to expand the video.
        </h1>
      </div>
    </div>
  );
};

export default Letsgetstarted;