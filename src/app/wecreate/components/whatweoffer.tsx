import React from "react";
import { CardStackMain } from "./cardstack";

export const Whatweoffer: React.FC = () => {
  return (
    <section className=" bg-background-light transition-colors body-font">
      <div className="container px-5 py-24 mx-auto ">
      

        {/* Section Title */}
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-6xl text-3xl font-thicccboi title-font mb-4">
            What we offer
          </h1>

          
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-white font-thicccboi">
            Our offerings combine innovation, precision, and user-centered
            execution, ensuring that we deliver software solutions of the
            highest caliber. By focusing on the details and understanding your
            needs, we turn complex challenges into effective digital solutions
            that drive success and growth.
          </p>
        </div>
        <CardStackMain />

       
      </div>
    </section>
  );
};