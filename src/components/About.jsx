import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import aboutImage from '../assets/aboutme.jpg'; // Importing the image

const skills = [
  { name: 'Flutter App Development', expertise: 95 },
  { name: 'Django (Backend)', expertise: 85 },
  { name: 'AI/ML/DL', expertise: 90 },
  { name: 'Data Structures & Algorithms', expertise: 85 },
  { name: '.NET', expertise: 80 },
  { name: 'Python', expertise: 80 },
  { name: 'SQL', expertise: 75 },
  { name: 'C#', expertise: 85 },
  { name: 'Dart', expertise: 90 },
  { name: 'Firebase', expertise: 85 },
  { name: 'TensorFlow', expertise: 80 },
];

const experiences = [
  { company: 'Fiverr', position: 'Flutter Developer', duration: '2022 - Present', description: 'Developed the HCQ (Health Colon Quest) app for a client, which is live on both the Apple App Store and Google Play. The app provides healthcare information, appointment scheduling, and educational resources.' },
  { company: 'Hewlett Packard Enterprise', position: 'Software Engineer (Job Simulation)', duration: 'Aug 2023 - Sep 2023', description: 'Practiced Java Spring Boot development, implemented REST APIs, and worked on fetching and posting data. Also engaged with some frontend integration tasks.' },
  { company: 'Coding Samurai', position: 'Java Intern', duration: 'Sep 2023 - Oct 2023', description: 'Served as Java Intern for a month, solving problems using Java language' },
  { company: 'CodSoft', position: 'Machine Learning Intern', duration: 'Sep 2023 - Oct 2023', description: 'Served as Machine Learning Intern for a month, trained model for Next Word Prediction (LSTM), Email Spam classification, Waste Classification model using CNN' },
];


const SkillProgressBar = ({ name, expertise }) => (
  <motion.div
    className="mb-4"
    initial={{ width: 0 }}
    animate={{ width: `${expertise}%` }}
    transition={{ duration: 1 }}
  >
    <p className="text-lg font-semibold text-gray-100 mb-2">{name}</p>
    <div className="bg-gray-600 h-2 rounded-full">
      <div className="bg-yellow-500 h-2 rounded-full"></div>
    </div>
  </motion.div>
);

const ExperienceCard = ({ company, position, duration, description }) => (
  <motion.div
    className="bg-gray-800 rounded-lg p-6 mb-4"
    whileHover={{ scale: 1.05, rotate: 3, boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)' }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
  >
    <h4 className="text-xl font-semibold mb-2 text-gray-100">{position}</h4>
    <p className="text-gray-300 mb-2">{company} - {duration}</p>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12 text-gray-200">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">
            Hello! I'm <motion.span style={{color: '#F59E0B', fontWeight: 'bold'}}>Zahid Parviz</motion.span>, a passionate <motion.span style={{color: '#F59E0B', fontWeight: 'bold'}}>Mobile App Developer</motion.span> and AI/ML enthusiast with extensive experience in creating high-performance apps using Flutter and backend solutions with Django. I hold a Bachelor's in Computer Science from the University of Gujrat.
            <br/><br/>
            My expertise spans <motion.span style={{color: '#F59E0B', fontWeight: 'bold'}}>Flutter App Development</motion.span>, where I build cross-platform applications for Android and iOS. I am also skilled in <motion.span style={{color: '#F59E0B', fontWeight: 'bold'}}>AI/ML/DL model training</motion.span> using TensorFlow and Python, contributing to various projects in healthcare, waste management, and text classification.
            <br/><br/>
            I thrive in environments where innovation meets practicality. I’ve developed apps with features such as <motion.span style={{color: '#F59E0B', fontWeight: 'bold'}}>real-time messaging, AI-driven content generation, and image classification</motion.span>. I am always exploring the latest technologies and integrating them into my work to drive efficiency and results.
          </p>
          <p>
            I believe in the power of technology to transform industries and improve lives. Whether it’s building user-friendly mobile applications or experimenting with cutting-edge AI models, my goal is to <motion.span style={{color: '#F59E0B', fontWeight: 'bold'}}>deliver impactful solutions</motion.span>. With hands-on experience in AI and app development, I bring versatility and deep technical understanding to every project.
            <br/><br/>
            If you are looking for someone who can deliver innovative solutions in mobile app development or AI-driven applications, feel free to reach out. Together, we can bring your vision to life!
          </p>
        </div>
        <div className="relative w-64 h-64 overflow-hidden rounded-lg shadow-lg">
          <motion.img 
            src={aboutImage} 
            alt="About Me" 
            className="w-full h-full absolute top-0 left-0 rounded-lg"
            animate={{ y: [0, 10, -10, 0] }} 
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }} 
          /> 
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-4">My Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-4">
              <SkillProgressBar name={skill.name} expertise={skill.expertise}  />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-4">My Experience</h3>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default About;
