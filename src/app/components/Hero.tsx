"use client";

import React, { useEffect, useRef } from "react";
import FloatingIcons from "./FloatingIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

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
      className="relative h-screen flex flex-col justify-center items-center px-4 sm:px-8 bg-background text-foreground overflow-hidden"
      ref={heroRef}
    >
      {/* Wrapping Components */}
      <BackgroundBeamsWithCollision>
        {/* Text Div */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-12 text-center z-10">
          <h1
            className="font-ThicccboiRegular text-foreground"
            style={{
              fontSize: "clamp(1.5rem, 2rem + 2vw, 4rem)",
              lineHeight: "clamp(2rem, 2.5rem + 3vw, 4.5rem)",
            }}
          >
            STRATEGY PLANNING BUILDING
          </h1>
          <h2
            className="font-ThicccboiMedium mt-4"
            style={{
              fontSize: "clamp(1.25rem, 1.75rem + 2vw, 3.5rem)",
              lineHeight: "clamp(1.75rem, 2rem + 2vw, 4rem)",
              backgroundImage: "linear-gradient(90deg, #bf00ff, #ff5633)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Application Design and Development
          </h2>
          <p className="text-foreground text-sm sm:text-lg font-ThicccboiRegular mt-5">
            Reaching out to transform the business world into future technology.
          </p>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-0 left-0 w-full h-full">
          <FloatingIcons />
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
};

export default Hero;
