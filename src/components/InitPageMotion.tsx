import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const blackBox = {
  initial: {
    height: "100%",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const pageTransition = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -100, transition: { duration: 0.8, ease: "easeIn" } },
};

const InitialTransition = ({ children }: { children: React.ReactNode }) => {

  // Scroll user to top on route change
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <motion.div
        className="absolute z-50 flex items-center justify-center w-full bg-black"
        initial="initial"
        animate="animate"
        variants={blackBox}
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() =>
          document.body.classList.remove("overflow-hidden")
        }
      >
        <motion.svg variants={textContainer} className="absolute z-50 flex">
          <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            width={750}
            height={800}
            className="text-white"
          >
            <rect className="w-full h-full fill-current" />
            <motion.rect
              variants={text}
              className="w-full h-full text-gray-600 fill-current"
            />
          </pattern>
          <text
            className="text-4xl font-bold"
            textAnchor="middle"
            x="50%"
            y="50%"
            style={{ fill: "url(#pattern)" }}
          >
            Welcome
          </text>
        </motion.svg>
      </motion.div>

      {/* Page transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname} // This ensures each route gets a unique animation
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default InitialTransition;
