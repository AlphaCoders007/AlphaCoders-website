"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LetsGetStartedSection from "./ui/Letgetstarted";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const heroElement = heroRef.current;
    const textElement = textRef.current;

    if (heroElement && textElement) {
      // Hero section animation
      ScrollTrigger.create({
        trigger: heroElement,
        start: "top top",
        end: "bottom top",
      });

      const tl = gsap.timeline();

      tl.from(textElement.querySelectorAll("h1, h2"), {
        duration: 2,
        scale: 0.3,
        opacity: 0,
        ease: "power3.out",
        stagger: 0.3,
      });
    }
  }, []);

  return (
    <section
      id="hero-section"
      ref={heroRef}
      className="relative z-10 h-[100vh] w-[100vw] overflow-hidden"
    >
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
      <div className="absolute inset-0 sm:hidden bg-blur">
        <div className="absolute inset-0 bg-overlay"></div>
        <img
          alt="Home"
          src="home-sm.webp"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div
        className="relative flex h-full flex-col justify-center"
      >
        <div className="flex w-full pt-[2%] origin-center flex-col items-center md:items-start md:pl-[40%]">
          <h1 className="text-center text-3xl md:text-left">
            <span className="font-thicccboi font-light text-[#797979] lg:text-7xl block">
            Dream it. Plan it. Do it.
            </span>
            <span className="font-thicccboi leading-tight font-bold bg-gradient-to-r from-[#bf00ff] to-[#ff5633] bg-clip-text text-transparent md:text-6xl block ">
            Transform your ideas into reality
            </span>
          </h1>
          {/* <h2 className="text-left font-Montserrat py-[3%] text-sm sm:text-xl font-thin">
            Websites, Mobile App, UI/UX &amp; Branding
          </h2> */}
        </div>
      </div>
      
    </section>
    
  );
};

export default Hero;