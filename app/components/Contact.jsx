'use client';

import { assets } from '@/assets/assets'
import React, { useState } from 'react'
import Image from 'next/image';
import { motion } from "motion/react"
import { Mail, Phone, ArrowRight } from 'lucide-react';
import { useTranslation } from "@/app/hooks/useTranslation";

const Contact = () => {
  const { t } = useTranslation();
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(t('contact.sending'));
    const formData = new FormData(event.target);

    formData.append("access_key", "d80c39d8-56ea-40a0-bdce-dfffb3b26b30");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(t('contact.success'));
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className='w-full px-[12%] py-20 scroll-mt-20 bg-white dark:bg-gray-900'
    >
      {/* Title Section */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-16'
      >
        <h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-Ovo'>
          {t('contact.title')}
        </h2>
        <div className='w-14 h-1 bg-[#1a365d] dark:bg-cyan-400 mx-auto'></div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600 dark:text-gray-400 font-Ovo text-lg'
      >
        {t('contact.subtitle')}
      </motion.p>

      {/* Email & Phone Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className='text-center max-w-3xl mx-auto mb-12'
      >
        <div className='flex flex-col md:flex-row justify-center gap-8'>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className='flex items-center justify-center gap-3'
          >
            <Mail className='w-6 h-6 text-[#1a365d] dark:text-cyan-400' />
            <a href="mailto:aramfilali.19@gmail.com" className='text-[#1a365d] dark:text-cyan-400 font-semibold hover:underline'>
              aramfilali.19@gmail.com
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className='flex items-center justify-center gap-3'
          >
            <Phone className='w-6 h-6 text-[#1a365d] dark:text-cyan-400' />
            <a href="tel:+21621912044" className='text-[#1a365d] dark:text-cyan-400 font-semibold hover:underline'>
              +216 21 912 044
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        onSubmit={onSubmit}
        className='max-w-2xl mx-auto'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8'>
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            type="text"
            placeholder={t('contact.name')}
            required
            className='flex-1 p-4 outline-none border-2 border-gray-100 dark:border-gray-800 rounded-xl bg-gray-50 dark:bg-gray-800 focus:border-[#1a365d] dark:focus:border-cyan-400 transition-all duration-300 text-gray-900 dark:text-white'
            name='name'
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            type="email"
            placeholder={t('contact.email')}
            required
            className='flex-1 p-4 outline-none border-2 border-gray-100 dark:border-gray-800 rounded-xl bg-gray-50 dark:bg-gray-800 focus:border-[#1a365d] dark:focus:border-cyan-400 transition-all duration-300 text-gray-900 dark:text-white'
            name='email'
          />
        </div>
        <motion.textarea
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          rows='6'
          placeholder={t('contact.message')}
          required
          className='w-full p-4 outline-none border-2 border-gray-100 dark:border-gray-800 rounded-xl bg-gray-50 dark:bg-gray-800 focus:border-[#1a365d] dark:focus:border-cyan-400 transition-all duration-300 text-gray-900 dark:text-white mb-8'
          name='message'
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
          whileTap={{ scale: 0.95 }}
          type='submit'
          className='py-4 px-10 w-max flex items-center justify-between gap-3 bg-[#1a365d] dark:bg-cyan-600 text-white rounded-full mx-auto hover:bg-[#234681] dark:hover:bg-cyan-500 transition-all duration-300 font-bold shadow-lg'
        >
          {t('contact.send')}
          <ArrowRight className='w-4 h-4' />
        </motion.button>

        <p className='mt-6 text-center font-medium text-[#1a365d] dark:text-cyan-400'>{result}</p>
      </motion.form>
    </motion.div>
  )
}

export default Contact
