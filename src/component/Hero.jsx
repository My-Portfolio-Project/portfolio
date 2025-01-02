
import { motion } from "framer-motion";

const Hero = () => {
  const words = "You got here! I'm Teitei Wisdom, a fullstack software developer, technical writer, and coding tutor. I develop industry standard products that solve everyday problems, with an emphasis on user experience, accessibility and performance.".split(
    " "
  );

  return (
    <section className="flex flex-col items-center justify-center w-full text-center  h-screen">
      <div >
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

      </div>
    </section>
  );
};

export default Hero;
