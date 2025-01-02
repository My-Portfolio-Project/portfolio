import AnimatedText from "../animations/AnimatedText";
import HeadingText from "../resuseable-component/HeadingText";

const About = () => {
  return (
    <section className="flex flex-col-reverse items-end md:items-start md:flex-row  mb-5 justify-between min-h-[300px]
    lg:px-4 p-3 md:p-0 gap-8 md:gap-5">
      
    

      <div className="flex flex-col gap-3 lg:max-w-[950px]
       w-full lg:h-[30vh]  border-r-[2px] border-white px-4 rounded-lg">
        <h1 className="text-white ">
          <AnimatedText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
             sunt in culpa qui officia deserunt mollit anim id est laborum.
          </AnimatedText>
        </h1>
      </div>

      <div className="flex  items-start md:items-end ">
       <HeadingText number="02" title="About" />
      </div>
    </section>
  );
};

export default About;
