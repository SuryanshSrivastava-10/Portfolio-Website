# Portfolio Website

A responsive one-page portfolio website built with React.js and Tailwind CSS, featuring a beautiful white and green nature-inspired theme.

## 🌟 Features

- **Responsive Design**: Fully mobile-responsive across all devices
- **Smooth Scrolling**: Smooth navigation between sections
- **Modern UI**: Clean, professional design with nature-inspired green and white theme
- **Interactive Components**: Hover effects, animations, and interactive elements
- **Contact Form**: Functional contact form with validation
- **Multiple Sections**: Home, About Me, Skills, Internships, Certificates, and Contact

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project files**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website

## 📁 Project Structure

```
portfolio-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Internships.js
│   │   ├── Certificates.js
│   │   └── Contact.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Customization

### Personal Information
Update the following files with your personal information:

1. **Home Section** (`src/components/Home.js`):
   - Change name, title, and description
   - Update social media links
   - Replace profile image placeholder

2. **About Section** (`src/components/About.js`):
   - Update personal description
   - Modify statistics and skills
   - Replace profile image

3. **Skills Section** (`src/components/Skills.js`):
   - Update skill categories and proficiency levels
   - Add or remove skills as needed

4. **Internships Section** (`src/components/Internships.js`):
   - Replace with your actual internship experiences
   - Update company names, dates, and descriptions

5. **Certificates Section** (`src/components/Certificates.js`):
   - Replace with your actual certificates
   - Update issuer names, dates, and descriptions

6. **Contact Section** (`src/components/Contact.js`):
   - Update contact information
   - Modify social media links

### Styling
The website uses Tailwind CSS with custom color schemes defined in `tailwind.config.js`. You can modify:
- Color palette in the `colors` section
- Font families
- Animations and transitions
- Component styles in `src/index.css`

## 🛠️ Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm eject`: Ejects from Create React App (not recommended)

## ✉️ Contact Form Email Setup (EmailJS)

1. Create a free account at https://www.emailjs.com/ and add an Email Service connected to your email.
2. Create an Email Template with variables: `from_name`, `from_email`, `subject`, `message`, `to_email`.
3. Copy your Service ID, Template ID and Public Key.
4. Create a `.env.local` file in the project root with:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Restart `npm start` after adding environment variables.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Features Explained

### Smooth Scrolling
The navbar automatically highlights the current section and provides smooth scrolling navigation.

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Responsive typography
- Touch-friendly navigation

### Animations
- Fade-in animations for content
- Hover effects on interactive elements
- Smooth transitions throughout

### Contact Form
- Form validation
- Loading states
- Success/error messages
- Responsive design

## 🚀 Deployment

To deploy your portfolio:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to your preferred platform**
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3
   - Any static hosting service

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider submitting a pull request!

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Happy coding! 🚀**
