"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { div } from "framer-motion/client";

const Model = () =>{
return(
  <div className="h-[100vh] b-[100vw]">
    <canvas>
      <mesh>
        <boxGeometry/>
        <meshBasicMaterial color={'red'}/>
      </mesh>
    </canvas>
  </div>
);
};
export default Model