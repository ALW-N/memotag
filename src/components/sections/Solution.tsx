"use client";


import { FlipWords } from "../ui/flip-words"; // adjust the path if needed
import { HoverBorderGradient } from "../ui/hover-border-gradient"; // import the HoverBorderGradient component

const Solution = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white dark:bg-black">
      <h1 className="text-4xl font-bold mb-6">
        We help{" "}
        <FlipWords
          words={["caregivers", "investors", "doctors"]}
          className="text-blue-500 dark:text-blue-400"
        />{" "}
        make better decisions.
      </h1>

      {/* HoverBorderGradient Button below the text */}
      <HoverBorderGradient
        as="a"
        href="https://www.memotag.io/waitlist-form"  // Correct URL
        containerClassName="mb-4"
        className="text-white text-lg font-semibold"
        duration={1}
        clockwise={true}
      >
        Learn More
      </HoverBorderGradient>
    </div>
  );
};

export default Solution;
