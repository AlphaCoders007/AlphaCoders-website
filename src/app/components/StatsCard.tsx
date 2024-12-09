import React from "react";

interface StatsCardProps {
  label: string;
  text: string;
  className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  label,
  text,
  className = "",
}) => {
  return (
    <div
      className={`flex w-full  flex-col items-center justify-center rounded-[1.5rem] border border-white/20 bg-white/10 text-center font-montserrat ${className}`}
    >
      <h3 className="font-bold bg-gradient-to-r from-[#bf00ff] to-[#ff5633] text-transparent bg-clip-text text-3xl sm:text-4xl">
        <span>{label}</span>
      </h3>
      <p className="font-medium text-white text-sm sm:text-base">
        {text}
      </p>
    </div>
  );
};

export default StatsCard;
