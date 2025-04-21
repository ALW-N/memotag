"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { TextGenerateEffect } from "./text-generate-effect";
import { BackgroundLines } from "./background-lines"; // Import the BackgroundLines component

const words = [
  {
    text: "Revolutionizing Elderly Care",
    className:
      "text-4xl font-bold mb-4 flex justify-center text-center text-zinc-800 font-sans",
  },
  {
    text: "Smart AI Wearables for Compassionate Monitoring",
    className:
      "text-2xl font-semibold mb-3 flex justify-center text-center text-zinc-700 font-sans",
  },
  {
    text: "Harnessing the power of artificial intelligence, our smart wearables provide continuous support for aging individuals by offering real-time health data, fall detection, and cognitive behavior analysis.",
    className:
      "text-lg px-30 font-normal mb-2 flex justify-center text-center text-zinc-600 font-sans px-",
  },
];

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    description: string;
  }[]; // Removed thumbnail from here
}) => {
  const firstRow = products.slice(0, 3);
  const secondRow = products.slice(3, 6);
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Define scroll threshold for grid alignment
  const gridThreshold = 0.5;

  // Spring configuration for animation
  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  // Translations for the cards' movement and rotation
  const translateX = useSpring(
    useTransform(scrollYProgress, [gridThreshold, 1], [0, 900]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [gridThreshold, 1], [0, -900]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [-200, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0.1, 1]),
    springConfig
  );

  // Card grid animation
  const gridAnimation = useTransform(
    scrollYProgress,
    [0, gridThreshold],
    [0, 1]
  );

  // Heading animation (scale and opacity)
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.5]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 1, 0]);

  // Additional scroll position-based opacity for heading visibility after 3x2 grid is reached
  const headingVisibility = useTransform(
    scrollYProgress,
    [gridThreshold, 1],
    [0, 1]
  );

  return (
    <div
      ref={ref}
      className="h-[200vh] py-100 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      {/* Use BackgroundLines only for the Header */}
      <BackgroundLines className="h-[300px] mb-10">
        <Header />
      </BackgroundLines>

      <motion.h2
        className="text-3xl pt-5 font-bold text-center text-white-800 my-8"
        style={{
          opacity: headingOpacity, // This controls heading opacity independently
          scale: scale,
          visibility: headingVisibility, // Apply heading visibility when 3x2 grid is reached
        }}
      >
        MemoTag's Key Features for Advanced Dementia Care
      </motion.h2>

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div
          style={{
            opacity: gridAnimation,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "-5px",
            justifyItems: "center",
            transition: "all 0.5s ease-out",
          }}
          className="w-full pt-25 mb-16"
        >
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>

        <motion.div
          style={{
            opacity: gridAnimation,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
            justifyItems: "center",
            transition: "all 0.5s ease-out",
          }}
          className="w-full"
        >
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    description: string; // Kept description here
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-90 w-110 sm:w-[30rem] max-w-full relative shrink-0"
    >
      <a href={product.link} className="block group-hover/product:shadow-2xl">
        <div className="h-90 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg p-6 flex flex-col flex-grow">
          <h3 className="text-4xl font-semibold text-white mb-4">
            {product.title}
          </h3>
          <p className="text-xl text-white flex-grow leading-relaxed px-4 py-2 mt-2">
            {product.description || "No description provided."}
          </p>
        </div>
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-8 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};

// Move the Header component outside of BackgroundLines wrapper
export const Header = () => {
  const [visibleLines, setVisibleLines] = React.useState<number>(-1);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev < words.length - 1) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-10 space-y-2 h-[300px] flex flex-col justify-center pb-80 z-10 relative">
      {words.map((line, index) => (
        <motion.div
          key={index}
          className={line.className}
          initial={{ opacity: 0, y: 10 }}
          animate={index <= visibleLines ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          {index <= visibleLines ? (
            <TextGenerateEffect words={line.text} />
          ) : null}
        </motion.div>
      ))}
    </div>
  );
};
