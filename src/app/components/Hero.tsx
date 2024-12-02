"use client";

import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Letgetstarted from "./ui/Letgetstarted";
import NavBarSection from "./NavbarSection";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const [isExpanded, setIsExpanded] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const heroElement = heroRef.current;

    if (heroElement) {
      ScrollTrigger.create({
        trigger: heroElement,
        start: "top top",
        end: "bottom top",
        pin: true, // Keeps the hero section fixed while button expands
        pinSpacing: false, // Prevents additional spacing after unpinning
      });
    }
  }, []);

  return (
    <>
      <section
        id="hero-section"
        ref={heroRef}
        className="relative h-[100vh] w-[100vw] overflow-hidden"
      >
        
        <NavBarSection />
        
        {/* Background Video for larger screens */}
        <div className="absolute inset-0 sm:block">
          <video
            src="home.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Background Image for smaller screens */}
        <div className="absolute inset-0 sm:hidden">
          <img
            alt="Home"
            src="home-sm.webp"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
    <div className="relative flex h-full flex-col justify-start mt-[140px] md:mt-[140px]">
     <div className="flex w-full origin-center flex-col items-center gap-4 md:items-start md:pl-[40%] mt-56 md:mt-0">
    <h1 className="text-center md:text-left">
    <span 
  className="font-ThicccboiRegular font-extralight text-[#797979] text-4xl sm:text-5xl lg:text-7xl">
  This is a Change, to a
</span>

      <br />
      <span className="font-medium bg-gradient-to-r from-[#bf00ff] to-[#ff5633] bg-clip-text text-transparent font-ThicccboiRegular text-3xl sm:text-4xl lg:text-7xl">
        Future more Exciting.
      </span>
    </h1>
   <h2 className="text-center md:text-left font-montserrat text-[#797979] text-base md:text-lg">
  Websites, Mobile App, UI/UX &amp; Branding
</h2>

  </div>
</div>


        {/* Letgetstarted Component */}
        <Letgetstarted isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      </section>

      {/* Next Section */}
      <section className="h-[100vh] w-full bg-gray-200 flex items-center justify-center">
        
      </section>
    </>
  );
};

export default Hero;