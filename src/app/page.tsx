"use client";

import React from "react";
import dynamic from "next/dynamic";
import VerticalStack from "./components/VerticalStack";
import NewComponent from "./components/NewComponent";
import LetsGetStartedSection from "./components/ui/LetgetstartedUI";
import { GoogleGeminiEffectDemo } from "./components/googlegeminieffect";
import { LampsEffect } from "./components/LampsEffects";
import { FocusCards } from "./components/FocusCards";
const ParallaxSection = dynamic(() => import("./components/ParallexSection"), {
  ssr: false,
});
const Page: React.FC = () => {
  return (
    <div>
      <GoogleGeminiEffectDemo />

      <div className=" relative bg-background-light max-h-lvh z-30">
        <LetsGetStartedSection />
      </div>

      {/* <HeroParallaxDemo /> */}
      <div className="bg-background-light  relative z-30">

      <LampsEffect />
      <FocusCards/>
      </div>
      <div className="relative bg-background-light  z-20">
        <VerticalStack />
      </div>
      <ParallaxSection />
      <NewComponent />
    </div>
  );
};

export default Page;
