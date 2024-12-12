import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "../Styles.css/FloatingIcons.module.css";

// Define a constant for the icon size
const ICON_SIZE = 100;

const FloatingIcons: React.FC = () => {
  const iconContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (iconContainerRef.current) {
      const icons = iconContainerRef.current.querySelectorAll(`.${styles.icon}`);

      icons.forEach((icon) => {
        // Adjust the starting X position to make icons denser on the left
        const startX = gsap.utils.random(5, 30); // More concentrated on the left side
        const startY = gsap.utils.random(-20, -2);

        const driftX = gsap.utils.random(-10, 10);
        const driftY = gsap.utils.random(-5, 5);
        const duration = gsap.utils.random(6, 10);

        gsap.timeline({ repeat: -1 })
          .set(icon, {
            x: `${startX}vw`,
            y: `${startY}vh`,
            opacity: 1,
            scale: 0.9,
            rotation: gsap.utils.random(-10, 10),
          })
          .to(icon, {
            x: `${startX + driftX}vw`,
            y: `${startY + driftY}vh`,
            rotation: gsap.utils.random(-15, 15),
            scale: 1.05,
            opacity: 0.9,
            duration,
            ease: "power1.out",
          })
          .to(icon, {
            y: "80vh",
            x: `${startX + driftX - 5}vw`,
            duration: 1.5,
            ease: "power2.inOut",
            scale: 1.05,
          })
          .to(icon, {
            y: "90vh",
            opacity: 1,
            duration: 1.5,
            ease: "power2.inOut",
            scale: 1,
            x: `${startX + driftX - 10}vw`,
          })
          .to(icon, {
            x: "-20vw",
            y: "100vh",
            opacity: 0,
            duration: 1.5,
            ease: "power3.in",
          });
      });
    }
  }, []);

  const iconsArray = [
    "docker", "figma", "tailwind-css", "python", "typescript", "javascript",
    "kotlin", "java", "adobe-xd", "react", "ai", "adobe-illustrator", "2",
    "flutter", "github", "photoshop", "angular", "golang", "ruby", "swift", "laravel",
    "elixir", "express", "redux", "graphql", "csharp", "scala", "postgreSQL", "jest",
    "typescript", "visual-studio-code", "electron", "aws", "azure", "rails", "go"
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
