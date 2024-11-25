"use client";

import React, { useEffect, useRef } from "react";
import FloatingIcons from "./FloatingIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MacbookScroll } from "./ui/macbook-scroll";
import { useTheme } from "../components/hooks/darkmode";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { BoxesCore } from "./ui/background-boxes";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { theme, toggleTheme } = useTheme();

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
      className="relative h-screen flex flex-col justify-center items-center overflow-hidden px-4 sm:px-8 bg-background text-foreground"
      ref={heroRef}
    >
      {/* Wrapping Components */}
      <BackgroundBeamsWithCollision>
        
          {/* Text Div */}
          <div className="absolute top-[40%] right-[10%] flex flex-col justify-center items-start">
            <h1
              className="font-ThicccboiRegular text-foreground"
              style={{
                fontSize: "clamp(1rem, 1rem + 2vw, 4rem)",
                lineHeight: "clamp(1.2rem, 1rem + 3vw, 4.5rem)",
              }}
            >
              STRATEGY PLANNING BUILDING
            </h1>
            <h2
              className="font-ThicccboiMedium"
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
            <p className="text-foreground text-base sm:text-xl font-ThicccboiRegular mt-5">
              Reaching out to transform the business world into future technology.
            </p>
          </div>

          {/* Floating Icons */}
          <div className="absolute top-3 left-0 w-full h-full">
            <FloatingIcons />
          </div>
        
      </BackgroundBeamsWithCollision>
    </section>
  );
};

export default Hero;
