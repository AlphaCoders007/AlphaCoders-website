'use client'

import React, { useEffect, useState } from "react"

const LetsGetStartedSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`transition-all duration-500 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
      }`}
    >
      <div className="relative h-16">
        <div className="sticky top-0 h-16 w-64">
          {/* Gradient Overlay */}
          <div className="absolute inset-x-0 top-0 h-4 w-full bg-gradient-to-t from-[#f9f9f9] to-transparent"></div>

          {/* Content Wrapper */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-16 w-64 overflow-hidden rounded-full bg-black/20">
              {/* Text Layer */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <button className="text-center font-sans text-sm text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                  Let's Get Started!
                </button>
              </div>

              {/* Video Background */}
              <div className="absolute inset-0 opacity-20">
                <video
                  src="/video2.mp4"
                  className="h-full w-full object-cover"
                  preload="auto"
                  autoPlay
                  muted
                  loop
                  aria-hidden="true"
                >
                  <track kind="captions" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LetsGetStartedSection