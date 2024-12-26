"use client";

import React from "react";
import dynamic from "next/dynamic";
// import Hero from "./components/Hero";
// import { Whatwedo } from "./components/Whatwedo";
// import ParallexSection  from "./components/ParallexSection";
import VerticalStack from "./components/VerticalStack";
import NewComponent from "./components/NewComponent";
import LetsGetStartedSection from "./components/ui/Letgetstarted";
import { GoogleGeminiEffectDemo } from "./components/googlegeminieffect";
// import { HeroParallax } from "./components/ui/hero-parallax";
import { HeroParallaxDemo } from "./components/heroparallax";
const ParallaxSection = dynamic(() => import('./components/ParallexSection'), {
  ssr: false, // Disable SSR for this component
});
const Page: React.FC = () => {
  return (
    <div>
      <GoogleGeminiEffectDemo />
      {/* <LetsGetStartedSection /> */}

      {/* <Hero /> */}
      <div className=" relative bg-background-light max-h-lvh z-30">
        <LetsGetStartedSection />
      </div>
      {/* <Whatwedo /> */}

      <HeroParallaxDemo />
      <div className="relative bg-background-light  z-20">
        <VerticalStack />
      </div>
      <ParallaxSection />
      <NewComponent />
    </div>
  );
};

export default Page;
