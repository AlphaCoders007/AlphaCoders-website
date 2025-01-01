// "use client";

// // import { motion,  } from "framer-motion";
// // import { useState,  useRef } from "react";
// // import { AuroraBackground } from "./ui/aurora-background";
// // import { QueueWords } from "./QueueWords";
// // import StatsCard from "./StatsCard";
// // import { TextRevealByLine } from "./ui/textrevealbyline";

// const cardsTabs = [
//   { label: "We Imagine", text: "Where ideas are born " },
//   { label: "We Design", text: "Transform vision into form" },
//   { label: "We Create", text: "Building ideas to life" },
// ];

// export function Whatwedo() {
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const [firstRevealComplete, setFirstRevealComplete] = useState(false);
//   const [secondRevealComplete, setSecondRevealComplete] = useState(false);
//   const handleFirstRevealComplete = () => {
//     setFirstRevealComplete(true);
//   };

//   const handleSecondRevealComplete = () => {
//     setSecondRevealComplete(true);
//   };

//   return (
//     <AuroraBackground className="  z-20"> 
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{
//           delay: 0.3,
//           duration: 1.5,
//           ease: "easeInOut",
//         }}
//         className="relative flex flex-col gap-2  lg:gap-8 items-center justify-center px-6 py-16 text-white w-full overflow-hidden"
//       >
//         <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center leading-tight tracking-wide lg:px-12 sm:px-6 md:px-8">
//           <QueueWords />
        
//         </div>

//       <div className="flex flex-col lg:flex-col-reverse w-full gap-4 sm:gap-6 lg:gap-8">
//         <motion.div
//           ref={sectionRef}
//           className="relative overflow-hidden"
//           style={{
//             transition: "height 2s ease-in-out",
//           }}
//         >
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{
//               duration: 5,
//             }}
//             className=" max-w-5xl mx-auto text-lg leading-8 text-center w-full min-h-[40vh] flex flex-col gap-10 py-12 items-center"
//           >
//             {/* <TextRevealByLine
//               text="LET'S BUILD YOUR DREAM TOGETHER"
//               textColor="text-white"
//               fontSize="2xl sm:text-4xl"
//               className="animated-text font-Montserrat"
//               onAnimationComplete={handleFirstRevealComplete}
//             /> */}
//             <p className="text-sm sm:text-4xl font-thicccboi text-white">LET'S BUILD YOUR DREAM TOGETHER</p>

//               <TextRevealByLine
//                 text="Whether you're dreaming of a groundbreaking application or a transformative platform, AlphaCoders is here to guide you every step of the way. Imagination is just the beginning. Let us design and create something extraordinary with you."
//                 textColor="text-white"
//                 fontSize="text-sm sm:text-4xl"
//                 className="animated-text font-thicccboi"
//                 onAnimationComplete={handleSecondRevealComplete}
//               />
//           </motion.div>
//         </motion.div>

//         <div className="flex flex-col sm:flex-row justify-center gap-8 items-center w-full">
//           {cardsTabs.map((card, i) => (
//             <StatsCard
//               key={i}
//               label={card.label}
//               text={card.text}
//               className="flex flex-col items-center bg-white/10 text-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl w-full h-[10vh] sm:h-[20vh] max-w-sm"
//             />
//           ))}
//         </div>
//       </div>
//       </motion.div>
//     </AuroraBackground>
//   );
// }