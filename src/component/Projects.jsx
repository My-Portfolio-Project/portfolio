// import React from "react";


import { projectsData } from "../constants/data/projectsData";

const Projects = () => {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
      <div className="mb-16 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-medium text-white tracking-tight mb-4">
            Featured Work
          </h2>
          <p className="text-zinc-500 max-w-lg text-sm">
            Selected projects that define my approach to problem solving.
          </p>
        </div>
        <a
          href="#"
          className="hidden items-center text-xs font-medium text-white hover:text-zinc-300 transition-colors"
        >
          View All Repos <i className="w-3 h-3 ml-1">↗</i>
        </a>
      </div>

      <div className="space-y-24">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className={`sticky ${project.top}  bg-gradient-to-b from-[#121212] to-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl`}
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side */}
              <div className="p-8 md:p-12 flex flex-col justify-between h-full min-h-[300px]">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-px w-6 bg-white/20"></div>
                    <span className="text-xs font-medium tracking-wider uppercase text-zinc-400">
                      {project.tag}
                    </span>
                  </div>
                  <h3 className="text-3xl font-medium text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Devicon Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="flex items-center gap-1 text-[10px] bg-white/5 border border-white/5 px-2 py-1 rounded text-zinc-300"
                      >
                        <i className={`${tag.icon} text-lg`}></i> {tag.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="pt-8 flex gap-2">
                  {project.preview && (
                    <a
                      href={project.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-medium text-white hover:text-zinc-300 transition-colors"
                    >
                      <i className="devicon-chrome-plain text-lg"></i> Preview
                    </a>
                  )}
                  {project.github_link && (
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-medium text-white hover:text-zinc-300 transition-colors"
                    >
                      <i className="devicon-github-original text-lg"></i> Code
                    </a>
                  )}
                </div>
              </div>

              {/* Right Side / Visual */}
              {project.pics && (
                <div className="bg-[#050505] relative border-l border-white/5 flex items-center justify-center overflow-hidden group">
                  <img
                    src={project.pics}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

