import React from 'react';

const About = () => {
  const techIcons = [
    { icon: '💻', label: 'Programming', description: 'Full-Stack Development' },
    { icon: '🎨', label: 'Design', description: 'UI/UX & Creative Design' },
    { icon: '⚡', label: 'Performance', description: 'Optimization & Speed' },
    { icon: '🔧', label: 'Tools', description: 'Modern Development Tools' },
    { icon: '🌐', label: 'Web', description: 'Responsive Web Design' },
    { icon: '📱', label: 'Mobile', description: 'Cross-Platform Apps' },
    { icon: '🚀', label: 'Innovation', description: 'Cutting-Edge Solutions' },
    { icon: '🤝', label: 'Collaboration', description: 'Team Leadership' }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 gradient-bg">
      <div className="container-max section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-space-dark-300 max-w-3xl mx-auto">
              Get to know more about my background, education, and passion for technology
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-space-blue-400 to-cosmic-purple-400 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Bio Card */}
            <div className="order-2 lg:order-1">
              <div className="group bg-space-dark-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-space-blue-500/20 transition-all duration-500 hover:-translate-y-2 p-8 border border-space-blue-500/20 hover:border-space-blue-400/50 relative overflow-hidden">
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-space-blue-900/20 to-cosmic-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Header */}
                <div className="text-center mb-8 relative z-10">
                  <h3 className="text-2xl font-extrabold text-white mb-2 group-hover:text-space-blue-300 transition-colors duration-300">Suryansh Srivastava</h3>
                  <p className="text-space-blue-300 font-semibold group-hover:text-space-blue-200 transition-colors duration-300">B.Tech Computer Science & Engineering</p>
                </div>

                {/* Bio Content */}
                <div className="space-y-6 relative z-10">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <span className="w-2 h-2 bg-space-blue-400 rounded-full mr-3"></span>
                      Education & Background
                    </h4>
                    <p className="text-space-dark-300 leading-relaxed">
                      I'm a passionate Computer Science Engineering graduate with a strong foundation in 
                      software development and problem-solving. My B.Tech journey has equipped me with 
                      comprehensive knowledge in algorithms, data structures, and modern programming paradigms.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <span className="w-2 h-2 bg-space-blue-400 rounded-full mr-3"></span>
                      Technical Expertise
                    </h4>
                    <p className="text-space-dark-300 leading-relaxed">
                      Specialized in full-stack web development with expertise in React.js, Node.js, 
                      and modern JavaScript frameworks. I have hands-on experience with database design, 
                      API development, and cloud technologies.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <span className="w-2 h-2 bg-space-blue-400 rounded-full mr-3"></span>
                      Interests & Passion
                    </h4>
                    <p className="text-space-dark-300 leading-relaxed">
                      Beyond coding, I'm passionate about UI/UX design, open-source contributions, 
                      and continuous learning. I enjoy solving complex problems and creating 
                      user-friendly digital experiences that make a real impact.
                    </p>
                  </div>

                  {/* Key Skills */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <span className="w-2 h-2 bg-space-blue-400 rounded-full mr-3"></span>
                      Core Skills
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {['React.js', 'Node.js', 'JavaScript', 'Python', 'UI/UX Design', 'Database Design'].map((skill) => (
                        <div key={skill} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-space-blue-400 rounded-full"></div>
                          <span className="text-space-dark-300 text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Technology Icons */}
            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-6">
                {techIcons.map((item, index) => (
                  <div 
                    key={index}
                    className="group bg-space-dark-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl hover:shadow-space-blue-500/20 transition-all duration-500 hover:-translate-y-3 p-6 text-center border border-space-blue-500/20 hover:border-space-blue-400/50 relative overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Hover Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-space-blue-900/20 to-cosmic-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Icon */}
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10">
                      {item.icon}
                    </div>
                    
                    {/* Label */}
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-space-blue-300 transition-colors duration-300 relative z-10">
                      {item.label}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-sm text-space-dark-300 group-hover:text-space-blue-400 transition-colors duration-300 relative z-10">
                      {item.description}
                    </p>

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-xl border-2 border-space-blue-400/60 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-space-blue-300/80"></div>
                    
                    {/* Hover Corner Accents */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-space-blue-400/0 group-hover:bg-space-blue-400/60 rounded-full transition-all duration-300 group-hover:scale-150"></div>
                    <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-cosmic-purple-400/0 group-hover:bg-cosmic-purple-400/60 rounded-full transition-all duration-300 group-hover:scale-150" style={{transitionDelay: '0.1s'}}></div>
                  </div>
                ))}
              </div>

              {/* Additional Info Card */}
              <div className="group mt-8 bg-space-dark-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl hover:shadow-space-blue-500/20 transition-all duration-500 hover:-translate-y-2 p-6 border border-space-blue-500/20 hover:border-space-blue-400/50 relative overflow-hidden">
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-space-blue-900/20 to-cosmic-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <h4 className="text-xl font-bold text-white mb-4 text-center group-hover:text-space-blue-300 transition-colors duration-300 relative z-10">
                  Why I Love Technology
                </h4>
                <p className="text-space-dark-300 leading-relaxed text-center group-hover:text-space-blue-200 transition-colors duration-300 relative z-10">
                  Technology has the power to transform ideas into reality. Every line of code 
                  I write is a step towards creating something meaningful that can improve 
                  people's lives and make the world a better place.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-space-blue-500/20 relative z-10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-space-blue-400">50+</div>
                    <div className="text-xs text-space-dark-300">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-space-blue-400">3+</div>
                    <div className="text-xs text-space-dark-300">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-space-blue-400">100%</div>
                    <div className="text-xs text-space-dark-300">Passion</div>
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

export default About;
