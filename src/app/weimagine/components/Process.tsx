import Image from "next/image";
import React from "react";
import { Timeline } from "@/app/weimagine/UI/ProcessUI";

export function Process() {
  const data = [
    {
      title: "Understand the Problem",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-base md:text-lg font-thicccboi text-gray-700 dark:text-gray-300 mb-4">
              • Begin by identifying and analyzing the core challenges faced by the client or end-users.
            </p>
            <p className="text-base md:text-lg font-thicccboi text-gray-700 dark:text-gray-300 mb-4">
              • Conduct stakeholder interviews to gather requirements and expectations.
            </p>
            <p className="text-base md:text-lg font-thicccboi text-gray-700 dark:text-gray-300 mb-4">
              • Map out the goals and objectives to ensure alignment with the client’s vision.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/understandproblem.jpg"
              alt="Understand the problem illustration"
              width={500}
              height={500}
              className="rounded-lg object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Brainstorm Innovative Solutions",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-base md:text-lg font-thicccboi text-gray-700 dark:text-gray-300 mb-4">
              • Organize creative ideation sessions involving cross-functional teams.
            </p>
            <p className="text-base md:text-lg font-thicccboi text-gray-700 dark:text-gray-300 mb-4">
              • Use tools like mind mapping, design thinking frameworks, and brainstorming templates to generate diverse ideas.
            </p>
            <p className="text-base md:text-lg font-thicccboi text-gray-700 dark:text-gray-300 mb-4">
              • Narrow down ideas through feasibility analysis and prioritize solutions that offer maximum impact.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/brainstorm.jpg"
              alt="Brainstorming innovative solutions"
              width={500}
              height={500}
              className="rounded-lg object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Validate with Research and Feedback",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-base md:text-lg font-thicccboi text-gray-700 dark:text-gray-300 mb-4">
              • Test initial concepts through prototypes or mock-ups to gather early feedback.
            </p>
            <p className="text-base md:text-lg font-thicccboi text-gray-700 dark:text-gray-300 mb-4">
              • Perform market research to compare solutions with industry benchmarks and competitor offerings.
            </p>
            <p className="text-base md:text-lg font-thicccboi text-gray-700 dark:text-gray-300 mb-4">
              • Collect user feedback through surveys, focus groups, and usability tests to refine ideas.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/validate.png"
              alt="Validating solutions with research"
              width={500}
              height={500}
              className="rounded-lg object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full z-20 bg-white dark:bg-gray-900 font-thicccboi">
      <Timeline data={data} />
    </div>
  );
}