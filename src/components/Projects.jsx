import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaSpinner } from 'react-icons/fa'; // FaSpinner has been added here

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'projects'), (snapshot) => {
      const projectsData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setProjects(projectsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
        <FaSpinner className="animate-spin text-yellow-400 text-5xl" />
      </div>
    );
  }

  return (
    <motion.div
      className="container mx-auto px-6 py-12 text-gray-200"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-yellow-400">Projects</span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-400 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A collection of my work, ranging from enterprise solutions and AI-powered applications to mobile and web development.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
            variants={itemVariants}
            whileHover={{ scale: 1.03, boxShadow: '0px 0px 25px rgba(245, 158, 11, 0.3)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h4 className="text-2xl font-bold mb-2 text-white">{project.title}</h4>
              <p className="text-gray-400 mb-4 h-20 overflow-hidden">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags && project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-yellow-400 text-xs font-semibold px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                {project.githubLink && (
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="mr-2" /> Source Code
                  </motion.a>
                )}
                {project.liveLink && (
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
