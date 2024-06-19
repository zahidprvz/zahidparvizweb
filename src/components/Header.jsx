import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom'; // Import NavLink and useLocation from react-router-dom
import profileImage from '../assets/profile.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState('');
  const location = useLocation(); // Hook to get the current location

  useEffect(() => {
    setActiveRoute(location.pathname); // Update activeRoute when location changes
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      className="w-full  bg-gray-900 text-white py-4 md:py-8"
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center"> {/* Container for profile picture and site title */}
          <img src={profileImage} alt="Profile" className="w-12 h-12 md:w-16 md:h-16 rounded-full mr-4" /> {/* Profile picture */}
          <div>
            <h1 className="text-lg md:text-xl font-bold">Zahid Parviz</h1>
            <p className="text-sm md:text-base mt-2">Flutter Developer & AI Researcher | Expert in Mobile App Development & Artificial Intelligence</p>
          </div>
        </div>
        <nav className="md:hidden">
          <button className="text-white hover:text-gray-300 focus:outline-none" onClick={toggleMenu}>
            <svg className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </nav>
        <nav className={`md:flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row md:space-x-4 md:space-y-0">
            <li>
              <NavLink
                to="/"
                className="block md:inline-block hover:text-gray-300"
                style={activeRoute === '/' ? { color: 'yellow' } : {}}
              >
                Home
              </NavLink>
            </li>
            <li>
              {/* <NavLink
                to="/projects"
                className="block md:inline-block hover:text-gray-300"
                style={activeRoute === '/projects' ? { color: 'yellow' } : {}}
              >
                Projects
              </NavLink> */}
            </li>
            <li>
              <NavLink
                to="/about"
                className="block md:inline-block hover:text-gray-300"
                style={activeRoute === '/about' ? { color: 'yellow' } : {}}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block md:inline-block hover:text-gray-300"
                style={activeRoute === '/contact' ? { color: 'yellow' } : {}}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
