import React, { useState, memo, useCallback } from 'react';
import jsPDF from 'jspdf';
import { getCVData } from '../utils/cvData';

const Home = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const generateCV = useCallback(() => {
    setIsDownloading(true);
    
    // Get dynamic data from cvData utility
    const data = getCVData();
    
    // Create new PDF document
    const doc = new jsPDF('p', 'mm', 'a4');
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    
    // Colors
    const primaryColor = [31, 41, 55]; // Dark gray
    const secondaryColor = [59, 130, 246]; // Blue
    const textColor = [31, 41, 55]; // Dark gray
    const lightGray = [107, 114, 128]; // Light gray
    
    // Helper function to add text with styling
    const addText = (text, x, y, options = {}) => {
      const { fontSize = 12, color = textColor, font = 'helvetica', align = 'left', maxWidth = null } = options;
      doc.setFontSize(fontSize);
      doc.setTextColor(...color);
      doc.setFont(font, options.bold ? 'bold' : 'normal');
      
      if (maxWidth) {
        const lines = doc.splitTextToSize(text, maxWidth);
        doc.text(lines, x, y);
        return y + (lines.length * fontSize * 0.4);
      } else {
        doc.text(text, x, y, { align });
        return y + fontSize * 0.4;
      }
    };
    
    // Helper function to add line
    const addLine = (x1, y1, x2, y2, color = primaryColor, width = 0.5) => {
      doc.setDrawColor(...color);
      doc.setLineWidth(width);
      doc.line(x1, y1, x2, y2);
    };
    
    let currentY = 20;
    
    // Header Section - Name
    addText(data.personalInfo.name, 20, currentY, {
      fontSize: 24,
      color: primaryColor,
      bold: true
    });
    currentY += 8;
    
    // Contact Information
    const contactInfo = [
      { label: 'Email:', value: data.personalInfo.email },
      { label: 'Phone:', value: data.personalInfo.phone },
      { label: 'LinkedIn:', value: data.personalInfo.linkedin },
      { label: 'GitHub:', value: data.personalInfo.github },
      { label: 'Location:', value: data.personalInfo.location }
    ];
    
    contactInfo.forEach(contact => {
      addText(`${contact.label} ${contact.value}`, 20, currentY, {
        fontSize: 11,
        color: textColor
      });
      currentY += 5;
    });
    
    currentY += 10;
    
    // Education Section
    addText('Education', 20, currentY, {
      fontSize: 16,
      color: primaryColor,
      bold: true
    });
    currentY += 8;
    
    addLine(20, currentY, pageWidth - 20, currentY, primaryColor, 1);
    currentY += 8;
    
    // Dynamic Education Data
    data.education.forEach(edu => {
      addText(edu.institution, 20, currentY, {
        fontSize: 12,
        color: textColor,
        bold: true
      });
      currentY += 5;
      
      addText(`Degree: ${edu.degree}`, 20, currentY, {
        fontSize: 11,
        color: textColor
      });
      currentY += 4;
      
      if (edu.coursework) {
        addText(`Course Work: ${edu.coursework}`, 20, currentY, {
          fontSize: 11,
          color: textColor
        });
        currentY += 4;
      }
      
      if (edu.percentage) {
        addText(`Percentage: ${edu.percentage}`, 20, currentY, {
          fontSize: 11,
          color: textColor
        });
        currentY += 4;
      }
      
      addText(`Dates: ${edu.dates}`, 20, currentY, {
        fontSize: 11,
        color: textColor
      });
      currentY += 4;
      
      if (edu.gpa) {
        addText(`GPA: ${edu.gpa}`, 20, currentY, {
          fontSize: 11,
          color: textColor
        });
        currentY += 4;
      }
      
      currentY += 8;
    });
    
    // Technical Skills Section
    addText('Technical Skills', 20, currentY, {
      fontSize: 16,
      color: primaryColor,
      bold: true
    });
    currentY += 8;
    
    addLine(20, currentY, pageWidth - 20, currentY, primaryColor, 1);
    currentY += 8;
    
    // Dynamic Skills Data
    data.technicalSkills.forEach(skill => {
      addText(skill, 20, currentY, {
        fontSize: 11,
        color: textColor
      });
      currentY += 5;
    });
    
    currentY += 10;
    
    // Projects Section
    addText('Projects', 20, currentY, {
      fontSize: 16,
      color: primaryColor,
      bold: true
    });
    currentY += 8;
    
    addLine(20, currentY, pageWidth - 20, currentY, primaryColor, 1);
    currentY += 8;
    
    // Dynamic Projects Data
    data.projects.forEach(project => {
      // Project Title
      addText(project.title, 20, currentY, {
        fontSize: 12,
        color: textColor,
        bold: true
      });
      currentY += 5;
      
      // Duration
      addText(`Dates: ${project.duration}`, 20, currentY, {
        fontSize: 11,
        color: textColor
      });
      currentY += 5;
      
      // Subtitle if exists
      if (project.subtitle) {
        addText(project.subtitle, 20, currentY, {
          fontSize: 10,
          color: lightGray,
          italic: true
        });
        currentY += 5;
      }
      
      // Description
      project.description.forEach(desc => {
        currentY = addText(desc, 20, currentY, {
          fontSize: 10,
          color: textColor,
          maxWidth: pageWidth - 40
        }) + 3;
      });
      
      currentY += 8;
    });
    
    // Certifications Section
    addText('Certifications', 20, currentY, {
      fontSize: 16,
      color: primaryColor,
      bold: true
    });
    currentY += 8;
    
    addLine(20, currentY, pageWidth - 20, currentY, primaryColor, 1);
    currentY += 8;
    
    // Dynamic Certifications Data
    data.certifications.forEach(cert => {
      addText(cert, 20, currentY, {
        fontSize: 11,
        color: textColor
      });
      currentY += 5;
    });
    
    currentY += 10;
    
    // Internships Section
    addText('Internships', 20, currentY, {
      fontSize: 16,
      color: primaryColor,
      bold: true
    });
    currentY += 8;
    
    addLine(20, currentY, pageWidth - 20, currentY, primaryColor, 1);
    currentY += 8;
    
    // Dynamic Internships Data
    data.internships.forEach(internship => {
      addText(internship.company, 20, currentY, {
        fontSize: 12,
        color: textColor,
        bold: true
      });
      currentY += 5;
      
      addText(`Dates: ${internship.duration}`, 20, currentY, {
        fontSize: 11,
        color: textColor
      });
      currentY += 5;
      
      currentY = addText(internship.description, 20, currentY, {
        fontSize: 10,
        color: textColor,
        maxWidth: pageWidth - 40
      }) + 8;
    });
    
    // Save the PDF
    doc.save('Suryansh_Srivastava_CV.pdf');
    
    setTimeout(() => {
      setIsDownloading(false);
    }, 1000);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
      {/* Space-themed Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Stars */}
        <div className="absolute top-20 left-10 text-space-blue-300 opacity-60 animate-bounce-slow">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        <div className="absolute top-32 right-16 text-cosmic-purple-300 opacity-50 animate-bounce-slow" style={{animationDelay: '1s'}}>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        <div className="absolute bottom-32 left-20 text-space-blue-400 opacity-40 animate-bounce-slow" style={{animationDelay: '2s'}}>
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        <div className="absolute bottom-20 right-10 text-cosmic-purple-400 opacity-45 animate-bounce-slow" style={{animationDelay: '0.5s'}}>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        
        {/* Additional Stars */}
        <div className="absolute top-40 left-1/4 text-space-blue-200 opacity-30">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        <div className="absolute bottom-40 right-1/4 text-cosmic-purple-200 opacity-35">
          <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        
        {/* Constellation Lines */}
        <div className="absolute top-1/4 left-1/3 w-16 h-px bg-gradient-to-r from-space-blue-400/30 to-transparent"></div>
        <div className="absolute bottom-1/3 right-1/3 w-12 h-px bg-gradient-to-r from-cosmic-purple-400/30 to-transparent"></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Animated Text */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-6">
              {/* Greeting */}
              <div className="animate-fade-in">
                <p className="text-lg sm:text-xl text-space-blue-300 font-medium mb-2">
                  Hello, I'm
                </p>
              </div>

              {/* Animated Name */}
              <div className="animate-slide-up">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4">
                  <span className="inline-block animate-pulse">Suryansh</span>
                  <br />
                  <span className="inline-block text-gradient animate-pulse" style={{animationDelay: '0.5s'}}>
                    Srivastava
                  </span>
                </h1>
              </div>

              {/* Animated Title */}
              <div className="animate-slide-up" style={{animationDelay: '0.3s'}}>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-space-dark-200 mb-6">
                  <span className="inline-block animate-bounce-slow">Full Stack Developer</span>
                  <br />
                  <span className="inline-block animate-bounce-slow" style={{animationDelay: '0.2s'}}>
                    & UI/UX Designer
                  </span>
                </h2>
              </div>

              {/* Description */}
              <div className="animate-slide-up" style={{animationDelay: '0.6s'}}>
                <p className="text-lg sm:text-xl text-space-dark-300 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                  Passionate about creating beautiful, functional, and user-friendly digital experiences. 
                  I love turning complex problems into simple, elegant solutions.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{animationDelay: '0.9s'}}>
                <button className="btn-primary text-lg px-8 py-4 hover:scale-105 transition-transform duration-300">
                  View My Work
                </button>
                <button 
                  onClick={generateCV}
                  disabled={isDownloading}
                  className="btn-secondary text-lg px-8 py-4 hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isDownloading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Generating CV...
                    </span>
                  ) : (
                    'Download CV'
                  )}
                </button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-6 mt-12 animate-slide-up" style={{animationDelay: '1.2s'}}>
                <a href="https://www.linkedin.com/in/suryansh-srivastava10/" target="_blank" rel="noopener noreferrer" className="text-space-dark-300 hover:text-space-blue-400 transition-all duration-300 hover:scale-110">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://github.com/SuryanshSrivastava-10" target="_blank" rel="noopener noreferrer" className="text-space-dark-300 hover:text-space-blue-400 transition-all duration-300 hover:scale-110">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Image with Neon Glow */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-space-blue-400 via-space-blue-500 to-cosmic-purple-500 animate-pulse opacity-75 blur-lg scale-110 z-0"></div>
              
              {/* Middle Glow Ring */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-space-blue-300 via-space-blue-400 to-cosmic-purple-400 animate-pulse opacity-50 blur-md scale-105 z-0"></div>
              
              {/* Inner Glow Ring */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-space-blue-200 via-space-blue-300 to-cosmic-purple-300 animate-pulse opacity-30 blur-sm z-0"></div>
              
              {/* Profile Circle */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full shadow-2xl border-4 border-white overflow-hidden z-10">
                {/* Profile Image */}
                <img 
                  src="/profile-photo.png" 
                  alt="Suryansh Srivastava" 
                  className="w-full h-full object-cover rounded-full relative z-20"
                />
              </div>
              
              {/* Floating Elements around Profile */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-space-blue-400 rounded-full animate-bounce-slow opacity-60 z-5"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cosmic-purple-400 rounded-full animate-bounce-slow opacity-70 z-5" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-space-blue-500 rounded-full animate-bounce-slow opacity-50 z-5" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-1/2 -right-8 w-5 h-5 bg-cosmic-purple-300 rounded-full animate-bounce-slow opacity-60 z-5" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Home);
