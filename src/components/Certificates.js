import React from 'react';

const Certificates = () => {
  const certificates = [
    {
      title: 'AI with ML',
      issuer: 'IIT Delhi',
      date: '2024',
      icon: '🤖',
      description: 'Comprehensive course covering Artificial Intelligence and Machine Learning fundamentals from one of India\'s premier technical institutes.',
      skills: ['Machine Learning', 'AI Algorithms', 'Data Science', 'Python', 'Statistics'],
      color: 'from-blue-500 to-purple-600',
      credentialId: 'IIT-DEL-AI-ML-2024'
    },
    {
      title: 'Fundamentals of ML',
      issuer: 'Coursera',
      date: '2024',
      icon: '📊',
      description: 'Professional certificate in Machine Learning fundamentals covering supervised and unsupervised learning techniques.',
      skills: ['Supervised Learning', 'Unsupervised Learning', 'Regression', 'Classification', 'Clustering'],
      color: 'from-green-500 to-teal-600',
      credentialId: 'COURSERA-ML-2024'
    },
    {
      title: 'Developed Google Assistant using AI',
      issuer: 'LetsUpgrade',
      date: '2024',
      icon: '🎤',
      description: 'Hands-on project-based certification focusing on building AI-powered voice assistants and conversational AI applications.',
      skills: ['Google Assistant', 'Voice AI', 'Natural Language Processing', 'API Integration', 'Conversational Design'],
      color: 'from-orange-500 to-red-600',
      credentialId: 'LETS-UPGRADE-AI-2024'
    },
    {
      title: 'Data Structure',
      issuer: 'LetsUpgrade',
      date: '2024',
      icon: '🔗',
      description: 'Comprehensive course on data structures and algorithms, covering implementation and optimization techniques.',
      skills: ['Arrays', 'Linked Lists', 'Trees', 'Graphs', 'Algorithms', 'Complexity Analysis'],
      color: 'from-indigo-500 to-blue-600',
      credentialId: 'LETS-UPGRADE-DS-2024'
    }
  ];

  const getIssuerColor = (issuer) => {
    const colors = {
      'IIT Delhi': 'from-red-500 to-red-700',
      'Coursera': 'from-blue-500 to-blue-700',
      'LetsUpgrade': 'from-green-500 to-green-700'
    };
    return colors[issuer] || 'from-gray-500 to-gray-700';
  };

  return (
    <section id="certificates" className="py-16 sm:py-20 lg:py-24 gradient-bg">
      <div className="container-max section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              My <span className="text-gradient">Certificates</span>
            </h2>
            <p className="text-lg text-space-dark-300 max-w-3xl mx-auto">
              Professional certifications and courses that validate my expertise in AI, Machine Learning, and Data Structures
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-space-blue-400 to-cosmic-purple-400 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {certificates.map((cert, index) => (
              <div 
                key={index}
                className="flip-card h-80"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flip-card-inner flip-card-smooth">
                  {/* Front Side - Certificate Title */}
                  <div className="flip-card-front bg-space-dark-800/80 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-space-blue-500/20 overflow-hidden relative">
                    <div className={`bg-gradient-to-br ${cert.color} p-6 text-white relative overflow-hidden h-full flex flex-col justify-center`}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-2 right-2 text-4xl">🏆</div>
                        <div className="absolute bottom-2 left-2 text-2xl opacity-50">📜</div>
                      </div>
                      
                      {/* Front Content */}
                      <div className="relative z-10 text-center">
                        <div className="text-6xl mb-4">{cert.icon}</div>
                        <h3 className="text-lg font-bold mb-2 line-clamp-2">{cert.title}</h3>
                        <p className="text-sm opacity-90 mb-1">{cert.issuer}</p>
                        <p className="text-xs opacity-75 mb-4">{cert.date}</p>
                        
                        {/* Hover hint */}
                        <div className="text-xs opacity-60 animate-pulse">
                          Hover to see details
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back Side - Certificate Details */}
                  <div className="flip-card-back bg-space-dark-800/80 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-space-blue-500/20 overflow-hidden relative">
                    {/* Enhanced Hover Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-space-blue-900/20 to-cosmic-purple-900/20 opacity-0 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-space-blue-500/5 to-cosmic-purple-500/5 opacity-0 transition-opacity duration-500"></div>
                    
                    {/* Card Body */}
                    <div className="p-4 relative z-10 h-full flex flex-col">
                      {/* Description */}
                      <p className="text-space-dark-300 text-xs leading-relaxed mb-3 text-center flex-1">
                        {cert.description}
                      </p>

                      {/* Skills */}
                      <div className="mb-3">
                        <h4 className="text-xs font-semibold text-white mb-2 text-center">Skills Covered:</h4>
                        <div className="flex flex-wrap justify-center gap-1">
                          {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                            <span key={skillIndex} className="px-2 py-1 bg-space-blue-900/50 text-space-blue-300 rounded-full text-xs font-medium border border-space-blue-500/30">
                              {skill}
                            </span>
                          ))}
                          {cert.skills.length > 3 && (
                            <span className="px-2 py-1 bg-space-blue-800/50 text-space-blue-300 rounded-full text-xs font-medium border border-space-blue-500/30">
                              +{cert.skills.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Credential ID */}
                      <div className="text-center pt-2 border-t border-space-blue-500/20 mb-2">
                        <p className="text-xs text-space-dark-400 mb-1">Credential ID</p>
                        <p className="text-xs font-mono text-space-blue-300 bg-space-blue-900/50 px-2 py-1 rounded truncate border border-space-blue-500/30">
                          {cert.credentialId}
                        </p>
                      </div>

                      {/* Card Footer */}
                      <div className="px-0 py-2 bg-space-blue-900/30 border-t border-space-blue-500/20 relative z-10">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-space-blue-400 rounded-full"></div>
                            <span className="text-xs text-space-dark-300">Verified</span>
                          </div>
                          <div className="text-xs font-medium text-space-blue-300">
                            {cert.date}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Hover Border Effect */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-space-blue-400/60 pointer-events-none opacity-0 transition-opacity duration-500"></div>
                    
                    {/* Enhanced Hover Corner Accents */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-space-blue-400/60 rounded-full opacity-0 transition-all duration-500 scale-0"></div>
                    <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-cosmic-purple-400/60 rounded-full opacity-0 transition-all duration-500 scale-0" style={{transitionDelay: '0.1s'}}></div>
                    
                    {/* Additional Glow Elements */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-space-blue-400/10 rounded-full blur-lg opacity-0 transition-opacity duration-500"></div>
                    <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-cosmic-purple-400/10 rounded-full blur-md opacity-0 transition-opacity duration-500" style={{transitionDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certificate Categories */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Certificate Categories
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  category: 'AI & Machine Learning', 
                  certificates: ['AI with ML (IIT Delhi)', 'Fundamentals of ML (Coursera)', 'Google Assistant AI (LetsUpgrade)'],
                  icon: '🤖',
                  color: 'from-blue-500 to-purple-600'
                },
                { 
                  category: 'Data Structures & Algorithms', 
                  certificates: ['Data Structure (LetsUpgrade)'],
                  icon: '🔗',
                  color: 'from-indigo-500 to-blue-600'
                },
                { 
                  category: 'Project-Based Learning', 
                  certificates: ['Google Assistant Development', 'AI Applications'],
                  icon: '🚀',
                  color: 'from-orange-500 to-red-600'
                }
              ].map((category, index) => (
                <div key={index} className="group bg-space-dark-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl hover:shadow-space-blue-500/20 transition-all duration-300 hover:-translate-y-2 p-6 border border-space-blue-500/20 hover:border-space-blue-400/50 relative overflow-hidden">
                  {/* Hover Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-space-blue-900/20 to-cosmic-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="text-center relative z-10">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-4 group-hover:text-space-blue-300 transition-colors duration-300">{category.category}</h4>
                    <div className="space-y-2">
                      {category.certificates.map((cert, certIndex) => (
                        <div key={certIndex} className="text-sm text-space-dark-300 bg-space-blue-900/50 px-3 py-2 rounded-lg border border-space-blue-500/30 group-hover:bg-space-blue-800/60 group-hover:text-space-blue-200 group-hover:border-space-blue-400/50 transition-all duration-300">
                          {cert}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Journey Summary */}
          <div className="mt-16">
            <div className="group bg-gradient-to-r from-space-dark-800/80 to-space-blue-900/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-space-blue-500/20 p-8 border-2 border-space-blue-500/20 hover:border-space-blue-400/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-space-blue-900/20 to-cosmic-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="text-center relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-space-blue-300 transition-colors duration-300">
                  Continuous Learning Journey
                </h3>
                <p className="text-lg text-space-dark-300 mb-8 max-w-4xl mx-auto group-hover:text-space-blue-200 transition-colors duration-300">
                  These certifications represent my commitment to staying updated with cutting-edge technologies 
                  in AI, Machine Learning, and Data Structures. Each certificate has enhanced my technical 
                  expertise and practical problem-solving abilities.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-space-blue-400 mb-2">4</div>
                    <div className="text-space-dark-300">Certificates</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-space-blue-400 mb-2">3</div>
                    <div className="text-space-dark-300">Institutions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-space-blue-400 mb-2">15+</div>
                    <div className="text-space-dark-300">Skills Learned</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-space-blue-400 mb-2">100%</div>
                    <div className="text-space-dark-300">Completion Rate</div>
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

export default Certificates;
