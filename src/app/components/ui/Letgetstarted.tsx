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
  const [showText, setShowText] = useState(true); // Controls text visibility

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
            // Set expanded state and control text visibility based on scroll position
            setIsExpanded(self.progress === 1);
            setShowText(self.progress < 0.5); // Hide text as it expands (after halfway)
          },
        },
      });

      // Animate the button growth and text fade-out
      timeline.fromTo(
        button,
        {
          width: "200px",
          height: "100px",
          borderRadius: "60px", // Rounded corners for the initial state
        },
        {
          width: "100vw",
          height: "100vh",
          borderRadius: "0%", // Full screen with no rounded corners when fully expanded
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
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center overflow-hidden"
      style={{
        width: "200px", // Initial width
        height: "100px", // Initial height
        borderRadius: "60px", // Rounded corners initially
        backgroundColor: "#c3195d", // Default button color
        zIndex: 10, // Ensures it's above the video
      }}
    >
      {/* Conditionally render text inside the button */}
      {showText && (
        <span className="text-white font-medium text-lg opacity-100 transition-opacity duration-300 ease-out">
          Let’s Get Started
        </span>
      )}

      {/* The video inside the button */}
      <video
        src="video.mp4"
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover transition-opacity duration-300 opacity-100"
        style={{ zIndex: 1 }}
      />
    </div>
  );
};

export default Letgetstarted;