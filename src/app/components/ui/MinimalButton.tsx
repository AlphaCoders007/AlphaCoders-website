import React from "react";

const MagicalButton = () => {
  return (
    <button className="relative inline-flex h-14 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-[#E2B714] focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300">
      {/* Gradient Ring */}
      <span className="absolute inset-0 -m-[3px] rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#E2B714_0%,#F5CB5C_50%,#E2B714_100%)] animate-[spin_5s_linear_infinite]" />
      {/* Button Content */}
      <span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-gray-900 px-10 py-3 text-sm font-semibold text-[#F5CB5C] shadow-2xl transition-all duration-300 hover:bg-[#1F1F1F] hover:shadow-xl">
        View More
      </span>
    </button>
  );
};

export default MagicalButton;