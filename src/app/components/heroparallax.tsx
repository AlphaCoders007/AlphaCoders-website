"use client";
import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";
import { describe } from "node:test";
import { desc, head } from "framer-motion/client";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  { description: "Feasibility analysis to ensure success.",
    heading: "Concept Validation",
    title: "WeImagine",
    link: "/weimagine",
    id:1,
    thumbnail:
      "/cnp.png",
  },
  { description: "Feasibility analysis to ensure success.",
    heading: "Concept Validation",
    title: "WeImagine",
    link: "/weimagine",
    id:2,
    thumbnail:
      "/ConceptValidation2.png",
  },
  { description: "Insights to align your vision with market needs.",
    heading: "Market Research",
    title: "WeImagine",
    link: "/weimagine",
    id:3,
    thumbnail:
      "/MarketResearch2.png",
  },

  { description: "Collaborative sessions to refine your ideas..",
    heading: "Ideation workshops",
    title: "WeImagine",
    link: "/weimagine",
    id:4,
    thumbnail:
      "/Ideationworkshop.png",
  },
  { description: "Feasibility analysis to ensure success.",
    heading: "Concept Validation",
    title: "WeImagine",
    link: "/weImagine",
    id:5,
    thumbnail:
      "/cnp.png",
  },
  { description: "Our UI design creates functional, branded, and user-friendly interfaces.",
    heading: "Interface Design (UI)",
    title: "WeDesign",
    link: "/wedesign",
    id:6,
    thumbnail:
      "/InterfaceDesign.png",
  },

  { description: "We design intuitive, user-focused experiences with research and prototypes.",
    heading: "User Experience Design (UX)",
    title: "WeDesign",
    link: "/wedesign",
    id:8,
    thumbnail:
      "/Ui_Ux1.png",
  },
  { description: "We create prototypes to refine your concept before development.",
    heading: "Prototyping",
    title: "WeDesign",
    link: "/wedesign",
    id:7,
    thumbnail:
      "/Prototyping.png",
  },
  { description: "We design intuitive, user-focused experiences with research and prototypes.",
    heading: "User Experience Design (UX)",
    title: "WeDesign",
    link: "/wedesign",
    id:9,
    thumbnail:
      "/UiUx2.png",
  },
  { description: "Our UI design creates functional, branded, and user-friendly interfaces.",
    heading: "Interface Design (UI)",
    title: "WeDesign",
    link: "/wedesign",
    id:10,
    thumbnail:
      "/CustomSoftware.png",
  },
  { description: "Our end-to-end engineering delivers secure backends and intuitive frontends for high-performing, unified products.",
    heading: "End-to-End Development",
    title: "WeCreate",
    link: "/wecreate",
    id:11,
    thumbnail:
      "/End-to-End.png",
  },

  { description: "We offer custom software development, delivering scalable solutions from concept to deployment.",
    heading: "Custom Software Development",
    title: "WeCreate",
    link: "/wecreate",
    id:12,
    thumbnail:
      "/CustomSoftware2.png",
  },
  { description: "Our end-to-end engineering delivers secure backends and intuitive frontends for high-performing, unified products.",
    heading: "End-to-End Development",
    title: "WeCreate",
    link: "/wecreate",
    id:13,
    thumbnail:
      "/End-to-End2.png",
  },
  { description: "We test your software for reliability, security, and performance, ensuring a polished product.",
    heading: "Quality Assurance",
    title: "WeCreate",
    link: "/wecreate",
    id:14,
    thumbnail:
      "/QualityAssurance.png",
  },
  { description: "We offer custom software development, delivering scalable solutions from concept to deployment.",
    heading: "Custom Software Development",
    title: "WeCreate",
    link: "/wecreate",
    id:15,
    thumbnail:
      "/CustomSoftware.png",
  },
];
