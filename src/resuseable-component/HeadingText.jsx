/* eslint-disable react/prop-types */
import AnimatedText from "../animations/AnimatedText";

const HeadingText = ({ title, number }) => {
  return (
    <div
      className="flex gap-2 max-h-[9vh] h-full w-full"
      style={{
        WebkitTextStroke: "1px #eee",
      }}
    >
      {/* AnimatedText for number */}
      <p className="text-white font-proza text-4xl md:text-5xl lg:text-6xl ">
  {number}
      </p>

      {/* AnimatedText for title */}
      <h1 className="text-white md:text-5xl  text-3xl font-playfair border-l-[3px] px-2  border-white flex items-center justify-center ">
        <AnimatedText type="BIGTEXT">{title}</AnimatedText>
      </h1>
    </div>
  );
};

export default HeadingText;
