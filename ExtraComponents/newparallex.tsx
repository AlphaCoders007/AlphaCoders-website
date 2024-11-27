"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

// Sample high-resolution images
const teamMembers = [
  { img: "https://randomuser.me/api/portraits/men/1.jpg", name: "John Doe" },
  { img: "https://randomuser.me/api/portraits/men/2.jpg", name: "Jane Smith" },
  { img: "https://randomuser.me/api/portraits/men/3.jpg", name: "Mike Johnson" },
  { img: "https://randomuser.me/api/portraits/men/4.jpg", name: "Emily Brown" },
  { img: "https://randomuser.me/api/portraits/men/5.jpg", name: "Chris Lee" },
  { img: "https://randomuser.me/api/portraits/men/6.jpg", name: "Sarah Davis" },
  { img: "https://randomuser.me/api/portraits/men/7.jpg", name: "Alex Wilson" },
  { img: "https://randomuser.me/api/portraits/men/8.jpg", name: "Olivia Taylor" },
  { img: "https://randomuser.me/api/portraits/men/9.jpg", name: "Daniel Martin" },
  { img: "https://randomuser.me/api/portraits/men/10.jpg", name: "Sophia Anderson" },
  { img: "https://randomuser.me/api/portraits/men/11.jpg", name: "Ryan Thompson" },
  { img: "https://randomuser.me/api/portraits/men/12.jpg", name: "Emma White" },
]

interface ReviewCardProps {
  img?: string
  text?: string
  name?: string
}

const ReviewCard = ({ img, text, name }: ReviewCardProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      {text ? (
        <div className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 hidden md:block space-x-6">
          {text}
        </div>
      ) : (
        <div className="relative">
          <Image
            className="object-cover w-32 h-32 md:w-72 md:h-72 rounded-[1.5rem] shadow-lg hover:scale-105 transition-all duration-300"
            alt={`Team member ${name}`}
            src={img || ''}
            width={288}
            height={288}
          />
          <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-2 rounded-b-[1.5rem] text-center">
            {name}
          </div>
        </div>
      )}
    </div>
  )
}

export function ParallexSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const firstRowRef = useRef<HTMLDivElement>(null)
  const secondRowRef = useRef<HTMLDivElement>(null)
  const thirdRowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

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
        )

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
        )

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
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const firstRow = [
    { img: teamMembers[0].img, name: teamMembers[0].name },
    { img: teamMembers[1].img, name: teamMembers[1].name },
    { text: "Meet" },
    { img: teamMembers[2].img, name: teamMembers[2].name },
    { img: teamMembers[3].img, name: teamMembers[3].name },
  ]

  const secondRow = [
    { img: teamMembers[4].img, name: teamMembers[4].name },
    { text: "the" },
    { img: teamMembers[5].img, name: teamMembers[5].name },
    { img: teamMembers[6].img, name: teamMembers[6].name },
    { img: teamMembers[7].img, name: teamMembers[7].name },
  ]

  const thirdRow = [
    { img: teamMembers[8].img, name: teamMembers[8].name },
    { img: teamMembers[9].img, name: teamMembers[9].name },
    { text: "Crew!" },
    { img: teamMembers[10].img, name: teamMembers[10].name },
    { img: teamMembers[11].img, name: teamMembers[11].name },
  ]

  return (
    <section ref={sectionRef} className="relative flex flex-col items-center gap-12 py-16 md:py-24 overflow-hidden bg-gray-50">
      {/* Mobile-only heading */}
      <h2 className="md:hidden text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-6">
        Meet the Crew
      </h2>

      {/* First Row */}
      <div ref={firstRowRef} className="flex items-center justify-start w-full space-x-6 overflow-x-auto pb-6 px-6 md:justify-center md:space-x-12 md:overflow-x-visible">
        {firstRow.map((item, index) => (
          <ReviewCard key={index} {...item} />
        ))}
      </div>

      {/* Second Row */}
      <div ref={secondRowRef} className="flex items-center justify-start w-full space-x-6 overflow-x-auto pb-6 px-6 md:justify-center md:space-x-12 md:overflow-x-visible">
        {secondRow.map((item, index) => (
          <ReviewCard key={index} {...item} />
        ))}
      </div>

      {/* Third Row */}
      <div ref={thirdRowRef} className="flex items-center justify-start w-full space-x-6 overflow-x-auto pb-6 px-6 md:justify-center md:space-x-12 md:overflow-x-visible">
        {thirdRow.map((item, index) => (
          <ReviewCard key={index} {...item} />
        ))}
      </div>
    </section>
  )
}

