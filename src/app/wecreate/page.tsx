import React from "react";

import NewComponent from "../components/NewComponent";
import { VortexDemo } from "./components/vortex";
import { Whatweoffer } from "./components/whatweoffer";
import Methodologies from "./components/methodologies";
import TechnologiesDesign from "./components/technologies";
import { Lamp } from "./components/lamp";
import { WobbleCardMain } from "./components/wobblecard";

function page() {
  return (
    <div>
      <div className=" relative flex flex-col z-30  overflow-hidden font-thicccboi">
        
        
        <VortexDemo />
        {/* <Lamp /> */}
        <Whatweoffer />
        
        <Methodologies />
        <TechnologiesDesign />
    </div>
      <NewComponent />
    </div>
  );
}

export default page;
