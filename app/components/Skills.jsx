'use client';

import React from 'react'
import Image from "next/image";
import { motion } from "motion/react"
import { useTranslation } from "@/app/hooks/useTranslation";

// Skills data with CDN icons and colors
const skillsData = [
    { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/white', color: '#181717' },
    { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032', color: '#F05032' },
    { name: 'HTML', icon: 'https://cdn.simpleicons.org/html5/E34F26', color: '#E34F26' },
    { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED', color: '#2496ED' },
    { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248', color: '#47A248' },
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB', color: '#3776AB' },
    { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', color: '#06B6D4' },
    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E', color: '#F7DF1E' },
    { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB', color: '#61DAFB' },
    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933', color: '#339933' },
    { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6', color: '#3178C6' },
    { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/white', color: '#000000' },
    { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1', color: '#4169E1' },
    { name: 'FastAPI', icon: 'https://cdn.simpleicons.org/fastapi/009688', color: '#009688' },
    { name: 'TensorFlow', icon: 'https://cdn.simpleicons.org/tensorflow/FF6F00', color: '#FF6F00' },
];

// Duplicate array for infinite scroll effect
const duplicatedSkills = [...skillsData, ...skillsData, ...skillsData];

const Skills = ({ isDarkMode }) => {
    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="technologies"
            className='w-full py-20 scroll-mt-20 bg-[#f8fafc] dark:bg-gray-900 overflow-hidden'
        >
            {/* Title with underline */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-16'
            >
                <h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-Ovo'>
                    {t('skills.title')}
                </h2>
                <div className='w-14 h-1 bg-[#1a365d] dark:bg-cyan-400 mx-auto'></div>
            </motion.div>

            {/* Scrolling Skills Container */}
            <div className='relative'>
                {/* Gradient overlays for fade effect */}
                <div className='absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f8fafc] dark:from-gray-900 to-transparent z-10'></div>
                <div className='absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f8fafc] dark:from-gray-900 to-transparent z-10'></div>

                {/* Scrolling Track */}
                <div className='flex animate-scroll-fast hover:pause'>
                    {duplicatedSkills.map((skill, index) => (
                        <div
                            key={index}
                            className='flex-shrink-0 mx-6 group cursor-pointer'
                        >
                            <div className='relative flex flex-col items-center'>
                                {/* Icon Container */}
                                <div
                                    className='w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-lg transition-all duration-300 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110'
                                >
                                    <div
                                        className='w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center transition-all duration-300'
                                    >
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className='w-full h-full object-contain'
                                        />
                                    </div>
                                </div>

                                {/* Skill Name - Shows on hover */}
                                <span
                                    className='mt-2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-medium'
                                    style={{ color: skill.color }}
                                >
                                    {skill.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CSS Animation */}
            <style jsx>{`
                @keyframes scroll-fast {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-1 * (100% / 3)));
                    }
                }
                
                .animate-scroll-fast {
                    animation: scroll-fast 5s linear infinite;
                }
                
                .animate-scroll-fast:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </motion.div>
    )
}

export default Skills