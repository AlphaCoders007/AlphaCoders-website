import { cn } from "@/app/lib/utils";

export const BentoGridUI = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-full p-5 sm:p-20 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl  duration-200 shadow-input dark:shadow-none p-4 bg-background-light transition-colors dark:border-white/[0.2] border-black/[0.2] border justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition-colors duration-200 bg-background-light">
        {icon}
        <div className="font-sans font-bold  mb-2 mt-2 dark:text-textcolor-yellow text-textcolor-lightcolor">
          {title}
        </div>
        <div className="font-sans font-normal text-xs dark:text-white text-black">
          {description}
        </div>
      </div>
    </div>
  );
};
