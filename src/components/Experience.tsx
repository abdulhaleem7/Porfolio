import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Cavista (Axxess US)",
      position: "Software Engineer",
      duration: "January 2024 - Present",
      location: "Lagos, Nigeria",
      description: "Developed and maintained scalable backend services using C# and ASP.NET Core, supporting business-critical features for healthcare and enterprise applications.",
      achievements: [
        "Designed and implemented RESTful APIs for secure communication between microservices and external systems",
        "Collaborated with cross-functional teams to integrate third-party services and implement business logic",
        "Applied SOLID principles, design patterns, and domain-driven design (DDD) to enhance maintainability",
        "Worked on performance optimization, SQL query tuning, and system monitoring for high availability"
      ],
      technologies: ["C#", ".NET", "ASP.NET Core", "Domain-Driven Design (DDD)", "CQRS", "Kubernetes", "Jira"]
    },
    {
      company: "Sterling Bank PLC",
      position: "Software Engineer",
      duration: "April 2022 - February 2024",
      location: "Remote",
      description: "Designing and implementing secure backend systems for core banking and digital financial services using C# and ASP.NET Core.",
      achievements: [
        "Built and maintained RESTful APIs for customer onboarding, transaction processing, and account management",
        "Led the development of RBAC (Role-Based Access Control) modules and internal tools for regulatory reporting",
        "Collaborated with DevOps and QA teams to ensure CI/CD pipelines, code quality, and system reliability",
        "Improved performance of critical services through SQL optimization, code refactoring, and caching strategies"
      ],
      technologies: ["C#", "ASP.NET Core", "RESTful APIs", "SQL Server", "RBAC", "CI/CD"]
    },
    {
      company: "Turing US (Google)",
      position: "Software Engineer",
      duration: "September 2020 - April 2022",
      location: "Remote",
      description: "Engineered intelligent backend systems using C# and .NET, integrating AI/ML capabilities into enterprise-grade applications for global clients.",
      achievements: [
        "Developed and deployed machine learning models for predictive analytics and recommendation systems",
        "Implemented data preprocessing pipelines, model evaluation, and monitoring for accuracy and reliability",
        "Integrated AI/ML capabilities using tools like scikit-learn, TensorFlow, and ML.NET",
        "Ensured performance optimization and system robustness while balancing AI innovation with business requirements"
      ],
      technologies: ["C#", ".NET", "ML.NET", "TensorFlow", "scikit-learn", "AI/ML", "Data Processing"]
    }
  ];

  const certifications = [
    {
      name: "C# for .NET Developers",
      issuer: "Coursera",
      year: "2024",
      credentialId: "Coursera Certified"
    },
    {
      name: "Backend Development using ASP.Net",
      issuer: "Coursera", 
      year: "2024",
      credentialId: "Coursera Certified"
    },
    {
      name: "Bachelor of Science in Computer Science",
      issuer: "National Open University of Nigeria",
      year: "2016",
      credentialId: "BSc Computer Science"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            5+ years of backend development experience building scalable healthcare, fintech, and enterprise solutions
          </p>
        </div>

        <div className="space-y-12 mb-20">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-4 md:left-8 top-16 w-0.5 h-full bg-blue-200 dark:bg-blue-800"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-2 md:left-6 top-8 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-slate-900"></div>
              
              <div className="ml-12 md:ml-20">
                <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.position}
                      </h3>
                      <h4 className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <div className="text-gray-600 dark:text-gray-300 font-medium">
                        {exp.duration}
                      </div>
                      <div className="text-gray-500 dark:text-gray-400 text-sm">
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Achievements:
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Certifications & Credentials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 dark:bg-slate-700 rounded-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">🏆</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {cert.name}
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                  {cert.issuer}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {cert.year} • {cert.credentialId}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;