'use client';

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { Mail, Github, Linkedin } from 'lucide-react'
import { useTranslation } from "@/app/hooks/useTranslation";

const Footer = ({isDarkMode}) => {
  const { t } = useTranslation();

  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2'/>
        <div className='w-max flex items-center gap-2 mx-auto mb-2'>
          <Mail className='w-6 h-6 text-gray-700 dark:text-gray-300' />
          aramfilali.19@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t 
      border-gray-400 mx-[10%] mt-12 py-6'>
        
        {/* Copyright */}
        <p>
          &copy; {new Date().getFullYear()} Aram Filali. {t('footer.copyright')}
        </p>

        {/* Social Links */}
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li>
            <a target='_blank' rel="noopener noreferrer" href="https://github.com/Aram-filali" className='flex items-center gap-2 hover:text-cyan-400 transition-colors'>
              <Github className='w-5 h-5' />
              {t('footer.github')}
            </a>
          </li>
          <li>
            <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/aram-filali-0b8217287/" className='flex items-center gap-2 hover:text-cyan-400 transition-colors'>
              <Linkedin className='w-5 h-5' />
              {t('footer.linkedin')}
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
