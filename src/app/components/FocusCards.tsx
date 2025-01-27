import { FocusCardsUi } from "@/app/components/ui/focus-cards";

export function FocusCards() {
  type Card = {
    title: string;
    src: string;
    description: string;
    path: string;
  };
  
  const cards1: Card[] = [
    {
      title: "Ideation workshops",
      src: "/workshop.jpg",
      description: "Collaborative sessions to refine your ideas.",
      path: "/weimagine",
    },
   
    {
      title: "Market Research",
      src: "/marketresearch.jpg",
      description: "Insights to align your vision with market needs.",
      path: "/weimagine",
    },
    {
      title: "Concept Validation",
      src: "/conceptvalid.jpg",
      description:
        "We test your software for reliability, security, and performance, ensuring a polished product.",
      path: "/weimagine",
    },
  ];
  
  const cards2: Card[] = [
    {
      title: "Prototyping",
      src: "/validation.jpg",
      description: "We create prototypes to refine your concept before development.",
      path: "/wedesign",
    },
    {
      title: "Interface Design (UI)",
      src: "/research.jpg",
      description:
        "Our UI design creates functional, branded, and user-friendly interfaces.",
      path: "/wedesign",
    },
    {
      title: "User Experience Design (UX)",
      src: "/users.jpg",
      description:
        "We design intuitive, user-focused experiences with research and prototypes.",
      path: "/wedesign",
    },
  ];
  
  const cards3: Card[] = [
    {
      title: "Quality Assurance",
      src: "/wecreateimg3.jpg",
      description:
        "We test your software for reliability, security, and performance, ensuring a polished product.",
      path: "/wecreate",
    },
    {
      title: "End-To-End-Development",
      src: "/wecreateimg.jpg",
      description:
        "Our end-to-end engineering delivers secure backends and intuitive frontends for high-performing, unified products.",
      path: "/wecreate",
    },
    {
      title: "Custom Software Development",
      src: "/wecreateimg2.jpg",
      description:
        "We offer custom software development, delivering scalable solutions from concept to deployment.",
      path: "/wecreate",
    },
  ];
  
  

// bg-[#872341]  dark:bg-black   bg-[#E5D0AC] dark:bg-slate-800   bg-[#727D73] dark:bg-slate-500
 
  return  (
    <>
    <FocusCardsUi cards={cards1} className=" dark:bg-[#323437] bg-[#ECF2FF] "/>
    <FocusCardsUi cards={cards2} className=" dark:bg-[#323437] bg-[#ECF2FF] "/>
    <FocusCardsUi cards={cards3} className="dark:bg-[#323437] bg-[#ECF2FF]  "/>
    </>
  )
  
  
}
