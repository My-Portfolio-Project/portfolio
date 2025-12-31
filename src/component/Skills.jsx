// import React from 'react'

import { skillsData } from "../constants/data/skillsData";




const Skills = () => {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-24">
        
      <div className="mb-16">
        <h2 className="text-3xl font-medium text-white tracking-tight mb-2">
          Tech Stack
        </h2>
        <p className="text-zinc-500 max-w-lg text-sm">
          A curated stack of technologies I use to bring ideas to life, focused on scalability and performance.
        </p>
      </div>

      <div className="space-y-8 relative">

        {skillsData.map((section) => (
          <div
            key={section.id}
            className={`sticky ${section.top} ${section.bg} border border-white/10 rounded-2xl 
                p-8 md:p-12 transition-all hover:border-white/20 shadow-2xl shadow-black/50`}
          >
            <div className="flex flex-col  gap-12 justify-between">
              
              {/* Left Side */}
              <div className="md:w-1/2 space-y-4">
                <div
                  className={`w-10 h-10 rounded-lg ${section.icon.bg} flex items-center justify-center border ${section.icon.border} mb-4`}
                >
                  <i className={`${section.icon} text-2xl`}></i>
                </div>

                <h3 className="text-2xl font-medium text-white tracking-tight">
                  {section.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {section.description}
                </p>
              </div>

              {/* Right Side */}
              <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {section.skills.map((skill, index) => (
                  <div key={index} className="bg-white/5 px-3 py-1 rounded-lg  md:max-w-44 w-full
                  border border-white/5 flex flex-col md:flex-row gap-3 items-center justify-center">

                    <div className="flex items-center gap-2">
  <i className={`${skill.icon} text-xl`}></i>

</div>

                 <div className="flex flex-col " >  
                    <div className="text-white font-medium text-sm ">{skill.name}</div>
                    <div className="text-xs text-zinc-500">{skill.detail}</div>

                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills