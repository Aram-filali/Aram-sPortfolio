'use client'
import Navbar from "@/app/components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Skills from "./components/Skills";
import CursorWaveEffect from "./components/CursorWaveEffect";
import AnimatedBackground from "./components/AnimatedBackground";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (localStorage.theme === 'light') {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
      if (!('theme' in localStorage)) {
        localStorage.theme = 'dark';
      }
    }
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDarkMode])

  return (
    <>
      <AnimatedBackground isDarkMode={isDarkMode} />
      <CursorWaveEffect isDarkMode={isDarkMode} />
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Experience isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Certifications isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
      <ScrollToTop />
    </>
  );
}
