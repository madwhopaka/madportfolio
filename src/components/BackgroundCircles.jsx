import React from 'react'
import { motion } from 'framer-motion';

const BackgroundCircles = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ scale: [1, 2, 2, 3, 1], opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0], borderRadius: ["20%", "20%", "50%", "80%", "20%"], duration: 2.5 }} className="flex justify-center items-center">
            <div className="absolute border rounded-full border-[#333333] h-[200px] w-[200px] animate-ping mt-[52px]" />
            <div className="absolute border rounded-full border-[#333333] h-[300px] w-[300px] mt-[52px]" />
            <div className="absolute border rounded-full border-[#333333] h-[500px] w-[500px] mt-[52px]" />
            <div className="absolute border rounded-full border-[#F7AB0A] opacity-20 h-[650px] w-[650px] mt-[52px] animate-pulse" />
            <div className="absolute border rounded-full border-[#333333] h-[800px] mt-[52px] w-[800px] animate-pulse" />
        </motion.div>

    )
}

export default BackgroundCircles