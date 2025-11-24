 
 
// import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experienceData } from "../constants/data/expereinceData";

;

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="experience" className="max-w-3xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-medium text-white mb-12">Experience</h2>

      <div className="relative border-l border-white/10 ml-4">
        {experienceData.map((item, index) => (
          <motion.div
            key={item.id}
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-12 ml-6 relative"
          >
            {/* Timeline dot */}
            <span
              className={`absolute -left-8 w-3 h-3 rounded-full ${
                isInView ? item.color : "bg-white/20"
              }`}
            ></span>

            <div className="text-white font-semibold text-lg">{item.role}</div>
            <span className="text-xs font-mono text-zinc-500 mt-1 sm:mt-0">{item.date}</span>
            <div className="text-zinc-400 text-sm">{item.company}</div>
            <div className="text-zinc-500 text-xs mb-2">{item.duration}</div>
            <p className="text-zinc-400 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
