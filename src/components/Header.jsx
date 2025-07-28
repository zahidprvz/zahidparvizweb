import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import profileImage from '../assets/profile.png';
import { FiDownload } from 'react-icons/fi';
import resumeFile from '../assets/zahidparviz.pdf'; // Use a local import for the resume

const navLinks = [
  { name: 'Home', path: '/' },
  //{ name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  return (
    <motion.header
      className="sticky top-0 z-50 w-full bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-lg text-white py-4 shadow-lg"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center space-x-4 md:space-x-6">
          <motion.img
            src={profileImage}
            alt="Zahid Parviz"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-yellow-400 p-0.5"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
          <NavLink to="/" className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold text-white leading-tight">Zahid Parviz</h1>
            <p className="text-sm md:text-base text-gray-400 hidden sm:block">
              Software Engineer & AI Researcher
            </p>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={`relative text-lg font-medium transition-colors duration-300
                ${location.pathname === link.path ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'}`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  className="absolute bottom-[-5px] left-0 right-0 h-0.5 bg-yellow-400"
                  layoutId="underline"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </NavLink>
          ))}
          <motion.a
            href={resumeFile}
            download="Zahid_Parviz_Resume.pdf"
            className="flex items-center text-gray-900 bg-yellow-400 px-4 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiDownload className="mr-2" /> Resume
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <motion.div
          className={`fixed top-0 right-0 w-64 h-full bg-gray-900 p-6 shadow-lg transform z-50 md:hidden`}
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          variants={menuVariants}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-white">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex flex-col mt-12 space-y-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={toggleMenu}
                className={`text-2xl font-bold transition-colors duration-300
                  ${location.pathname === link.path ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'}`}
              >
                {link.name}
              </NavLink>
            ))}
            <motion.a
              href={resumeFile}
              download="Zahid_Parviz_Resume.pdf"
              className="mt-6 flex items-center justify-center text-lg text-gray-900 bg-yellow-400 px-6 py-3 rounded-full font-bold hover:bg-yellow-500 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload className="mr-2" /> Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
