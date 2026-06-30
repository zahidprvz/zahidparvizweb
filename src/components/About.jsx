import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/aboutme.png';
import { SiDotnet, SiSharp, SiJavascript, SiGithubactions } from 'react-icons/si';
import {
  FaDatabase, FaPlug, FaCode, FaCloud, FaMicrosoft,
  FaNetworkWired, FaServer, FaBolt,
} from 'react-icons/fa';

// ---- Skill groups: icon + label + one real descriptor line, no fake percentages ----
const skillGroups = [
  {
    category: 'Dynamics 365 CE',
    icon: <FaMicrosoft className="text-2xl" />,
    items: [
      { icon: <FaPlug />, name: 'Plugins (C# / IPlugin)' },
      { icon: <FaCode />, name: 'PCF Controls' },
      { icon: <SiJavascript />, name: 'JavaScript Web Resources' },
      { icon: <FaDatabase />, name: 'FetchXML & SSRS/RDL' },
    ],
  },
  {
    category: 'Power Platform',
    icon: <FaBolt className="text-2xl" />,
    items: [
      { icon: <FaBolt />, name: 'Power Apps (Model-driven, Canvas)' },
      { icon: <FaNetworkWired />, name: 'Power Automate (200+ flows)' },
      { icon: <FaCloud />, name: 'Power Pages' },
      { icon: <FaDatabase />, name: 'Dataverse & Solution ALM' },
    ],
  },
  {
    category: 'Azure & Integration',
    icon: <FaCloud className="text-2xl" />,
    items: [
      { icon: <FaCloud />, name: 'Azure Data Factory' },
      { icon: <FaServer />, name: 'Azure Functions & Logic Apps' },
      { icon: <FaDatabase />, name: 'Dual Write (D365 CE / F&O)' },
      { icon: <SiGithubactions />, name: 'CI/CD (GitHub Actions)' },
    ],
  },
  {
    category: 'Core Development',
    icon: <SiDotnet className="text-2xl" />,
    items: [
      { icon: <SiSharp />, name: 'C# / .NET' },
      { icon: <SiDotnet />, name: 'ASP.NET Web API' },
      { icon: <FaDatabase />, name: 'SQL / Azure SQL' },
      { icon: <FaCode />, name: 'REST APIs & Webhooks' },
    ],
  },
];

const principles = [
  {
    title: 'Design for the edges',
    body: 'The standard platform model usually fits the common case. I look for where it doesn\u2019t: the integration surface between CRM and ERP, the naive solution that works today and fails under load.',
  },
  {
    title: 'Invisible is the goal',
    body: 'Good enterprise CRM disappears into the background. If users notice the system, something upstream was designed wrong. I build for the day nobody thinks about it.',
  },
  {
    title: 'Ship, then harden',
    body: 'Solution lifecycle management, CI/CD, and zero-data-loss migrations aren\u2019t extra steps after the work. They are the work. A delivery without them isn\u2019t finished.',
  },
];

const experiences = [
  {
    company: 'Devsinc (Microsoft Partner)',
    position: 'Software Engineer II',
    duration: 'Jan 2025 - Present',
    description: 'Delivering Dynamics 365 CE, Power Platform, and Azure solutions for US and UK enterprise clients. Progressed from Associate Software Engineer to Software Engineer II. Re-engineered ADF pipelines for a 94% throughput gain on a multi-year audit migration, implemented Dual Write between D365 CE and Finance and Operations, led an on-premises to Azure CRM migration with zero data-integrity issues, and built and maintained 200+ Power Automate flows.',
  },
  {
    company: 'Biology Circle',
    position: 'Web Developer (Contract)',
    duration: 'Jul 2024 - Jan 2025',
    description: 'Delivered a production academic journal platform on Open Journal Systems (PHP, MySQL) two weeks ahead of a three-month deadline, serving 500+ monthly researchers at 100% uptime, with a 40% increase in engagement and a 30% faster submission-to-review cycle.',
  },
];

const SkillGroupCard = ({ category, icon, items, index }) => (
  <motion.div
    className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-amber-400/40 transition-colors duration-300"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
  >
    <div className="flex items-center gap-3 mb-5">
      <div className="w-10 h-10 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center">
        {icon}
      </div>
      <h4 className="text-lg font-bold text-white">{category}</h4>
    </div>
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-3 text-slate-300">
          <span className="text-amber-400/80 text-base shrink-0">{item.icon}</span>
          <span className="text-sm">{item.name}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const PrincipleCard = ({ title, body, index }) => (
  <motion.div
    className="bg-gradient-to-b from-slate-900 to-slate-900/40 border border-slate-800 rounded-2xl p-6"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="text-amber-400 text-3xl font-bold mb-3">0{index + 1}</div>
    <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
    <p className="text-slate-400 leading-relaxed text-sm">{body}</p>
  </motion.div>
);

const ExperienceCard = ({ company, position, duration, description }) => (
  <motion.div
    className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 mb-4 hover:border-amber-400/40 transition-colors duration-300"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
      <h4 className="text-xl font-bold text-amber-400">{position}</h4>
      <span className="text-sm text-slate-500">{duration}</span>
    </div>
    <p className="text-slate-300 mb-3 font-medium">{company}</p>
    <p className="text-slate-400 leading-relaxed text-sm">{description}</p>
  </motion.div>
);

const About = () => {
  return (
    <div className="container mx-auto px-6 py-16 text-slate-200 max-w-6xl">

      {/* ---------- Hook + portrait ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center mb-20">
        <motion.div
          className="md:col-span-3"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-amber-400 text-sm font-semibold tracking-wide uppercase mb-4">
            About
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
            Enterprise CRM looks like configuration from the outside.
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-4">
            Underneath, it is system design, data architecture, and integration engineering that
            hundreds of people depend on every day. When it breaks, operations stop. When it is
            built well, it disappears into the background. I build and integrate in that layer.
          </p>
          <p className="text-slate-400 leading-relaxed">
            At a certified Microsoft Partner, I deliver Dynamics 365 CE, Power Platform, and Azure
            solutions for US and UK clients across nonprofit, public sector, healthcare, and
            financial services. I hold the Microsoft PL-200 certification and am building
            deliberately toward the convergence of business applications, Azure, and AI.
          </p>
        </motion.div>

        <motion.div
          className="md:col-span-2 relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute -inset-3 bg-amber-400/10 rounded-3xl blur-2xl" />
          <img
            src={aboutImage}
            alt="Zahid Parviz"
            className="relative w-full max-w-sm mx-auto rounded-2xl border border-slate-800 object-cover"
          />
        </motion.div>
      </div>

      {/* ---------- Skill matrix ---------- */}
      <div className="mb-20">
        <motion.h3
          className="text-2xl md:text-3xl font-bold text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What I work with
        </motion.h3>
        <p className="text-slate-500 mb-8">The full delivery surface, end to end.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, i) => (
            <SkillGroupCard key={group.category} {...group} index={i} />
          ))}
        </div>
      </div>

      {/* ---------- Principles ---------- */}
      <div className="mb-20">
        <motion.h3
          className="text-2xl md:text-3xl font-bold text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          How I approach problems
        </motion.h3>
        <p className="text-slate-500 mb-8">Three things I keep coming back to.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {principles.map((p, i) => (
            <PrincipleCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>

      {/* ---------- Experience ---------- */}
      <div className="mb-20">
        <motion.h3
          className="text-2xl md:text-3xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h3>
        <div className="max-w-4xl">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.company} {...exp} />
          ))}
        </div>
      </div>

      {/* ---------- Highlights ---------- */}
      <div>
        <motion.h3
          className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Highlights
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
            <h4 className="text-amber-400 font-bold text-lg mb-2">Microsoft Certified</h4>
            <p className="text-slate-400 text-sm">
              Power Platform Functional Consultant Associate (PL-200), valid through 2027.
            </p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
            <h4 className="text-amber-400 font-bold text-lg mb-2">National Winner</h4>
            <p className="text-slate-400 text-sm">
              1st place in the National Business Idea Competition among 55+ universities.
            </p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
            <h4 className="text-amber-400 font-bold text-lg mb-2">Enterprise Delivery</h4>
            <p className="text-slate-400 text-sm">
              94% pipeline performance gain and a CRM migration delivered with zero data-integrity issues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
