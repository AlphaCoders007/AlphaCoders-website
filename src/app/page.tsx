"use client"
import React from "react";
import Hero from "./components/Hero";
import { Whatwedo } from "./components/Whatwedo";
import ContactSection from "./components/ContactSection";
import { ParallexSection } from "./components/ParallexSection";
import VerticalStack from "./components/VerticalStack";


function Page() {

  return (
    <div>
      <Hero />
      <Whatwedo />
      <VerticalStack />
      <ParallexSection />
      <ContactSection />
    </div>
  );
}

export default Page;