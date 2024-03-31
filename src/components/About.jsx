import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import aboutImage from '../assets/aboutme.jpg'; // Importing the image

const skills = [
  { name: 'Data Structures & Algorithms', expertise: 80 },
  { name: 'Flutter App Dev', expertise: 90 },
  { name: 'Artificial Intelligence', expertise: 85 },
  { name: 'Deep Learning', expertise: 80 },
  { name: '.NET', expertise: 80 },
  { name: 'Java', expertise: 90 },
  { name: 'Git', expertise: 80 },
  { name: 'Python', expertise: 70 },
  { name: 'SQL', expertise: 65 },
  { name: 'C#', expertise: 90 },
  { name: 'C++', expertise: 75 },
];

const experiences = [
  { company: 'Fiverr', position: 'Content Writer', duration: '2022 - Present', description: 'Content writer on Fiverr, offering my services which include Poetry, Prose, Skits, etc in English/Urdu' },
  { company: 'Hewlett Packard Enterprise', position: 'Software Engineer', duration: 'Aug 2023 - Sep 2023', description: 'It was a Software Engineering job simulation program, implemented Restful Api in Spring Boot' },
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
            Greetings! I am a dedicated <motion.span style={{color: '#F59E0B', fontWeight: 'bold'}}>Computer Science</motion.span> professional with a strong background in software development and a particular focus on <motion.span style={{color: '#F59E0B', fontWeight: 'bold'}}>Flutter app development</motion.span> and <motion.span style={{color: '#F59E0B', fontWeight: 'bold'}}>AI research</motion.span>. Graduating from the University of Gujrat, Pakistan, I've cultivated a diverse skill set across various programming languages and technologies.
            <br/><br/>
            My journey in technology has been marked by a passion for innovation and <motion.span style={{color: '#F59E0B', fontWeight: 'bold'}}>problem-solving</motion.span>. I excel in areas such as <motion.span style={{color: '#F59E0B', fontWeight: 'bold'}}>Data Structures and Algorithms, Object-Oriented Programming, Database Management, App Development, Artificial Intelligence, and Deep Learning</motion.span>.
            <br/><br/>
            As a seasoned <motion.span style={{color: '#F59E0B', fontWeight: 'bold'}}>Flutter developer</motion.span>, I have crafted numerous <motion.span style={{color: '#F59E0B', fontWeight: 'bold'}}>cross-platform</motion.span> mobile applications that seamlessly blend functionality with exceptional user experiences. Moreover, my expertise extends to AI/ML/DL model training, where I've demonstrated a talent for developing intelligent solutions that drive tangible results.
          </p>
          <p>
            What sets me apart is my dedication to <motion.span style={{color: '#F59E0B', fontWeight: 'bold'}}>continuous</motion.span> learning and exploration. Whether delving into <motion.span style={{color: '#F59E0B', fontWeight: 'bold'}}>cutting-edge AI research or engaging in robotics projects as a hobbyist</motion.span>, I thrive on staying at the forefront of technological advancements.
            <br/><br/>
            With a proven track record of delivering successful projects across various domains, from .NET and Kotlin for mobile app development to SQL for database management and Python for AI applications, I bring versatility and adaptability to every endeavor.
            <br/><br/>
            I am always seeking <motion.span style={{color: '#F59E0B', fontWeight: 'bold'}}>opportunities</motion.span> to apply my skills and expertise in Flutter development and AI research to contribute meaningfully to innovative projects. If you're looking for a passionate professional who is eager to make a difference, let's connect and discuss how I can add value to your team or <motion.span style={{color: '#F59E0B', fontWeight: 'bold'}}>organization.</motion.span>
            <br/><br/>
            Let's collaborate and bring ideas to life!
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
