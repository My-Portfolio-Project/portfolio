import AnimatedText from "../animations/AnimatedText";
import HeadingText from "../resuseable-component/HeadingText";

const About = () => {
  return (
    <section className="flex flex-col-reverse items-end md:items-start md:flex-row  justify-between min-h-[300px]
    lg:px-4 p-3 md:p-0 gap-8 md:gap-5 ">
      


      <div className="flex flex-col lg:max-w-[950px] gap-4
       w-full h-full lg:h-[50vh]  border-r-[2px] border-white px-4 rounded-lg">
        <h1 className="text-white text-xl font-medium opacity-85 ">
          <AnimatedText>
          I am a Software Engineer with over 3 years of experience crafting modern, responsive websites and web applications for
           businesses across diverse industries. With expertise in both front-end technologies, I deliver seamless and user-friendly digital solutions. I also provide consultative services, 
          helping businesses harness technology to scale their operations and achieve their objectives through strategic partnerships.
          </AnimatedText>
        </h1>


        <h1 className="text-white text-xl font-medium opacity-85 ">
          <AnimatedText>
          I am deeply passionate about designing intuitive interfaces and interactions that naturally connect with end-users. When I’m not building or 
          exploring innovative web experiences, you’ll likely find me playing games or enjoying a football match.
          </AnimatedText>
        </h1>
      </div>

      <div className="flex  items-start md:items-end ">
       <HeadingText number="03" title="About" />
      </div>

    </section>
  );
};

export default About;
