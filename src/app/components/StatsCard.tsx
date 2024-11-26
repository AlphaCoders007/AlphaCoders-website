import React from "react";

interface StatsCardProps{
  count: string;
  label: string;
  className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ count, label , className = ""  }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center rounded-[1.5rem] border border-g-grey bg-white/10 px-8 py-4 text-center font-montserrat sm:w-fit">
      <h3 className="font-semibold tracking-wider text-white text-sm sm:text-h3">
        <span>{count}</span>
      </h3>
      <p className="font-light tracking-wider text-white text-sm sm:text-body1">
        {label}
      </p>
    </div>
  );
};

export default StatsCard;
