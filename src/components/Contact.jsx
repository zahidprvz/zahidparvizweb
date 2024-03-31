import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_dnx139j', 'template_3v8i70f', form.current, {
      publicKey: 'RzkdNka2Z1Gf5hVrt',
    })
      .then((response) => {
        alert('SUCCESS!', response.status, response.text);
        const message = document.createElement('div');
        message.classList.add('notification');
        message.classList.add('success');
        message.textContent = 'Your message has been sent successfully!';
        document.body.appendChild(message);
      }, (error) => {
        alert('FAILED...', error);
        const message = document.createElement('div');
        message.classList.add('notification');
        message.classList.add('error');
        message.textContent = 'An error occurred while sending your message. Please try again later.';
        document.body.appendChild(message);
      });
  };

  return (
    <motion.section
      className="min-h-screen bg-gray-900 flex justify-center items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-16 w-full"> {/* Ensure full width */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-semibold text-white">Send Me a Message</h3>
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-600">Your Name</label>
                <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-600">Your Email</label>
                <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-600">Your Message</label>
                <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none">Send Message</button>
            </form>
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
