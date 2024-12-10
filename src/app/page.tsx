"use client";

import React from "react";
import Hero from "./components/Hero";
import { Whatwedo } from "./components/Whatwedo";
import { ParallexSection } from "./components/ParallexSection";
import VerticalStack from "./components/VerticalStack";
import NewComponent from "./components/NewComponent";
import LetsGetStartedSection from "./components/ui/Letgetstarted";

const Page: React.FC = () => {
  return (
    <div>
      
      <Hero />
      <div className=" relative bg-background-light z-30">
        <LetsGetStartedSection />
      </div>
      <Whatwedo />
      <div className="relative bg-background-light z-20">
        <VerticalStack />
      </div>

      <ParallexSection />

      <NewComponent />
    </div>
  );
};

export default Page;