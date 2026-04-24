'use client';

import React, { useState } from 'react'
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react"
import { useTranslation } from "@/app/hooks/useTranslation";

const experienceData = [
    {
        id: 1,
        logo: '/logos/onrtech.png',
        title: 'Full-Stack Developer',
        company: 'ONRTECH - Estatias Multi-Tenant SaaS Site Generator',
        location: 'France, Remote',
        dateRange: 'Jan 2026 - May 2026',
        description: 'Engineered a SaaS platform that lets property managers launch booking websites instantly handling payments, bookings, and calendar syncing automatically, while saving hosts 15-30% on OTA commissions.',
        achievements: [
            'Architected 9 NestJS microservices (API Gateway, Site Generator, Booking ..) coordinating core platform features',
            'Built dynamic website generator using EJS templates + Next.js that deploys customized sites on-demand with automatic port allocation and lifecycle management',
            'Implemented AI-powered SEO module generating property descriptions 10x faster, integrated with real-time calendar synchronization (node-ical + Puppeteer)',
            'Deployed Stripe Connect infrastructure enabling automatic payment processing and revenue distribution to hosts with full financial tracking',
            'Built secure multi-tenant authentication (JWT + Firebase) with role-based access controls ensuring property isolation and data security'
        ],
        technologies: [
            'NestJS', 'TypeScript', 'Next.js', 'Tailwind CSS','Microservices Architecture', 'EJS Templates', 'Stripe Connect', 'MongoDB', 'Mongoose', 'JWT Authentication', 'API Gateway Pattern', 'MongoDB', 'Mongoose', 'Firebase','SMTP', 'Git', 'Github', 'Vercel'
        ]
    }
];

const Experience = ({ isDarkMode }) => {
    const { t } = useTranslation();
    const [expandedItems, setExpandedItems] = useState({});
    const achievementsData = t('experienceData.achievements');

    const toggleExpand = (id) => {
        setExpandedItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="experience"
            className='w-full px-[8%] md:px-[12%] py-20 scroll-mt-20 bg-[#f8fafc] dark:bg-gray-900'
        >
            {/* Title with underline */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-16'
            >
                <h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-heading'>
                    {t('experience.title')}
                </h2>
                <div className='w-14 h-1 bg-[#1a365d] dark:bg-cyan-400 mx-auto'></div>
            </motion.div>

            {/* Experience Items with Timeline */}
            <div className='max-w-4xl mx-auto relative'>
                {/* Vertical Timeline Line */}
                <div className='absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#1a365d] via-[#1a365d]/50 to-transparent dark:from-cyan-400 dark:via-cyan-400/50 hidden md:block'></div>

                <div className='space-y-8'>
                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className='flex gap-6 relative'
                        >
                            {/* Logo with timeline connection */}
                            <div className='flex-shrink-0 w-16 h-16 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center overflow-hidden border-2 border-gray-200 dark:border-gray-700 z-10'>
                                <div className='w-10 h-10 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-800 dark:text-white font-bold text-[10px] border border-gray-300 dark:border-gray-600 p-1'>
                                    {exp.company.substring(0, 3).toUpperCase()}
                                </div>
                            </div>

                            {/* Content Card with hover animation */}
                            <motion.div
                                whileHover={{
                                    scale: 1.01,
                                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                                }}
                                transition={{ duration: 0.2 }}
                                className='flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-100 dark:border-gray-700 hover:border-[#1a365d] dark:hover:border-cyan-400 cursor-default transition-colors duration-200'
                            >
                                {/* Header */}
                                <div className='flex justify-between items-start mb-2'>
                                    <div>
                                        <h3 className='text-xl font-bold text-[#1a365d] dark:text-cyan-400 mb-1'>
                                            {exp.title}
                                        </h3>
                                        <p className='text-gray-800 dark:text-gray-200 font-semibold text-base'>
                                            {exp.company}
                                        </p>
                                    </div>
                                    <div className='w-8 h-0.5 bg-gray-300 dark:bg-gray-600 rounded-full mt-3'></div>
                                </div>

                                {/* Location & Date */}
                                <div className='flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4'>
                                    <span className='flex items-center gap-1'>
                                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                                        </svg>
                                        {exp.location}
                                    </span>
                                    <span className='flex items-center gap-1'>
                                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                                        </svg>
                                        {exp.dateRange}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4'>
                                    {t('experienceData') ? t('experienceData').description : exp.description}
                                </p>

                                {/* Expanded Achievements - Shows BEFORE button when expanded */}
                                <AnimatePresence>
                                    {expandedItems[exp.id] && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className='overflow-hidden'
                                        >
                                            <div className='mb-5'>
                                                <h4 className='text-sm font-bold text-gray-800 dark:text-gray-200 mb-3'>{t('experience.keyAchievements')}</h4>
                                                <div className='space-y-2'>
                                                    {achievementsData.map((achievement, idx) => (
                                                        <div key={idx} className='flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300'>
                                                            <span className='text-cyan-600 dark:text-cyan-400 font-bold flex-shrink-0 mt-0.5'>&gt;</span>
                                                            <span>{achievement}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Show/Hide Key Achievements Button */}
                                <div className='flex justify-center mb-5'>
                                    <button
                                        onClick={() => toggleExpand(exp.id)}
                                        className='px-6 py-2.5 bg-[#1a365d] hover:bg-[#234681] dark:bg-cyan-600 dark:hover:bg-cyan-500 text-white text-sm font-medium rounded-full transition-all duration-200 hover:shadow-lg'
                                    >
                                        {expandedItems[exp.id] ? t('experience.hideKeyAchievements') : t('experience.showKeyAchievements')}
                                    </button>
                                </div>

                                {/* Technologies */}
                                <div className='flex flex-wrap gap-1.5 mb-3'>
                                    {exp.technologies && exp.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className='px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs font-semibold rounded text-gray-700 dark:text-gray-300'
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Timeline end dot */}
                <div className='absolute left-[30px] bottom-0 w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 hidden md:block'></div>
            </div>
        </motion.div>
    )
}

export default Experience
