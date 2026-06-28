import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import aboutImage from '../assets/aboutme.png'; // Importing the image

const skills = [
  { name: 'Dynamics 365 CE (Plugins, PCF, JavaScript)', expertise: 90 },
  { name: 'Power Platform (Power Apps, Power Automate, Power Pages)', expertise: 90 },
  { name: 'Dataverse & Solution Lifecycle Management', expertise: 88 },
  { name: 'C# / .NET', expertise: 88 },
  { name: 'Azure Integration (Data Factory, Functions, Logic Apps)', expertise: 82 },
  { name: 'Dual Write (D365 CE / F&O)', expertise: 80 },
  { name: 'REST APIs & Webhooks', expertise: 85 },
  { name: 'SQL / Azure SQL', expertise: 85 },
  { name: 'JavaScript', expertise: 82 },
  { name: 'CI/CD (GitHub Actions, Azure DevOps)', expertise: 80 },
];

const experiences = [
  {
    company: 'Devsinc (Microsoft Partner)',
    position: 'Software Engineer II',
    duration: 'Jan 2025 - Present',
    description: 'Delivering Dynamics 365 CE, Power Platform, and Azure solutions for US and UK enterprise clients. Progressed from Associate Software Engineer to Software Engineer II. Re-engineered ADF pipelines for a 94% throughput gain on a multi-year audit migration, implemented Dual Write between D365 CE and Finance and Operations, led an on-premises to Azure CRM migration with zero data-integrity issues, and built and maintained 200+ Power Automate flows.'
  },
  {
    company: 'Biology Circle',
    position: 'Web Developer (Contract)',
    duration: 'Jul 2024 - Jan 2025',
    description: 'Delivered a production academic journal platform on Open Journal Systems (PHP, MySQL) two weeks ahead of a three-month deadline, serving 500+ monthly researchers at 100% uptime, with a 40% increase in engagement and a 30% faster submission-to-review cycle.'
  },
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
      <motion.div 
        className="bg-yellow-500 h-2 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${expertise}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      ></motion.div>
    </div>
    <p className="text-sm text-gray-400 mt-1">{expertise}%</p>
  </motion.div>
);

const ExperienceCard = ({ company, position, duration, description }) => (
  <motion.div
    className="bg-gray-800 rounded-lg p-6 mb-4"
    whileHover={{ scale: 1.02, rotate: 1, boxShadow: '0px 0px 25px rgba(245, 158, 11, 0.3)' }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
  >
    <h4 className="text-xl font-semibold mb-2 text-yellow-400">{position}</h4>
    <p className="text-gray-300 mb-2 font-medium">{company} - {duration}</p>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </motion.div>
);

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12 text-gray-200">
      <motion.h2 
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-lg leading-relaxed">
            Hello! I'm <motion.span style={{color: '#F59E0B', fontWeight: 'bold'}}>Zahid Parviz</motion.span>.
            <br/><br/>
            Enterprise CRM looks like configuration from the outside. Underneath, it is system design, data architecture, and integration engineering that hundreds of people depend on every day. When it breaks, operations stop. When it is built well, it disappears into the background. I build and integrate in that layer.

At a certified Microsoft Partner, I deliver Dynamics 365 CE, Power Platform, and Azure solutions for US and UK clients across nonprofit, public sector, healthcare, and financial services. My work runs the full delivery surface:

- Dynamics 365 CE: C# plugins, PCF controls, JavaScript web resources, FetchXML, SSRS/RDL, and solution lifecycle management.
- Power Platform: model-driven, canvas, and custom-page Power Apps, 200+ Power Automate flows covering business-critical automation and multi-stage approvals, and Power Pages.
- Azure: Data Factory pipelines, Functions, Logic Apps, and Dual Write between Dynamics 365 CE and Finance and Operations, with CI/CD through GitHub Actions.
            
A few results I am proud of: a 94% pipeline performance gain (32 seconds to 2 seconds per batch) while migrating 12+ years of audit records from Salesforce to Dynamics 365; an on-premises to Azure CRM migration delivered with zero data-integrity issues in UAT; and 110+ production tickets resolved at 99%+ first-pass client acceptance on a sustained enterprise programme.
The problems I find most interesting sit at the edges, where the standard platform model does not fit the requirement and a naive solution works today but fails under load. Those need thinking beyond the immediate ticket.
I hold the Microsoft PL-200 certification and am building deliberately toward the convergence of business applications, Azure, and AI: the shift from systems of record to systems of intelligence, and the agentic, Copilot-driven direction the Microsoft platform is moving in.
If any of this connects with what you are building, reach me at pervaizzahid55@gmail.com.
          </p>
        </motion.div>
        
        <motion.div 
          className="relative w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img 
            src={aboutImage} 
            alt="About Me" 
            className="w-full h-auto object-contain rounded-lg" // Changed h-full to h-auto and object-cover to object-contain
            animate={{ y: [0, 10, -10, 0] }} 
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }} 
            whileHover={{ scale: 1.05 }}
          /> 
        </motion.div>
      </div>

      <motion.div 
        className="mt-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className="text-3xl font-bold mb-8 text-center">Technical Expertise</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillProgressBar name={skill.name} expertise={skill.expertise} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="mt-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h3 className="text-3xl font-bold mb-8 text-center">Professional Experience</h3>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ExperienceCard {...exp} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-4">Key Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h4 className="text-yellow-400 font-bold text-xl">🏆 National Winner</h4>
            <p className="text-gray-300">1st place in Creative Business Idea Competition (55+ universities)</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h4 className="text-yellow-400 font-bold text-xl">📱 Published Apps</h4>
            <p className="text-gray-300">5+ apps on App Store & Play Store with 4.8+ ratings</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h4 className="text-yellow-400 font-bold text-xl">💻 Open Source</h4>
            <p className="text-gray-300">100+ GitHub repositories in AI, mobile dev, and automation</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
