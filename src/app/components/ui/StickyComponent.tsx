import React, { useState, useEffect } from "react";
import MinimalButton from "./MinimalButton";
import Link from "next/link";

interface StickyComponentProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
  isEven: boolean;
  technologies: string[];
  path: string;
  color: string;
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
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const zoomFactor = Math.max(-1, 1.4 + scrollY / 9000);
      setScale(zoomFactor);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 z-20 flex h-screen items-start justify-center px-[1rem] md:px-[2rem]">
      <div className="h-full origin-top pt-[7rem] pb-[2rem] w-full">
        <div className="relative h-full overflow-hidden">
          <div
            className={`flex h-full w-full flex-col overflow-hidden rounded-3xl md:flex-row ${color} ${
              isEven ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="relative h-1/2 overflow-hidden md:h-full md:w-1/2">
              <div
                className="h-full w-full"
                style={{
                  transform: `scale(${scale})`,
                  transition: "transform 0.7s easeInOut",
                }}
              >
                <img
                  alt="image"
                  loading="lazy"
                  decoding="async"
                  className="object-contain"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    aspectRatio: "4/3",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    color: "transparent",
                  }}
                  src={imageSrc}
                />
              </div>
            </div>

            <div className="relative h-1/2 p-[1rem] font-thicccboi text-white md:h-full md:w-1/2 md:p-[2.8rem]">
              <div className="opacity-100 transform-none">
                <h2 className="pt-[1rem] font-bold text-3xl sm:text-4xl">
                  {title}
                </h2>
              </div>
              <div className="opacity-100 transform-none">
                <div className="inline-flex flex-wrap items-start justify-start gap-1 sm:gap-2 py-[1rem] md:gap-3 md:py-[2rem]">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center bg-[#F5F5F5] px-2 py-1 rounded-[0.5rem] text-xs sm:text-base md:px-6 md:py-2"
                    >
                      <p className="text-gray-700">
                        {tech}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="opacity-100 transform-none">
                <p className="pr-10 text-verticalbodyclamped">{description}</p>
              </div>
            </div>
          </div>

          {/* Improved Arrow Button Positioning */}
          <Link
            href={path}
            className={`absolute bottom-80 sm:bottom-4  ${
              isEven ? "right-4 md:right-8" : "right-4 md:left-8"
            }  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`}
            aria-label={`View details for ${title}`}
          >
            <MinimalButton />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StickyComponent;

