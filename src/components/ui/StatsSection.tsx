// components/StatsSection.tsx


import { TypewriterEffect } from "./typewriter-effect";

const StatsSection = () => {
    return (
      <section className="text-center py-10 space-y-8 ">
        
        <TypewriterEffect
          words={[
            {
              text: "Driving",
              className: "text-blue-500 pb-10",
            },
            {
              text: "Innovation",
              className: "text-green-500",
            },
            {
              text: "With",
              className: "text-yellow-500",
            },
            {
              text: "Impact",
              className: "text-pink-500",
            },
          ]}
          className="text-2xl md:text-4xl"
          cursorClassName="bg-blue-500"
        />
  
        {/* Your actual stats content here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-black dark:text-white">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">10K+</h2>
            <p>Active Users</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">500+</h2>
            <p>Companies Helped</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">99.9%</h2>
            <p>Uptime Guaranteed</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default StatsSection;
  

