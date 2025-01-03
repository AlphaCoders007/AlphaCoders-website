import React from "react";
import { Lamp } from "./lamp";

export const Whatweoffer: React.FC = () => {
  return (
    <section className=" bg-background-light transition-colors body-font">
      <div className="container px-5 py-24 mx-auto">
      

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

        {/* Cards */}
        <div className="flex flex-wrap justify-center">
          {[
            {
              title: "Custom Software Development",
              description:
                "We provide Custom Software Development, building tailored solutions that are efficient, scalable, and aligned with your business goals. From concept to deployment, we ensure your ideas come to life seamlessly.",
            },
            {
              title: "End-to-End Engineering",
              description:
                "Our End-to-End Engineering combines secure backend systems with intuitive frontend interfaces, creating unified, high-performing products that meet your technical and business needs.",
            },
            {
              title: "Quality Assurance",
              description:
                "With a focus on Quality Assurance, we conduct rigorous testing to ensure your software is reliable, secure, and performs flawlessly, delivering a polished product ready for real-world success.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-900 dark:border-gray-200  border-opacity-60 text-pretty"
            >
              <h2 className="text-2xl font-thicccboi  mb-2">
                {card.title}
              </h2>
              <p className="leading-relaxed text-white text-lg mb-4 font-thicccboi">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};