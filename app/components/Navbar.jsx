'use client';

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";
import { Sun, Moon, Menu, X, ChevronRight, Globe } from "lucide-react";
import { useTranslation } from "@/app/hooks/useTranslation";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const { t, language, toggleLanguage } = useTranslation();
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(0)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] flex items-center justify-between z-50 transition-all duration-300 ${isScroll
          ? "py-2 bg-white/30 backdrop-blur-md shadow-sm dark:bg-darkTheme/30 dark:shadow-white/10"
          : "py-4"
          }`}
      >
        {/* Logo */}
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Logo"
            className={`cursor-pointer mr-14 transition-all duration-300 ${isScroll ? "w-12" : "w-14"
              }`}
          />
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full 
            px-12 transition-all duration-300 ${isScroll
              ? "py-2 bg-white/20 backdrop-blur-sm dark:bg-white/5"
              : "py-3 bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
            }`}
        >
          <li><a className="font-Ovo" href="#top">{t('nav.home')}</a></li>
          <li><a className="font-Ovo" href="#about">{t('nav.about')}</a></li>
          <li><a className="font-Ovo" href="#projects">{t('nav.projects')}</a></li>
          <li><a className="font-Ovo" href="#experience">{t('nav.experience')}</a></li>
          <li><a className="font-Ovo" href="#technologies">{t('nav.technologies')}</a></li>
          <li><a className="font-Ovo" href="#certifications">{t('nav.certifications')}</a></li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          {/* Language Toggle Button */}
          <button 
            onClick={toggleLanguage}
            className="relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300
              bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600
              border border-gray-300 dark:border-gray-600 group"
            title={language === 'en' ? 'Français' : 'English'}
          >
            <Globe className="w-5 h-5 text-gray-700 dark:text-white" />
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-white
              text-white dark:text-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-medium">
              {language === 'en' ? 'Français' : 'English'}
            </span>
          </button>

          {/* Theme Toggle Button */}
          <button 
            onClick={() => setIsDarkMode(prev => !prev)} 
            className="relative text-gray-700 dark:text-white transition-all duration-300
              w-10 h-10 rounded-full flex items-center justify-center
              bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600
              border border-gray-300 dark:border-gray-600 group"
            title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-white
              text-white dark:text-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-medium">
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </span>
          </button>

          <a href="#contact"
            className={`flex items-center gap-3 border border-gray-500 rounded-full ml-2 font-Ovo dark:border-white/50 transition-all duration-300 ${isScroll ? "px-8 py-2" : "px-10 py-2.5"}`}
          >
            {t('nav.contact')}
            <ChevronRight className="w-3 h-3" />
          </a>

          {/* Menu Button (mobile) */}
          <button className="block md:hidden ml-3 text-gray-700 dark:text-white" onClick={openMenu}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64
        z-50 h-screen bg-rose-50 transition-transform duration-500 translate-x-64 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <X className="w-5 h-5 cursor-pointer" />
          </div>

          <li><a href="#top" onClick={closeMenu}>{t('nav.home')}</a></li>
          <li><a className="font-Ovo" href="#about" onClick={closeMenu}>{t('nav.about')}</a></li>
          <li><a className="font-Ovo" href="#projects" onClick={closeMenu}>{t('nav.projects')}</a></li>
          <li><a className="font-Ovo" href="#experience" onClick={closeMenu}>{t('nav.experience')}</a></li>
          <li><a className="font-Ovo" href="#technologies" onClick={closeMenu}>{t('nav.technologies')}</a></li>
          <li><a className="font-Ovo" href="#certifications" onClick={closeMenu}>{t('nav.certifications')}</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;