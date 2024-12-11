import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "../Styles.css/FloatingIcons.module.css";

// Define a constant for the icon size
const ICON_SIZE = 80;

const FloatingIcons: React.FC = () => {
  const iconContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (iconContainerRef.current) {
      const icons = iconContainerRef.current.querySelectorAll(`.${styles.icon}`);

      icons.forEach((icon) => {
        const startX = 15; // Start from the top left corner
        const startY = -10; // Start just above the viewport

        const driftX = gsap.utils.random(-20, 20); // Small horizontal drift
        const driftY = gsap.utils.random(5, 10); // Small vertical drift towards bottom-right
        const duration = gsap.utils.random(8, 12); // Longer fall duration for smoother motion

        gsap.timeline({ repeat: -1 })
          .set(icon, {
            x: `${startX}vw`, // Start from the top left corner
            y: `${startY}vh`, // Start just above the viewport
            opacity: 1,
            scale: 0.9, // Start smaller to grow a bit
          })
          .to(icon, {
            x: `${startX + driftX}vw`, // Drift horizontally (small drift to the right)
            y: `${startY + driftY}vh`, // Drift vertically towards the bottom-right
            rotation: gsap.utils.random(-15, 15), // Slight rotation for a more natural feel
            scale: 1, // Slight growth
            opacity: 0.9, // Slight opacity change
            duration,
            ease: "power1.out", // Smooth easing
          })
          .to(icon, {
            y: "80vh", // Settle into a gentle position
            x: `${startX + driftX + 10}vw`, // Adjust for a slight extra horizontal drift
            duration: 1.5,
            ease: "power2.inOut",
            scale: 1.05, // Slight scaling effect for smoothness
          })
          .to(icon, {
            y: "90vh", // Hover slightly above the final resting point
            opacity: 1, // Full opacity
            duration: 1.5,
            ease: "power2.inOut",
            scale: 1, // Reset to original size
            x: `${startX + driftX + 15}vw`, // Continue slight drift
          })
          .to(icon, {
            y: "120vh", // Exit the viewport gradually
            opacity: 0,
            duration: 2,
            ease: "power2.in",
            scale: 0.95, // Shrink a bit for the exit
            x: `${startX + driftX + 20}vw`, // Exit with a little more drift to the right
          });
      });
    }
  }, []);

  return (
    <div className={styles.floatingIconsContainer} ref={iconContainerRef}>
      <div className={`${styles.icon} ${styles.iconReact}`}>
        <img src="icons/docker.png" alt="React Logo" width={ICON_SIZE} height={ICON_SIZE} />
      </div>
      <div className={`${styles.icon} ${styles.iconPython}`}>
        <img src="icons/figma.png" alt="Python Logo" width={ICON_SIZE} height={ICON_SIZE} />
      </div>
      <div className={`${styles.icon} ${styles.iconNextjs}`}>
        <img src="icons/tailwind-css.png" alt="Next.js Logo" width={ICON_SIZE} height={ICON_SIZE} />
      </div>
      <div className={`${styles.icon} ${styles.iconJavascript}`}>
        <img src="icons/python.png" alt="JavaScript Logo" width={ICON_SIZE} height={ICON_SIZE} />
      </div>
      <div className={`${styles.icon} ${styles.iconNodejs}`}>
        <img src="icons/typescript.png" alt="Node.js Logo" width={ICON_SIZE} height={ICON_SIZE} />
      </div>
      <div className={`${styles.icon} ${styles.iconFlask}`}>
        <img src="icons/javascript.png" alt="Flask Logo" width={ICON_SIZE} height={ICON_SIZE} />
      </div>
      <div className={`${styles.icon} ${styles.iconMongodb}`}>
        <img src="icons/kotlin.png" alt="MongoDB Logo" width={ICON_SIZE} height={ICON_SIZE} />
      </div>
      <div className={`${styles.icon} ${styles.iconMysql}`}>
        <img src="icons/java.png" alt="MySQL Logo" width={ICON_SIZE} height={ICON_SIZE} />
      </div>
      <div className={`${styles.icon} ${styles.iconReactRouter}`}>
        <img src="icons/flutter.png" alt="React Router Logo" width={ICON_SIZE} height={ICON_SIZE} />
      </div>
    </div>
  );
};

export default FloatingIcons;
