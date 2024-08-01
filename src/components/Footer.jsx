import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi'; // Import GitHub, LinkedIn, and Download icons

const Footer = () => {
  return (
    <motion.footer
      className="bottom-0 w-full bg-gray-800 text-white py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6 max-w-none">
        <div className="md:flex justify-between items-center">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4 text-yellow-500">Connect with Me</h2>
            <div className="flex justify-center md:justify-start">
              <motion.a
                href="https://github.com/zahidprvz" 
                className="text-lg text-gray-300 hover:text-yellow-500 mr-4 flex items-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub className="mr-2" /> GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/zahidprvz/"
                className="text-lg text-gray-300 hover:text-yellow-500 mr-4 flex items-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin className="mr-2" /> LinkedIn
              </motion.a>
              <motion.a
                href="/src/assets/documents/zahidresume-r.pdf"
                className="text-lg text-gray-300 hover:text-yellow-500 flex items-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('/src/assets/documents/zahidresume-r.pdf', '_blank');
                }}
              >
                <FiDownload className="mr-2" /> Resume
              </motion.a>
            </div>
          </div>
          <motion.div
            className="text-lg text-gray-300"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p>© 2024 Zahid Parviz. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
