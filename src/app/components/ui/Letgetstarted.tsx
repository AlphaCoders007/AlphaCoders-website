import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ExpandableButtonProps {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
}

const Letgetstarted: React.FC<ExpandableButtonProps> = ({
  isExpanded,
  setIsExpanded,
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [showText, setShowText] = useState(true); // Initially show the text
  const [showVideo, setShowVideo] = useState(false); // Initially hide the video

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const button = buttonRef.current;

    if (button) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => {
            setIsExpanded(self.progress === 1);
            setShowText(self.progress < 0.1);
            setShowVideo(self.progress >= 0.1); 
          },
        },
      });

      timeline.fromTo(
        button,
        {
          width:"150px",
          height : "50px",
          borderRadius: "45%",
        },
        {
          width: "100vw",
          height: "100vh",
          borderRadius: "0%",
          backgroundColor: "#000",
          duration: 1.5,
          ease: "power2.inOut",
        }
      );
    }
  }, [setIsExpanded]);

  return (
    <div
      ref={buttonRef}
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center overflow-hidden origin-top h-fit py-2"
      style={{
        // width: "100px",
        // height: "100px", 
        zIndex: 10, 
      }}
    >
      {showText && (
        <span className="text-black font-medium text-lg opacity-100 transition-opacity size-full items-center  flex duration-300 ease-out justify-center z-20 bg-gray-200">
          Let’s Get Started
        </span>
      )}

      {/* Conditionally render video */}
      {showVideo && (
        <video
          src="video2.mp4"
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover transition-opacityduration-300"
          style={{
            opacity:  1 ,
            zIndex: 1,
            pointerEvents: "auto"
          }}
        />      
        )}
    </div>
  );
};

export default Letgetstarted;