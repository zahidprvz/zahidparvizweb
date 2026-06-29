import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiGithub } from 'react-icons/fi';
import { caseStudies, codeSamples } from '../data/content';

const Work = () => {
  useEffect(() => {
    document.title = 'Work | Zahid Parviz';
  }, []);

  return (
    <div className="container mx-auto px-6 py-16 max-w-5xl text-slate-200">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-white text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
      >
        Case <span className="text-amber-400">Studies</span>
      </motion.h1>
      <p className="mt-4 text-center text-slate-400 max-w-2xl mx-auto">
        Enterprise Dynamics 365, Power Platform, and Azure work, written up as problem, approach, and result.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseStudies.map((c, i) => (
          <motion.div
            key={c.slug}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Link to={`/case-study/${c.slug}`} className="group block bg-slate-800/60 border border-slate-700/60 rounded-2xl overflow-hidden hover:border-amber-400/50 transition-colors h-full">
              <div className={`h-32 bg-gradient-to-br ${c.gradient} flex items-end p-4`}>
                <span className="text-xs font-semibold text-white/90 bg-black/25 rounded-full px-3 py-1">{c.sector}</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">{c.title}</h3>
                <p className="mt-1 text-sm font-semibold text-amber-400/90">{c.headline}</p>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">{c.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-400">
                  Read case study <FiArrowRight />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-white mt-20 mb-8">Code and open source</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {codeSamples.map((r, i) => (
          <motion.a
            key={r.title} href={r.github} target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 hover:border-amber-400/50 transition-colors"
          >
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">{r.title}</h3>
              <FiGithub className="text-slate-500 group-hover:text-amber-400 transition-colors text-xl shrink-0" />
            </div>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">{r.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {r.tags.map((t) => (
                <span key={t} className="text-xs text-amber-400 bg-slate-700/70 rounded-full px-2.5 py-1">{t}</span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Work;
