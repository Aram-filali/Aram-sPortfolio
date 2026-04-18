'use client';

import { motion } from "framer-motion"
import { useState, useMemo, useRef, useEffect } from "react"
import { useTranslation } from "@/app/hooks/useTranslation";
import { Mail, Phone, Linkedin, Github, Globe } from "lucide-react";

const About = ({ isDarkMode }) => {
  const { t } = useTranslation();
  const terminalRef = useRef(null);
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'command', text: '$ system --status' },
    { type: 'output', text: 'STATUS: ONLINE', color: 'green' }
  ]);
  const [executedCommands, setExecutedCommands] = useState([]);

  // Auto-scroll vers le bas du terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  // Créer les commandes avec les traductions
  const commands = useMemo(() => [
    {
      id: 'bio',
      label: '$ bio --fetch',
      description: t('about.bioDescription'),
      output: [
        { type: 'output', text: `> ${t('about.fullName')}` },
        { type: 'output', text: `> ${t('about.location')}` },
        { type: 'output', text: `> ${t('about.status')}` },
        { type: 'output', text: `> ${t('about.background')}` },
        { type: 'output', text: `> ${t('about.availability')}` }
      ]
    },
    {
      id: 'skills',
      label: '$ skills --tech-stack',
      description: t('about.skillsDescription'),
      output: [
        { type: 'output', text: `> ${t('about.languages')}`, color: 'cyan' },
        { type: 'output', text: `> ${t('about.webDev')}`, color: 'cyan' },
        { type: 'output', text: `> ${t('about.aiMl')}`, color: 'cyan' },
        { type: 'output', text: `> ${t('about.databases')}`, color: 'cyan' },
        { type: 'output', text: `> ${t('about.cloudDevops')}`, color: 'cyan' }
      ]
    },
    {
      id: 'contact',
      label: '$ contact --info',
      description: t('about.contactDescription'),
      output: [
        { type: 'output', text: `> ${t('about.email')}` },
        { type: 'output', text: `> ${t('about.phone')}` },
        { type: 'output', text: `> ${t('about.linkedInInfo')}` },
        { type: 'output', text: `> ${t('about.github')}` }
      ]
    },
    {
      id: 'languages',
      label: '$ languages --proficiency',
      description: t('about.languagesDescription'),
      output: [
        { type: 'output', text: `> ${t('about.arabic')}` },
        { type: 'output', text: `> ${t('about.englishProf')}` },
        { type: 'output', text: `> ${t('about.frenchProf')}` }
      ]
    },
    {
      id: 'clear',
      label: '$ clear',
      description: t('about.clearDescription'),
      output: []
    },
    {
      id: 'all',
      label: '$ info --all',
      description: t('about.allInfo'),
      output: 'all'
    }
  ], [t]);

  const executeCommand = (command) => {
    // Vérifier si la commande a déjà été exécutée
    if (command.id !== 'all' && executedCommands.includes(command.id)) {
      return; // Ne rien faire si déjà exécutée
    }

    const newHistory = [...terminalHistory];

    // Ajouter la commande
    newHistory.push({ type: 'command', text: command.label });

    // Ajouter le résultat
    if (command.output === 'all') {
      // Exécuter toutes les commandes non exécutées
      const commandsToExecute = commands.filter(cmd =>
        cmd.id !== 'all' && !executedCommands.includes(cmd.id)
      );

      commandsToExecute.forEach(cmd => {
        newHistory.push({ type: 'command', text: cmd.label });
        cmd.output.forEach(line => {
          newHistory.push(line);
        });
        newHistory.push({ type: 'blank' });
      });

      // Marquer toutes les commandes comme exécutées
      setExecutedCommands(commands.filter(cmd => cmd.id !== 'all').map(cmd => cmd.id));
    } else {
      command.output.forEach(line => {
        newHistory.push(line);
      });
      // Marquer cette commande comme exécutée
      setExecutedCommands([...executedCommands, command.id]);
    }

    newHistory.push({ type: 'blank' });
    setTerminalHistory(newHistory);
  };

  const renderLineWithIcon = (text) => {
    if (text.includes('Email:')) {
      return <div className='flex items-center gap-2'><Mail className='w-4 h-4' /><span>{text}</span></div>;
    } else if (text.includes('Phone:') || text.includes('Téléphone:')) {
      return <div className='flex items-center gap-2'><Phone className='w-4 h-4' /><span>{text}</span></div>;
    } else if (text.includes('LinkedIn:')) {
      return <div className='flex items-center gap-2'><Linkedin className='w-4 h-4' /><span>{text}</span></div>;
    } else if (text.includes('GitHub:')) {
      return <div className='flex items-center gap-2'><Github className='w-4 h-4' /><span>{text}</span></div>;
    }
    return <span>{text}</span>;
  };

  const clearTerminal = () => {
    setTerminalHistory([
      { type: 'command', text: '$ system --status' },
      { type: 'output', text: 'STATUS: ONLINE', color: 'green' }
    ]);
    setExecutedCommands([]); // Réinitialiser les commandes exécutées
  };

  return (
    <motion.div
      id='about'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='w-full px-[8%] md:px-[12%] py-16 scroll-mt-20'
    >
      {/* Section Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-16'
      >
        <h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-Ovo'>
          {t('nav.about')}
        </h2>
        <div className='w-14 h-1 bg-[#1a365d] dark:bg-cyan-400 mx-auto'></div>
      </motion.div>

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='w-full max-w-6xl mx-auto bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#0a1628] dark:to-[#0d1f3c] rounded-2xl overflow-hidden border border-gray-200 dark:border-cyan-500/20 shadow-2xl'
      >
        <div className='grid grid-cols-1 lg:grid-cols-3'>

          {/* Left Side - Commands Panel */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className='p-3 lg:p-6 space-y-2 lg:space-y-3 bg-gray-50 dark:bg-[#0a0e1a] border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-cyan-500/20'
          >
            <h3 className='text-[#1a365d] dark:text-cyan-300 text-lg font-bold tracking-wider mb-4'>
              {t('about.commands')}
            </h3>

            <div className='space-y-2'>
              {commands.map((cmd, index) => (
                <motion.button
                  key={cmd.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    if (cmd.id === 'clear') {
                      clearTerminal();
                    } else {
                      executeCommand(cmd);
                    }
                  }}
                  disabled={cmd.id !== 'all' && cmd.id !== 'clear' && executedCommands.includes(cmd.id)}
                  className={`w-full text-left p-2 rounded-lg border transition-all duration-300 group text-xs lg:text-sm ${cmd.id !== 'all' && cmd.id !== 'clear' && executedCommands.includes(cmd.id)
                      ? 'bg-gray-100 dark:bg-[#0a0e1a] border-gray-300 dark:border-gray-700 opacity-50 cursor-not-allowed'
                      : cmd.id === 'clear'
                        ? 'bg-red-500/10 border-red-500/30 hover:bg-red-500/20'
                        : 'bg-white dark:bg-[#0d1117] border-gray-200 dark:border-[#1a365d] hover:border-[#1a365d] dark:hover:border-[#1a365d]'
                    }`}
                >
                  <div className={`font-mono text-sm mb-1 ${cmd.id === 'clear'
                      ? 'text-red-600 dark:text-red-400'
                      : cmd.id !== 'all' && executedCommands.includes(cmd.id)
                        ? 'text-gray-400 dark:text-gray-600'
                        : 'text-[#1a365d] dark:text-cyan-400 group-hover:text-[#1a365d] dark:group-hover:text-cyan-300'
                    }`}>
                    {cmd.label}
                  </div>
                  <div className='text-xs text-gray-500 dark:text-gray-400'>
                    {cmd.description}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Terminal (2 columns) */}
          <motion.div
            initial={{ x: '-100%' }}
            whileInView={{ x: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }}
            className='lg:col-span-2 bg-gray-50 dark:bg-[#0d1117]'
          >
            {/* Terminal Header */}
            <div className='bg-gray-100 dark:bg-[#161b22] px-4 py-3 flex items-center justify-between border-b border-gray-200 dark:border-gray-700'>
              <div className='flex items-center gap-2'>
                <div className='w-3 h-3 rounded-full bg-[#ff5f56]'></div>
                <div className='w-3 h-3 rounded-full bg-[#ffbd2e]'></div>
                <div className='w-3 h-3 rounded-full bg-[#27ca40]'></div>
              </div>
              <span className='text-gray-500 dark:text-gray-400 text-xs font-mono'>
                terminal@aram:~
              </span>
            </div>

            {/* Terminal Content */}
            <div ref={terminalRef} className='p-4 pb-12 font-mono text-sm space-y-1 h-[350px] sm:h-[400px] lg:h-[500px] overflow-y-auto scrollbar-hide'>
              <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
                .scrollbar-hide {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
              `}</style>
              {terminalHistory.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={
                    line.type === 'command'
                      ? 'text-[#1a365d] dark:text-cyan-300 mt-3'
                      : line.type === 'blank'
                        ? 'h-2'
                        : `text-gray-600 dark:text-gray-300 ${line.color === 'green' ? 'text-green-600 dark:text-green-400' :
                          line.color === 'cyan' ? 'text-[#1a365d] dark:text-[#1a365d]' :
                            line.color === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' : ''
                        }`
                  }
                >
                  {line.type === 'output' && (line.text.includes('Email:') || line.text.includes('Phone:') || line.text.includes('Téléphone:') || line.text.includes('LinkedIn:') || line.text.includes('GitHub:')) ? renderLineWithIcon(line.text) : line.text}
                </motion.div>
              ))}

              {/* Cursor */}
              <div className='flex items-center pt-4'>
                <span className='text-[#1a365d] dark:text-cyan-400 text-base'>$</span>
                <span className='w-2 h-5 bg-[#1a365d] dark:bg-cyan-400 ml-2 animate-pulse'></span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default About