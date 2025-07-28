import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaCheckCircle, FaTimesCircle, FaSpinner, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaBriefcase, FaRocket } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_dnx139j',        // Your EmailJS service ID
      'template_3v8i70f',       // Your EmailJS template ID
      form.current,             // Reference to the form
      'RzkdNka2Z1Gf5hVrt'       // Your EmailJS public key
    )
      .then((response) => {
        setLoading(false);
        setStatus('success');
        form.current.reset(); // Reset form after successful submission
        setTimeout(() => setStatus(null), 5000);
      }, (error) => {
        setLoading(false);
        setStatus('error');
        setTimeout(() => setStatus(null), 5000);
      });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl text-yellow-400" />,
      label: "Email",
      value: "pervaizzahid55@gmail.com",
      link: "mailto:pervaizzahid55@gmail.com"
    },
    {
      icon: <FaPhone className="text-2xl text-yellow-400" />,
      label: "Phone",
      value: "+92 346 676 2841",
      link: "tel:+923466762841"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-yellow-400" />,
      label: "Location",
      value: "Lahore, Punjab, Pakistan",
      link: null
    },
    {
      icon: <FaBriefcase className="text-2xl text-yellow-400" />,
      label: "Current Role",
      value: "Associate Software Engineer at Devsinc",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/zahidprvz",
      color: "hover:text-blue-500"
    },
    {
      icon: <FaGithub className="text-2xl" />,
      label: "GitHub",
      url: "https://github.com/zahidprvz",
      color: "hover:text-gray-400"
    }
  ];

  return (
    <motion.section
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex justify-center items-center py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 w-full max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Let's Work <span className="text-yellow-400">Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring innovative AI solutions and enterprise applications to life? 
            I'm available for exciting projects and collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-gray-800 rounded-2xl p-8 shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <FaRocket className="text-3xl text-yellow-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Send Me a Message</h3>
            </div>

            {loading && (
              <motion.div 
                className="flex justify-center items-center py-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <FaSpinner className="animate-spin text-yellow-400 text-4xl mr-3" />
                <span className="text-white text-lg">Sending your message...</span>
              </motion.div>
            )}

            {status === 'success' && (
              <motion.div
                className="flex justify-center items-center py-8"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                <div className="text-center">
                  <FaCheckCircle className="text-green-400 text-5xl mx-auto mb-3" />
                  <h4 className="text-white text-xl font-semibold mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon!</p>
                </div>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                className="flex justify-center items-center py-8"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                <div className="text-center">
                  <FaTimesCircle className="text-red-400 text-5xl mx-auto mb-3" />
                  <h4 className="text-white text-xl font-semibold mb-2">Failed to Send Message</h4>
                  <p className="text-gray-300">Please try again or contact me directly via email.</p>
                </div>
              </motion.div>
            )}

            {!loading && !status && (
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="user_name" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-20 transition-all duration-300" 
                    placeholder="Enter your full name"
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="user_email" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-20 transition-all duration-300" 
                    placeholder="your.email@example.com"
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-20 transition-all duration-300" 
                    placeholder="What's this about?"
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-20 transition-all duration-300 resize-none" 
                    placeholder="Tell me about your project or inquiry..."
                    required
                  ></textarea>
                </div>
                <motion.button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-30 transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-650 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {info.icon}
                    <div>
                      <p className="text-gray-400 text-sm font-medium">{info.label}</p>
                      {info.link ? (
                        <a href={info.link} className="text-white hover:text-yellow-400 transition-colors duration-300">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-14 h-14 bg-gray-700 rounded-full text-white ${social.color} transition-all duration-300 hover:scale-110`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              <p className="text-gray-300 mt-4 leading-relaxed">
                Follow my journey in AI, robotics, and software engineering. 
                Let's connect and explore opportunities for collaboration!
              </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-4">Ready for Your Next Project?</h3>
              <p className="text-lg mb-4">
                I specialize in:
              </p>
              <ul className="space-y-2">
                <li>• Enterprise Software Solutions (Dynamics 365, .NET)</li>
                <li>• AI/ML Applications (Computer Vision, NLP)</li>
                <li>• Mobile App Development (Flutter, Cross-platform)</li>
                <li>• Robotics & Automation Systems</li>
                <li>• Web Development (React, Backend APIs)</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
