"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";

export function LampsEffect() {
  return (
    <div>

    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8  py-4 text-center text-2xl font-medium tracking-tight md:text-7xl text-white dark:text-textcolor-yellow "
      >
        LET&apos;S BUILD<br /> YOUR DREAM TOGETHER
        {/* <div>
      <p className=" text-base md:text-xl dark:text-white  text-center ">
        Whether you&apos;re dreaming of a groundbreaking application or a
        transformative platform, AlphaCoders is here to guide you every step of
        the way. Imagination is just the beginning—let us design and create
        something extraordinary with you.
      </p>
      </div> */}

        
      </motion.h1>
      {/* <div>
      <p className=" text-base md:text-xl dark:text-white  text-center ">
        Whether you&apos;re dreaming of a groundbreaking application or a
        transformative platform, AlphaCoders is here to guide you every step of
        the way. Imagination is just the beginning—let us design and create
        something extraordinary with you.
      </p>
      </div> */}
    </LampContainer>
      
    </div>
  );
}
