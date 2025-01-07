"use client";
import { CardStack } from "../UI/cardstackUI";
import { cn } from "@/app/lib/utils";
export function CardStackMain() {
  return (
    <div className="h-[20rem] pt-10 flex items-center justify-center">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "",
    designation: "Custom Software Development",
    content: (
      <p>
        We provide <Highlight> Custom Software Development, </Highlight> building tailored solutions that
        are <Highlight> efficient, scalable, and aligned </Highlight> with your business goals. From
        concept to deployment, we ensure your ideas come to life seamlessly.
      </p>
    ),
  },
  {
    id: 1,
    designation: "End-to-End Engineering",
    content: (
      <p>
        Our End-to-End Engineering combines secure <Highlight> backend systems </Highlight> with
        intuitive <Highlight> frontend interfaces, creating unified, high-performing </Highlight>
        products that meet your technical and business needs.
      </p>
    ),
  },
  {
    id: 2,
    designation: "Quality Assurance",
    content: (
      <p>
        With a focus on Quality Assurance, we conduct rigorous testing to ensure
        your software is <Highlight>  reliable, secure, and performs flawlessly, </Highlight>  delivering a
        polished product ready for real-world success.
      </p>
    ),
  },
];
