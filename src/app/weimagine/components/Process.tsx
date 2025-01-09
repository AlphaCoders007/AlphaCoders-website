import Image from "next/image";
import React from "react";
import { Timeline } from "@/app/weimagine/UI/ProcessUI";

type StepData = {
  title: string;
  description: string[];
  image: {
    src: string;
    alt: string;
  };
};

export function Process() {
  const steps: StepData[] = [
    {
      title: "Understand the Problem",
      description: [
        "• Begin by identifying and analyzing the core challenges faced by the client or end-users.",
        "• Conduct stakeholder interviews to gather requirements and expectations.",
        "• Map out the goals and objectives to ensure alignment with the client’s vision.",
      ],
      image: {
        src: "/understandproblem.jpg",
        alt: "Understand the problem illustration",
      },
    },
    {
      title: "Brainstorm Innovative Solutions",
      description: [
        "• Organize creative ideation sessions involving cross-functional teams.",
        "• Use tools like mind mapping, design thinking frameworks, and brainstorming templates to generate diverse ideas.",
        "• Narrow down ideas through feasibility analysis and prioritize solutions that offer maximum impact.",
      ],
      image: {
        src: "/brainstorm.jpg",
        alt: "Brainstorming innovative solutions",
      },
    },
    {
      title: "Validate with Research and Feedback",
      description: [
        "• Test initial concepts through prototypes or mock-ups to gather early feedback.",
        "• Perform market research to compare solutions with industry benchmarks and competitor offerings.",
        "• Collect user feedback through surveys, focus groups, and usability tests to refine ideas.",
      ],
      image: {
        src: "/validate.png",
        alt: "Validating solutions with research",
      },
    },
  ];

  const renderContent = (step: StepData) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        {step.description.map((text, index) => (
          <p
            key={index}
            className="text-base md:text-lg font-thicccboi text-white dark:text-gray-300 mb-4"
          >
            {text}
          </p>
        ))}
      </div>
      <div className="flex justify-center">
        <Image
          src={step.image.src}
          alt={step.image.alt}
          width={500}
          height={500}
          className="rounded-lg object-cover shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );

  const timelineData = steps.map((step) => ({
    title: step.title,
    content: renderContent(step),
  }));

  return (
    <div className="relative w-full z-20 bg-white dark:bg-gray-900 font-thicccboi">
      <Timeline data={timelineData} />
    </div>
  );
}