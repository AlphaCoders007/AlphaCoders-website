import React from 'react';
import { WobbleCardMain } from './wobblecard';

// Reusable Methodology Card component
interface MethodologyProps {
  name: string;
  methodology: string;
}



const Methodologies: React.FC = () => {
  return (
    <section className="text-pretty font-thicccboi  body-font bg-background-light transition-colors">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-6xl text-3xl font-thicccboi text-pretty title-font mb-12  text-center">
          Methodologies That Keep Us Going
        </h1>
        <WobbleCardMain />
        
      </div>
    </section>
  );
};

export default Methodologies;