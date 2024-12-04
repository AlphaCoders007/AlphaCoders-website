"use client"
import React from "react";
import Hero from "./components/Hero";
import { Whatwedo } from "./components/Whatwedo";
import { ParallexSection } from "./components/ParallexSection";
import VerticalStack from "./components/VerticalStack";

function Page() {

  return (
    <div>
      <Hero />
      <Whatwedo />
      <VerticalStack />
      <ParallexSection />
    </div>
  );
}

export default Page;