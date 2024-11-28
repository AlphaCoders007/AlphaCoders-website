"use client";

import React, { useEffect, useState, useRef } from "react";
import FloatingIcons from "./FloatingIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BackgroundBeamsWithCollision } from "../../../ExtraComponents/UI/background-beams-with-collision";
import Letsgetstarted from "./ui/Letgetstarted";

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
    <>
      <section className="relative h-[100vh] w-[100vw] overflow-hidden">
        {/* Background Content */}
        <div className="absolute inset-0">
          <div
            className="relative h-full w-full origin-center"
            style={{
              filter: "blur(0px)",
              willChange: "transform, filter",
              transform: "none",
            }}
          >
            {/* Video for larger screens */}
            <div className="absolute inset-0 h-[100vh] w-[100vw] overflow-hidden sm:block">
              <div className="w-full h-full">
                <video
                  src="home.mp4"
                  className="w-full h-full object-cover"
                  preload="auto"
                  autoPlay
                  muted
                  loop
                  playsInline
                  webkit-playsinline="true"
                  x5-playsinline="true"
                />
              </div>
            </div>
            {/* Image fallback for smaller screens */}
            <div className="absolute inset-0 block h-[100svh] overflow-hidden opacity-60 sm:hidden">
              <img
                alt="home"
                loading="lazy"
                decoding="async"
                className="object-cover object-left"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  color: "transparent",
                  backgroundSize: "cover",
                  backgroundPosition: "50% 50%",
                  backgroundRepeat: "no-repeat",
                }}
                src="home-sm.webp"
              />
            </div>
          </div>
        </div>
        {/* Text Content */}
        <div className="relative flex h-full flex-col justify-center">
          <div className="flex w-full origin-center flex-col items-center gap-4 md:items-start md:pl-[40%]">
            <h1 className="text-center text-xl md:text-left">
              <span className="font-ThicccboiLight text-[#797979] text-5xl">
                This is a Change, to a
              </span>
              <br />
              <span className="font-medium bg-gradient-to-r from-[#bf00ff] to-[#ff5633] bg-clip-text text-transparent font-ThicccboiRegular text-5xl">
                Future more Exciting.
              </span>
            </h1>
            <h2 className="text-left font-montserrat text-[#797979]  text-lg ">
              Websites, Mobile App, UI/UX &amp; Branding
            </h2>
          </div>
        </div>
        < Letsgetstarted />
      </section>
     
    </>
  );
};

export default Hero;
