import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    try {
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Email service not configured. Missing environment variables.');
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'suryanshsrivastava.work@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, { publicKey });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 4000);
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'suryanshsri10@gmail.com',
      link: 'mailto:suryanshsri10@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 8318202728',
      link: 'tel:+918318202728'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/suryansh-srivastava10',
      link: 'https://linkedin.com/in/suryansh-srivastava10'
    },
    {
      icon: '💻',
      title: 'GitHub',
      value: 'github.com/SuryanshSrivastava-10',
      link: 'https://github.com/SuryanshSrivastava-10'
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 gradient-bg">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg text-space-dark-300 max-w-3xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can work together!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-space-blue-400 to-cosmic-purple-400 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Let's Connect
                </h3>
                <p className="text-lg text-space-dark-300 mb-8 leading-relaxed">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I'd love to hear from you. I'm always open to discussing new opportunities and 
                  interesting challenges.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="group flex items-center p-4 bg-space-dark-800/80 backdrop-blur-sm rounded-lg hover:bg-space-blue-900/30 transition-all duration-300 border border-space-blue-500/20 hover:border-space-blue-400/50 relative overflow-hidden"
                  >
                    {/* Hover Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-space-blue-900/20 to-cosmic-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    
                    <div className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300 relative z-10">
                      {info.icon}
                    </div>
                    <div className="relative z-10">
                      <h4 className="font-semibold text-white group-hover:text-space-blue-300 transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-space-dark-300 group-hover:text-space-blue-200 transition-colors duration-300">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  <a href="https://linkedin.com/in/suryansh-srivastava10" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 bg-space-blue-900/50 rounded-full flex items-center justify-center hover:bg-space-blue-800/50 transition-all duration-300 border border-space-blue-500/30 hover:border-space-blue-400/60 hover:scale-110 relative overflow-hidden">
                    {/* Hover Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-space-blue-400/20 to-cosmic-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                    <svg className="w-6 h-6 text-space-blue-300 group-hover:text-space-blue-200 transition-colors duration-300 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/SuryanshSrivastava-10" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 bg-space-blue-900/50 rounded-full flex items-center justify-center hover:bg-space-blue-800/50 transition-all duration-300 border border-space-blue-500/30 hover:border-space-blue-400/60 hover:scale-110 relative overflow-hidden">
                    {/* Hover Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-space-blue-400/20 to-cosmic-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                    <svg className="w-6 h-6 text-space-blue-300 group-hover:text-space-blue-200 transition-colors duration-300 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="group bg-space-dark-800/80 backdrop-blur-sm rounded-2xl p-8 border border-space-blue-500/20 hover:border-space-blue-400/50 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-space-blue-900/10 to-cosmic-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-space-blue-300 transition-colors duration-300 relative z-10">
                Send me a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-space-dark-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-space-dark-700 border border-space-blue-500/30 rounded-lg focus:ring-2 focus:ring-space-blue-500 focus:border-transparent transition-colors duration-300 text-white placeholder-space-dark-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-space-dark-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-space-dark-700 border border-space-blue-500/30 rounded-lg focus:ring-2 focus:ring-space-blue-500 focus:border-transparent transition-colors duration-300 text-white placeholder-space-dark-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-space-dark-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-space-blue-500/30 rounded-lg focus:ring-2 focus:ring-space-blue-500 focus:border-transparent transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-space-dark-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-space-dark-700 border border-space-blue-500/30 rounded-lg focus:ring-2 focus:ring-space-blue-500 focus:border-transparent transition-colors duration-300 resize-none text-white placeholder-space-dark-400"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-space-blue-900/50 border border-space-blue-500/30 rounded-lg">
                    <p className="text-space-blue-300 font-medium">
                      ✅ Thank you! Your message has been sent successfully.
                    </p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-900/40 border border-red-500/30 rounded-lg">
                    <p className="text-red-300 font-medium">
                      ⚠️ Sorry, something went wrong sending your message. Please try again later or email me directly at suryanshsrivastava.work@gmail.com.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-20 bg-gradient-to-br from-space-dark-900 to-space-blue-950 text-white">
        <div className="container-max py-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <p className="text-space-dark-300">
                ©️ All rights reserved by <span className="font-bold text-white">Suryansh Srivastava</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
