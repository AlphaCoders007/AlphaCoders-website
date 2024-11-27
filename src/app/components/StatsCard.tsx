import React from "react";

interface StatsCardProps {
  count: string;
  label: string;
  className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  count,
  label,
  className = "",
}) => {
  return (
    <div
      className={`flex w-full sm:w-72 md:w-56 flex-col items-center justify-center rounded-[1.5rem] border border-white/20 bg-white/10 px-6 py-4 text-center font-montserrat ${className}`}
    >
      <h3 className="font-bold text-white text-lg sm:text-xl">
        <span>{count}</span>
      </h3>
      <p className="font-semibold text-white text-sm sm:text-base">
        {label}
      </p>
    </div>
  );
};

export default StatsCard;
