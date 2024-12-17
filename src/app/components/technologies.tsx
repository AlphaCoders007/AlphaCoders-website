import { HoverEffect } from "./ui/TechnologiesUI";

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
      "A visual collaboration platform that allows teams to brainstorm, plan, and collaborate in real time. It supports mind mapping, ideation boards, and sticky notes, helping streamline the creative process. It’s especially effective for remote teams, as it fosters collaboration despite geographic distances.",
    link: "https://miro.com/",
  },
  {
    title: "Microsoft Teams",
    description:
      "A communication and collaboration hub that integrates with Office 365. Teams enables video conferencing, file sharing, and chat, ensuring that all stakeholders remain aligned and up-to-date throughout the ideation and development phases. It is essential for cross-functional team collaboration.",
    link: "https://www.microsoft.com/en-in/microsoft-teams/group-chat-software",
  },
  {
    title: "Google Analytics",
    description:
      "A powerful analytics tool that tracks website traffic, user behavior, and conversion rates. It helps identify patterns and insights from user interactions with digital products or services, guiding strategic decision-making during the ideation and development phases.",
    link: "https://developers.google.com/analytics",
  },
  {
    title: "SEMRUSH",
    description:
      "A leading competitive research tool that provides insights into keyword performance, traffic analysis, and backlink strategies. It is especially useful for market research and understanding the competitive landscape, ensuring that your ideas are not only innovative but also market-ready.",
    link: "https://www.semrush.com/",
  },
  {
    title: "Jira",
    description:
      "A popular tool for agile project management, especially in software development. It enables teams to plan sprints, manage user stories, and track the progress of iterative development. Jira is essential for keeping track of the ideation process, from concept to delivery.",
    link: "https://www.atlassian.com/software/jira",
  },
  {
    title: "Figma",
    description:
      "A cloud-based design tool that allows teams to create, prototype, and collaborate on UI/UX designs in real time. Figma is versatile, supporting vector graphics, design systems, and interactive prototyping. It enables rapid iteration, allowing teams to gather feedback and refine designs quickly.",
    link: "https://www.figma.com/",
  },
];
