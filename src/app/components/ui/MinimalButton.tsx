import React from "react";

const MagicalButton = () => {
  return (
    <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFFFFF_0%,#D3D3D3_50%,#FFD700_100%)]" />
    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#323437] px-3 text-sm font-thicccboi text-white backdrop-blur-3xl">
      View More
    </span>
  </button>
  );
};

export default MagicalButton;