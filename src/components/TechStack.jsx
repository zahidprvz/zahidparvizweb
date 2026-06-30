import React from 'react';
import { motion } from 'framer-motion';
import {
  SiDotnet, SiSharp, SiMicrosoftazure, SiPowerapps, SiPowerautomate,
  SiJavascript, SiMicrosoft, SiGithubactions,
} from 'react-icons/si';
import { FaDatabase, FaCloud, FaCode, FaPlug } from 'react-icons/fa';

// Single source of truth for the stack pills. Edit this array only —
// both Home and About can import from here if you want full consistency.
export const techStack = [
  { name: 'Dynamics 365 CE', icon: <SiMicrosoft /> },
  { name: 'Power Apps', icon: <SiPowerapps /> },
  { name: 'Power Automate', icon: <SiPowerautomate /> },
  { name: 'Power Pages', icon: <FaCloud /> },
  { name: 'Dataverse', icon: <FaDatabase /> },
  { name: 'C# / .NET', icon: <SiSharp /> },
  { name: 'Azure Data Factory', icon: <SiMicrosoftazure /> },
  { name: 'Azure Functions', icon: <FaCloud /> },
  { name: 'Logic Apps', icon: <FaCloud /> },
  { name: 'Dual Write', icon: <FaDatabase /> },
  { name: 'PCF', icon: <FaCode /> },
  { name: 'SQL', icon: <FaDatabase /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'GitHub Actions', icon: <SiGithubactions /> },
  { name: 'ASP.NET', icon: <SiDotnet /> },
  { name: 'REST APIs', icon: <FaPlug /> },
];

const TechStack = () => (
  <div className="flex flex-wrap gap-3">
    {techStack.map((tech, i) => (
      <motion.div
        key={tech.name}
        className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 rounded-full px-4 py-2 text-slate-300 text-sm hover:border-amber-400/40 hover:text-amber-400 transition-colors duration-300"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: i * 0.03 }}
      >
        <span className="text-base text-amber-400/80">{tech.icon}</span>
        {tech.name}
      </motion.div>
    ))}
  </div>
);

export default TechStack;
