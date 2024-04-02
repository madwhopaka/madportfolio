import { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Header = () => {

    return (
        <header className="sticky top-0 flex items-start justify-between mx-auto max-w-7xl z-20 p-4 xl:items-center">
            <motion.div
                initial={{ x: -200, scale: 0.5, opacity: 0 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
            >
                {/* Social Icons  */}
                <SocialIcon
                    url="https://leetcode.com/madkong/"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://github.com/madwhopaka"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://www.linkedin.com/in/madhu-paka-1b69ba220"
                    fgColor="gray"
                    bgColor="transparent"
                />
            </motion.div>
            <motion.div
                initial={{ x: 200, scale: 0.5, opacity: 0 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="flex flex-row items-center text-gray-300 cursor-pointer"
            >
                {/* Social Icons  */}
                <SocialIcon
                    className="cursor-pointer"
                    network="email"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
                    Get in touch
                </p>
            </motion.div>
        </header>
    );
};

export default Header;
