'use client';

import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "salaudeenhaleem7@gmail.com",
      link: "mailto:salaudeenhaleem7@gmail.com"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/abdulhaleem7",
      link: "https://linkedin.com/in/abdulhaleem7"
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "github.com/abdulhaleem7",
      link: "https://github.com/abdulhaleem7"
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+234 915 107 3034",
      link: "tel:+2349151073034"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm always interested in discussing new opportunities, technical challenges, and innovative backend solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 max-w-3xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                Whether you're looking for a backend engineer to join your team, need consultation on 
                healthcare/fintech architecture, or want to discuss .NET development and AI/ML integration, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors group"
                >
                  <div className="text-2xl">{info.icon}</div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      {info.label}
                    </div>
                    <div className="text-gray-900 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Available for:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Full-time positions",
                  "Contract work", 
                  "Fintech consulting",
                  "Architecture reviews",
                  "Code reviews",
                  "Technical mentoring"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Let's discuss how my fintech and backend expertise can help bring your ideas to life with robust, scalable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/Abdulhaleem-Salaudeen-Resume.pdf"
                download
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block text-center"
              >
                📄 Download Resume
              </a>
              <a 
                href="mailto:salaudeenhaleem7@gmail.com?subject=Schedule a Call - Project Discussion&body=Hi Abdul-Haleem,%0D%0A%0D%0AI would like to schedule a call to discuss a potential project opportunity.%0D%0A%0D%0ABest regards"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block text-center"
              >
                📧 Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;