
import { motion } from "framer-motion";
import { contactData } from "../constants/data/contactData";
import { Link } from "react-router-dom";

const Hero = () => {
  const words = "You got here! I'm Teitei Wisdom, a fullstack software developer, technical writer, and coding tutor. I develop industry standard products that solve everyday problems, with an emphasis on user experience, accessibility and performance.".split(
    " "
  );

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center w-full text-center  h-screen gap-4">

      <div className="flex flex-row md:flex-col md:gap-6 gap-3 md:border-r-[2px] md:border-white items-center justify-center px-3">
{
  contactData.map((h,index) => {

    return (
      <Link className=""  key={index}>
        <motion.h1 className="text-white text-2xl">
            {h.icon}
        </motion.h1>
      </Link>
    )
  })
}
      </div>

      <div  className="flex flex-col items-center">
        <h1 className="lg:text-7xl md:text-5xl text-4xl font-extrabold text-white ont-normal">
          Fullstack Software Developer
          <br />
          Technical Writer | Coding Tutor
        </h1>

        <p className="flex gap-2 flex-wrap w-full text-center py-10 items-center justify-center text-white   px-8">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="relative  text-center"
              initial={{ opacity: 0.2 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: i * 0.1 }} 
            >
              <span className="absolute opacity-10 text-center">{word}</span>
              {word}
            </motion.span>
          ))}
        </p>

        <div className="flex gap-3">

<button className="bg-white w-[150px] h-[70px]  rounded-lg px-6 py-2 flex items-center justify-center"
style={{boxShadow: "0px 1px 2px 0px #1018280D"}}>
    <h1  className=" font-bold text-base  text-black">Contact Me</h1>
</button>

<button className="bg-white w-[150px] h-[70px]  rounded-lg px-3 py-2 flex items-center justify-center"
style={{boxShadow: "0px 1px 2px 0px #1018280D"}}>
    <h1  className=" font-bold text-base  text-black">View Resume</h1>
</button>

</div>

      </div>

    </section>
  );
};

export default Hero;
