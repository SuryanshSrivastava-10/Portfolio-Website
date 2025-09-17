import React from 'react';

const Internships = () => {
  const internships = [
    {
      title: 'Software Development Intern',
      company: 'GWING SOFTWARE TECHNOLOGIES',
      duration: 'May 2025 - June 2025',
      location: 'Remote',
      icon: '💻',
      companyIcon: '🏢',
      description: 'Worked on client websites, databases, and user authentication systems using modern web technologies and database management.',
      achievements: [
        'Developed and maintained client websites with responsive design',
        'Implemented secure user authentication systems',
        'Designed and optimized database schemas for better performance',
        'Collaborated with team members on full-stack development projects'
      ],
      technologies: ['Python', 'PostgreSQL', 'Web Development', 'Database Design', 'User Authentication'],
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Web Development Intern',
      company: 'Voguish Vault Services Pvt. Ltd.',
      duration: 'Sept 2024 - Nov 2024',
      location: 'Remote',
      icon: '🌐',
      companyIcon: '🏪',
      description: 'Developed and managed the company website using WordPress, focusing on user experience and content management.',
      achievements: [
        'Developed and maintained company website using WordPress',
        'Implemented custom themes and plugins for enhanced functionality',
        'Managed website content and ensured regular updates',
        'Optimized website performance and user experience'
      ],
      technologies: ['WordPress', 'PHP', 'HTML/CSS', 'JavaScript', 'Content Management'],
      color: 'from-purple-500 to-purple-700'
    }
  ];

  return (
    <section id="internships" className="py-16 sm:py-20 lg:py-24 gradient-bg">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              My <span className="text-gradient">Internships</span>
            </h2>
            <p className="text-lg text-space-dark-300 max-w-3xl mx-auto">
              Professional experiences that shaped my development journey and technical expertise
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-space-blue-400 to-cosmic-purple-400 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Internship Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {internships.map((internship, index) => (
              <div 
                key={index}
                className="flip-card h-96"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flip-card-inner flip-card-smooth">
                  {/* Front Side - Internship Title */}
                  <div className="flip-card-front bg-space-dark-800/80 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-space-blue-500/20 overflow-hidden relative">
                    <div className={`bg-gradient-to-r ${internship.color} p-6 text-white relative overflow-hidden h-full flex flex-col justify-center`}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-4 right-4 text-6xl">{internship.companyIcon}</div>
                        <div className="absolute bottom-4 left-4 text-4xl opacity-50">{internship.icon}</div>
                      </div>
                      
                      {/* Front Content */}
                      <div className="relative z-10 text-center">
                        <div className="text-6xl mb-6">{internship.icon}</div>
                        <h3 className="text-2xl font-bold mb-4">{internship.title}</h3>
                        <p className="text-xl font-semibold opacity-90 mb-4">{internship.company}</p>
                        <div className="text-sm opacity-75 mb-2">{internship.duration}</div>
                        <div className="text-xs opacity-60">{internship.location}</div>
                        
                        {/* Hover hint */}
                        <div className="mt-8 text-sm opacity-60 animate-pulse">
                          Hover to see details
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back Side - Internship Details */}
                  <div className="flip-card-back bg-space-dark-800/80 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-space-blue-500/20 overflow-hidden relative">
                    {/* Enhanced Hover Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-space-blue-900/20 to-cosmic-purple-900/20 opacity-0 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-space-blue-500/5 to-cosmic-purple-500/5 opacity-0 transition-opacity duration-500"></div>
                    
                    {/* Card Body */}
                    <div className="p-6 relative z-10 h-full flex flex-col">
                      {/* Description */}
                      <p className="text-space-dark-300 leading-relaxed mb-4 text-sm">
                        {internship.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4 flex-1">
                        <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                          <span className="w-2 h-2 bg-space-blue-400 rounded-full mr-2"></span>
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {internship.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start">
                              <span className="text-space-blue-400 mr-2 mt-0.5 text-sm">✓</span>
                              <span className="text-space-dark-300 text-xs leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                          <span className="w-2 h-2 bg-space-blue-400 rounded-full mr-2"></span>
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {internship.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex} 
                              className="px-2 py-1 bg-space-blue-900/50 text-space-blue-300 rounded-full text-xs font-medium border border-space-blue-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div className="px-0 py-2 bg-space-blue-900/30 border-t border-space-blue-500/20 relative z-10">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-space-blue-400 rounded-full"></div>
                            <span className="text-xs text-space-dark-300">Completed</span>
                          </div>
                          <div className="text-xs font-medium text-space-blue-300">
                            {internship.duration}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Hover Border Effect */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-space-blue-400/60 pointer-events-none opacity-0 transition-opacity duration-500"></div>
                    
                    {/* Enhanced Hover Corner Accents */}
                    <div className="absolute top-3 right-3 w-2 h-2 bg-space-blue-400/60 rounded-full opacity-0 transition-all duration-500 scale-0"></div>
                    <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-cosmic-purple-400/60 rounded-full opacity-0 transition-all duration-500 scale-0" style={{transitionDelay: '0.1s'}}></div>
                    
                    {/* Additional Glow Elements */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-space-blue-400/10 rounded-full blur-xl opacity-0 transition-opacity duration-500"></div>
                    <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-cosmic-purple-400/10 rounded-full blur-lg opacity-0 transition-opacity duration-500" style={{transitionDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="mt-16">
            <div className="group bg-space-dark-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-space-blue-500/20 p-8 border-2 border-space-blue-500/20 hover:border-space-blue-400/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-space-blue-900/20 to-cosmic-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="text-center relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-space-blue-300 transition-colors duration-300">
                  Internship Impact
                </h3>
                <p className="text-lg text-space-dark-300 mb-8 max-w-4xl mx-auto group-hover:text-space-blue-200 transition-colors duration-300">
                  These internships provided me with hands-on experience in full-stack development, 
                  database management, and content management systems. I gained valuable insights into 
                  real-world project development and client collaboration.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-space-blue-400 mb-2">2</div>
                    <div className="text-space-dark-300">Internships</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-space-blue-400 mb-2">5+</div>
                    <div className="text-space-dark-300">Technologies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-space-blue-400 mb-2">8+</div>
                    <div className="text-space-dark-300">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-space-blue-400 mb-2">100%</div>
                    <div className="text-space-dark-300">Learning</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;
