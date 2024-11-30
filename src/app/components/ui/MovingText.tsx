"use client";

import React from "react";

const CircularMovingText: React.FC = () => {
  const text = "VIEW OUR PROJECTS ";
  const radius = 50;
  const animationDuration = 10;
  const containerRadius = 60;

  return (
    // <div className="relative w-full h-[100px] mx-auto py-2">
    //   <div
    //     className="absolute inset-0 flex justify-center items-center rounded-full"
    //     style={{
    //       width: `${containerRadius * 2}px`,
    //       height: `${containerRadius * 2}px`,
    //       backgroundColor: "#FFFFFF",
    //       position: "relative",
    //     }}
    //   >
    //     <button
    //       aria-labelledby="letsConnectDiv"
    //       className="group  size-fit overflow-hidden rounded-full bg-white transition-all p-[2rem] absolute z-10"
    //       style={{
    //         position: "absolute",
    //         top: "50%",
    //         left: "50%",
    //         transform: "translate(-50%, -50%)",
    //       }}
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 36 36"
    //         fill="none"
    //         className="transition-all duration-300 size-[1rem] md:size-[1.5rem]"
    //       >
    //         <path
    //           fill="url(#service_arrow_color)"
    //           fillRule="evenodd"
    //           d="M35.892.81H2.108v5.631h24.171L.941 31.78l3.982 3.982L30.26 10.423v24.172h5.63V.81Z"
    //           clipRule="evenodd"
    //         ></path>
    //         <defs>
    //           <linearGradient
    //             id="service_arrow_color"
    //             x1="0.086"
    //             x2="35.104"
    //             y1="25.3"
    //             y2="25.3"
    //             gradientUnits="userSpaceOnUse"
    //           >
    //             <stop stopColor="black"></stop>
    //             <stop offset="0.06" stopColor="#C306F1"></stop>
    //             <stop offset="0.53" stopColor="#E3318C"></stop>
    //             <stop offset="0.85" stopColor="#F74C4C"></stop>
    //             <stop offset="1" stopColor="#FF5633"></stop>
    //           </linearGradient>
    //         </defs>
    //       </svg>
    //     </button>

    //     <div
    //       className="absolute inset-0 flex justify-center items-center"
    //       style={{
    //         position: "absolute",
    //         animation: `rotateCircle ${animationDuration}s linear infinite`,
    //       }}
    //     >
    //       {text.split("").map((char, index) => {
    //         const angle = (index / text.length) * 360;
    //         const translateX = Math.cos((angle * Math.PI) / 180) * radius;
    //         const translateY = Math.sin((angle * Math.PI) / 180) * radius;

    //         return (
    //           <span
    //             key={index}
    //             className="absolute text-sm font-medium text-gray-800 py-2"
    //             style={{
    //               transform: `translate(${translateX}px, ${translateY}px)`,
    //               transformOrigin: "center",
    //             }}
    //           >
    //             {char}
    //           </span>
    //         );
    //       })}
    //     </div>
    //   </div>

    //   <style jsx>{`
    //     @keyframes rotateCircle {
    //       0% {
    //         transform: rotate(0deg);
    //       }
    //       100% {
    //         transform: rotate(360deg);
    //       }
    //     }
    //   `}</style>
    // </div>
    <div className="relative block rounded-full bg-[#F2F2F2] transition-all hover:scale-110 animate-circle">
    {/* The container for the text that rotates */}
    <svg height="150" width="150" className="text-[16px] tracking-[2px] fill-gray-700 font-Montserrat font-light">
      {/* Define the circular path for the text */}
      <defs>
        <path
          id="circle-path"
          d="M 75, 75 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0" // Circular path
          fill="transparent"
        />
      </defs>
  
      <text>
        <textPath href="#circle-path" startOffset="50%" textAnchor="middle" alignmentBaseline="middle">
          VIEW OUR RECENT PROJECTS
        </textPath>
      </text>
    </svg>
  
    {/* The arrow SVG stays fixed at the center */}
    <span className="absolute inset-0 left-1/2 top-1/2 size-[36px] -translate-x-1/2 -translate-y-1/2 z-20">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none" className="absolute">
        <path
          fill="url(#service_arrow_color)"
          fillRule="evenodd"
          d="M35.892.81H2.108v5.631h24.171L.941 31.78l3.982 3.982L30.26 10.423v24.172h5.63V.81Z" // This is the arrow path
          clipRule="evenodd"
        ></path>
        <defs>
          <linearGradient
            id="service_arrow_color"
            x1="0.086"
            x2="35.104"
            y1="25.3"
            y2="25.3"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#BF00FF"></stop>
            <stop offset="0.06" stopColor="#C306F1"></stop>
            <stop offset="0.53" stopColor="#E3318C"></stop>
            <stop offset="0.85" stopColor="#F74C4C"></stop>
            <stop offset="1" stopColor="#FF5633"></stop>
          </linearGradient>
        </defs>
      </svg>
    </span>
  </div>
  
  );
};

export default CircularMovingText;
