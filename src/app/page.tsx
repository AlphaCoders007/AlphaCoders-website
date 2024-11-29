import React from "react";
import Hero from "./components/Hero";
import { Whatwedo } from "./components/Whatwedo";

import ContactSection from "./components/ContactSection";

import StackedCards from "./components/StackedCards";
import { ParallexSection } from "./components/ParallexSection";


function Page() {

  
  return (
    <div>
      
      <Hero />
      <Whatwedo />
      <StackedCards />
      <ParallexSection />
      <ContactSection />
    </div>
  );
}

export default Page;
