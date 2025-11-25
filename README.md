# Aayush Pawar - Personal Website

A modern, high-tech personal website showcasing my experience as an AI/ML Engineer and Computer Science student at Georgia Tech.

## Features

- 🎨 Modern glassmorphism design with animated backgrounds
- ✨ Smooth scroll animations using Framer Motion
- 📱 Fully responsive design
- 🚀 Built with React + Vite for optimal performance
- 🎯 Interactive sections with hover effects
- 🌈 Gradient accents and neon styling

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **CSS3** - Modern styling with glassmorphism effects

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
personalwebsite/
├── public/
│   ├── resume.pdf            # Your resume PDF (add this file)
│   └── headshot.jpg          # Your headshot photo (add this file)
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Hero section with contact info
│   │   ├── Education.jsx     # Education section
│   │   ├── Skills.jsx        # Skills and certifications
│   │   ├── WorkExperience.jsx # Work experience timeline
│   │   └── Projects.jsx      # Projects showcase
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Sections

1. **Hero** - Introduction with contact information
2. **Education** - Georgia Tech education details
3. **Skills** - Languages, technologies, and certifications
4. **Work Experience** - Timeline of professional experience
5. **Projects** - Featured projects and achievements

## Adding Your Resume

1. Place your resume PDF file in the `public/` folder
2. Name it exactly: `resume.pdf`
3. The resume button will automatically link to it

The file should be at: `public/resume.pdf`

## Adding Your Headshot

1. Place your headshot photo in the `public/` folder
2. Name it exactly: `headshot.jpg` (or update the extension in `Hero.jsx` if using PNG)
3. The image will automatically appear in the hero section above your name

The file should be at: `public/headshot.jpg`

**Recommended:** Square image, 800x800px or larger for best quality

## Customization

All content is stored in the component files. You can easily update:
- Contact information in `Hero.jsx`
- Education details in `Education.jsx`
- Skills in `Skills.jsx`
- Work experience in `WorkExperience.jsx`
- Projects in `Projects.jsx`

Color scheme and styling can be customized in `src/index.css` using CSS variables.

## License

This project is open source and available for personal use.
