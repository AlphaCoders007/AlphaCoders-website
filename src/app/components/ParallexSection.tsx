"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  { img: "/dev0.jpeg" },
  { img: "/dev3.jpg" },
  { img: "/dev1.jpg" },
  { img: "/ogdev2.jpg" },
  { img: "/dev00.jpg" },
  { img: "/dev4.jpeg" },
  { img: "/dev5.jpeg" },
];

interface ReviewCardProps {
  img?: string;
  text?: string;
}

const ReviewCard = ({ img, text }: ReviewCardProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      {text ? (
        <div className="text-5xl md:text-8xl font-ThicccboiRegular text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 hidden md:block text-center">
          {text}
        </div>
      ) : (
        <div className="relative">
          <Image
            className="object-cover aspect-square w-24 md:w-48 lg:w-72 max-w-[100%] rounded-[16px] shadow-lg hover:scale-105 transition-all duration-300"
            alt="Team member"
            src={img || ""}
            width={288}
            height={288}
          />
        </div>
      )}
    </div>
  );
};  


export function ParallexSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);
  const thirdRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.fromTo(
          firstRowRef.current,
          { x: -200 },
          {
            x: 0,
            scrollTrigger: {
              trigger: firstRowRef.current,
              start: "top 80%",
              end: "bottom top",
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          secondRowRef.current,
          { x: 200 },
          {
            x: 0,
            scrollTrigger: {
              trigger: secondRowRef.current,
              start: "top 80%",
              end: "bottom top",
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          thirdRowRef.current,
          { x: -200 },
          {
            x: 0,
            scrollTrigger: {
              trigger: thirdRowRef.current,
              start: "top 80%",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      mm.add("(max-width: 767px)", () => {
        gsap.fromTo(
          firstRowRef.current,
          { x: -50 },
          {
            x: 0,
            scrollTrigger: {
              trigger: firstRowRef.current,
              start: "top 80%",
              end: "bottom top",
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          secondRowRef.current,
          { x: 50 },
          {
            x: 0,
            scrollTrigger: {
              trigger: secondRowRef.current,
              start: "top 80%",
              end: "bottom top",
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          thirdRowRef.current,
          { x: -50 },
          {
            x: 0,
            scrollTrigger: {
              trigger: thirdRowRef.current,
              start: "top 80%",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const firstRow = [
    { img: teamMembers[0].img },
    { img: teamMembers[1].img },
    { text: "United" },
    { img: teamMembers[2].img },
    { img: teamMembers[3].img },
    
  ];

  const secondRow = [
    { img: teamMembers[5].img },
    { text: "In" },
    { img: teamMembers[2].img },
    { img: teamMembers[3].img },
    { img: teamMembers[1].img },
  ];

  const thirdRow = [
    { img: teamMembers[1].img },
    { img: teamMembers[4].img },
    { text: "Innovation!" },
    { img: teamMembers[2].img },
    { img: teamMembers[6].img },
  ];

  return (
    <section
      ref={sectionRef}
      className="z-10 relative flex flex-col items-center gap-imgclamped pt-custom-padding overflow-hidden bg-background-light"
    >
      {/* Mobile-only heading */}
      <h2 className="md:hidden text-textclamped pb-[1rem] font-thhicboi font-regular text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 ">
        United In Innovation!
      </h2>

      {/* First Row */}
      <div
        ref={firstRowRef}
        className="flex items-center justify-center w-full gap-2 overflow-x-auto pb-6 px-6 md:justify-center md:space-x-12 md:overflow-x-visible"
      >
        {firstRow.map((item, index) => (
          <ReviewCard key={index} {...item} />
        ))}
      </div>

      {/* Second Row */}
      <div
        ref={secondRowRef}
        className="flex items-center justify-center w-full gap-2 overflow-x-auto pb-6 px-6 md:justify-center md:space-x-12 md:overflow-x-visible"
      >
        {secondRow.map((item, index) => (
          <ReviewCard key={index} {...item} />
        ))}
      </div>

      {/* Third Row */}
      <div
        ref={thirdRowRef}
        className="flex items-center justify-center w-full gap-2 overflow-x-auto pb-6 px-6 md:justify-center md:space-x-12 md:overflow-x-visible"
      >
        {thirdRow.map((item, index) => (
          <ReviewCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
} 