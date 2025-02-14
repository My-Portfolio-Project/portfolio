/* eslint-disable react/prop-types */
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { largeSlideUp, slideUp } from "../constants/utils/framer";

const AnimatedText = ({ children, type }) => {
  const AnimatedTextRef = useRef(null);

  const whileInView = useInView(AnimatedTextRef, {
    margin: "0px 100px -120px 0px",
  });


  const textContent = typeof children === "string" ? children : String(children);

  if (type === "BIGTEXT") {
    return (
      <span
        ref={AnimatedTextRef}
        className="flex gap-1 flex-wrap w-full relative items-center"
      >
        {textContent.split(" ").map((word, index) => (
          <span key={index} className="inline-flex  relative">
            <motion.span
              variants={largeSlideUp}
              custom={index}
              initial="initial"
              animate={whileInView ? "animate" : "exit"}
            >
              {word === " " ? "\u00A0" : word}
            </motion.span>
          </span>
        ))}
      </span>
    );
  }

  return (
    <span ref={AnimatedTextRef} className="flex gap-1 w-full flex-wrap items-center relative">
      {textContent.split(" ").map((word, index) => (
        <span key={index} className="inline-flex relative">
          <motion.span
            variants={slideUp}
            custom={index}
            initial="initial"
            animate={whileInView ? "animate" : "exit"}
          >
            {word === "" ? "\u00A0" : word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export default AnimatedText;
