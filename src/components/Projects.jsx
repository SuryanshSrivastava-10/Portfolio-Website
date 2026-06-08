import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Comprehensive Blog Management System',
      duration: 'Oct 2024 – Dec 2024',
      role: 'Full Stack Developer',
      status: 'Completed',
      technologies: ['React.js', 'Node.js', 'MongoDB'],
      description: [
        'Developed this website using React.js, Node.js and MongoDB.',
        'Developed this to simplify and streamline the process of creating, publishing, and organizing blog content. Allowing multiple users to interact with each other on the website.',
        'Made post creation & editing section, content organization, and other sections in user management.',
      ],
      icon: '📝',
      gradient: 'from-blue-500 to-purple-600',
      githubUrl: 'https://github.com/SuryanshSrivastava-10',
    },
    {
      id: 2,
      title: 'Scholarship Redressal Portal',
      duration: 'Aug 2023 – Sept 2023',
      role: 'Full Stack Developer',
      status: 'Completed',
      technologies: ['HTML', 'CSS', 'JavaScript', 'SQL', 'Django', 'Python'],
      description: [
        'Built it using HTML, CSS, JavaScript, SQL and Django using Python.',
        'It ensures students can independently track their scholarship status and disbursement, preventing unauthorized third-party interference.',
      ],
      icon: '🎓',
      gradient: 'from-green-500 to-teal-600',
      githubUrl: 'https://github.com/SuryanshSrivastava-10',
    },
    {
      id: 3,
      title: 'Online IDE Platform',
      duration: 'Nov 2022 – Dec 2022',
      role: 'Full Stack Developer',
      status: 'Completed',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      description: [
        'Developed this website using HTML, CSS, JavaScript and PHP.',
        'Designed to provide developers with an online coding environment supporting multiple programming languages.',
        'Features include syntax highlighting, code compilation, and real-time collaboration.',
      ],
      icon: '💻',
      gradient: 'from-orange-500 to-red-600',
      githubUrl: 'https://github.com/SuryanshSrivastava-10/Online-IDE-Platform.git',
    },
  ];

  const handleContactClick = () => {
    const email = 'suryanshsri10@gmail.com';
    const subject = 'Collaboration Inquiry';
    const body = 'Hi Suryansh, I would like to work with you on...';

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    const gmailIOS = `googlegmail:///co?to=${email}&subject=${encodedSubject}&body=${encodedBody}`;
    const gmailIOSAlt = `gmail:///co?to=${email}&subject=${encodedSubject}&body=${encodedBody}`;
    const mailto = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
    const gmailWeb = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodedSubject}&body=${encodedBody}`;

    const start = Date.now();
    const tryOpen = (url) => {
      try {
        window.location.href = url;
      } catch (_) {}
    };

    tryOpen(gmailIOS);

    setTimeout(() => {
      if (Date.now() - start < 1200) {
        tryOpen(gmailIOSAlt);
      }
    }, 600);

    setTimeout(() => {
      if (Date.now() - start < 2400) {
        tryOpen(mailto);
      }
    }, 1400);

    setTimeout(() => {
      if (Date.now() - start < 3600) {
        window.open(gmailWeb, '_blank', 'noopener,noreferrer');
      }
    }, 2400);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

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
              Here are some of the exciting projects I&apos;ve worked on. Each one represents a unique challenge
              and an opportunity to learn and grow as a developer.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-space-blue-400 to-cosmic-purple-400 mx-auto rounded-full mt-6" />
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className="relative flex">
                {/* Connector line between cards */}
                {index < projects.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 lg:-right-5 w-8 lg:w-10 h-px bg-gradient-to-r from-space-dark-600/60 to-transparent z-10 -translate-y-1/2" />
                )}

                <article className="group flex flex-col w-full bg-[#1c2331]/90 rounded-2xl border border-white/[0.06] p-6 sm:p-7 shadow-lg shadow-black/20 hover:border-white/10 hover:shadow-xl hover:shadow-black/30 transition-all duration-300">
                  {/* Header: icon + title + date */}
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center text-xl sm:text-2xl shadow-md`}
                    >
                      {project.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug mb-1.5">
                        {project.title}
                      </h3>
                      <p className="text-sm text-space-dark-400">{project.duration}</p>
                    </div>
                  </div>

                  {/* Role & Status */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="bg-[#252d3d]/80 rounded-lg px-3 py-2.5 border border-white/[0.04]">
                      <p className="text-xs text-space-dark-400 mb-0.5">My role</p>
                      <p className="text-sm font-semibold text-white">{project.role}</p>
                    </div>
                    <div className="bg-[#252d3d]/80 rounded-lg px-3 py-2.5 border border-white/[0.04]">
                      <p className="text-xs text-space-dark-400 mb-0.5">Status</p>
                      <p className="text-sm font-semibold text-emerald-400">{project.status}</p>
                    </div>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-space-dark-300 bg-[#252d3d] rounded-full border border-white/[0.04]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <div className="flex-1 mb-6">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                      Description
                    </h4>
                    <div className="space-y-2.5">
                      {project.description.map((desc, descIndex) => (
                        <p
                          key={descIndex}
                          className="text-sm text-space-dark-200 leading-relaxed"
                        >
                          {desc}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Footer buttons */}
                  <div className="flex gap-3 mt-auto pt-2">
                    <button
                      type="button"
                      onClick={scrollToContact}
                      className="flex-1 py-2.5 px-4 text-sm font-medium text-white bg-[#252d3d] hover:bg-[#2d3748] border border-white/[0.08] rounded-lg transition-colors duration-200"
                    >
                      View Details
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-4 text-sm font-medium text-white text-center bg-[#252d3d] hover:bg-[#2d3748] border border-white/[0.08] rounded-lg transition-colors duration-200"
                    >
                      GitHub
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-[#1c2331]/80 backdrop-blur-sm rounded-2xl p-8 border border-white/[0.06]">
              <h3 className="text-2xl font-bold text-white mb-4">
                Interested in collaborating?
              </h3>
              <p className="text-space-dark-300 mb-6 max-w-2xl mx-auto">
                I&apos;m always excited to work on new projects and challenges.
                Let&apos;s create something amazing together!
              </p>
              <button
                type="button"
                onClick={handleContactClick}
                className="btn-primary text-lg px-8 py-3 hover:scale-105 transition-transform duration-300 inline-block"
              >
                Let&apos;s Work Together
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
