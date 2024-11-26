import React from "react";
import Hero from "./components/Hero";
import { Whatwedo } from "./components/Whatwedo";

import ContactSection from "./components/ContactSection";
import Carousel from "../../ExtraComponents/CarouselUI";
import Card from "../../ExtraComponents/UI/Carousel";
import Cards from "./components/Cards";
import StackedCards from "./components/StackedCards";
import { ParallexSection } from "./components/ParallexSection";


function Page() {

  
  return (
    <div>
      <Hero />
      <Whatwedo />
      <StackedCards />
      {/* < Cards/> */}
      {/* <Carousel items={itemsArray} /> */}
      
      <ParallexSection />
      <ContactSection />
    </div>
  );
}

export default Page;
