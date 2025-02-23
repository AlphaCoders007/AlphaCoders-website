"use client"

import React from 'react';
import StickyComponent from './ui/StickyComponent'; 
import { cards } from '../data/StackCardsData';
const VerticalStack: React.FC = () => {
  return (
    <div className="flex flex-col  ">
      
      
      
      {
        cards.map((card,i) =>(
            <StickyComponent
            key={i}
            title={card.title}
            subtitle={card.subtitle}
            technologies={card.technologie}
            description={card.description}
            imageSrc={card.imageSrc}
            isEven = {i%2 === 0}
            path={card.path}
            color={card.color}
            />
        ))
      }
    </div>
  );
};

export default VerticalStack;
