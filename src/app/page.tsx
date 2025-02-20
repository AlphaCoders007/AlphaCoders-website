"use client";

import React from "react";
import dynamic from "next/dynamic";
import VerticalStack from "./components/VerticalStack";
import NewComponent from "./components/NewComponent";
import LetsGetStartedSection from "./components/ui/LetgetstartedUI";
import { GoogleGeminiEffectDemo } from "./components/googlegeminieffect";
import { Whatweoffer } from "./components/WhatWeOffer";
import { TextGenerate } from "./components/TextGenerate";
const ParallaxSection = dynamic(() => import("./components/ParallexSection"), {
  ssr: false,
});



const data1 = [
  {
    category: "Ideation Workshops",
    title: "A collaborative session to refine your ideas simply means working together with others to improve or clarify your thoughts. It could be brainstorming, reviewing, or tweaking a concept to make it better",
    src: "/Ideationworkshop.jpg",
  },
  {
    category: "Market Research",
    title: "Insights to align your vision with market needs means gathering and analyzing information to ensure that your ideas, products, or services match what the market actually wants.",
    src: "/marketresearch.jpg",
  },
  {
    category: "Concept Validation",
    title: "A feasibility analysis is a structured evaluation to determine whether an idea, project, or business plan is practical and likely to succeed. It helps in identifying potential risks, required resources, and overall viability before investing time and money.",
    src: "/conceptvalid.jpg",
  },
];
const data2 = [
  {
    category: "Empathy for Users",
    title: "Understanding the user is at the heart of our design process. We ensure every design decision reflects their needs, challenges, and expectations.",
    src: "/users.jpg",

  },
  {
    category: "Innovation through Simplicity",
    title: "Simplicity is the key to impactful designs. We strive to create clean, streamlined experiences that are intuitive and easy to navigate.",
    src: "/research.jpg",

  },
  {
    category: "Alignment with Your Brand Identity",
    title: "Every design we create aligns with your brand’s personality, values, and goals. Consistency in visuals and messaging builds trust and recognition.",
    src: "/validation.jpg",

  },
];
const Page: React.FC = () => {
  return (
    <>
      <GoogleGeminiEffectDemo />

      <div className=" relative bg-background-light bg-transparent max-h-lvh z-30">
        <LetsGetStartedSection/>
      </div>

      {/* <HeroParallaxDemo /> */}
      <div className="bg-background-light relative z-30 w-full h-[70vh] flex items-center justify-center ">
        <div className="text-5xl w-[75vw]  text-center justify-center">
          <TextGenerate />
        </div>
        {/* <FocusCards /> */}
      </div>
      <div>
        <Whatweoffer data={data1} title="What We Offer " />
        <Whatweoffer data={data2} title="Our Design Philosophy" />
      </div>
      <div className="relative bg-background-light  z-20">
        <VerticalStack />
      </div>
      <ParallaxSection />
      <NewComponent />
    </>
  );
};

export default Page;
