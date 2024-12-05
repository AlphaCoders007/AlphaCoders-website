"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBarSection from "./NavbarSection";
import LetsGetStartedSection from "./ui/Letgetstarted";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const heroElement = heroRef.current;
    const textElement = textRef.current;

    if (heroElement && textElement) {
      // ScrollTrigger for hero section animation
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
    <>
      <section
        id="hero-section"
        ref={heroRef}
        className=" relative z-10 h-[100vh] w-[100vw] overflow-hidden"
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
          {/* Overlay */}
          <div className="absolute inset-0 bg-overlay"></div>
          <img
            alt="Home"
            src="home-sm.webp"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div
          ref={textRef}
          className="relative flex h-full  flex-col justify-center"
        >
          <div className=" flex w-full pb-[3.8%]    origin-center flex-col items-center  md:items-start md:pl-[40%]">
            <h1 className="text-center  text-3xl  md:text-left">
              {/* first span  */}
              <span className="font-thicccboi    font-light text-[#797979] lg:text-7xl block">
                This is a Change, to a
              </span>
              {/* second span  */}
              <span className="  font-thicccboi      leading-tight font-bold bg-gradient-to-r from-[#bf00ff] to-[#ff5633] bg-clip-text text-transparent lg:text-7xl  block ">
                Future more Exciting.
              </span>
              
              
            </h1> 
            <h2 className="text-left font-Montserrat py-[3%] text-sm sm:text-xl font-thin">
                Websites, Mobile App, UI/UX &amp; Branding
              </h2>          
          </div>
        </div>

        {/* Positioned at the bottom center */}
        {/* */}
      </section>

      <style jsx>{`
        @media (max-width: 640px) {
          .bg-blur-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
          }

          .bg-blur-wrapper img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 0; /* Background image is at the lowest layer */
          }

          .bg-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(
              255,
              255,
              255,
              0.5
            ); /* Semi-transparent white overlay */
            z-index: 1; /* Overlay is above the background but below the text */
          }
        }

        .relative {
          z-index: 10; /* Ensure text appears above the overlay */
        }
      `}</style>
    </>
  );
};

export default Hero;
