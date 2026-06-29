import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiDownload, FiGithub } from 'react-icons/fi';
import resumeFile from '../assets/zahidparviz.pdf';
import { profile, metrics, caseStudies, codeSamples, techStack } from '../data/content';

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08 } }),
};

const Home = () => {
  useEffect(() => {
    document.title = 'Zahid Parviz | Dynamics 365 CE & Power Platform Engineer';
  }, []);

  return (
    <div className="text-slate-200">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.12),transparent),radial-gradient(40%_40%_at_80%_20%,rgba(245,158,11,0.10),transparent)]" />
        <div className="container mx-auto px-6 pt-20 pb-16 max-w-5xl text-center">
          <motion.p
            variants={fade} initial="hidden" animate="visible" custom={0}
            className="inline-block text-sm font-semibold tracking-wide text-amber-400 border border-amber-400/30 rounded-full px-4 py-1 mb-6"
          >
            Microsoft Certified · PL-200 · Microsoft Partner delivery
          </motion.p>
          <motion.h1
            variants={fade} initial="hidden" animate="visible" custom={1}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            {profile.title}
          </motion.h1>
          <motion.p
            variants={fade} initial="hidden" animate="visible" custom={2}
            className="mt-6 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            {profile.tagline}
          </motion.p>
          <motion.div
            variants={fade} initial="hidden" animate="visible" custom={3}
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            <Link to="/work" className="inline-flex items-center gap-2 bg-amber-400 text-slate-900 font-semibold px-6 py-3 rounded-full hover:bg-amber-300 transition-colors">
              View case studies <FiArrowRight />
            </Link>
            <a href={resumeFile} download="Zahid_Parviz_Resume.pdf" className="inline-flex items-center gap-2 border border-slate-600 text-slate-200 font-semibold px-6 py-3 rounded-full hover:border-amber-400 hover:text-amber-400 transition-colors">
              <FiDownload /> Resume
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 text-slate-300 font-semibold px-4 py-3 hover:text-amber-400 transition-colors">
              Get in touch <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.value}
              variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
              className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 text-center"
            >
              <div className="text-3xl font-bold text-amber-400">{m.value}</div>
              <div className="mt-2 text-sm text-slate-400 leading-snug">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured case studies */}
      <section className="container mx-auto px-6 max-w-5xl mt-20">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Selected case studies</h2>
          <Link to="/work" className="text-amber-400 hover:text-amber-300 text-sm font-semibold inline-flex items-center gap-1">
            All work <FiArrowRight />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((c, i) => (
            <motion.div key={c.slug} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
              <Link to={`/case-study/${c.slug}`} className="group block bg-slate-800/60 border border-slate-700/60 rounded-2xl overflow-hidden hover:border-amber-400/50 transition-colors h-full">
                <div className={`h-32 bg-gradient-to-br ${c.gradient} flex items-end p-4`}>
                  <span className="text-xs font-semibold text-white/90 bg-black/25 rounded-full px-3 py-1">{c.sector}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">{c.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-amber-400/90">{c.headline}</p>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed line-clamp-4">{c.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.tags.slice(0, 3).map((t) => (
                      <span key={t} className="text-xs text-amber-400 bg-slate-700/70 rounded-full px-2.5 py-1">{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Code samples */}
      <section className="container mx-auto px-6 max-w-5xl mt-20">
        <h2 className="text-3xl font-bold text-white mb-8">Code and open source</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {codeSamples.map((r, i) => (
            <motion.a
              key={r.title} href={r.github} target="_blank" rel="noopener noreferrer"
              variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
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
      </section>

      {/* Tech stack */}
      <section className="container mx-auto px-6 max-w-5xl mt-20 mb-8">
        <h2 className="text-3xl font-bold text-white mb-6">Stack</h2>
        <div className="flex flex-wrap gap-3">
          {techStack.map((t) => (
            <span key={t} className="text-sm text-slate-300 bg-slate-800/70 border border-slate-700/60 rounded-full px-4 py-2">{t}</span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
