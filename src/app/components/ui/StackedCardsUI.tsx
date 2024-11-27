"use client";
import CircularMovingText from "./MovingText";
import React from "react";
import { motion } from "framer-motion";
import { cards } from "../../data/StackCardsData";

const StackedCardsUI: React.FC = () => {
  return (
    <div className="container bg-white mx-auto w-[90%]">
      <ul className="grid grid-cols-1 gap-3 lg:gap-10 bg-white py-20">
        {cards.map((card, index) => (
          <li key={index} className="sticky top-20 pt-6">
            <div
              className={`flex flex-col lg:flex-row ${
                card.reversed ? "lg:flex-row-reverse" : ""
              } items-center h-[87vh] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl shadow-lg overflow-hidden`}
            >
              {/* Image Section */}
              <motion.div
                className="lg:w-1/2 w-full h-[50%] lg:h-full overflow-hidden relative"
                whileInView={{
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
                exit={{
                  scale: 1.0,
                  transition: { duration: 0.5 },
                }}
                viewport={{
                  once: false,
                  amount: 0.3,
                }}
              >
                <img
                  src={card.imagePath}
                  alt={card.title}
                  className="w-full h-full object-cover transform transition-transform duration-500"
                />
              </motion.div>

              {/* Text Section */}
              <div className="lg:w-1/2 w-full h-[50%] lg:h-full flex flex-col p-4 lg:p-8 gap-2">
                {/* Title Section with margin-top */}
                <h2 className="text-xs px-9 sm:text-lg md:text-2xl lg:text-3xl text-white font-thin mb-2 sm:mb-4">
                  {card.title}
                </h2>

                {/* Technology Section */}
                <div className="flex flex-wrap px-9 gap-1 sm:gap-2 md:gap-3 lg:gap-3">
                  {card.technology.map((tech, i) => (
                    <div
                      key={i}
                      className="bg-white text-gray-600 p-2 sm:p-3 md:p-4 rounded-full text-xs sm:text-sm md:text-lg"
                    >
                      {tech}
                    </div>
                  ))}
                </div>

                {/* Description Section */}
                <p className="text-white px-9 mt-2 sm:mt-4 md:mt-5 font-mono text-sm sm:text-base md:text-lg">
                  {card.description}
                </p>
                
                {/* Circular Moving Text */}
                <div className="py-2 sm:py-3 md:py-4">
                  <CircularMovingText />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StackedCardsUI;
