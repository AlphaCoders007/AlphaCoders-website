'use client'

import React from 'react';
import { Layout, Server, Database, Smartphone, Cloud, Brain, TestTube } from 'lucide-react';

interface StepProps {
  stepNumber: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ stepNumber, title, description, icon }) => (
  <div className="flex pb-20 sm:items-center md:w-2/3 mx-auto">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-500 text-black flex items-center justify-center relative z-10 title-font font-medium text-sm">
      {/* Number inside the black circle */}
      {stepNumber}
    </div>
    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
      <div className="flex-shrink-0 w-24 h-24 bg-primary/10 text-primary rounded-full inline-flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
        <h2 className="font-medium title-font  mb-1 text-xl">{title}</h2>
        <p className="leading-relaxed text-white">{description}</p>
      </div>
    </div>
  </div>
);

const TechnologiesDesign: React.FC = () => {
  return (
    <section className=" body-font bg-background-light transition-colors">
      <div className="container px-5 py-24 mx-auto flex flex-wrap justify-center items-center">
        <h1 className="sm:text-6xl text-3xl font-thicccboi text-pretty title-font mb-12 text-center">
          Technologies that bring ideas to life
        </h1>

        <Step
          stepNumber={1}
          title="Frontend Technologies"
          description="React, Next.js, Vue.js for dynamic user interfaces."
          icon={<Layout className="w-12 h-12" />}
        />
        <Step
          stepNumber={2}
          title="Backend Technologies"
          description="Node.js, Django, Flask for backend systems."
          icon={<Server className="w-12 h-12" />}
        />
        <Step
          stepNumber={3}
          title="Databases"
          description="PostgreSQL, MongoDB, MySQL for data storage."
          icon={<Database className="w-12 h-12" />}
        />
        <Step
          stepNumber={4}
          title="Mobile and Cross-Platform"
          description="Flutter, React Native, Swift, Kotlin for cross-platform and native apps."
          icon={<Smartphone className="w-12 h-12" />}
        />
        <Step
          stepNumber={5}
          title="Cloud and Deployment"
          description="AWS, Azure, Google Cloud for scalable deployment."
          icon={<Cloud className="w-12 h-12" />}
        />
        <Step
          stepNumber={6}
          title="AI & Machine Learning"
          description="TensorFlow, PyTorch, OpenAI API, Vertex AI for advanced AI solutions."
          icon={<Brain className="w-12 h-12" />}
        />
        <Step
          stepNumber={7}
          title="Testing & Automation"
          description="Selenium, Appium, JMeter for automated testing."
          icon={<TestTube className="w-12 h-12" />}
        />
      </div>
    </section>
  );
};

export default TechnologiesDesign;