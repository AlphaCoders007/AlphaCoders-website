"use client";

import React, { useEffect,useState , useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Letgetstarted from "./ui/Letgetstarted";
import NavBarSection from "./NavbarSection";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const [isExpanded, setIsExpanded] = useState(false); 


  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const heroElement = heroRef.current;

    if (heroElement) {
      ScrollTrigger.create({
        trigger: heroElement,
        start: "top top",
        end: "bottom top",
        
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
        <div className="absolute inset-0 sm:hidden">
          <img
            alt="Home"
            src="home-sm.webp"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="relative flex h-full flex-col justify-start mt-[140px]">
          <div className="flex w-full origin-center flex-col items-center gap-4 md:items-start md:pl-[40%]">
            <h1 className="text-center text-xl md:text-left">
              <span className="font-ThicccboiLight font-thin text-[#797979] lg:text-7xl">
                This is a Change, to a
              </span>
              <br />
              <span className="font-medium bg-gradient-to-r from-[#bf00ff] to-[#ff5633] bg-clip-text text-transparent font-ThicccboiRegular lg:text-7xl ">
                Future more Exciting.
              </span>
            </h1>
            <h2 className="text-left font-ThicccboiLight font-thin text-lg ">
              Websites, Mobile App, UI/UX &amp; Branding
            </h2>
          </div>
        </div>
      {/* <Letgetstarted isExpanded={isExpanded} setIsExpanded={setIsExpanded} /> */}

      </section>  
    </>
  );
};

export default Hero;