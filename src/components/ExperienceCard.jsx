import React from 'react'
import { motion } from 'framer-motion'
import experience from '../assets/experience.jpg'
import aws from '../assets/aws.svg'
import redux from '../assets/redux.png'
import express from "../assets/express.svg"
import github from "../assets/github.png"
import node from '../assets/node.png'
import react from '../assets/react.svg'
import mongo from '../assets/mongo.svg'

const ExperienceCard = () => {
    return (
        <article className='flex flex-col snap-center rounded-lg flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] hover:opacity-100 opacity-40 p-6 md:p-10 bg-[#292929] md:mt-20 cursor-pointer transition-opacity duration-200 overflow-clip items-center'>
            <motion.img src={experience} transition={{ duration: 1 }} initial={{ y: -100, opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} viewPort={{ once: true }} className="w-20 h-20 md:w-32 md:h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center " />
            <div className='flex flex-col justify-center items-center px-0 md:px-10'>
                <h4 className='text-xl text-center font-light'>CEO OF PAPAFAME</h4>
                <p className='font-bold text-lg md:text-2xl mt-2'>PAPAFAM</p>
                <div className='flex justify-center flex-wrap space-y-2 space-x-2 my-2'>
                    <img className='h-[40px] object-cover rounded-full' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
                    <img className='h-[40px] object-cover rounded-full' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
                    <img className='h-[40px] object-cover rounded-full' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                    <img className='h-[40px]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />

                </div>
                <p className='py-4 uppercase'>Started work - Ended work</p>
                <ul className="list-disc text-base md:text-lg space-y-2">
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores architecto iure itaque sed, iusto voluptatem sequi a blanditiis facilis explicabo commodi doloremque.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores architecto iure itaque sed, iusto voluptatem sequi a blanditiis facilis explicabo commodi doloremque.</li>
                </ul>
            </div>
        </article>


    )
}

export default ExperienceCard