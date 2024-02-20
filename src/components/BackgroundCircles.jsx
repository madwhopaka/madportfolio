import React from "react";
import { motion } from "framer-motion";

const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 1.5 }}
      className="relative flex justify-center items-center mt-24"
    >
      <div className="absolute rounded-full h-[150px] w-[150px] animate-ping border border-[#333333]"></div>
      <div className="absolute rounded-full h-[225px] w-[225px] border border-[#333333]"></div>
      <div className="absolute rounded-full h-[375px] w-[375px] border border-[#333333]"></div>
      <div className="absolute rounded-full h-[525px] w-[525px] animate-pulse border border-[#F7AB0A] opacity-20"></div>
      <div className="absolute rounded-full h-[675px] w-[675px] border border-[#333333]"></div>
    </motion.div>
  );
};

export default BackgroundCircles;

{
  /* <motion.div initial={{ opacity: 0 }} animate={{ scale: [1, 2, 2, 3, 1], opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0], borderRadius: ["20%", "20%", "50%", "80%", "20%"], duration: 2.5 }} className="flex flex-col items-center justify-center">
<div className="absolute border rounded-full border-[#333333] h-[180px] w-[180px] animate-ping mt-52" />
<div className="absolute border rounded-full border-[#333333] h-[240px] w-[240px] mt-52" />
<div className="absolute border rounded-full border-[#333333] h-[460px] w-[460px] mt-52" />
<div className="absolute border rounded-full border-[#F7AB0A] opacity-20 h-[580px] w-[580px] mt-52 animate-pulse" />
<div className="absolute border rounded-full border-[#333333] h-[740px] mt-52 w-[740px] animate-pulse" />
</motion.div> */
}
