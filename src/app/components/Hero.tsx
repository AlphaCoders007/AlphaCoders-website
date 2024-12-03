"use client";

import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBarSection from "./NavbarSection";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null); // Ref for both h1 and h2 wrapper

  const [isExpanded, setIsExpanded] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const heroElement = heroRef.current;
    const textElement = textRef.current;

    if (heroElement && textElement) {
      ScrollTrigger.create({
        trigger: heroElement,
        start: "top top",
        end: "bottom top",
      });

      // Create a timeline for the reversed zoom effect
      const tl = gsap.timeline();

      // Start small and zoom in for both h1 and h2
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
        className="relative h-[100vh] w-[100vw] overflow-hidden"
      >
        <NavBarSection />

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
          <img
            alt="Home"
            src="home-sm.webp"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div
          ref={textRef}
          className="relative flex h-full flex-col justify-start mt-[140px]"
        >
          <div className="flex w-full origin-center py-[1.8%] flex-col items-center gap-4 md:items-start md:pl-[40%]">
            <h1 className="text-center text-3xl md:text-left">
              <span className="font-thicccboi font-light text-[#797979] lg:text-7xl block">
                This is a Change, to a
              </span>
              <span className="font-thicccboi font-bold bg-gradient-to-r from-[#bf00ff] to-[#ff5633] bg-clip-text text-transparent lg:text-7xl block mt-1">
                Future more Exciting.
              </span>
            </h1>
            <h2 className="text-left py-4 text-xl  font-thin ">
              Websites, Mobile App, UI/UX &amp; Branding
            </h2>
          </div>
          {/* <Letgetstarted isExpanded={isExpanded} setIsExpanded={setIsExpanded} /> */}
          <div className="opacity-0 will-change-[opacity,transform] transform translate-y-10">
            <div className="relative h-[100svh]">
              <div className="sticky top-0 h-[100svh] w-screen">
                {/* Gradient Overlay */}
                <div className="absolute inset-x-0 top-[-5rem] h-20 w-full bg-gradient-to-t from-[#f9f9f9] to-transparent"></div>

                {/* Content Wrapper */}
                <div className="absolute top-[-26px] flex h-full w-screen justify-center">
                  <div className="relative h-auto origin-top overflow-hidden rounded-full">
                    {/* Text Layer */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="opacity-100">
                        <span className="cursor-pointer text-center font-Montserrat text-sm">
                          Let's Get Started!
                        </span>
                      </div>
                    </div>

                    {/* Video Background */}
                    <div className="opacity-20 w-52 h-16">
                      <div id="portfolio" className="h-full w-full">
                        <video
                          src="/video/portfolio-demo.mp4"
                          className="w-full h-full"
                          preload="auto"
                          autoPlay
                          muted
                          loop
                        ></video>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Blur effect with whitish overlay for small screens */
        @media (max-width: 640px) {
          .bg-blur-wrapper {
            position: relative;
          }

          .bg-blur img {
            filter: blur(4px);
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
          }

          .bg-blur-wrapper::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(255, 255, 255, 0.4); /* Whitish overlay */
            z-index: 1;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
