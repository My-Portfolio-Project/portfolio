/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { projectsData } from "../constants/data/projectsData";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import HeadingText from "../resuseable-component/HeadingText";
import {  BiLink, BiPlay } from "react-icons/bi";
import { DiGithub } from "react-icons/di";
import { FaGithub } from "react-icons/fa";

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
      {/* <Link to={`/projectdetails/${e.id}`}> */}

        <div
          className="relative space-y-4 cursor-pointer p-2 md:p-3 rounded-2xl 
          shadow-2xl transition duration-500 flex flex-col md:flex-row gap-3"
          style={{
            backgroundColor: e.bgColor || "#1E293B",
            color: e.textColor || "#F8FAFC",
          }}
        >
          {/* Image */}
          <motion.div
            style={{ scale: imageScale }}
            className="h-[260px] w-full md:max-w-[50%] rounded-xl overflow-hidden "
          >
            <img
              src={e.pics}
              alt="project-title"
              className="w-full h-full  object-cover group-hover:scale-[1.1] rounded-lg
               transition-transform duration-500 ease-out"
            />
          </motion.div>

          <motion.div className="md:max-w-[50%] w-full flex flex-col gap-5 ">
            
            <div className="flex items-center justify-between w-full">

<div className="flex items-center justify-between w-full">


       
            {/* Title */}
            <h1
              className="md:text-4xl text-2xl font-semibold"
              style={{ color: e.textColor }}
            >
              {e.title}
            </h1>

                 <div className="flex items-center gap-1">
           <a href={e.preview}> <BiLink  size={24}/> </a>
           <h1> <BiPlay  size={24}/> </h1>
           <Link href={e.github_link}> <FaGithub size={24}/> </Link>
            </div>

            </div>


                 </div>

            {/* Description */}
            <h1
              className="text-sm sm:text-base  opacity-80"
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
              <ul className="flex flex-wrap md:gap-1 text-2xl md:gap-2">
                <h1  className={`px-3 py-1 text-center  rounded-lg text-sm bg-[#fdf1c9] border text-[#2563EB]
    `}>
                  {e.iconOne}</h1>
                               <h1  className={`px-3 py-1 text-center  rounded-lg text-sm bg-[#d2f9e6] border
            text-[#16A34A]
    `}> {e.iconTwo}</h1>
    <h1  className={`px-3 py-1 text-center  rounded-lg text-sm bg-[#daebfd] border
            text-[#EA580C]
    `}> {e.iconThree} </h1>

                <h1  className={`px-3 py-1 text-center  rounded-lg text-sm bg-[#637391] 
            text-white
    `}> {e.iconFour} </h1>
              </ul>

          
       


            </div>

          </motion.div>
        </div>

      {/* </Link> */}
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

    const getBgColor = (status) => {

  if(!status) {
        return ''
      }

    switch(status.lowercase()) {

    

      case  'iconOne':
      return {bgColor:'' };
          case  'iconTwo':
      return {bgColor:'' };

          case  'iconThree':
        return {bgColor:'' };

          case  'iconFour':
            return {bgColor:'' };

   default:
    return
      
    }
  }


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
