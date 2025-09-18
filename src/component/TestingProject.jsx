/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { projectsData } from "../constants/data/projectsData";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import HeadingText from "../resuseable-component/HeadingText";

// Single Card
const Card = ({ e, progress, range, targetScale }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      className="sticky top-10 w-full  p-3  border-l-2 border-white 
       rounded-2xl overflow-hidden group "
    >
      <Link to={`/projectdetails/${e.id}`}>
        <div
          className="relative space-y-4 cursor-pointer p-6 rounded-2xl 
          shadow-2xl transition duration-500 flex flex-col md:flex-row gap-3"
          style={{
            backgroundColor: e.bgColor || "#1E293B",
            color: e.textColor || "#F8FAFC",
          }}
        >
          {/* Image */}
          <motion.div
            style={{ scale: imageScale }}
            className="h-[200px] md:h-[300px] w-full md:max-w-[50%] rounded-xl overflow-hidden "
          >
            <img
              src={e.pics}
              alt="project-title"
              className="w-full h-full  object-cover group-hover:scale-[1.1] rounded-lg
               transition-transform duration-500 ease-out"
            />
          </motion.div>

          <motion.div className="md:max-w-[50%] w-full flex flex-col gap-2 ">
            <div className="flex items-center justify-between w-full">

       
            {/* Title */}
            <h1
              className="md:text-4xl text-2xl font-semibold"
              style={{ color: e.textColor }}
            >
              {e.title}
            </h1>

            {/* <div className={`shadow-md rounded-lg px-2 py-1`}>
              {e.tag}
            </div> */}


                 </div>

            {/* Description */}
            <h1
              className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90"
              style={{ color: e.textColor }}
            >
              {e.desc}
            </h1>

            {/* Info */}
            <div
              className="flex flex-col md:flex-row flex-wrap justify-between items-start
              pt-2 md:items-center gap-2"
              style={{ borderColor: e.textColor }}
            >
              <ul className="flex space-x-2 text-2xl">
                <li>{e.iconOne}</li>
                <li>{e.iconTwo}</li>
                <li>{e.iconThree}</li>
                <li>{e.iconFour}</li>
              </ul>

              <ul>
                <li>{e.role}</li>
              </ul>

              <ul>
                <li>{e.year}</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

// Main Component
const TestingProject = () => {
  const container = useRef(null);
  const [activeTab, setActiveTab] = useState("Web App");

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Filter projects by tag
  const filteredProjects = projectsData.filter(
    (project) => project.tag === activeTab
  );

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-6">
        {["Web App", "Mobile App"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div ref={container} className="relative min-h-[130vh]">
        {filteredProjects.map((e, index) => {
          const targetScale =
            1 - (filteredProjects.length - index) * 0.05;

          const step = 1 / filteredProjects.length;
          const range = [index * step, 1];

          return (
            <Card
              key={e.id}
              e={e}
              index={index}
              total={filteredProjects.length}
              range={range}
              targetScale={targetScale}
              progress={scrollYProgress}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TestingProject;
