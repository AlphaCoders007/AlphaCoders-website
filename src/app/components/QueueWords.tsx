import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Imagine", "Design", "Create", "Are AlphaCoders"];

  return (
    <div className="flex justify-center items-center px-4">
      <div className="text-4xl  mx-auto font-normal text-neutral-600 dark:text-neutral-400 py-4">
        We
       
      </div>
      <FlipWords words={words} /> <br />
    </div>
  );
}
