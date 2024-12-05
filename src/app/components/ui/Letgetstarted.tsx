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
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          overflow: "hidden", // Hide overflow for video
        }}
      >
        {/* Video Layer */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%", height: "100%" }}
        >
          <source src="/video2.mp4" type="video/mp4" />
        </video>
      </button>
    </section>
  );
};

export default LetsGetStartedSection;