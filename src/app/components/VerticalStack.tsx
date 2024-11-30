"use client"

import React from 'react';
import StickyComponent from './ui/StickyComponent'; // Import your existing component
import { cards } from '../data/StackCardsData';
const VerticalStack: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* <StickyComponent
        imageSrc="ui-ux.webp"
        technologies={["Figma", "Adobe XD", "3D Design", "Minimal", "User Experience"]}
        title="UI/UX Design"
        description="We craft minimalist, functional designs."
        isEven = {true}
      />
      <StickyComponent
        imageSrc="website-development.webp"
        technologies={["Me", "Adobe XD", "3D Design", "Minimal", "User Experience"]}
        title="Web Development"
        isEven = {false}
        description="Building fast and reliable websites."
      />
      <StickyComponent
        technologies={["Figma", "Adobe XD", "3D Design", "Minimal", "User Experience"]}
        imageSrc="app-development.webp"
        title="Mobile Apps"
        isEven = {true}

        description="Creating seamless mobile experiences."
      />
      <StickyComponent
        technologies={["Figma", "Adobe XD", "3D Design", "Minimal", "User Experience"]}
        imageSrc="branding.webp"
        title="Branding"
        isEven = {false}

        description="Helping you create a powerful brand identity."
      /> */}
      {/* Add more StickyComponent instances as needed */}
      {
        cards.map((card,i) =>(
            <StickyComponent
            title={card.title}
            technologies={card.technologie}
            description={card.description}
            imageSrc={card.imageSrc}
            isEven = {i%2 === 0}
            />
        ))
      }
    </div>
  );
};

export default VerticalStack;
