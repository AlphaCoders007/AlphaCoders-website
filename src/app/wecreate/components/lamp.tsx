"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../UI/lampUI";

export function Lamp() {
  return (
    <>
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        What We Offer
      </motion.h1>

       
      <div>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-lg font-thicccboi">
            Our offerings combine innovation, precision, and user-centered
            execution, ensuring that we deliver software solutions of the
            highest caliber. By focusing on the details and understanding your
            needs, we turn complex challenges into effective digital solutions
            that drive success and growth.
          </p>
        </div>
    
    </LampContainer>
       
    </>
  );
}
