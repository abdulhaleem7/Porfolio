'use client';

import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Summary</h3>
              <p className="text-gray-700 leading-relaxed">
                I'm a dedicated Software Engineer with over 5 years of experience building scalable backend systems 
                and enterprise solutions. My expertise spans across healthcare technology, fintech, and e-commerce platforms, 
                with a strong focus on creating secure, efficient, and maintainable systems.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What I Do</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  Design and develop robust backend APIs using ASP.NET Core and C#
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  Build microservices architectures for scalable enterprise applications
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  Implement secure payment processing and fintech solutions
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  Deploy and manage applications on Azure cloud infrastructure
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  Integrate AI/ML models into business applications
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Healthcare Innovation</h4>
                  <p className="text-gray-600 text-sm">
                    Developed AI-powered healthcare applications serving 200,000+ users at Cavista
                  </p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Fintech Excellence</h4>
                  <p className="text-gray-600 text-sm">
                    Currently building secure banking solutions at Sterling Bank PLC
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">AI/ML Integration</h4>
                  <p className="text-gray-600 text-sm">
                    Integrated machine learning models for automated decision-making systems
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Global Experience</h4>
                  <p className="text-gray-600 text-sm">
                    Worked with international teams across US, Nigeria, and other markets
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="mb-6">
                I'm always interested in discussing new opportunities and innovative projects.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="mailto:haleemsalaudeen@gmail.com"
                  className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Email Me
                </a>
                <a 
                  href="https://linkedin.com/in/abdulhaleem-salaudeen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/30 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;