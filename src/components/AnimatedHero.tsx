import { motion, stagger, useAnimate } from "framer-motion";
import React from "react";

const AnimatedHero: React.FC = () => {
  // Using the new useAnimate hook for more control
  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    // Using the new animate function with stagger
    animate(
      "h1, p, .cta-button",
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.8, delay: stagger(0.2) },
    );
  }, []);

  return (
    <div
      ref={scope}
      className="flex flex-col lg:w-3/4 mx-auto text-center z-10"
    >
      <div className="flex flex-col w-full">
        <h1 className="text-primaryTextDark font-lobster font-extrabold text-3xl lg:text-7xl pt-10">
          Hi, I'm Shreyas Thirumalai
        </h1>
        <h1 className="text-primaryTextDark font-lobster font-extrabold text-2xl lg:text-6xl mt-4">
          A Full Stack Developer
        </h1>
      </div>

      <p className="text-lightGreen font-kodeMono pt-6 lg:pt-10 leading-7 lg:text-xl text-sm max-w-2xl mx-auto">
        I write code for a living. Started doing it for the{" "}
        <span className="text-red-500 font-bold border-b-4 border-lightGreen hover:border-red-500 transition-all">
          $$$
        </span>{" "}
        and continuing to do it for the{" "}
        <span className="border-b-4 border-red-500 hover:border-lightGreen transition-all">
          interest
        </span>
        .
      </p>

      <motion.div
        className="mt-10 cta-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <a
          href="#experience"
          className="bg-lightGreen text-primaryDark font-kodeMono font-bold px-6 py-3 rounded-full hover:bg-teaGreen transition-all duration-300 inline-block"
        >
          View My Work
        </a>
      </motion.div>
    </div>
  );
};

export default AnimatedHero;
