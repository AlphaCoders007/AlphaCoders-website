"use client"
import React from "react";
import Hero from "./components/Hero";
import { Whatwedo } from "./components/Whatwedo";
import { ParallexSection } from "./components/ParallexSection";
import VerticalStack from "./components/VerticalStack";
import ConnectSection from "./components/ConnectSection";
import NewComponent from "./components/NewComponent"; // Import your new component
import LetsGetStartedSection from "./components/ui/Letgetstarted";

function Page() {

  return (
    <div>
      <div className="relative -mt-0 bg-background-light z-20">    
      <Hero />   
      </div>   
      {/* <LetsGetStartedSection />        */}
      <Whatwedo /> 
      <div className="relative -mt-0 bg-background-light z-20">     
      <VerticalStack />  
      </div>   
      <ParallexSection />
      <NewComponent />
    </div>
  );
}

export default Page;