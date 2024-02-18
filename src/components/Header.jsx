
import { SocialIcon } from "react-social-icons";
import { motion } from 'framer-motion'


const Header = () => {
    return (
        <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 p-3 w-full xl:items-center">
            <motion.div initial={{ x: -500, scale: 0.5, opacity: 0 }} animate={{ x: 0, opacity: 1, scale: 1.0 }} transition={{ duration: 0.7 }} className="flex flex-row items-center">
                {/* Social Icons  */}
                <SocialIcon
                    url="https://youtube.com/sonnysangha"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://youtube.com/sonnysangha"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://youtube.com/sonnysangha"
                    fgColor="gray"
                    bgColor="transparent"
                />
            </motion.div>
            <div className="flex flex-row items-center text-gray-300 cursor-pointer">
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
            </div>
        </header>
    );
};

export default Header;
