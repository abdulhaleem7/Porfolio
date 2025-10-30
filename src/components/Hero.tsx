import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Abdul-Haleem Salaudeen
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
              Software Engineer (.NET | Fintech | E-Commerce)
            </h2>
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <span>📍</span>
              <span className="text-lg">Lagos, Nigeria</span>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Building scalable backend systems with{' '}
            <span className="text-blue-400 font-semibold">5+ years of experience</span> in
            <span className="text-cyan-400 font-semibold"> healthcare, fintech, and enterprise solutions</span>, 
            specializing in secure APIs and microservices architecture.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <div className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
              <span className="text-blue-400 font-semibold">ASP.NET Core</span>
            </div>
            <div className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
              <span className="text-cyan-400 font-semibold">Fintech</span>
            </div>
            <div className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
              <span className="text-purple-400 font-semibold">Azure</span>
            </div>
            <div className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
              <span className="text-green-400 font-semibold">PostgreSQL</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a 
              href="#projects"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </a>
            <a 
              href="https://github.com/abdulhaleem7"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              GitHub Portfolio
            </a>
            <a 
              href="/Abdulhaleem-Salaudeen-Resume.pdf"
              download
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              📄 Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;