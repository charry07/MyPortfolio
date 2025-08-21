# 🚀 Anderson Charry - Portfolio Developer

<div align="center">

![Portfolio Banner](https://github.com/charry07/MyPortfolio/assets/85309832/cf70476a-28c9-4f45-bc5e-31ca29bbfe6f)

### ✨ Modern & Responsive Developer Portfolio ✨

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

[🌐 **Live Demo**](https://yourportfolio.vercel.app) | [📧 **Contact Me**](mailto:your.email@gmail.com) | [💼 **LinkedIn**](https://linkedin.com/in/anderson-charry)

</div>

---

## 📋 About This Project

Welcome to my personal portfolio! This is a modern, responsive web application built with **React** and **TypeScript** that showcases my skills, projects, and experience as a developer. The portfolio features smooth animations, interactive components, and a clean, professional design.

### 🎯 **What You'll Find Here:**
- **About Me**: Professional background and introduction
- **Skills**: Technical expertise and proficiency levels
- **Projects**: Showcase of my best development work
- **Contact**: Easy ways to get in touch with me

### ✨ **Key Features:**
- 🎨 **Modern UI/UX** with smooth animations using Animate.css
- 📱 **Fully Responsive** design that works on all devices
- 🚀 **Fast Performance** powered by Vite
- 📧 **Contact Form** with email functionality using Nodemailer
- 🎪 **Interactive Carousel** for project showcases
- 🎭 **Dynamic Animations** and transitions
- 📬 **Newsletter Subscription** integration
- 🌟 **Professional Layout** with Bootstrap components

---

## 🛠️ Technology Stack

### **Frontend:**
- **React 18** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next-generation frontend tooling
- **Bootstrap 5** - CSS framework
- **React Bootstrap** - Bootstrap components for React
- **Animate.css** - CSS animations library

### **Backend:**
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Nodemailer** - Email sending capability
- **CORS** - Cross-origin resource sharing

### **Additional Libraries:**
- **React Router** - Client-side routing
- **React Multi Carousel** - Responsive carousels
- **React Mailchimp Subscribe** - Newsletter integration
- **React On Screen** - Scroll-triggered animations

---

## 🚀 Quick Start

### **Prerequisites**
- Node.js 16.15.1 or higher
- npm or yarn package manager

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/charry07/MyPortfolio.git
   cd MyPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   # Server Configuration
   PORT_SERVER=5000
   
   # Gmail Configuration for Contact Form
   GMAIL_USER=your.email@gmail.com
   GMAIL_PASSWORD=your_app_password
   
   # Mailchimp Configuration (Optional)
   MAILCHIMP_URL=your_mailchimp_url
   ```

4. **Run the development server**
   ```bash
   # Start frontend (Vite dev server)
   npm run dev
   
   # Start backend server (in another terminal)
   npm run server
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to see the portfolio in action!

---

## 📁 Project Structure

```
MyPortfolio/
├── 📁 src/
│   ├── 📁 components/           # Reusable React components
│   │   ├── Icons.tsx           # Icon components
│   │   ├── Logo.tsx            # Logo component
│   │   ├── ProjectCard.tsx     # Project showcase cards
│   │   ├── MailchimpForm.tsx   # Newsletter subscription
│   │   └── Newsletter.tsx      # Newsletter section
│   ├── 📁 secciones/           # Main portfolio sections
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Home.tsx           # Hero/landing section
│   │   ├── Skills.tsx         # Skills showcase
│   │   ├── Projects.tsx       # Projects gallery
│   │   ├── Contact.tsx        # Contact form
│   │   └── Footer.tsx         # Footer section
│   ├── 📁 assets/             # Static assets
│   │   ├── 📁 img/            # Images and icons
│   │   └── 📁 font/           # Custom fonts
│   ├── 📁 helpers/            # Utility functions
│   └── App.tsx                # Main application component
├── 📄 server.cjs              # Express server for contact form
├── 📄 package.json            # Dependencies and scripts
├── 📄 vite.config.ts          # Vite configuration
└── 📄 dockerfile             # Docker configuration
```

---

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start Vite development server
npm run server       # Start Express backend server

# Building
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint for code quality

# Vite Only
npm run vite         # Direct Vite command
```

---

## 🌐 Deployment

### **Frontend Deployment (Vercel/Netlify)**
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting platform

### **Backend Deployment (Heroku/Railway)**
1. Ensure your server.cjs is configured for production
2. Set environment variables on your hosting platform
3. Deploy with your preferred hosting service

### **Docker Deployment**
```bash
# Build the Docker image
docker build -t my-portfolio .

# Run the container
docker run -p 3000:3000 my-portfolio
```

---

## 📧 Contact Form Setup

To enable the contact form functionality:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. **Update .env file** with your credentials
4. **Start the backend server**: `npm run server`

---

## 🎨 Customization

### **Updating Project Showcase**
Edit `src/secciones/Projects.tsx` to add your projects:

```tsx
const projects = [
  {
    title: "Your Project Name",
    description: "Project description",
    imgUrl: "/src/assets/img/your-project.png",
    gitUrl: "https://github.com/yourusername/project",
    liveUrl: "https://your-project.vercel.app"
  }
  // Add more projects...
];
```

### **Updating Skills**
Modify `src/secciones/Skills.tsx` to reflect your technical skills and proficiency levels.

### **Changing Theme Colors**
Update CSS variables in `src/App.css` to customize the color scheme.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Connect With Me

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/anderson-charry)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/charry07)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://yourportfolio.vercel.app)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:your.email@gmail.com)

</div>

---

<div align="center">

### ⭐ If you like this portfolio, please give it a star! ⭐

**Made with ❤️ by Anderson Charry**

</div>
