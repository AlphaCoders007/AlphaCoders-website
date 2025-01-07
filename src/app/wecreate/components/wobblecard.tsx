"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../UI/wobblecardUI";

export function WobbleCardMain() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full font-thicccboi">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-textcolor-yellow text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] ">
          Agile Development
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          We use Agile development to deliver software in short, iterative cycles, allowing us to respond quickly to changes and ensure high-quality results. This approach ensures flexibility, continuous improvement, and frequent updates, ensuring the final product meets your evolving needs.
          </p>
        </div>
      
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80 text-textcolor-yellow  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] ">
        DevOps Integration
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Our DevOps practices enhance collaboration between development and operations, enabling faster and more reliable software delivery. By automating testing, building, and deployment through CI/CD, we reduce errors, accelerate release cycles, and maintain consistency and quality.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-textcolor-yellow  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] ">
          User-Centered Design
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          With User-Centered Design, we prioritize the needs and behaviors of users throughout the development process. This ensures that the final product is intuitive, accessible, and delivers the best user experience, ultimately driving satisfaction and adoption.
          </p>
        </div>
      
      </WobbleCard>
    </div>
  );
}
