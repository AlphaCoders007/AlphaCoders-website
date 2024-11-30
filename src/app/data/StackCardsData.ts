interface CardStatsProps {
    title: string;
    description: string;
    imageSrc: string; 
    technologie: string[]; 
    isEven?: boolean;
  }

export const cards: CardStatsProps[] = [
    {
      imageSrc:"ui-ux.webp",
      technologie:["Figma", "Adobe XD", "3D Design", "Minimal", "User Experience"],
      title:"UI/UX Design",
      description:"We expertise in crafting simple yet efficient minimalist designs that enhance user experience and keep your business focused on what matters. Creating a visual journey that defines your brand",
      isEven :true,
    },
    {
      imageSrc:"website-development.webp",
      technologie:["NEXT.JS", "HTML5 ", "TAILWINDCSS", "REACT", "WORDPRESS", "ANGULAR", "BOOTSTRAP"],
      title:"Web Development",
      isEven:false,
      description:"We develop custom websites that stands-out to international standards, ensuring quality and performance. Using the latest technologies, we create websites that are both visually appealing and highly functional. Bring your online presence with our customised development. "
    },
    {
      technologie:["Flutter", "IOs", "Android"],
      imageSrc:"app-development.webp",
      title:"Mobile Apps",
      isEven : true,
      description:"We specialise in developing custom mobile applications that are now used by 100,000+ people. From initial concept to top-tier quality, our priority is excellence in every step. Make your dream project a"

    },
    {
      technologie:["ILLUSTRATOR", "PHOTOSHOP", "INDesign", "BRAND IDENTITY", "BRAND STRATEGY"],
      imageSrc:"branding.webp",
      title:"Branding",
      isEven:false,
      description:"We create distinctive logos and cohesive brand strategies that make a lasting impression. Our goal is to ensure your brand stands out and expresses with your audience. Shape your brand’s identity to stand out to this competitive world.",
    },
  ];