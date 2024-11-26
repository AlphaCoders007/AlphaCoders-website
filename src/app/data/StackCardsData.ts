interface Card {
    title: string;
    description: string;
    imagePath: string; 
    technology: string[]; 
    reversed?: boolean;
  }

export const cards: Card[] = [
    {
      title: "Websites",
      description: "We create distinctive logos and cohesive brand strategies that make a lasting impression. Our goal is to ensure your brand stands out and expresses with your audience. Shape your brand’s identity to stand out to this competitive world.",
      imagePath: "image1.jpg", 
      technology: ["React", "TypeScript", "TailwindCSS"], 
      reversed: false,
    },
    {
      title: "App development",
      description: "We create distinctive logos and cohesive brand strategies that make a lasting impression. Our goal is to ensure your brand stands out and expresses with your audience. Shape your brand’s identity to stand out to this competitive world.",
      imagePath: "image2.jpg", 
      technology: ["Next.js", "Node.js", "Express"], 
      reversed: true,
    },
    {
      title: "UI/UX",
      description: "We create distinctive logos and cohesive brand strategies that make a lasting impression. Our goal is to ensure your brand stands out and expresses with your audience. Shape your brand’s identity to stand out to this competitive world.",
      imagePath: "image3.jpg", 
      technology: ["Vue.js", "GraphQL", "TailwindCSS"], 
      reversed: false,
    },
    {
      title: "Branding",
      description: "We create distinctive logos and cohesive brand strategies that make a lasting impression. Our goal is to ensure your brand stands out and expresses with your audience. Shape your brand’s identity to stand out to this competitive world.",
      imagePath: "image4.jpg", 
      technology: ["Angular", "RxJS", "SCSS"], 
      reversed: true,
    },
  ];