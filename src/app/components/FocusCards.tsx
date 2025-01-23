import { FocusCardsUi } from "@/app/components/ui/focus-cards";

export function FocusCards() {
  const cards: {
    title: string;
    src: string;
    description:string;
    path:string;
  }[] = [
    {
      title: "Prototyping",
      src: "/validation.jpg",
      description:"We create prototypes to refine your concept before development.",
      path:"/wedesign"
    },
    {
      title: "User Experience Design (UX)",
      src: "/users.jpg",
      description:"We design intuitive, user-focused experiences with research and prototypes.",
      path:"/wedesign"
    },
    {
      title: "Interface Design (UI)",
      src: "/research.jpg",
      description:"Our UI design creates functional, branded, and user-friendly interfaces.",
      path:"wedesign"
    },
    {
      title: "Ideation workshops",
      src: "/research.jpg",
      description:"Collaborative sessions to refine your ideas..",
      path:"/wedesign"
    },
    {
      title: "End-to-End Development",
      src: "/wecreateimg.jpg",
      description:"Our end-to-end engineering delivers secure backends and intuitive frontends for high-performing, unified products.",
      path:"/wedesign"
    },
    {
      title: "Custom Software Development",
      src: "/wecreateimg2.jpg",
      description:"We offer custom software development, delivering scalable solutions from concept to deployment.",
      path:"/wedesign"
    },
    {
      title: "Quality Assurance",
      src: "/wecreateimg.jpg",
      description:"We test your software for reliability, security, and performance, ensuring a polished product",
      path:"/wedesign"

    },
    {
      title: "Concept Validation",
      src: "/conceptvalidation.jpg",
      description:"We test your software for reliability, security, and performance, ensuring a polished product.",
      path:"/wedesign"

    },
    {
      title: "Concept Validation",
      src: "/conceptvalidation.jpg",
      description:"We test your software for reliability, security, and performance, ensuring a polished product.",
      path:"/wedesign"

    },
  ];

  return <FocusCardsUi cards={cards}  />;
}
