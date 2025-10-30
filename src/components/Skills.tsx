import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Technologies",
      skills: [
        { name: "C#", level: 95, color: "bg-purple-500" },
        { name: "ASP.NET Core", level: 93, color: "bg-blue-500" },
        { name: "Entity Framework Core", level: 90, color: "bg-indigo-500" },
        { name: ".NET Framework", level: 88, color: "bg-cyan-500" }
      ]
    },
    {
      title: "Databases & Storage",
      skills: [
        { name: "SQL Server", level: 90, color: "bg-red-500" },
        { name: "MySQL", level: 85, color: "bg-blue-600" },
        { name: "PostgreSQL", level: 80, color: "bg-blue-700" },
        { name: "Azure Storage", level: 78, color: "bg-blue-500" }
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "Microsoft Azure", level: 85, color: "bg-blue-500" },
        { name: "Docker", level: 82, color: "bg-cyan-600" },
        { name: "Kubernetes", level: 80, color: "bg-blue-700" },
        { name: "Azure DevOps", level: 85, color: "bg-purple-600" }
      ]
    },
    {
      title: "AI/ML & Integration",
      skills: [
        { name: "ML.NET", level: 75, color: "bg-green-500" },
        { name: "TensorFlow", level: 70, color: "bg-orange-500" },
        { name: "RESTful APIs", level: 95, color: "bg-green-600" },
        { name: "Microservices", level: 88, color: "bg-yellow-500" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Expertise in modern backend technologies, cloud platforms, and development best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3">
                      <div 
                        className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Architecture & Design Patterns
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Domain-Driven Design (DDD)",
                "CQRS",
                "Repository Pattern",
                "Unit of Work Pattern",
                "Factory Pattern",
                "SOLID Principles",
                "Microservices Architecture",
                "RBAC Systems"
              ].map((pattern, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-lg text-center font-medium">
                  {pattern}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;