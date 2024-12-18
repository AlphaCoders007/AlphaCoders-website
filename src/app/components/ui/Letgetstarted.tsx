"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LetsGetStartedSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);
  

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (sectionElement) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionElement,
          start: "top bottom", // Animation starts when button enters viewport
          end: "bottom top", // Ends when button leaves viewport
          scrub: true, // Smooth animation on scroll
        },
      });

      // Button animation sequence
      timeline
        .fromTo(
          sectionElement,
          {
            width: "120px", // Initial size
            height: "50px",
          },
          {
            width: "50vw", // Midway size
            height: "50vh",
            borderRadius: "20px", // Slight roundness midway
            duration: 1.5,
            ease: "power3.inOut", // Smooth acceleration and deceleration
          }
        )
        .to(sectionElement, {
          width: "100vw", // Full-screen div
          height: "100vh",
          borderRadius: "0px", // No roundness
          margin: "0px", // Remove any default margins
          padding: "0px", // Ensure no padding
          duration: 2,
          ease: "power2.out",
          opacity:1
        });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="  relative backdrop-blur-sm flex h-full  w-full flex-col -mt-4 rounded-xl items-center  left-1/2 right-1/2 transform -translate-x-1/2  z-20 pt-4  "
    >
      <div className=" sticky h-[150%] w-full top-[-7rem]   -mt-20 rounded-2xl z-20 flex items-center justify-center overflow-hidden   transition-all duration-300">
        <video
          className="sticky w-auto sm:w-full h-full object-cover rounded-lg "
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video3.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default LetsGetStartedSection;
