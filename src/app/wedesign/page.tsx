import React from "react";
import NewComponent from "../components/NewComponent";
import { Sparkles } from "./components/Sparkles";
import { StickyScrollReveal } from "./components/StickyScroll";
import { BentoGrid } from "./components/BentoGrid";
import { Whatweoffer } from "./components/whatweoffer";
import { Metadata } from "next";

export const metadata: Metadata = { 
  title:"We Design",
  description: "We design innovative digital solutions and web development services to help you think outside the box and transform your business.",  
}

function page() {
  return (
    <div>
      <div className=" relative flex flex-col z-30  overflow-hidden font-thicccboi bg-background-light dark:bg-background-dark">
        <Sparkles />
       <StickyScrollReveal />
       <Whatweoffer />
       <BentoGrid />
    </div>
      <NewComponent />
    </div>
  );
}

export default page;
