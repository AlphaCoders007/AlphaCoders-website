interface CardStatsProps {
  title: string;
  subtitle: string; // If subtitle is optional, update this line to: subtitle?: string;
  description: string;
  imageSrc: string;
  technologie: string[];
  isEven?: boolean;
  path:string;
  color: string;
}

export const cards: CardStatsProps[] = [
  {
    imageSrc: "Weimagine3.gif",
    technologie: [
      "Ideation Workshops",
      "Market Research",
      "Concept Validation",
      
    
    ],
    title: "We Imagine",
    subtitle: "Imagination Sparks Innovation", // Added subtitle here
    description:
      "Every groundbreaking solution begins with a spark of imagination. At AlphaCoders we cultivate your ideas, explore creative possibilities, and turn aspirations into actionable",
    isEven: true,
    path:"/weimagine",
    color: "bg-[#4C585B]",
  },
  {
    imageSrc: "Wecreate (2).gif",
    technologie: [
      "User Experience Design (UX)",
      "Interface Design (UI) ",
      "Prototyping",
      
    ],
    title: "We Design",
    subtitle: "Designing for Impact and Experience ", // Added subtitle here
    isEven: false,
    path:"/wedesign",
    color: "bg-[#69247C]",
    description:
      "Design is where imagination takes form. Our team crafts thoughtful, user-centric designs that are as functional as they are beautiful. Each design we create solves problems, enhances experiences, and stands the test of time.",
  },
  {
    technologie: ["Custom Software Development", "End-to-End Engineering", " Quality Assurance"],
    imageSrc: "8b5c7d22-d428-46e0-8235-857afc1d5e61.gif",
    title: "We Create",
    subtitle: "Creation Brings Your Vision to Life", // Added subtitle here
    isEven: true,
    path:"/wecreate",
    color: "bg-[#213555]",
    description:
      "Our expertise lies in building what you dream. With cutting-edge technologies, robust engineering, and meticulous execution, we bring your ideas into reality. From software solutions to digital platforms, we deliver with precision and excellence",
  },

];