"use client";

import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { cards } from "../../data/StackCardsData";
const StackedCardsUI: React.FC = () => {

  return (
    <div className="container bg-white mx-auto w-[90%]">
      <ul className="grid grid-cols-1 gap-10 bg-white">
        {cards.map((card, index) => (
          <li
            key={index}
            className={`sticky top-0 pt-[${1.5 * (index + 1)}em]`}
            style={{ paddingTop: `${1.5 * (index + 1)}em` }}
          >
            <div
              className={`flex flex-col lg:flex-row ${
                card.reversed ? "lg:flex-row-reverse" : ""
              } items-center h-[87vh] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-[50px] shadow-lg overflow-hidden`}
            >
              <motion.div
                className={`lg:w-1/2 w-full h-[50%] lg:h-full overflow-hidden relative`}
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
              <div className="lg:w-1/2 w-full h-[50%] lg:h-full flex flex-col p-6 lg:p-12 gap-7">
                <h2 className="text-4xl lg:text-6xl  text-white font-thin">{card.title}</h2>
                <div className="mt-4 flex flex-wrap gap-4">
                  {card.technology.map((tech, i) => (
                    <div
                      key={i}
                      className="bg-white text-gray-600  p-3 rounded-full text-center text-xl"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <p className="text-white mt-4 font-mono text-xl">{card.description}</p>

               
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StackedCardsUI;
