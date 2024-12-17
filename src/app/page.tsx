"use client";

import React from "react";
// import Hero from "./components/Hero";
// import { Whatwedo } from "./components/Whatwedo";
import { ParallexSection } from "./components/ParallexSection";
import VerticalStack from "./components/VerticalStack";
import NewComponent from "./components/NewComponent";
// import LetsGetStartedSection from "./components/ui/Letgetstarted";
import { GoogleGeminiEffectDemo } from "./components/googlegeminieffect";
// import { HeroParallax } from "./components/ui/hero-parallax";
import { HeroParallaxDemo } from "./components/heroparallax";
import Model from "./components/Mymodel";



const Page: React.FC = () => {
  return (
    <div>

      <GoogleGeminiEffectDemo />
      {/* <Hero /> */}
      {/* <div className=" relative bg-background-light max-h-lvh z-30">
        <LetsGetStartedSection />
      </div> */}
      {/* <Whatwedo /> */}

      <HeroParallaxDemo />
      <div className="relative bg-background-light  z-20">
        <VerticalStack />
      </div>
      <div className="">
        <Model />
      </div>
      <div className="h-screen">
        <Model />
      </div>
      <ParallexSection />


      <NewComponent />
    </div>
  );
};

export default Page;