import { upperSkillsData } from "../constants/data/skillsData";
import HeadingText from "../resuseable-component/HeadingText";

const TechStack = () => {
  return (
    <section className="relative flex w-full min-h-[400px] p-3 h-full justify-between items-center lg:px-4 gap-8 md:gap-5  my-10">
      <div className="flex flex-col md:flex-row gap-7 rounded-lg w-full">
        <div className="flex justify-end">
          <HeadingText number="01" title="Skills" />
        </div>

        <div className="flex items-center justify-center h-full
         lg:max-w-[1150px] w-full space-3 rounded-lg border-l-2 border-white overflow-hidden px-2">

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full ">
            {upperSkillsData.map((skill, index) => {
  
              const largeWidth =
                skill.id === "6" || skill.id === "7"  || skill.id === "11" || skill.id === "10" || skill.id === "2" || skill.id === "3";

              return (
                <div
                  key={index}
                  className={`shadow-lg rounded-lg flex flex-col items-center justify-center
                     w-[200px] h-[120px]
                       bg-zinc-950 
                       ${largeWidth && "w-[220px] h-[00px] border-[1px] border-white my-2" }`}
                >
                  <h1
                    className={`text-5xl ${
                      skill.color === "yellow"
                        ? "text-yellow-500"
                        : "text-white"
                    }`}
                  >
                    {skill.icon}
                  </h1>
                  <h1 className="text-white">{skill?.title}</h1>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default TechStack;
