import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { FiDownload } from 'react-icons/fi';
import resumeFile from '../assets/zahidparviz.pdf'; // Use a local import for the resume

const socialLinks = [
  { href: "https://github.com/zahidprvz", icon: <FiGithub />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/zahidprvz/", icon: <FiLinkedin />, label: "LinkedIn" },
  { href: "mailto:pervaizzahid55@gmail.com", icon: <FiMail />, label: "Email" },
  { href: "tel:+923466762841", icon: <FiPhone />, label: "Phone" },
];

const Footer = () => {
  return (
    <motion.footer
      className="w-full bg-gray-900 text-gray-300 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Section 1: Brand & Intro */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Zahid Parviz</h3>
            <p className="text-gray-400 max-w-sm mx-auto md:mx-0">
              Passionate about building innovative software solutions at the intersection of AI and enterprise technology.
            </p>
          </div>
          
          {/* Section 2: Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold text-white mb-4">Connect with Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <span className="text-3xl">{link.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Section 3: Resume Download */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <motion.a
              href={resumeFile}
              download="Zahid_Parviz_Resume.pdf"
              className="flex items-center text-gray-900 bg-yellow-400 px-6 py-3 rounded-full font-bold hover:bg-yellow-500 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload className="mr-2 text-xl" /> Download Resume
            </motion.a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Zahid Parviz. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
