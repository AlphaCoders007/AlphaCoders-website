import React from "react";
import { Cover } from "@/app/components/ui/cover";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import Image from "next/image";
import NewComponent from "../components/NewComponent";
import { Whatweoffer } from "../components/whatweoffer";
import { Process } from "../components/Process";
import { Technologies } from "../components/technologies";
import { Sparkles } from "../components/Sparkles";
import { StickyScrollReveal } from "../components/StickyScroll";
import { InfiniteMovingCards } from "../components/InfiniteMovingCards";
import { BentoGrid } from "../components/BentoGrid";
function page() {
  return (
    
      <div className=" relative flex flex-col z-30  overflow-hidden font-thicccboi">
        
        
        <Sparkles />
       <StickyScrollReveal />
       <InfiniteMovingCards />
       <BentoGrid />
      <NewComponent />
    </div>
  );
}

export default page;
