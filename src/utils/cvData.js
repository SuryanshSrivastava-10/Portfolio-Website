// CV Data Extraction Utility
// This file contains all the data that will be used to generate the CV
// When you update any section on your website, update the corresponding data here

export const cvData = {
  // Personal Information
  personalInfo: {
    name: 'Suryansh Srivastava',
    email: 'suryanshsri10@gmail.com',
    phone: '8318202728',
    linkedin: 'https://www.linkedin.com/in/suryansh-srivastava10',
    github: 'SuryanshSrivastava-10 (Suryansh Srivastava)',
    location: 'Varanasi, Uttar Pradesh'
  },

  // Education Information
  education: [
    {
      institution: 'Ashoka Institute of Technology and Management, Varanasi',
      degree: 'Bachelor of Technology, Computer Science',
      coursework: 'C, C++, Python, Java, DBMS, Data Structures, Algorithms, OOP\'s',
      dates: 'Aug 2022 - 2026',
      gpa: '7.02/10'
    },
    {
      institution: 'Jeevandeep Public School (C.B.S.E)',
      degree: '12th Grade',
      percentage: '72%',
      dates: 'April 2020-2021'
    },
    {
      institution: 'Sunbeam Academy Samneghat (C.B.S.E)',
      degree: '10th Grade',
      percentage: '75%',
      dates: 'April 2018-2019'
    }
  ],

  // Technical Skills
  technicalSkills: [
    'Programming Languages: Python, C, C++, JavaScript, Java, Flutter',
    'Databases: SQL, MongoDB',
    'Frameworks/Libraries: HTML/CSS, Node.js, React.js, Angular.js',
    'Web Design and Development: WordPress, Wix',
    'Artificial Intelligence: Generative AI, Prompt Engineering'
  ],

  // Projects Information
  projects: [
    {
      title: 'Comprehensive Blog Management System',
      duration: 'Oct 2024 - Dec 2024',
      description: [
        'Developed this website using React.js, Node.js and MongoDB.',
        'Developed this to simplify and streamline the process of creating, publishing, and organizing blog content. Allowing multiple users to interact with each other on the website.',
        'Made post creation & editing section, content organization, and other sections in user management.'
      ]
    },
    {
      title: 'Scholarship Redressal Portal',
      duration: 'Aug 2023 - Sept 2023',
      description: [
        'Built it using HTML, CSS, JavaScript, SQL and Django using Python.',
        'It ensures students can independently track their scholarship status and disbursement, preventing unauthorized third-party interference.'
      ]
    },
    {
      title: 'Online IDE Platform',
      duration: 'Nov 2022 - Dec 2022',
      subtitle: '(Built a Simple IDE Platform with Limited supporting languages of C, C++, Python, React.Js)',
      description: [
        'Developed this website using HTML, CSS, JavaScript and PHP.',
        'Designed to provide developers with an online coding environment supporting multiple programming languages.'
      ]
    }
  ],

  // Certifications
  certifications: [
    'AI with Machine Learning (IIT Delhi) - Apr 2024',
    'Fundamentals of Machine Learning (Coursera) - Feb 2024',
    'Developed Google Assistant using AI (LetsUpgrade) - Jan 2024',
    'Data Structure (LetsUpgrade) - Aug 2023'
  ],

  // Internships
  internships: [
    {
      company: 'GWING SOFTWARE TECHNOLOGIES',
      duration: '(May 2025 - June 2025)',
      description: 'In this I have managed client websites, databases, and user authentication by utilizing Python and PostgreSQL.'
    },
    {
      company: 'Voguish Vault Services Pvt. Ltd.',
      duration: '(Sept 2024 - Nov 2024)',
      description: 'In this, I have developed, designed, and managed the company website using WordPress.'
    }
  ]
};

// Function to update CV data dynamically
export const updateCVData = (section, data) => {
  if (cvData[section]) {
    cvData[section] = data;
  }
};

// Function to get all CV data
export const getCVData = () => {
  return cvData;
};
