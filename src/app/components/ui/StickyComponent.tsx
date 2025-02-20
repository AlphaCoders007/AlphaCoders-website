"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import CircularMovingText from "./CircularMovingButton"

interface StickyComponentProps {
  imageSrc: string
  title: string
  subtitle: string
  description: string
  isEven: boolean
  technologies: string[]
  path: string
  color: string
}

const StickyComponent: React.FC<StickyComponentProps> = ({
  imageSrc,
  title,
  path,
  description,
  isEven,
  technologies,
  color,
}) => {



  return (
    <div className="sticky top-0 z-20 flex h-screen items-start justify-center px-4 sm:px-6 md:px-8">
      <div className="h-full origin-top pt-16 sm:pt-20 md:pt-28 pb-8 w-full max-w-7xl mx-auto">
        <div className="relative h-full overflow-hidden">
          <div
            className={`flex h-full w-full flex-col overflow-hidden rounded-3xl ${color} ${
              isEven ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            <div className="relative h-2/5 sm:h-1/2 overflow-hidden lg:h-full lg:w-1/2">
              <div
                className="h-full w-full"
               
              >
                <Image
                  src={`/${imageSrc}`}
                  alt="Project image"
                  loading="lazy"
                  decoding="async"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    position: "absolute",
                    color: "transparent",
                  }}
                />
              </div>
            </div>

            <div className="relative h-3/5 sm:h-1/2 p-6 sm:p-8 font-thicccboi text-white lg:h-full lg:w-1/2 lg:p-12">
              <div className="flex justify-between items-start mb-6 sm:mb-8">
                <h2 className="font-bold text-5xl sm:text-3xl md:text-6xl lg:text-5xl max-w-[70%]">{title}</h2>
                <Link href={path} className="focus:outline-none">
                  <CircularMovingText />
                </Link>
              </div>
              <div className="mb-6 sm:mb-8">
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center bg-[#F5F5F5] px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-xl"
                    >
                      <p className="text-gray-700">{tech}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pr-4 sm:pr-8">
                <p className="text-sm sm:text-3xl lg:text-lg">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StickyComponent

