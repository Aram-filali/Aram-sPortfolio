'use client';

import { assets, workData } from '@/assets/assets'
import React, { useState } from 'react'
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react"
import { ArrowRight } from 'lucide-react'
import { useTranslation } from "@/app/hooks/useTranslation";

const Work = ({ isDarkMode }) => {
  const { t } = useTranslation();
  const [expandedProjects, setExpandedProjects] = useState({});
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projectsDetails = t('projectsDetails');

  const toggleProject = (index) => {
    setExpandedProjects(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleShowMore = () => {
    setShowAllProjects(prev => !prev);
  };

  const displayedProjects = showAllProjects ? workData : workData.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="projects"
      className='w-full px-[8%] py-10 scroll-mt-20 bg-[#f8fafc] dark:bg-gray-900'
    >
      {/* Title with underline */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-16'
      >
        <h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-Ovo'>
          {t('projects.title')}
        </h2>
        <div className='w-14 h-1 bg-[#1a365d] dark:bg-cyan-400 mx-auto'></div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center max-w-4xl mx-auto mb-16 text-gray-600 dark:text-gray-400 leading-relaxed'
      >
        {t('projects.description')}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full'
      >
        {displayedProjects.map((project, index) => (
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            key={index}
            className='font-Poppins bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col'
          >
            {/* Image Container - Reduced height */}
            <div className='relative h-52 w-full bg-gray-200 dark:bg-gray-700 overflow-hidden'>
              <div
                className='absolute inset-0 bg-cover bg-center'
                style={{ backgroundImage: `url(${project.bgImage})` }}
              />
            </div>

            {/* Content Container - Tighter padding */}
            <div className='p-4 flex flex-col flex-grow'>
              {/* Title - Smaller */}
              <h3 className='text-xl font-extrabold mb-2 text-gray-900 dark:text-white leading-tight'>
                {t('projectsData') && t('projectsData')[index] ? t('projectsData')[index].title : project.title}
              </h3>

              {/* Description - Full text without clamp */}
              <p className='text-sm font-medium text-gray-600 dark:text-gray-400 mb-3 leading-relaxed'>
                {t('projectsData') && t('projectsData')[index] ? t('projectsData')[index].description : project.description}
              </p>

              {/* Show More/Less Button - Smaller */}
              <button
                onClick={() => toggleProject(index)}
                className='w-max mb-3 px-4 py-2 bg-[#1a365d] dark:bg-cyan-600 text-white text-sm rounded-full font-bold hover:bg-[#234681] dark:hover:bg-cyan-500 transition-colors shadow-sm'
              >
                {expandedProjects[index] ? t('projects.showLess') : t('projects.showMore')}
              </button>

              {/* Expanded Details */}
              <AnimatePresence initial={false}>
                {expandedProjects[index] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className='mb-3 pb-3 border-b border-gray-200 dark:border-gray-700'>
                      <h4 className='flex items-center gap-2 text-sm font-bold text-[#1a365d] dark:text-cyan-400 mb-2'>
                        <span className='text-cyan-600 dark:text-cyan-400'>🔍</span> {t('projects.howItWorks')}
                      </h4>
                      <div className='text-sm font-medium text-gray-600 dark:text-gray-400 space-y-2 leading-relaxed'>
                        {projectsDetails && projectsDetails[index] && projectsDetails[index].details.map((detail, idx) => (
                          <p key={idx}>{detail}</p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Tech Stack Tags - Smaller */}
              <div className='flex flex-wrap gap-1.5 mb-3'>
                {project.technologies && project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className='px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs font-semibold rounded text-gray-700 dark:text-gray-300'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons - Smaller */}
              <div className='flex gap-2 mt-auto pt-3 border-t border-gray-200 dark:border-gray-700'>
                <button className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors text-xs font-bold'>
                  <svg className='w-3.5 h-3.5' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z' />
                  </svg>
                  Code
                </button>
                <button className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#1a365d] dark:bg-cyan-600 text-white rounded-lg hover:bg-[#234681] dark:hover:bg-cyan-500 transition-colors text-xs font-bold shadow-sm'>
                  <svg className='w-3.5 h-3.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                  </svg>
                  Demo
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        onClick={toggleShowMore}
        className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'
      >
        {showAllProjects ? t('projects.seeLess') : t('projects.seeMore')}
        <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${showAllProjects ? 'rotate-180' : ''}`} />
      </motion.button>
    </motion.div>
  )
}

export default Work