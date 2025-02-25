"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products,
}: {
  products: {
    heading?: string;
    description?: string;
    title: string;
    link: string;
    id: number;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 120, damping: 40, mass: 0.8 }; 

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -400]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -800]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-500, 400]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="z-10 bg-background-light transition-colors h-[300vh] sm:h-[350vh] py-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="space-y-12"
      >
        {/* First Row */}
        <motion.div className=" flex space-x-10 mb-8 scrollbar-hidden">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.id}
            />
          ))}
        </motion.div>

        {/* Second Row */}
        <motion.div className=" flex space-x-10 mb-8">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.id}
            />
          ))}
        </motion.div>

        {/* Third Row*/}
        <motion.div className=" flex space-x-10 mb-8">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.id}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-10 px-4 w-full left-0 top-0 transition-colors font-thicccboi">
      <h1 className="text-3xl md:text-5xl font-thicccboi tracking-wide leading-tight ">
        LET&apos;S BUILD YOUR DREAM TOGETHER
      </h1>
      <p className="max-w-5xl text-base md:text-4xl text-black dark:text-white  mt-4 ">
        Whether you&apos;re dreaming of a groundbreaking application or a
        transformative platform, AlphaCoders is here to guide you every step of
        the way. Imagination is just the beginning—let us design and create
        something extraordinary with you.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    heading?: string;
    description?: string;
    title: string;
    link: string;
    id: number;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
        height: "clamp(300px, 50vw, 420px)", // Min 300px, scales up to 420px
        width: "clamp(280px, 45vw, 352px)", // Min 280px, scales up to 352px
      }}
     
      className="group/product relative flex-shrink-0 overflow-hidden bg-white transition-transform duration-500 ease-out transform shadow-2xl hover:shadow-3xl hover:rotate-6 rounded-3xl"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        <Image
          src={product.thumbnail}
          height={600}
          width={600}
          style={{
            height: "clamp(300px, 50vw, 600px)",
            width: "clamp(300px, 50vw, 600px)",
          }}
          className="object-cover absolute h-full w-full rounded-3xl transition-all duration-500 ease-in-out group-hover:scale-110"
          alt={product.title}
        />
      </Link>
      <div
        className="absolute inset-0 h-full w-full pointer-events-none font-thicccboi"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 100%)",
        }}
      />

      {/* Text container with enhanced styling for better contrast and visibility */}
      <div className="absolute top-8 left-8  z-20 space-y-2 text-white opacity-90 transition-opacity font-thicccboi duration-500 group-hover/product:opacity-100">
        <h2 className="text-2xl font-semibold dark:text-textcolor-yellow text-textcolor-lightcolor ">{product.heading}</h2>
        <p className="text-sm ">{product.description}</p>
      </div>

      <h2 className="absolute bottom-8 left-8 dark:text-textcolor-yellow text-textcolor-lightcolor opacity-0 group-hover/product:opacity-100  text-xl font-thicccboi tracking-tight transition-opacity duration-500 ease-out">
        {product.title}
      </h2>
    </motion.div>
  );
};