import Image from "next/image";
import React from "react";
import { Timeline } from "@/app/components/ui/ProcessUI";

export function Process() {
  const data = [
    {
      title: "Understand the problem",
      content: (
        <div>
          <p className="text-black  text-xs md:text-xl font-normal mb-8">
          •	Begin by identifying and analyzing the core challenges faced by the client or end-users.
          </p>
          <p className="text-black  text-xs md:text-xl font-normal mb-8">
          •	Conduct stakeholder interviews to gather requirements and expectations.
          </p>
          <p className="text-black  text-xs md:text-xl font-normal mb-8">
          •	Map out the goals and objectives to ensure alignment with the client’s vision.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/understandproblem.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
           
           
        
          </div>
        </div>
      ),
    },
    {
      title: "Brainstorm Innovative Solutions",
      content: (
        <div>
          <p className="text-black  text-xs md:text-xl font-normal mb-8">
          •	Organize creative ideation sessions involving cross-functional teams.
          </p>
          <p className="text-black  text-xs md:text-xl font-normal mb-8">
          •	Use tools like mind mapping, design thinking frameworks, and brainstorming templates to generate diverse ideas.
          </p>
          <p className="text-black  text-xs md:text-xl font-normal mb-8">
          •	Narrow down ideas through feasibility analysis and prioritize solutions that offer maximum impact.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/brainstorm.jpeg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
           
           
          </div>
        </div>
      ),
    },
    {
      title: "Validate with Research and Feedback",
      content: (
        <div>
          <p className="text-black  text-xs md:text-xl font-normal mb-8">
          •	Test initial concepts through prototypes or mock-ups to gather early feedback.
          </p>
          <p className="text-black  text-xs md:text-xl font-normal mb-8">
          •	Perform market research to compare solutions with industry benchmarks and competitor offerings.
          </p>
          <p className="text-black  text-xs md:text-xl font-normal mb-8">
          •	Collect user feedback through surveys, focus groups, and usability tests to refine ideas.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/validate.jpeg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
           
           
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className=" relative w-full  z-20">
      <Timeline data={data} />
    </div>
  );
}
