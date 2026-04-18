'use client';

import { motion } from "framer-motion"
import { MapPin, Download, Mail } from "lucide-react"
import { useTranslation } from "@/app/hooks/useTranslation";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className='w-full px-[8%] md:px-[12%] min-h-screen flex items-center justify-center py-20 lg:py-0'>
      <div className='w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-start lg:items-center'>

        {/* Text Content - Order 2 on mobile, 1 on desktop */}
        <div className='space-y-6 text-center lg:text-left order-2 lg:order-1 relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >

            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a365d] dark:text-white font-Ovo'>
              {t('header.name')}
            </h1>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 font-Ovo'
          >
            {t('header.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-Ovo max-w-xl mx-auto lg:mx-0'
          >
            {t('header.description')}
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className='flex items-center justify-center lg:justify-start gap-2 text-gray-600 dark:text-gray-400'
          >
            <MapPin className='w-5 h-5 text-[#1a365d] dark:text-cyan-400' />
            <span className='font-Ovo text-base'>{t('header.location')}</span>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className='flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 pt-4'
          >
            <a
              href="#contact"
              className='w-full sm:w-auto group px-8 py-3 bg-[#1a365d] hover:bg-[#2d4a7c] dark:bg-cyan-600 dark:hover:bg-cyan-500 text-white rounded-full flex items-center justify-center gap-2 transition-all duration-300 font-Ovo shadow-lg hover:shadow-xl'
            >
              <Mail className='w-4 h-4' />
              {t('header.contactMe')}
            </a>

            <a
              href="/Aram-FILALI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className='w-full sm:w-auto group px-8 py-3 border-2 border-[#1a365d] dark:border-cyan-400 text-[#1a365d] dark:text-cyan-400 hover:bg-[#1a365d] hover:text-white dark:hover:bg-cyan-400 dark:hover:text-gray-900 rounded-full flex items-center justify-center gap-2 transition-all duration-300 font-Ovo'
            >
              <Download className='w-4 h-4' />
              {t('header.linkedIn')}
            </a>
          </motion.div>
        </div>

        {/* Photo Container - Order 1 on mobile, 2 on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='relative flex justify-center lg:justify-end order-1 lg:order-2 z-0 pt-12 sm:pt-16 lg:pt-0'
        >
          {/* Main Photo Container */}
          <div className='relative'>
            {/* Decorative Background Circle */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.5, type: "spring" }}
              className='absolute inset-0 bg-gradient-to-br from-[#1a365d]/20 to-cyan-500/20 dark:from-cyan-500/20 dark:to-[#1a365d]/20 rounded-full blur-3xl'
            />

            {/* Photo */}
            <div className='relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96'>
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className='absolute inset-0 rounded-full bg-gradient-to-r from-[#1a365d] via-cyan-500 to-[#1a365d] dark:from-cyan-400 dark:via-[#1a365d] dark:to-cyan-400 opacity-20'
              />

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className='relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl'
              >
                <img
                  src="/aram-filali.jpg"
                  alt="Aram Filali"
                  className='w-full h-full object-cover'
                />
              </motion.div>
            </div>

            {/* Code Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              className='absolute top-10 -right-6 sm:-right-10 lg:-right-16 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg z-10'
            >
              <span className='text-xl sm:text-2xl font-bold text-[#1a365d] dark:text-cyan-400'>&lt;&gt;</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Header