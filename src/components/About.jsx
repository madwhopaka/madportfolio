import React from "react";
import { motion } from "framer-motion";
import img2 from "../assets/img2.jpeg";
const About = () => {
    return (
        <div className="h-screen text-center relative flex flex-col justify-center md:justify-evenly px-10 mx-auto max-w-7xl items-center md:text-left md:flex-row">
            <h3 className="absolute top-24 ml-8 md:ml-8 tracking-[18px] text-xl md:text-2xl text-gray-500 uppercase">
                About{" "}
            </h3>
            <motion.img
                initial={{ x: -300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="my-6 md:my-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 lg:h-[300px] lg:w-[200px] lg justify-center items-center"
                src={img2}
            />
            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-xl my-3 md:my-3 font-semibold">
                    Here is a{" "}
                    <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
                    background
                </h4>
                <p className="font-thin text-left text-xs md:text-base">
                    "From the bustling streets of Mumbai to the laid-back vibes of
                    Hyderabad, 🏙️ I'm a 2023 engineering grad with a knack for turning
                    caffeine into code. By day, I navigate the labyrinth of data at a
                    market research firm, 📊 by night, I'm the unsung hero of pixels and
                    code, crafting websites and apps like a digital Michelangelo. 💻 When
                    I'm not coding, you'll find me in the front row of the latest
                    blockbuster, 🍿 popcorn in hand, critiquing CGI like a seasoned film
                    critic."
                </p>
            </div>
        </div>
    );
};

export default About;
