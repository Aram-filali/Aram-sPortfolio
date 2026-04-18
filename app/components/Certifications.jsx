'use client';

import React from 'react'
import Image from "next/image";
import { motion } from "motion/react"
import { useTranslation } from "@/app/hooks/useTranslation";

const certificationsData = [
    {
        id: 1,
        title: 'Building LLM Applications With Prompt Engineering',
        subtitle: 'Professional Certificate',
        organization: 'NVIDIA',
        issuer: 'NVIDIA Deep Learning Institute',
        date: 'November 2025',
        image: '/nvidia-llm.png',
        certificateUrl: 'https://learn.nvidia.com/certificates?id=WvS40nCERFCjiosuQ7UEjQ',
    },
    /*{
        id: 2,
        title: 'Initiation au rôle de Scrum Master',
        subtitle: 'Professional Certification',
        organization: 'Scrum Alliance',
        issuer: 'Agile Training',
        date: 'December 2024',
        image: '/scrum-master.jpg',
        certificateUrl: '#',
    },*/
];

const Certifications = ({ isDarkMode }) => {
    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="certifications"
            className='w-full px-[8%] md:px-[12%] py-20 scroll-mt-20 bg-white dark:bg-gray-900'
        >

            {/* Title with underline */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-16'
            >
                <h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-Ovo'>
                    {t('certifications.title')}
                </h2>
                <div className='w-14 h-1 bg-[#1a365d] dark:bg-cyan-400 mx-auto'></div>
            </motion.div>

            {/* Certifications Grid */}
            <div className='flex justify-center mt-12'>
                <div className='w-full max-w-sm'>
                {certificationsData.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className='bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-gray-700'
                    >
                        {/* Certificate Image */}
                        <div className='relative w-full h-32 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 overflow-hidden'>
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className='w-full h-full object-cover'
                            />
                        </div>

                        {/* Certificate Info */}
                        <div className='p-5'>
                            {/* Title */}
                            <h4 className='font-bold text-gray-900 dark:text-white mb-2 line-clamp-2'>
                                {cert.title}
                            </h4>

                            {/* subtitle */}
                            <p className='text-xs text-gray-600 dark:text-gray-400 mb-3'>
                                {t('certifications.professionalCertificate')}
                            </p>

                            {/* Date */}
                            <p className='text-sm font-semibold text-[#1a365d] dark:text-cyan-400 mb-4 flex items-center gap-1'>
                                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                                </svg>
                                {t('certifications.november2025')}
                            </p>

                            {/* View Certificate Button */}
                            <motion.a
                                href={cert.certificateUrl}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='w-full inline-block text-center px-4 py-2 bg-[#1a365d] dark:bg-cyan-600 text-white text-sm font-semibold rounded-lg hover:bg-[#234681] dark:hover:bg-cyan-500 transition-colors'
                            >
                                {t('certifications.viewCertificate')}
                            </motion.a>
                        </div>
                    </motion.div>
                ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Certifications
