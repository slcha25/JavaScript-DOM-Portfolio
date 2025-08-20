# JavaScript-DOM-Portfolio

## Sandra Chan - Developer Portfolio
A responsive, modern, and accessible personal portfolio website built with pure HTML, CSS, and JavaScript(DOM). It Showcare my skills, projects and provide my contact.

## Live Demo
[Sandra Chan's Portfolio](https://javascript-dom-portfolio.onrender.com/)

## ✨ Features
- **Fully Responsive Design**: Looks great on desktops, tablets, and mobile devices.
- **Dark/Light Mode Toggle**: User preference is saved using localStorage for a consistent experience.
- **Interactive Elements**:
  - Smooth scrolling navigation
  - Animated typing effect on the hero section
  - Interactive project carousel
  - Functional contact form (using web3Forms)
- **Modern UI/UX**: clean design with a cohesive color scheme and intuitive layout
- **Accessibility considerations**: include ARIA labels and semantic HTML for better screen reader support.

## 🛠️ Built with 
- **Frontend**: Html, CSS and JavaScript
- **Styling**: Pure CSS (Flexbox, CSS Grid, Custome Properties for theming)
- **JavaScript Libraries**:
  - [Typed.js](https://github.com/mattboldt/typed.js/) - For the typing animation in the hero section.
  - [Web3Forms] - For the functional contact form without a backend.
- Fonts: [Google Fonts Nunito](https://fonts.google.com/)
- Icons: Custom and local SVG/PNG

## 📁 Project Structure
```text
sandra-chan-portfolio/
├── index.html          # Main HTML file
├── style.css           # Main stylesheet
├── update.js           # JavaScript for interactivity (menu, theme, carousel, form)
├── asset/              # Directory for images and icons
│   ├── IMAG1268.jpg
│   ├── dark_mode.png
│   ├── light_mode.png
│   ├── left-arrow.png
│   ├── right-arrow.png
│   ├── GitHub.jpg
│   ├── LinkedIn        # Note: This might need a file extension
│   └── email.jpg
└── README.md           # This file
```
## 🚀 Getting Started
To run this portfolio locally on your machine:
1. Clone the repository:
```bash
  git clone https://github.com/slcha25/myportfolio.git
```
2. Navigate to the project directory:
``` bash
  cd myportfolio
```
3. Open `index.html` in your browser:
   Simply double-click the file, or use a local server for best practices.

## 🤖 How it works
- **Navigation**: The hamburger menu transforms into an "X" when active and slides in the off-screen navigation for mobile users.
- **Theme Switching**: The `update.js` script toggles a `.darkMode` class on the `<body>` and manages the user's preference in `localStorage`.
- **Project Carousel**: The script calculates slide positions and handles navigation (next/prev buttons and indicator dots) with smooth transitions.
- **Contact Form**: On submission, the form data is sent to Web3Forms, which forwards it to your configured email address. The form then resets and shows an alert.

## :mailbox: Contact :wink:
- [LinkedIn](https://www.linkedin.com/in/sok-chan/)
- [GitHub](https://github.com/slcha25)

## 👩‍💻 Developer Notes
This portfolio was developed as a project for the nPower Full Stack Developer program. It demonstrates proficiency in front-end fundamentals, responsive design principles, and interactive JavaScript.

