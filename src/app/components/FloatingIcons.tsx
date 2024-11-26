"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SiReact, SiPython, SiNextdotjs, SiJavascript, SiNodedotjs, SiFlask, SiMongodb, SiReactrouter, SiMysql } from "react-icons/si";
import styles from "../Styles.css/FloatingIcons.module.css";

const FloatingIcons: React.FC = () => {
  const iconContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (iconContainerRef.current) {
      const icons = iconContainerRef.current.querySelectorAll(`.${styles.icon}`);

      icons.forEach((icon) => {
        const startX = gsap.utils.random(-20, 120); // Random starting x in vw
        const startY = gsap.utils.random(-20, -0); // Random starting y above viewport

        const driftX = gsap.utils.random(-20, 20); // Random x drift
        const duration = gsap.utils.random(6, 8); // Random fall duration

        gsap.timeline({ repeat: -1 })
          .set(icon, {
            x: `${startX}vw`,
            y: `${startY}vh`,
            opacity: 1,
          })
          .to(icon, {
            x: `${startX + driftX}vw`, // Drift horizontally
            y: "80vh", // Fall to 80% of the viewport
            rotation: gsap.utils.random(-45, 45), // Add random rotation
            scale: 1,
            opacity: 1,
            duration,
            ease: "power2.out",
          })
          .to(icon, {
            y: "60vh",
            duration: 1.5,
            ease: "elastic.out(1, 0.4)",
            scale: 1.1,
            
          })
          .to(icon, {
            y: "80vh",
            opacity: 1,
            duration: 1.5,
            ease: "power2.inOut",
            
            scale: 1,
          })
          .to(icon, {
            y: "120vh", // Exit the viewport
            opacity: 0,
            duration: 2,
            ease: "power2.in",
            scale: 0.9,
            boxShadow: "none",
          });
      });
    }
  }, []);

  return (
    <div className={styles.floatingIconsContainer} ref={iconContainerRef}>
      <div className={`${styles.icon} ${styles.iconReact}`}>
        <SiReact size={50} color="#61DAFB" />
      </div>
      <div className={`${styles.icon} ${styles.iconPython}`}>
        <SiPython size={50} color="#3776AB" />
      </div>
      <div className={`${styles.icon} ${styles.iconNextjs}`}>
        <SiNextdotjs size={50} color="#000000" />
      </div>
      <div className={`${styles.icon} ${styles.iconJavascript}`}>
        <SiJavascript size={50} color="#F7DF1E" />
      </div>
      <div className={`${styles.icon} ${styles.iconNodejs}`}>
        <SiNodedotjs size={50} color="#43853D" />
      </div>
      <div className={`${styles.icon} ${styles.iconFlask}`}>
        <SiFlask size={50} color="#000000" />
      </div>
      <div className={`${styles.icon} ${styles.iconMongodb}`}>
        <SiMongodb size={50} color="#47A248" />
      </div>
      <div className={`${styles.icon} ${styles.iconMysql}`}>
        <SiMysql size={50} color="#00758F" />
      </div>
      <div className={`${styles.icon} ${styles.iconReactRouter}`}>
        <SiReactrouter size={50} color="#CA4245" />
      </div>
    </div>
  );
};

export default FloatingIcons;
