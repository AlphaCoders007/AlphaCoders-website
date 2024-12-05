"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LetsGetStartedSection: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const buttonElement = buttonRef.current;

    if (buttonElement) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: buttonElement,
          start: "top bottom", // Animation starts when button enters viewport
          end: "bottom top", // Ends when button leaves viewport
          scrub: true, // Smooth animation on scroll
        },
      });

      // Button animation sequence
      timeline
        .fromTo(
          buttonElement,
          {
            width: "120px", // Initial size
            height: "50px",
           
            
          },
          {
            width: "50vw", // Midway size
            height: "50vh",
            duration: 1.5,
            ease: "power3.inOut", // Smooth acceleration and deceleration
          }
        )
        .to(buttonElement, {
          width: "100vw", // Full-screen button
          height: "100vh",
          duration: 2,
          ease: "power2.out",
        });
    }
  }, []);

  return (
    <section>
      <button
        ref={buttonRef}
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center overflow-hidden rounded-full  transition-all duration-300"
      >
        <video
          className="absolute w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video2.mp4" type="video/mp4" />
        </video>
      </button>
    </section>
  );
};

export default LetsGetStartedSection;