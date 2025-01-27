import React from "react";
import { Vortex } from "../UI/vortexUI";

export function VortexDemo() {
  return (
    <div className="w-screen h-screen  m-0 p-0 overflow-hidden ">
      <Vortex
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="dark:text-textcolor-yellow text-textcolor-lightcolor text-6xl md:text-8xl font-thicccboi text-center">
          We Create
        </h2>
        <p className="dark:text-white text-black text-sm md:text-2xl max-w-6xl font-bold font-thicccboi mt-6 text-center">
          Our expertise lies in building what you dream. With cutting-edge
          technologies, robust engineering, and meticulous execution, we bring
          your ideas into reality. From software solutions to digital platforms,
          we deliver with precision and excellence.
        </p>
      </Vortex>
    </div>
  );
}
