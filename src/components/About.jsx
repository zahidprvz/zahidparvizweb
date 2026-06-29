import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/aboutme.png';

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
    description:
      'Delivering Dynamics 365 CE, Power Platform, and Azure solutions for US and UK enterprise clients. Progressed from Associate Software Engineer to Software Engineer II. Re-engineered ADF pipelines for a 94% throughput gain on a multi-year audit migration, implemented Dual Write between D365 CE and Finance and Operations, led an on-premises to Azure CRM migration with zero data-integrity issues, and built and maintained 200+ Power Automate flows.',
  },
  {
    company: 'Biology Circle',
    position: 'Web Developer (Contract)',
    duration: 'Jul 2024 - Jan 2025',
    description:
      'Delivered a production academic journal platform on Open Journal Systems (PHP, MySQL) two weeks ahead of a three-month deadline, serving 500+ monthly researchers at 100% uptime, with a 40% increase in engagement and a 30% faster submission-to-review cycle.',
  },
];

const achievements = [
  { title: 'Microsoft Certified', text: 'Power Platform Functional Consultant Associate (PL-200), valid through 2027' },
  { title: 'National Winner', text: '1st place in the National Business Idea Competition among 55+ universities' },
  { title: 'Enterprise Delivery', text: '94% pipeline performance gain and a CRM migration delivered with zero data-integrity issues' },
];

const SkillBar = ({ name, expertise }) => (
  <div>
    <p className="text-base font-semibold text-slate-100 mb-2">{name}</p>
    <div className="bg-slate-700 h-2 rounded-full">
      <motion.div
        className="bg-amber-400 h-2 rounded-full"
        initial={{ width: 0 }} whileInView={{ width: `${expertise}%` }} viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
    </div>
  </div>
);

const About = () => {
  useEffect(() => { document.title = 'About | Zahid Parviz'; }, []);

  return (
    <div className="container mx-auto px-6 py-16 max-w-5xl text-slate-200">
      <motion.h1
        className="text-4xl font-bold mb-12 text-center text-white"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
      >
        About
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <motion.div
          className="md:col-span-2 space-y-5 text-slate-300 leading-relaxed text-lg"
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}
        >
          <p>
            Enterprise CRM looks like configuration from the outside. Underneath, it is system design, data architecture, and integration engineering that hundreds of people depend on every day. When it breaks, operations stop. When it is built well, it disappears into the background. I build and integrate in that layer.
          </p>
          <p>
            At a certified Microsoft Partner, I deliver Dynamics 365 CE, Power Platform, and Azure solutions for US and UK clients across nonprofit, public sector, healthcare, and financial services. My work spans C# plugins, PCF controls, and JavaScript on the Dynamics layer; model-driven, canvas, and custom-page Power Apps with 200+ Power Automate flows; and the Azure integration layer beneath, including Data Factory, Functions, and Dual Write between Dynamics 365 CE and Finance and Operations.
          </p>
          <p>
            The problems I find most interesting sit at the edges, where the standard platform model does not fit the requirement and a naive solution works today but fails under load. I hold the Microsoft PL-200 certification and am building deliberately toward the convergence of business applications, Azure, and AI: the shift from systems of record to systems of intelligence.
          </p>
        </motion.div>

        <motion.div
          className="w-full max-w-xs mx-auto overflow-hidden rounded-2xl border border-slate-700/60"
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}
        >
          <img src={aboutImage} alt="Zahid Parviz" className="w-full h-auto object-cover" />
        </motion.div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-white">Technical Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
          {skills.map((s) => <SkillBar key={s.name} {...s} />)}
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-white">Experience</h2>
        <div className="space-y-5 max-w-4xl">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-amber-400">{exp.position}</h3>
              <p className="text-slate-400 mb-2 font-medium">{exp.company} · {exp.duration}</p>
              <p className="text-slate-300 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-white">Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((a) => (
            <div key={a.title} className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6">
              <h3 className="text-amber-400 font-bold text-lg">{a.title}</h3>
              <p className="text-slate-300 mt-2 leading-relaxed">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
