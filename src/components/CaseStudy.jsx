import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { caseStudies } from '../data/content';

const Section = ({ label, children }) => (
  <div className="mt-8">
    <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-2">{label}</h2>
    <p className="text-slate-300 leading-relaxed text-lg">{children}</p>
  </div>
);

const CaseStudy = () => {
  const { slug } = useParams();
  const study = caseStudies.find((c) => c.slug === slug);

  useEffect(() => {
    document.title = study ? `${study.title} | Zahid Parviz` : 'Case study | Zahid Parviz';
  }, [study]);

  if (!study) {
    return (
      <div className="container mx-auto px-6 py-24 max-w-3xl text-center text-slate-300">
        <p className="text-lg">Case study not found.</p>
        <Link to="/work" className="mt-4 inline-flex items-center gap-2 text-amber-400">
          <FiArrowLeft /> Back to work
        </Link>
      </div>
    );
  }

  const s = study.sections;

  return (
    <motion.article
      className="container mx-auto px-6 py-12 max-w-3xl text-slate-200"
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
    >
      <Link to="/work" className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors text-sm">
        <FiArrowLeft /> Back to work
      </Link>

      <div className={`mt-6 rounded-2xl bg-gradient-to-br ${study.gradient} p-8`}>
        <span className="text-xs font-semibold text-white/90 bg-black/25 rounded-full px-3 py-1">{study.sector}</span>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-white leading-tight">{study.title}</h1>
        <p className="mt-3 text-lg font-semibold text-white/90">{study.headline}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {study.tags.map((t) => (
          <span key={t} className="text-xs text-amber-400 bg-slate-700/70 rounded-full px-2.5 py-1">{t}</span>
        ))}
      </div>

      <Section label="Context">{s.context}</Section>
      <Section label="Problem">{s.problem}</Section>
      <Section label="Approach">{s.approach}</Section>
      <Section label="Result">{s.result}</Section>

      <div className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-3">Stack</h2>
        <div className="flex flex-wrap gap-2">
          {s.stack.map((t) => (
            <span key={t} className="text-sm text-slate-300 bg-slate-800/70 border border-slate-700/60 rounded-full px-4 py-1.5">{t}</span>
          ))}
        </div>
      </div>

      <div className="mt-12 border-t border-slate-700/60 pt-8">
        <p className="text-slate-400">Want the detail behind this? I am happy to walk through the architecture.</p>
        <Link to="/contact" className="mt-3 inline-flex items-center gap-2 bg-amber-400 text-slate-900 font-semibold px-5 py-2.5 rounded-full hover:bg-amber-300 transition-colors">
          Get in touch
        </Link>
      </div>
    </motion.article>
  );
};

export default CaseStudy;
