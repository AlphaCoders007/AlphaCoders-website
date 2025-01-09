import React from "react";

import NewComponent from "../components/NewComponent";
import { VortexDemo } from "./components/vortex";
import { Whatweoffer } from "./components/whatweoffer";
import {Methodologies} from "./components/methodologies";
import TechnologiesDesign from "./components/technologies";
import { Metadata } from "next";


export const metadata: Metadata = { 
  title:"We Create ",
  description: "We create innovative digital solutions and web development services to help you think outside the box and transform your business.",  
}



function page() {
  return (
    <div>
      <div className=" relative flex flex-col z-30  overflow-hidden font-thicccboi">
        
        
        <VortexDemo />
        <Whatweoffer />
        
        <Methodologies />
        <TechnologiesDesign />
    </div>
      <NewComponent />
    </div>
  );
}

export default page;
