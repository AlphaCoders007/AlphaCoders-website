"use client";

import React, { useEffect, useRef } from "react";
import FloatingIcons from "./FloatingIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const heroElement = heroRef.current;
    const buttonElement = buttonRef.current;

    if (heroElement && buttonElement) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: heroElement,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      });

      timeline
        .fromTo(
          buttonElement,
          {
            width: "80px",
            height: "40px",
            borderRadius: "20px",
            backgroundColor: "#c3195d",
          },
          {
            width: "50vw",
            height: "40vh",
            borderRadius: "10px",
            backgroundColor: "#ff7eb9",
            duration: 1.5,
            ease: "power3.inOut",
          }
        )
        .to(buttonElement, {
          width: "100vw",
          height: "100vh",
          borderRadius: "0",
          backgroundColor: "#000",
          duration: 2,
          ease: "power2.out",
        });
    }
  }, []);

  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center bg-gray-100 overflow-hidden text-center px-4 sm:items-end sm:text-left"
      ref={heroRef}
    >
      <div className="flex flex-col justify-center items-center sm:items-start mb-5 sm:ml-8">
        <h1
          className="text-black font-ThicccboiRegular"
          style={{
            fontSize: "clamp(1rem, 1rem + 2vw, 4rem)", // Responsive text size
            lineHeight: "clamp(1.2rem, 1rem + 3vw, 4.5rem)", // Responsive line height
          }}
        >
          STRATEGY PLANNING BUILDING
        </h1>
        <h2
          className="font-ThicccboiMedium text-center sm:text-left"
          style={{
            fontSize: "clamp(1rem, 1rem + 2vw, 4rem)",
            lineHeight: "clamp(1.2rem, 1rem + 3vw, 4.5rem)",
            backgroundImage: "linear-gradient(90deg, #bf00ff, #ff5633)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Application Design and Development
        </h2>
        <p className="text-black text-base sm:text-xl font-ThicccboiRegular mt-5 px-2 sm:px-4">
          Reaching out to transform the business world into future technology.
        </p>
      </div>

      <div className="absolute top-0 left-0 w-full h-full">
        <FloatingIcons />
      </div>

      <button
        ref={buttonRef}
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10 overflow-hidden rounded-3xl bg-pink-700 text-white text-sm sm:text-lg font-semibold flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out"
        style={{
          width: "clamp(100px, 10vw, 150px)", // Responsive button width
          height: "clamp(50px, 5vw, 70px)", // Responsive button height
        }}
      >
        <video
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </button>
    </section>
  );
};

export default Hero;