"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";

export function LampsEffect() {
  return (
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
      </motion.h1>
    </LampContainer>
  );
}
