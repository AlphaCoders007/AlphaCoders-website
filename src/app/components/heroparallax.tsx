"use client";
import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  { description: "Feasibility analysis to ensure success.",
    heading: "Concept Validation",
    title: "We Imagine",
    link: "/weimagine",
    id:1,
    thumbnail:
      "/conceptvalid.jpg",
  },

  { description: "Insights to align your vision with market needs.",
    heading: "Market Research",
    title: "We Imagine",
    link: "/weimagine",
    id:3,
    thumbnail:
      "/marketresearch.jpg",
  },

  { description: "Collaborative sessions to refine your ideas..",
    heading: "Ideation workshops",
    title: "We Imagine",
    link: "/weimagine",
    id:4,
    thumbnail:
      "/workshop.jpg",
  },
  { description: "Feasibility analysis to ensure success.",
    heading: "Concept Validation",
    title: "We Imagine",
    link: "/weImagine",
    id:5,
    thumbnail:
      "/conceptvalid.jpg",
  },
  { description: "Our UI design creates functional, branded, and user-friendly interfaces.",
    heading: "Interface Design (UI)",
    title: "We Design",
    link: "/wedesign",
    id:6,
    thumbnail:
      "/users.jpg",
  },

  { description: "We design intuitive, user-focused experiences with research and prototypes.",
    heading: "User Experience Design (UX)",
    title: "We Design",
    link: "/wedesign",
    id:8,
    thumbnail:
      "/research.jpg",
  },
  { description: "We create prototypes to refine your concept before development.",
    heading: "Prototyping",
    title: "We Design",
    link: "/wedesign",
    id:7,
    thumbnail:
      "/validation.jpg",
  },
  { description: "We design intuitive, user-focused experiences with research and prototypes.",
    heading: "User Experience Design (UX)",
    title: "We Design",
    link: "/wedesign",
    id:9,
    thumbnail:
      "/users.jpg",
  },
  { description: "Our UI design creates functional, branded, and user-friendly interfaces.",
    heading: "Interface Design (UI)",
    title: "We Design",
    link: "/wedesign",
    id:10,
    thumbnail:
      "/research.jpg",
  },
  { description: "Our end-to-end engineering delivers secure backends and intuitive frontends for high-performing, unified products.",
    heading: "End-to-End Development",
    title: "We Create",
    link: "/wecreate",
    id:11,
    thumbnail:
      "/wecreateimg.jpg",
  },

  { description: "We offer custom software development, delivering scalable solutions from concept to deployment.",
    heading: "Custom Software Development",
    title: "We Create",
    link: "/wecreate",
    id:12,
    thumbnail:
      "/wecreateimg2.jpg",
  },
  { description: "Our end-to-end engineering delivers secure backends and intuitive frontends for high-performing, unified products.",
    heading: "End-to-End Development",
    title: "We Create",
    link: "/wecreate",
    id:13,
    thumbnail:
      "/wecreateimg3.jpg",
  },
  { description: "We test your software for reliability, security, and performance, ensuring a polished product.",
    heading: "Quality Assurance",
    title: "We Create",
    link: "/wecreate",
    id:14,
    thumbnail:
      "/wecreateimg.jpg",
  },
  { description: "We offer custom software development, delivering scalable solutions from concept to deployment.",
    heading: "Custom Software Development",
    title: "We Create",
    link: "/wecreate",
    id:15,
    thumbnail:
      "/wecreateimg2.jpg",
  },
];
