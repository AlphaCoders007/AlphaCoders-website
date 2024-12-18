import React from "react";
import NewComponent from "../components/NewComponent";
import { Sparkles } from "../components/Sparkles";
import { StickyScrollReveal } from "../components/StickyScroll";
import { InfiniteMovingCards } from "../components/InfiniteMovingCards";
import { BentoGrid } from "../components/BentoGrid";
function page() {
  return (
    <div>
      <div className=" relative flex flex-col z-30  overflow-hidden font-thicccboi">
        <Sparkles />
       <StickyScrollReveal />
       <InfiniteMovingCards />
       <BentoGrid />
    </div>
      <NewComponent />
    </div>
  );
}

export default page;
