import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaCheckCircle, FaTimesCircle, FaSpinner } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false); // To track email sending status
  const [status, setStatus] = useState(null); // To track success or error status

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true); // Show loading spinner

    emailjs.sendForm(
      'service_dnx139j',        // Your EmailJS service ID
      'template_3v8i70f',       // Your EmailJS template ID
      form.current,             // Reference to the form
      'RzkdNka2Z1Gf5hVrt'       // Your EmailJS public key
    )
      .then((response) => {
        setLoading(false); // Hide loading spinner
        setStatus('success'); // Set status to success
        setTimeout(() => setStatus(null), 5000); // Reset status after 5 seconds
      }, (error) => {
        setLoading(false); // Hide loading spinner
        setStatus('error'); // Set status to error
        setTimeout(() => setStatus(null), 5000); // Reset status after 5 seconds
      });
  };

  return (
    <motion.section
      className="min-h-screen bg-gray-900 flex justify-center items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-16 w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">Contact Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-semibold text-white">Send Me a Message</h3>

            {loading && (
              <div className="flex justify-center">
                <FaSpinner className="animate-spin text-blue-500 text-4xl" />
              </div>
            )}

            {status === 'success' && (
              <div className="flex justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center space-x-2"
                >
                  <FaCheckCircle className="text-green-500 text-4xl" />
                  <span className="text-white">Message sent successfully!</span>
                </motion.div>
              </div>
            )}

            {status === 'error' && (
              <div className="flex justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center space-x-2"
                >
                  <FaTimesCircle className="text-red-500 text-4xl" />
                  <span className="text-white">Failed to send message. Please try again.</span>
                </motion.div>
              </div>
            )}

            {!loading && !status && (
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-600">Your Name</label>
                  <input type="text" id="name" name="user_name" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-600">Your Email</label>
                  <input type="email" id="email" name="user_email" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-600">Your Message</label>
                  <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none">Send Message</button>
              </form>
            )}
          </div>

          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-semibold text-white">Contact Information</h3>
            <ul className="list-disc text-gray-600">
              <li>Email: pervaizzahid55@gmail.com</li>
              <li>Phone: +923466762841</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
