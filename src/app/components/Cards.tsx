"use client";

import React from "react";
import { Card } from "./ui/CardUi";

const Cards: React.FC = () => {
  const cards = [
    {
      title: "Websites",
      description: " We develop custom websites that stands-out to international standards, ensuring quality and performance. Using the latest technologies, we create websites that are both visually appealing and highly functional. Bring your online presence with our customised development.",
      technology: ["Next.js", "HTML5", "Tailwind", "Bootstrap", "Angular", "WordPress"],
      imageSrc: "image4.jpg",
    },
    {
      title: "App Development",
      description:
        "We specialise in developing custom mobile applications that are now used by 100,000+ people. From initial concept to top-tier quality, our priority is excellence in every step. Make your dream project a reality.",
      technology: ["Flutter", "IOS", "Android"],
      imageSrc: "image3.jpg",
    },
    {
      title: "UI/UX",
      description: "We specialise in developing custom mobile applications that are now used by 100,000+ people.",
      technology: ["Figma", "Css", "Adobe XD", "3D design", "User Experience"],
      imageSrc: "image2.jpg",
    },
    {
      title: "Branding",
      description:
        "We specialise in developing custom mobile applications that are now used by 100,000+ people. Our branding strategies are designed to help you stand out.",
      technology: ["Brand Identity", "Branding", "Photoshop"],
      imageSrc: "image4.jpg",
    },
  ];

  return (
    <div className="w-full mt-12 bg-white">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description || "no description available"}
          technology={card.technology}
          imagesSrc={card.imageSrc}
          reversed={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default Cards;