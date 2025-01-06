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
      // Create a timeline with smooth scrolling animations
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionElement,
          start: "top bottom",
          end: "bottom top",
          scrub: 1, // Smooth scroll with 1 second duration
          markers: false, // Optional: Remove scroll trigger markers in production
        },
      });

      // Adding animations with enhanced transitions
      timeline
        .fromTo(
          sectionElement,
          {
            width: "120px",
            height: "50px",
            opacity: 1, // Start with opacity 1
          },
          {
            width: "50vw",
            height: "50vh",
            borderRadius: "20px",
            opacity: 1, // Fade out slightly to 0.8
            duration: 1.5,
            ease: "power3.inOut",
          }
        )
        .to(sectionElement, {
          width: "100vw",
          height: "100vh",
          borderRadius: "0px",
          margin: "0px",
          padding: "0px",
          opacity: 1, // Ensure opacity is fully 1 at the end
          duration: 2,
          ease: "power2.out",
        });
    }

    // Cleanup on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="  relative backdrop-blur-sm flex h-full  w-full flex-col -mt-4 rounded-xl items-center  left-1/2 right-1/2 transform -translate-x-1/2  z-20 pt-4 "
    >
      <VideoSection />
    </section>
  );
};

const VideoSection: React.FC = () => {
  return (
    <div className=" sticky h-[150%] w-full top-[-7rem]   -mt-20  rounded-2xl z-20 flex items-center justify-center overflow-hidden   transition-all duration-300">
      <video
        
        preload="metadata"
        className="sticky w-auto sm:w-full h-full object-cover rounded-lg"
        autoPlay
        loop
        muted
        playsInline
        
      >
        <source src="/video4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LetsGetStartedSection;
