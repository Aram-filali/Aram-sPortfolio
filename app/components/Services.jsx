import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import Image from "next/image";
import { motion } from "motion/react"
import { Code2, Smartphone, Brain, Zap } from 'lucide-react'

const iconMap = {
  Code2: Code2,
  Smartphone: Smartphone,
  Brain: Brain,
  Zap: Zap,
}

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className='w-full px-[8%] md:px-[12%] py-20 scroll-mt-20 bg-[#f8fafc] dark:bg-gray-900'
    >
      {/* Title with underline */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-10'
      >
        <h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-Ovo'>
          About Me
        </h2>
        <div className='w-14 h-1 bg-[#1a365d] mx-auto'></div>
      </motion.div>

      {/* Description paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center max-w-4xl mx-auto mb-16 text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed'
      >
        I am a Full Stack AI Developer and Data Scientist, experienced in machine learning, deep learning, computer vision, and AI system deployment. I build end-to-end intelligent solutions, from model training to API integration and frontend deployment. Passionate about innovation, I combine strong analytical skills with software engineering to deliver impactful AI products.
      </motion.p>

      {/* Service Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto'
      >
        {serviceData.map(({ icon, title, description }, index) => {
          const IconComponent = iconMap[icon]
          return (
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              key={index}
              className='bg-white dark:bg-gray-800 rounded-xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow duration-300'
            >
              {/* Icon + Title row */}
              <div className='flex items-start gap-3 mb-3'>
                <div className='w-10 h-10 flex-shrink-0 flex items-center justify-center text-[#1a365d] dark:text-cyan-400'>
                  {IconComponent && <IconComponent className='w-8 h-8' />}
                </div>
                <h3 className='text-base font-bold text-gray-900 dark:text-white leading-tight pt-1'>
                  {title}
                </h3>
              </div>

              {/* Description */}
              <p className='text-gray-500 dark:text-gray-400 text-sm leading-relaxed'>
                {description}
              </p>
            </motion.div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}

export default Services
