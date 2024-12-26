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
    imageSrc: "Weimagine.jpg",
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
    color: "bg-[#C63C51]",
  },
  {
    imageSrc: "wedesign.jpg",
    technologie: [
      "User Experience Design (UX)",
      "Interface Design (UI) ",
      "Prototyping",
      
    ],
    title: "We Design",
    subtitle: "Designing for Impact and Experience ", // Added subtitle here
    isEven: false,
    path:"/wedesign",
    color: "bg-[#003161]",
    description:
      "Design is where imagination takes form. Our team crafts thoughtful, user-centric designs that are as functional as they are beautiful. Each design we create solves problems, enhances experiences, and stands the test of time.",
  },
  {
    technologie: ["Custom Software Development", "End-to-End Engineering", " Quality Assurance"],
    imageSrc: "wecreate.jpg",
    title: "We Create",
    subtitle: "Creation Brings Your Vision to Life", // Added subtitle here
    isEven: true,
    path:"/wecreate",
    color: "bg-[#7A1CAC]",
    description:
      "Our expertise lies in building what you dream. With cutting-edge technologies, robust engineering, and meticulous execution, we bring your ideas into reality. From software solutions to digital platforms, we deliver with precision and excellence",
  },

];