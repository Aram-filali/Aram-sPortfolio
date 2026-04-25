import user_image from './user_image.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import profile_icon from './profile_icon.png';

export const assets = {
    user_image,
    code_icon,
    profile_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Estatias - Multi-Tenant SaaS Site Generator',
        description: 'Enables property managers to launch their own booking websites in minutes automating reservations, payments, and marketing without the expensive OTA commissions.',
        bgImage: '/work-4.png',
        link: 'https://github.com/Aram-filali/Estatias.git',
        technologies: ['Next.js', 'NestJS', 'TypeScript', 'MongoDB', 'Mongoose', 'Stripe', 'Firebase', 'Tailwind CSS', 'EJS Templates', 'Microservices', 'JWT', 'SMTP', 'Git', 'Github', 'Vercel'],
        details: [
            'Hosts sign up → Platform generates a custom Next.js website instantly',
            '9 microservices handle payments (Stripe), bookings, calendar syncing, and authentication',
            'Real-time synchronization keeps availability updated across platforms',
            'AI-powered engine generates SEO-optimized property listings automatically',
            'Multi-tenant architecture ensures data security and fast, isolated deployments'
        ]
    },
    /*
    {
        title: 'AI Sales Assistant - Intelligent Chatbot & Lead Capture',
        description: 'Advanced RAG chatbot that automatically captures and qualifies leads through intelligent conversation integrating semantic search, NLP, and real-time scoring without manual intervention.',
        bgImage: '/logoai.png',
        link: 'https://github.com/Aram-filali/AI-Assistant.git',
        technologies: ['FastAPI', 'Next.js', 'PostgreSQL', 'FAISS', 'Python', 'TypeScript', 'RAG', 'NLP', 'Vector Database', 'Uvicorn', 'JWT', 'Alembic'],
        details: [
            'RAG pipeline powered by FAISS vector database achieving 95%+ accuracy in lead extraction and intent recognition',
            'Multi-tenant architecture with JWT authentication and 115+ unit tests enforcing SOLID principles and code quality',
            'NLP-driven conversation engine automatically captures contact info and qualification data in real-time without forms',
            'Real-time lead scoring system analyzes conversation patterns to identify high-intent prospects automatically',
            'Production-grade deployment: FastAPI backend, React 18 frontend, PostgreSQL 15 with seamless Alembic migrations'
        ]
    },
    */
    {
        title: 'Syntra.ai - Meeting Intelligence Platform',
        description: 'Transforms meeting recordings into actionable intelligence automatically transcribing, analyzing, and extracting decisions, tasks, and key insights without manual effort.',
        bgImage: '/syntra.png',
        link: 'https://github.com/Aram-filali/Syntra.ai.git',
        technologies: ['LangChain', 'FastAPI', 'AssemblyAI', 'PostgreSQL', 'Zoom OAuth', 'Celery', 'Redis', 'Python', 'AsyncIO', 'Webhooks', 'OpenAI', 'JWT'],
        details: [
            'Users connect Zoom → Platform automatically captures and transcribes all meetings with 85%+ accuracy',
            '4 specialized LLM agents work in parallel: summarization, action extraction, decision tracking, and Q&A generation',
            'Zoom OAuth 2.0 integration with automatic token refresh ensures seamless authentication and secure data sync',
            'Celery/Redis pipeline enables asynchronous processing allowing meetings up to 4 hours to be analyzed in minutes',
            'Participants automatically receive email alerts with their action items and meeting summaries post-call'
        ]
    },
    {
        title: 'Hirix - Career Intelligence & Interview Prep Platform',
        description: 'Empowers job seekers to land roles faster through AI-powered CV analysis, real-time interview simulation, and intelligent application tracking—transforming the entire job search journey from profile optimization to offer negotiations.',
        bgImage: '/hirix.png',
        link: 'https://github.com/Aram-filali/Hirix.git',
        technologies: ['React', 'Node.js', 'MongoDB', 'n8n', 'JWT', 'Express', 'Mongoose', 'Context API', 'Tailwind CSS', 'REST APIs', 'bcrypt'],
        details: [
            'Candidates upload resumes → Platform instantly generates AI-powered profile critiques and personalizes interview simulations',
            '8+ coordinated microservices handle CV analysis, profile optimization, HR/technical interview simulations with real-time AI feedback',
            'Multi-step application dashboard tracks 100+ job applications with conversion metrics, status management, and follow-up reminders',
            'Implemented 30+ RESTful endpoints with JWT authentication, bcrypt security, rate limiting, and anti-brute-force mechanisms',
            'MongoDB with nested Mongoose schemas enables complex relationships between users, applications, CVs, and interview results'
        ]
    },

    {
        title: 'Sentrik - AI Feedback Analytics Platform',
        description: 'SaaS platform transforming customer feedback into actionable insights via NLP automating sentiment analysis and trend extraction without manual effort.',
        bgImage: '/sentrik.png',
        link: 'https://github.com/Aram-filali/Sentrik.git',
        technologies: ['Next.js', 'FastAPI', 'Python', 'Transformers', 'BERT Multilingual', 'SQLAlchemy', 'Pandas', 'TypeScript', 'Tailwind CSS', 'Alembic', 'PostgreSQL', 'JWT', 'Pytest'],
        details: [
            'Users upload CSV/Excel → AI pipeline automatically processes feedback in real-time with zero manual intervention',
            'Multilingual BERT engine detects 3 sentiments (Positive/Neutral/Negative) with simultaneous keyword extraction from customer feedback',
            'Freemium model: anonymous users test the tool, login unlocks unlimited history and unlimited analysis capabilities',
            'Multi-tenant architecture with JWT email/password authentication secured to protect sensitive customer data and privacy',
            'Historical dashboard enables teams to track sentiment trends over time and identify recurring patterns in feedback data'
        ]
    }
];

export const serviceData = [
    { icon: 'Code2', title: 'Web design', description: 'Modern, responsive web applications using Next.js, React, and Tailwind CSS', link: '' },
    { icon: 'Smartphone', title: 'Mobile app', description: 'Full-stack mobile solutions with React Native and Node.js backends', link: '' },
    { icon: 'Brain', title: 'AI Integration', description: 'LLM integration, RAG systems, and intelligent automation solutions', link: '' },
    { icon: 'Zap', title: 'DevOps', description: 'Docker containerization, CI/CD pipelines, and cloud deployment', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'C++ | Python | JavaScript | TypeScript | PHP | SQL | HTML/CSS' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'MS Software Engineering (ISIMA) | BS Software Engineering (ISIMM)' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: '3+ Full-Stack Projects | AI/ML Solutions | Microservices Architecture' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];