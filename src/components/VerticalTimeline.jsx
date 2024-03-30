import React from 'react'
import { motion } from 'framer-motion';


const events = [
    { id: 1, title: 'Event 1', description: 'Description of event 1', date: '2021-01-01' },
    { id: 2, title: 'Event 2', description: 'Description of event 2', date: '2021-02-01' },
    // Add more events as needed
];


const VerticalTimeline = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className='flex justify-center items-center'>
                <TimelineCard />
                <motion.div initial={{ opacity: 0, scaleY: 0.5 }} whileInView={{ opacity: 100, scaleY: 2 }} transition={{ duration: 0.5 }} className="w-[5px] h-[200px] bg-white rounded-full opacity-50 mt-24 z-1"></motion.div>
                { }
                <div className="flex items-center">
                    <div className="w-10 h-10 ml-4 bg-blue-500 rounded-full flex justify-center items-center">
                        {/* Icon or date */}
                        <span className="text-white text-sm">{new Date(events[0].date).getFullYear()}</span>
                    </div>
                    <div className="flex-grow border-t-2 border-gray-200"></div>
                </div>
                <div className="mt-3">
                    <h3 className="font-bold text-lg">{events[0].title}</h3>
                    <p className="text-gray-600 mt-1">{events[0].description}</p>
                </div>
            </div>
        </div>
    )
}

export default VerticalTimeline


const TimelineCard = () => {

    return (
        <div className="flex mt-1 p-4 mr-2 rounded-lg bg-[#292929] justify-center w-[300px] items-center">
            <div className="mt-3 mr-3">
                <h3 className="font-bold text-lg text-center">{events[0].title}</h3>

            </div>
            <div className="w-4 h-4 transform translate-x-7 rotate-90 bg-[#303030] border-transparent border-4 border-solid border-t-0 border-l-8 border-r-8 border-b-8 bg-transparent" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}></div>
        </div>
    )
}