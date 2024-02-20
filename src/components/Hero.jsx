import BackgroundCircles from "./BackgroundCircles";
import Typewriter from "./Typewriter";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import img1 from "../assets/profile_img.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I am Madhu Paka",
      "Guy-who-loves-Food.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const variants = {
    gradient1: {
      background: "linear-gradient(45deg, #ff00ff, #00ffff)",
      transition: {
        duration: 2, // Duration of the transition
        ease: "easeInOut", // Easing function
      },
    },
    gradient2: {
      background: "linear-gradient(45deg, #00ff00, #ff0080)",
      transition: {
        duration: 2, // Duration of the transition
        ease: "easeInOut", // Easing function
      },
    },
  };
  return (
    <div className="h-screen relative flex-col flex space-y-4 justify-center items-center text-center overflow-hidden mt-10">
      {/* <BackgroundCircles /> */}
      {/* <motion.img initial={{ y: 0 }} animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} src={img1} className="relative flex justify-center items-center rounded-full object-cover h-[150px] w-[150px] lg:h-[250px] lg:w-[250px] mx-auto" /> */}
      <motion.img
        animate={{
          borderRadius: [
            "60% 40% 30% 70%/60% 30% 70% 40%",
            "30% 60% 70% 40%/50% 60% 30% 60%",
            "60% 40% 30% 70%/60% 30% 70% 40%",
          ],
        }}
        transition={{ repeat: Infinity, duration: 4 }}
        src={img1}
        className="relative flex justify-center border border-opacity-30  border-gray-300 items-center object-cover h-[250px] w-[250px] lg:h-[250px] lg:w-[250px] mx-auto z-666"
      />
      <div className="z-20">
        <motion.div
          transition={{ repeat: Infinity, duration: 1.5 }}
          initial={{
            background: "linear-gradient(45deg, #FFA500, #FF4500)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          animate={{
            background: "linear-gradient(45deg, #FF4500, #FFA500)", // Example gradient colors
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          className="text-sm lg:text-2xl uppercase font-bold text-white pb-2 tracking-[5px] lg:tracking-[10px]"
        >
          Software Engineer
        </motion.div>
        <h1 className="text-2xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="orange" />
        </h1>
        <div className="pt-5">
          <button className="heroButton">About</button>
          <button className="heroButton">Experience</button>
          <button className="heroButton">Skills</button>
          <button className="heroButton">Projects</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
