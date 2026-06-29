import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiDownload } from 'react-icons/fi';
import resumeFile from '../assets/zahidparviz.pdf';

const socialLinks = [
  { href: 'https://github.com/zahidprvz', icon: <FiGithub />, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/zahidprvz/', icon: <FiLinkedin />, label: 'LinkedIn' },
  { href: 'mailto:pervaizzahid55@gmail.com', icon: <FiMail />, label: 'Email' },
  { href: 'tel:+923466762841', icon: <FiPhone />, label: 'Phone' },
];

const Footer = () => (
  <motion.footer
    className="w-full bg-slate-950 text-slate-300 py-12 border-t border-slate-800/60"
    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
  >
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Zahid Parviz</h3>
          <p className="text-slate-400 max-w-sm mx-auto md:mx-0">
            Enterprise Microsoft business applications: Dynamics 365 CE, Power Platform, and Azure integration. Microsoft Certified (PL-200).
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
          <div className="flex gap-5">
            {socialLinks.map((link, i) => (
              <motion.a key={i} href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer"
                className="text-slate-400 hover:text-amber-400 transition-colors text-2xl"
                whileHover={{ scale: 1.2, y: -3 }} whileTap={{ scale: 0.9 }}>
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-white mb-4">Resume</h3>
          <a href={resumeFile} download="Zahid_Parviz_Resume.pdf"
             className="flex items-center gap-2 text-slate-900 bg-amber-400 px-5 py-2.5 rounded-full font-bold hover:bg-amber-300 transition-colors">
            <FiDownload /> Download
          </a>
        </div>
      </div>
      <div className="border-t border-slate-800/60 mt-10 pt-6 text-center">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Zahid Parviz</p>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
