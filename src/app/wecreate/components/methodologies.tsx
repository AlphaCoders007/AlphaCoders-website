import React from 'react';

interface MethodologyProps {
  name: string;
  methodology: string;
}

const MethodologyCard: React.FC<MethodologyProps> = ({ name, methodology }) => (
  <div className="lg:w-1/3 mb-6 p-4">
    <div className="h-full text-center">
      <h3 className="text-pretty font-thicccboi  font-medium title-font tracking-wider text-lg">{name}</h3>
      <span className="inline-block h-1 w-10 rounded bg-gray-500 mt-6 mb-4"></span>
      <p className="text-clip dark:text-white text-black font-thicccboi leading-relaxed text-lg mb-6">{methodology}</p>
    </div>
  </div>
);

export  const Methodologies: React.FC = () => {
  return (
    <section className="text-pretty font-thicccboi  body-font bg-background-light transition-colors">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-6xl text-3xl font-thicccboi text-pretty title-font mb-12  text-center">
          Methodologies That Keep Us Going
        </h1>
        <div className="flex flex-wrap -m-4">
          <MethodologyCard
            name="Agile Development"
            methodology="We use Agile development to deliver software in short, iterative cycles, allowing us to respond quickly to changes and ensure high-quality results. This approach ensures flexibility, continuous improvement, and frequent updates, ensuring the final product meets your evolving needs."
          />
          <MethodologyCard
            name="DevOps Integration"
            methodology="Our DevOps practices enhance collaboration between development and operations, enabling faster and more reliable software delivery. By automating testing, building, and deployment through CI/CD, we reduce errors, accelerate release cycles, and maintain consistency and quality."
          />
          <MethodologyCard
            name="User-Centered Design"
            methodology="With User-Centered Design, we prioritize the needs and behaviors of users throughout the development process. This ensures that the final product is intuitive, accessible, and delivers the best user experience, ultimately driving satisfaction and adoption."
          />
        </div>
        
      </div>
    </section>
  );
};
