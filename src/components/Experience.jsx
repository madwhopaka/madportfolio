import React from 'react'
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import yougov from '../assets/yougov.jpg';
import saathi from '../assets/saathi.jpg';
import rapidquote from '../assets/rapidquote.jpg'

const Experience = () => {
    const experience = [
        {
            title: "Rapidquote, Frontend Intern",
            description:
                "Worked on RapidQuote a B2B web application for 3d Printing manufacturers used for generating instant automated quotations.",
            icon: rapidquote,
            date: "Mar 2022 - July 2022",
        },
        {
            title: "React-Native Developer, Controlzed",
            description: "Spearheaded the development of the YCF Saathi app and successfully launched the app, which has been utilized by thousands of users, showcasing its widespread adoption and impact",
            icon: saathi,
            date: "Dec'23 - Mar'23",
        },
        {
            title: "Graduate Survey Scripter, YouGov",
            description:
                "Currently working at YouGov, a market research firm as a survey scripter where I use leverage technologies such as Python, HTML, JS, CSS and a custom software to design and script surveys.",
            icon: yougov,
            date: "2023-Present",
        }

    ];

    return (
        <div className="flex relative flex-col h-screen overflow-y-hidden justify-center items-center md:flex-row text-left">
            <h3 className="absolute top-20 md:top-20 ml-8 md:ml-8 tracking-[13px] text-xl md:text-2xl text-gray-500 uppercase">
                Experience{" "}
            </h3>
            <div className="absolute top-40 flex overflow-y-clip">
                <VerticalTimeline lineColor='#FFA500'>
                    {
                        experience.map((ex, index) => {
                            return <VerticalTimelineElement icon={<img src={ex.icon} className="rounded-full" />} iconClassName='border-0' iconStyle={{ background: 'transparent', color: 'transparent', border: "0px solid black" }} contentArrowStyle={{ borderRight: '7px solid  #292929' }} contentStyle={{ boxShadow: "none", borderRadius: "10px", backgroundColor: "#292929", backdropFilter: "blur(10px)" }} className="vertical-timeline-element--work" >
                                <div className="flex justify-between items-center"><h1 className="text-[12px] md:text-[14px]">{ex.title}</h1><div className="text-[11px] md:text-[12px] text-[#FFA500] font-medium ">{ex.date}</div></div>
                                <div>{ex.location}</div>
                                <div className="font-light text-[10px] md:text-[12px] py-1">{ex.description}</div>
                            </VerticalTimelineElement>
                        })
                    }
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Experience


