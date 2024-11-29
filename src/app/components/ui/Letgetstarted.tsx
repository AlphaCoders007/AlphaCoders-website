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
  const [showText, setShowText] = useState(true); // Show text by default

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const button = buttonRef.current;

    if (button) {
      // GSAP timeline to handle button expansion and collapse
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;

            // Hide the text once scroll progress exceeds 10%
            if (progress >= 0.1) {
              setShowText(false);
            }

            // Show the text if scroll progress is less than 10%
            if (progress < 0.1) {
              setShowText(true);
            }

            // Update the expansion state based on scroll progress
            setIsExpanded(progress === 1); // Collapse when reaching the top again
          },
        },
      });

      // GSAP animation for button expansion/collapse
      timeline.fromTo(
        button,
        {
          width: "150px",
          height: "50px",
          borderRadius: "30px", // Rounded corners initially
          padding: "10px 20px", // Padding for better button size
        },
        {
          width: "100vw",
          height: "100vh",
          borderRadius: "30%", // Adjust border-radius when expanded
          duration: 1.5,
          ease: "power2.inOut",
        }
      );
    }
  }, [setIsExpanded]);

  // Handle the click to expand the button
  const handleClick = () => {
    if (buttonRef.current) {
      // Trigger the expansion animation on click
      gsap.to(buttonRef.current, {
        width: "100vw", // Expand width
        height: "100vh", // Expand height
        borderRadius: "30%", // Adjust the border-radius when expanded
        duration: 1.5,
        ease: "power2.inOut",
      });

      setIsExpanded(true); // Update state to reflect expansion
      setShowText(false); // Hide text immediately after the click
    }
  };

  return (
    <div
      ref={buttonRef}
      className="fixed bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10"
      onClick={handleClick} // Trigger expansion on click
    >
      {/* Video is shown immediately */}
      <video
        src="video2.mp4"
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover transition-opacity duration-300"
        style={{
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Text appears based on scroll progress */}
      {showText && (
        <span className="text-white font-medium text-lg flex items-center justify-center whitespace-nowrap transition-opacity duration-500 ease-out px-8 py-4 rounded-full bg-gradient-to-r from-[#bf00ff] to-[#ff5633] z-20 shadow-xl transform hover:scale-105 cursor-pointer">
          Let’s Get Started
        </span>
      )}
    </div>
  );
};

export default Letgetstarted;