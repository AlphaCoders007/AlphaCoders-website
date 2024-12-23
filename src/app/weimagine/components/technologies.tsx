import { HoverEffect } from "../UI/TechnologiesUI";

export function Technologies() {
  return (
    <div className="">
    <div className="relative w-full h-full py-20 bg-background-light transition-colors z-20 ">
        <h2 className="max-w-7xl pl-4 mx-auto text-3xl md:text-6xl  text-black dark:text-white font-thicccboi">
        Technologies we leverage...
      </h2>
      </div>
      <div className="relative z-20 bg-background-light transition-colors max-w-5xl mx-auto px-8 dark:text-white ">
      <HoverEffect items={projects} />
      </div>
      </div>
    
  );
}
export const projects = [
  {
    title: "Miro",
    description:
      "We brainstorm, plan, and collaborate in real-time using visual tools like mind maps and sticky notes. This helps streamline the creative process, especially for remote teams.",
    link: "https://miro.com/",
  },
  {
    title: "Microsoft Teams",
    description:
      "We use it as our communication hub to stay aligned through video conferencing, file sharing, and chats, ensuring smooth cross-functional collaboration.",
    link: "https://www.microsoft.com/en-in/microsoft-teams/group-chat-software",
  },
  {
    title: "Google Analytics",
    description:
      "We analyze website traffic, user behavior, and conversion rates to uncover patterns and make data-driven strategic decisions during development phases.",
    link: "https://developers.google.com/analytics",
  },
  {
    title: "SEMRUSH",
    description:
      "We conduct keyword research, traffic analysis, and competitor benchmarking to ensure our marketing strategies are both innovative and market-ready.",
    link: "https://www.semrush.com/",
  },
  {
    title: "Jira",
    description:
      "We manage agile workflows by planning sprints, tracking user stories, and overseeing the progress of iterative development from concept to delivery.",
    link: "https://www.atlassian.com/software/jira",
  },
  {
    title: "Figma",
    description:
      "We design, prototype, and collaborate on UI/UX projects in real-time, enabling rapid iterations and refining designs with team feedback.",
    link: "https://www.figma.com/",
  },
];
