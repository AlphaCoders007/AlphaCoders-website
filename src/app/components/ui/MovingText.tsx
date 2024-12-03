"use client";

import React from "react";

const CircularMovingText: React.FC = () => {
  const text = "VIEW OUR PROJECTS ";
  const radius = 40; 
  const containerRadius = 50; 

  return (
    <div
      className="relative block rounded-full bg-[#F2F2F2] transition-all hover:scale-110 animate-circle"
      style={{ width: `${containerRadius * 2}px`, height: `${containerRadius * 2}px` }}
    >
      {/* The container for the text that rotates */}
      <svg
        height={`${containerRadius * 2}px`}
        width={`${containerRadius * 2}px`}
        className="text-[10px] tracking-[1.5px] fill-gray-700 font-Montserrat font-light"
      >
        {/* Define the circular path for the text */}
        <defs>
          <path
            id="circle-path"
            d={`M ${containerRadius}, ${containerRadius} m -${radius}, 0 a ${radius},${radius} 0 1,1 ${
              radius * 2
            },0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
            fill="transparent"
          />
        </defs>
        <text>
          <textPath
            href="#circle-path"
            startOffset="50%"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            VIEW OUR RECENT PROJECTS
          </textPath>
        </text>
      </svg>

      {/* The arrow SVG stays fixed at the center */}
      <span className="absolute inset-0 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36 36"
          fill="none"
          className="w-6 h-6"
        >
          <path
            fill="url(#service_arrow_color)"
            fillRule="evenodd"
            d="M35.892.81H2.108v5.631h24.171L.941 31.78l3.982 3.982L30.26 10.423v24.172h5.63V.81Z"
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