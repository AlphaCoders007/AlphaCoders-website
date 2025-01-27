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
      title: "User Experience Design (UX)",
      src: "/users.jpg",
      description: "We design intuitive, user-focused experiences with research and prototypes.",
      path: "/wedesign",
    },
    {
      title: "Interface Design (UI)",
      src: "/research.jpg",
      description: "Our UI design creates functional, branded, and user-friendly interfaces.",
      path: "/wedesign",
    },
  ];
  
  const cards2: Card[] = [
    {
      title: "Ideation workshops",
      src: "/research.jpg",
      description: "Collaborative sessions to refine your ideas.",
      path: "/wedesign",
    },
    {
      title: "Interface Design (UI)",
      src: "/wecreateimg.jpg",
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
      title: "Concept Validation",
      src: "/conceptvalid.jpg",
      description:
        "We test your software for reliability, security, and performance, ensuring a polished product.",
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
    <FocusCardsUi cards={cards1} className="bg-[#481E14] dark:dark:bg-black "/>
    <FocusCardsUi cards={cards2} className="bg-[#9B3922] dark:bg-slate-800  "/>
    <FocusCardsUi cards={cards3} className="bg-[#F2613F] dark:bg-slate-500 "/>
    </>
  )
  
  
}
