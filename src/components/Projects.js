import React, { useState } from 'react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Comprehensive Blog Management System",
      duration: "Oct 2024 – Dec 2024",
      technologies: ["React.js", "Node.js", "MongoDB"],
      description: [
        "Developed this website using React.js, Node.js and MongoDB.",
        "Developed this to simplify and streamline the process of creating, publishing, and organizing blog content. Allowing multiple users to interact with each other on the website.",
        "Made post creation & editing section, content organization, and other sections in user management."
      ],
      icon: "📝",
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-900/20 to-purple-900/20"
    },
    {
      id: 2,
      title: "Scholarship Redressal Portal",
      duration: "Aug 2023 – Sept 2023",
      technologies: ["HTML", "CSS", "JavaScript", "SQL", "Django", "Python"],
      description: [
        "Built it using HTML, CSS, JavaScript, SQL and Django using Python.",
        "It ensures students can independently track their scholarship status and disbursement, preventing unauthorized third-party interference."
      ],
      icon: "🎓",
      gradient: "from-green-500 to-teal-600",
      bgGradient: "from-green-900/20 to-teal-900/20"
    },
    {
      id: 3,
      title: "Online IDE Platform",
      duration: "Nov 2022 – Dec 2022",
      subtitle: "Built a Simple IDE Platform with Limited supporting languages of C, C++, Python, React.Js",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      description: [
        "Developed this website using HTML, CSS, JavaScript and PHP.",
        "Designed to provide developers with an online coding environment supporting multiple programming languages.",
        "Features include syntax highlighting, code compilation, and real-time collaboration."
      ],
      icon: "💻",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-900/20 to-red-900/20"
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 gradient-bg">
      <div className="container-max section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-space-dark-300 max-w-3xl mx-auto">
              Here are some of the exciting projects I've worked on. Each one represents a unique challenge 
              and an opportunity to learn and grow as a developer.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-space-blue-400 to-cosmic-purple-400 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Card */}
                <div className={`relative bg-space-dark-800/80 backdrop-blur-sm rounded-2xl p-8 border border-space-blue-500/20 hover:border-space-blue-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-space-blue-500/20 overflow-hidden h-full`}>
                  {/* Animated Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Floating Particles Effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-4 right-4 w-2 h-2 bg-space-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
                    <div className="absolute bottom-6 left-6 w-1 h-1 bg-cosmic-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700"></div>
                    <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-space-blue-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-600"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Project Icon & Title */}
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {project.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-space-blue-300 transition-colors duration-300">
                          {project.title}
                        </h3>
                        {project.subtitle && (
                          <p className="text-sm text-space-dark-400 mb-2 italic">
                            {project.subtitle}
                          </p>
                        )}
                        <div className="flex items-center text-space-blue-400 text-sm font-medium">
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          {project.duration}
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-space-dark-300 mb-3 uppercase tracking-wide">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs font-medium rounded-full shadow-md group-hover:scale-105 transition-transform duration-300`}
                            style={{ animationDelay: `${techIndex * 100}ms` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-space-dark-300 mb-3 uppercase tracking-wide">
                        Description
                      </h4>
                      {project.description.map((desc, descIndex) => (
                        <p
                          key={descIndex}
                          className="text-space-dark-300 text-sm leading-relaxed group-hover:text-space-blue-200 transition-colors duration-300"
                        >
                          {desc}
                        </p>
                      ))}
                    </div>

                    {/* Hover Action Button */}
                    <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className={`w-full py-3 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-space-blue-500/25 transition-all duration-300 transform hover:scale-105`}>
                        View Project Details
                      </button>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-space-blue-500/10 to-transparent rounded-bl-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-cosmic-purple-500/10 to-transparent rounded-tr-3xl"></div>
                </div>

                {/* Connection Line (for visual flow) */}
                {index < projects.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-space-blue-500/50 to-transparent transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-space-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-space-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Interested in collaborating?
              </h3>
              <p className="text-space-dark-300 mb-6 max-w-2xl mx-auto">
                I'm always excited to work on new projects and challenges. 
                Let's create something amazing together!
              </p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=suryanshsri10@gmail.com&su=Collaboration%20Inquiry&body=Hi%20Suryansh,%20I%20would%20like%20to%20work%20with%20you%20on..."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-3 hover:scale-105 transition-transform duration-300 inline-block"
              >
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
