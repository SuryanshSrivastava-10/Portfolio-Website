import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Python', icon: '🐍', category: 'Programming', level: 90 },
    { name: 'C', icon: '⚙️', category: 'Programming', level: 85 },
    { name: 'C++', icon: '🔧', category: 'Programming', level: 80 },
    { name: 'JavaScript', icon: '⚡', category: 'Web Development', level: 95 },
    { name: 'Java', icon: '☕', category: 'Programming', level: 85 },
    { name: 'Flutter', icon: '📱', category: 'Mobile Development', level: 75 },
    { name: 'SQL', icon: '🗄️', category: 'Database', level: 90 },
    { name: 'MongoDB', icon: '🍃', category: 'Database', level: 80 },
    { name: 'React.js', icon: '⚛️', category: 'Frontend', level: 92 },
    { name: 'Node.js', icon: '🟢', category: 'Backend', level: 88 },
    { name: 'AI', icon: '🤖', category: 'Artificial Intelligence', level: 70 }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Programming': 'from-blue-400 to-blue-600',
      'Web Development': 'from-yellow-400 to-orange-500',
      'Mobile Development': 'from-purple-400 to-purple-600',
      'Database': 'from-green-400 to-green-600',
      'Frontend': 'from-cyan-400 to-cyan-600',
      'Backend': 'from-emerald-400 to-emerald-600',
      'Artificial Intelligence': 'from-pink-400 to-pink-600'
    };
    return colors[category] || 'from-gray-400 to-gray-600';
  };

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 gradient-bg">
      <div className="container-max section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-lg text-space-dark-300 max-w-3xl mx-auto">
              Technologies and tools I use to create amazing digital experiences
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-space-blue-400 to-cosmic-purple-400 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="group bg-space-dark-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-space-blue-500/20 transition-all duration-500 hover:-translate-y-3 p-6 text-center border border-space-blue-500/20 hover:border-space-blue-400/60 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-space-blue-900/30 to-cosmic-purple-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-space-blue-400/10 to-cosmic-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  
                  {/* Skill Name */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-space-blue-300 transition-colors duration-300">
                    {skill.name}
                  </h3>
                  
                  {/* Category */}
                  <p className="text-sm text-space-dark-300 mb-4 group-hover:text-space-blue-400 transition-colors duration-300">
                    {skill.category}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-space-dark-700 rounded-full h-2 mb-2">
                    <div 
                      className={`bg-gradient-to-r ${getCategoryColor(skill.category)} h-2 rounded-full transition-all duration-1000 ease-out group-hover:scale-105`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  
                  {/* Level Percentage */}
                  <div className="text-sm font-semibold text-space-blue-400 group-hover:text-space-blue-300 transition-colors duration-300">
                    {skill.level}%
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-space-blue-400/60 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-space-blue-300/80"></div>
                
                {/* Hover Corner Accents */}
                <div className="absolute top-2 right-2 w-3 h-3 bg-space-blue-400/0 group-hover:bg-space-blue-400/60 rounded-full transition-all duration-300 group-hover:scale-150"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-cosmic-purple-400/0 group-hover:bg-cosmic-purple-400/60 rounded-full transition-all duration-300 group-hover:scale-150" style={{transitionDelay: '0.1s'}}></div>
              </div>
            ))}
          </div>

          {/* Skills Categories Overview */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Skills by Category
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { category: 'Programming Languages', skills: ['Python', 'C', 'C++', 'JavaScript', 'Java'], color: 'from-blue-400 to-blue-600' },
                { category: 'Web Development', skills: ['React.js', 'Node.js', 'JavaScript'], color: 'from-yellow-400 to-orange-500' },
                { category: 'Mobile Development', skills: ['Flutter', 'React Native'], color: 'from-purple-400 to-purple-600' },
                { category: 'Database Management', skills: ['SQL', 'MongoDB', 'PostgreSQL'], color: 'from-green-400 to-green-600' },
                { category: 'AI & Machine Learning', skills: ['AI', 'Machine Learning', 'Data Science'], color: 'from-pink-400 to-pink-600' },
                { category: 'Tools & Technologies', skills: ['Git', 'Docker', 'AWS', 'VS Code'], color: 'from-gray-400 to-gray-600' }
              ].map((category, index) => (
                <div key={index} className="group bg-space-dark-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl hover:shadow-space-blue-500/20 transition-all duration-300 hover:-translate-y-2 p-6 border border-space-blue-500/20 hover:border-space-blue-400/50 relative overflow-hidden">
                  {/* Hover Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-space-blue-900/20 to-cosmic-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center relative z-10 group-hover:text-space-blue-300 transition-colors duration-300">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color} mr-3 group-hover:scale-110 transition-transform duration-300`}></div>
                    {category.category}
                  </h4>
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-space-blue-900/50 text-space-blue-300 rounded-full text-sm font-medium border border-space-blue-500/30 group-hover:bg-space-blue-800/60 group-hover:text-space-blue-200 group-hover:border-space-blue-400/50 transition-all duration-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Skills */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Soft Skills & Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Problem Solving', 'Team Leadership', 'Project Management', 
                'Agile/Scrum', 'Code Review', 'Mentoring', 'Technical Writing',
                'Performance Optimization', 'Security Best Practices', 'Cross-platform Development',
                'UI/UX Design', 'API Development', 'Cloud Computing', 'DevOps'
              ].map((skill, index) => (
                <div key={index} className="group px-6 py-3 bg-space-dark-800/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg hover:shadow-space-blue-500/20 hover:-translate-y-1 transition-all duration-300 border border-space-blue-500/20 hover:border-space-blue-400/50 relative overflow-hidden">
                  {/* Hover Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-space-blue-900/20 to-cosmic-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                  <span className="relative z-10 text-space-dark-300 font-medium group-hover:text-space-blue-300 transition-colors duration-300">{skill}</span>
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
