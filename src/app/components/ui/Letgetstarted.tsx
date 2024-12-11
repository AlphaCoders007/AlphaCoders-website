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
        });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="  relative flex h-[100vh]    w-full flex-col  items-center  left-1/2 transform -translate-x-1/2  z-20     "
    >
      <div className=" sticky  -mt-20  rounded-[50px]  h-full w-full z-20 flex items-center justify-center overflow-hidden   transition-all duration-300">
        <video
          className="absolute w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video2.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default LetsGetStartedSection;
