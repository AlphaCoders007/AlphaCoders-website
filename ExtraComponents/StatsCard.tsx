// import React from "react";

// interface StatsCardProps {
//   label: string;
//   text: string;
//   className?: string;
// }

// const StatsCard: React.FC<StatsCardProps> = ({
//   label,
//   text,
//   className = "",
// }) => {
//   return (
//     <div
//       className={`flex flex-col w-full max-w-[300px] items-center justify-center rounded-2xl border border-white/10 
//       bg-gradient-to-br from-[#1c1c1c] via-[#2a2a2a] to-[#1c1c1c] 
//       p-6 shadow-lg shadow-black/50 backdrop-blur-md text-center 
//       transform transition-all hover:scale-105 hover:shadow-xl hover:shadow-black/30 ${className}`}
//     >
//       <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#bf00ff] to-[#ff5633] text-transparent bg-clip-text">
//         {label}
//       </h3>
//       <p className="mt-2 text-sm sm:text-base font-medium text-gray-300">
//         {text}
//       </p>
//     </div>
//   );
// };

// export default StatsCard;