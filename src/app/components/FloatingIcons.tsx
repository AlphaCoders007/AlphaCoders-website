import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "../Styles.css/FloatingIcons.module.css";

const ICON_SIZE = 80;

const FloatingIcons: React.FC = () => {
  const iconContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (iconContainerRef.current) {
      const icons = iconContainerRef.current.querySelectorAll(`.${styles.icon}`);

      icons.forEach((icon) => {
        // Initial random position within the viewport
        gsap.set(icon, {
          x: `${gsap.utils.random(0, 100)}vw`, // Random X within the viewport
          y: `${gsap.utils.random(0, 100)}vh`, // Random Y within the viewport
          scale: gsap.utils.random(0.8, 1.5), // Random scale for depth
          opacity: gsap.utils.random(0.7, 1), // Random opacity for natural feel
          rotation: gsap.utils.random(-15, 15), // Slight tilt for realism
        });

        // Create a timeline for infinite linear motion
        gsap.timeline({ repeat: -1 })
          .to(icon, {
            x: `+=${gsap.utils.random(-20, 20)}vw`, // Drift horizontally
            y: `+=${gsap.utils.random(-20, 20)}vh`, // Drift vertically
            rotation: gsap.utils.random(-20, 20), // Slight rotation change
            scale: gsap.utils.random(0.9, 1.5), // Scale subtly changes during motion
            opacity: gsap.utils.random(0.6, 1), // Slight opacity fluctuations
            duration: gsap.utils.random(10, 20), // Smooth, slow motion
            ease: "power1.inOut", // Smooth ease for floating feel
          })
          .to(icon, {
            x: `${gsap.utils.random(0, 100)}vw`, // Reset position randomly within viewport
            y: `${gsap.utils.random(0, 100)}vh`,
            rotation: gsap.utils.random(-30, 30),
            scale: gsap.utils.random(0.8, 1.5),
            opacity: gsap.utils.random(0.7, 1),
            duration: gsap.utils.random(10, 20),
            ease: "power1.inOut",
          });
      });
    }
  }, []);

  const iconsArray = [
    "docker", "figma", "tailwind-css", "python", "typescript", "javascript",
    "kotlin", "java", "adobe-xd", "react", "ai", "adobe-illustrator", "2",
    "flutter", "github", "photoshop", "angular"
  ];

  const allIcons = [...iconsArray, ...iconsArray];

  return (
    <div className={styles.floatingIconsContainer} ref={iconContainerRef}>
      {allIcons.map((icon, index) => (
        <div
          key={index}
          className={`${styles.icon} ${styles[`icon${icon.charAt(0).toUpperCase() + icon.slice(1)}`]}`}
        >
          <img
            src={`icons/${icon}.png`}
            alt={`${icon} Logo`}
            width={ICON_SIZE}
            height={ICON_SIZE}
            className={styles.iconImage}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;