import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaCheckCircle, FaTimesCircle, FaSpinner, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaBriefcase } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => { document.title = 'Contact | Zahid Parviz'; }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    emailjs
      .sendForm('service_dnx139j', 'template_3v8i70f', form.current, 'RzkdNka2Z1Gf5hVrt')
      .then(() => {
        setLoading(false); setStatus('success'); form.current.reset();
        setTimeout(() => setStatus(null), 5000);
      }, () => {
        setLoading(false); setStatus('error');
        setTimeout(() => setStatus(null), 5000);
      });
  };

  const contactInfo = [
    { icon: <FaEnvelope className="text-xl text-amber-400" />, label: 'Email', value: 'pervaizzahid55@gmail.com', link: 'mailto:pervaizzahid55@gmail.com' },
    { icon: <FaPhone className="text-xl text-amber-400" />, label: 'Phone', value: '+92 346 676 2841', link: 'tel:+923466762841' },
    { icon: <FaMapMarkerAlt className="text-xl text-amber-400" />, label: 'Location', value: 'Lahore, Pakistan · open to relocation and remote', link: null },
    { icon: <FaBriefcase className="text-xl text-amber-400" />, label: 'Current Role', value: 'Software Engineer II at Devsinc (Microsoft Partner)', link: null },
  ];

  const socialLinks = [
    { icon: <FaLinkedin className="text-2xl" />, url: 'https://www.linkedin.com/in/zahidprvz', color: 'hover:text-sky-400' },
    { icon: <FaGithub className="text-2xl" />, url: 'https://github.com/zahidprvz', color: 'hover:text-slate-300' },
  ];

  const inputClass =
    'w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition-colors';

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Let's <span className="text-amber-400">talk</span></h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Open to enterprise Dynamics 365, Power Platform, and Azure roles, and to interesting integration problems. I usually reply within a day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-8" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl font-bold text-white mb-6">Send a message</h2>

            {loading && (
              <div className="flex justify-center items-center py-8 text-white">
                <FaSpinner className="animate-spin text-amber-400 text-3xl mr-3" /> Sending...
              </div>
            )}
            {status === 'success' && (
              <div className="text-center py-8">
                <FaCheckCircle className="text-green-400 text-4xl mx-auto mb-3" />
                <p className="text-white font-semibold">Message sent. I will get back to you soon.</p>
              </div>
            )}
            {status === 'error' && (
              <div className="text-center py-8">
                <FaTimesCircle className="text-red-400 text-4xl mx-auto mb-3" />
                <p className="text-white font-semibold">Something went wrong. Please email me directly.</p>
              </div>
            )}
            {!loading && !status && (
              <form ref={form} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-slate-300 font-medium mb-2">Your name</label>
                  <input type="text" id="name" name="user_name" className={inputClass} placeholder="Enter your full name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-slate-300 font-medium mb-2">Your email</label>
                  <input type="email" id="email" name="user_email" className={inputClass} placeholder="you@company.com" required />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-slate-300 font-medium mb-2">Subject</label>
                  <input type="text" id="subject" name="subject" className={inputClass} placeholder="What is this about?" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-slate-300 font-medium mb-2">Message</label>
                  <textarea id="message" name="message" rows="5" className={`${inputClass} resize-none`} placeholder="Tell me about the role or the problem you are solving..." required />
                </div>
                <motion.button type="submit" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                  className="w-full bg-amber-400 text-slate-900 px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-amber-300 transition-colors">
                  Send message
                </motion.button>
              </form>
            )}
          </motion.div>

          <motion.div className="space-y-6" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Contact information</h2>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-4 p-4 bg-slate-900/60 rounded-lg">
                    {info.icon}
                    <div>
                      <p className="text-slate-400 text-sm font-medium">{info.label}</p>
                      {info.link ? (
                        <a href={info.link} className="text-white hover:text-amber-400 transition-colors">{info.value}</a>
                      ) : (
                        <p className="text-white">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-5">Connect</h2>
              <div className="flex gap-4">
                {socialLinks.map((s, i) => (
                  <a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
                     className={`flex items-center justify-center w-12 h-12 bg-slate-900 rounded-full text-white ${s.color} transition-colors`}>
                    {s.icon}
                  </a>
                ))}
              </div>
              <p className="text-slate-400 mt-4 leading-relaxed">
                I write about Dynamics 365 architecture and Power Platform on LinkedIn. Connect there if you want to compare notes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
