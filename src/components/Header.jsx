import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import profileImage from '../assets/profile.png';
import { FiDownload } from 'react-icons/fi';
import resumeFile from '../assets/zahidparviz.pdf';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const linkClass = ({ isActive }) =>
    `relative text-base font-medium transition-colors duration-300 ${
      isActive ? 'text-amber-400' : 'text-slate-300 hover:text-amber-400'
    }`;

  return (
    <motion.header
      className="sticky top-0 z-50 w-full bg-slate-950/80 backdrop-blur-lg text-white py-4 border-b border-slate-800/60"
      initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={profileImage} alt="Zahid Parviz" className="w-11 h-11 rounded-full border-2 border-amber-400 p-0.5" />
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-white">Zahid Parviz</span>
            <span className="text-xs text-slate-400 hidden sm:block">Dynamics 365 CE & Power Platform Engineer</span>
          </span>
        </NavLink>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.path} className={linkClass} end={link.path === '/'}>
              {link.name}
            </NavLink>
          ))}
          <a href={resumeFile} download="Zahid_Parviz_Resume.pdf"
             className="flex items-center gap-2 text-slate-900 bg-amber-400 px-4 py-2 rounded-full font-semibold hover:bg-amber-300 transition-colors">
            <FiDownload /> Resume
          </a>
        </nav>

        <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Menu">
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
          </svg>
        </button>

        <motion.div
          className="fixed top-0 right-0 w-64 h-full bg-slate-900 p-6 shadow-lg z-50 md:hidden"
          initial="closed" animate={isMenuOpen ? 'open' : 'closed'}
          variants={{ open: { opacity: 1, x: 0 }, closed: { opacity: 0, x: '100%' } }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-white" aria-label="Close">
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex flex-col mt-14 space-y-6">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} onClick={toggleMenu} end={link.path === '/'}
                className={({ isActive }) => `text-xl font-bold ${isActive ? 'text-amber-400' : 'text-slate-300'}`}>
                {link.name}
              </NavLink>
            ))}
            <a href={resumeFile} download="Zahid_Parviz_Resume.pdf"
               className="mt-4 flex items-center justify-center gap-2 text-slate-900 bg-amber-400 px-6 py-3 rounded-full font-bold">
              <FiDownload /> Resume
            </a>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
