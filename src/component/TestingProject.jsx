/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
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
            className="h-[200px] md:h-[300px] w-full md:max-w-[50%] rounded-xl overflow-hidden p-2"
          >
            <img
              src={e.pics}
              alt="project-title"
              className="w-full h-full  object-cover group-hover:scale-[1.1]
               transition-transform duration-500 ease-out"
            />
          </motion.div>


<motion.div
className="md:max-w-[50%] w-full flex flex-col gap-2 ">
          {/* Title */}
          <h1
            className="md:text-4xl text-2xl font-semibold"
            style={{ color: e.textColor }}
          >
            {e.title}
          </h1>

          {/* Info */}
          <div
            className="flex flex-col md:flex-row flex-wrap justify-between items-start md:border-t pt-2 md:items-center gap-2"
            style={{ borderColor: e.textColor }}
          >
            <ul className="flex space-x-2 text-2xl">
              <li>{e.iconOne}</li>
              <li>{e.iconTwo}</li>
              <li>{e.iconThree}</li>
              <li>{e.iconFour}</li>
            </ul>

            <ul>
              <li className="underline">{e.role}</li>
            </ul>

            <ul>
              <li className="underline">{e.year}</li>
            </ul>
          </div>

          {/* Tasks */}
          <div className="flex flex-col gap-2">
            {e.task.map((t, idx) => (
              <ul key={idx} className="list-inside space-y-1">
                <li>{t.taskOne}</li>
                <li>{t.taskTwo}</li>
                <li>{t.taskThree}</li>
              </ul>
            ))}
          </div>
          </motion.div>

        </div>
      </Link>

    </motion.div>
  );
};



const TestingProject = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative min-h-[130vh] ">
      {projectsData.map((e, index) => {
        const targetScale = 1 - (projectsData.length - index) * 0.05;

      
        const step = 1 / projectsData.length;
        const range = [index * step, 1];

        return (
          
          <Card
            key={e.id}
            e={e}
            index={index}
            total={projectsData.length}
            range={range}
            targetScale={targetScale}
            progress={scrollYProgress}
          />
        );
      })}
    </div>
  );
};


export default TestingProject;
