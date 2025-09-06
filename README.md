# Dharmendra Sid - Full Stack Developer Portfolio

A modern, responsive portfolio website showcasing 12+ years of full-stack development experience, cloud expertise, and emerging technology exploration in Terraform and Generative AI.

![Portfolio Preview](https://github.com/siddharma/dharmendra-portfolio/blob/main/dharmendra-demo-portfplio.png)

## 🚀 Live Demo

[View Live Portfolio](https://github.com/siddharma/dharmendra-portfolio/blob/main/dharmendra-demo-portfplio.png)

## 📋 Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Performance](#performance)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Core Features
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Dark/Light Mode** - Theme toggle with system preference detection
- **Smooth Animations** - Micro-interactions and scroll animations
- **Modern UI/UX** - Clean, professional developer-focused design
- **SEO Optimized** - Meta tags, semantic HTML, and performance optimized

### Sections
- **Hero Section** - Professional introduction with call-to-action
- **About Me** - Personal journey and professional vision
- **Skills** - Technical expertise with categorized skill sets
- **Experience** - 12+ years of professional highlights
- **Projects** - Featured work and emerging technology experiments
- **Contact** - Interactive form with social media links

### Technical Features
- **TypeScript** - Type-safe development
- **Component Architecture** - Modular, reusable React components
- **Context API** - Global state management for theme
- **Accessibility** - WCAG compliant with proper ARIA labels
- **Performance** - Optimized bundle size and lazy loading

## 🛠 Technology Stack

### Frontend Framework
- **React 18.3.1** - Modern React with hooks and concurrent features
- **TypeScript 5.5.3** - Static type checking and enhanced developer experience
- **Vite 5.4.2** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Lucide React 0.344.0** - Beautiful, customizable icons
- **PostCSS 8.4.35** - CSS processing and optimization
- **Autoprefixer 10.4.18** - Automatic vendor prefixing

### Development Tools
- **ESLint 9.9.1** - Code linting and quality enforcement
- **TypeScript ESLint 8.3.0** - TypeScript-specific linting rules
- **React Hooks ESLint** - React hooks linting
- **React Refresh** - Fast refresh during development

### Build & Deployment
- **Vite Build** - Optimized production builds
- **ES Modules** - Modern JavaScript module system
- **Tree Shaking** - Dead code elimination
- **Code Splitting** - Automatic bundle optimization

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0.0 or higher)
- **npm** (version 8.0.0 or higher) or **yarn** (version 1.22.0 or higher)
- **Git** (for version control)

### Check your versions:
```bash
node --version
npm --version
git --version
```

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/siddharma/dharmendra-portfolio.git
cd dharmendra-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### 3. Environment Setup (Optional)
Create a `.env` file in the root directory for any environment variables:
```bash
# .env
VITE_APP_TITLE="Dharmendra Sid Portfolio"
VITE_CONTACT_EMAIL="dharmendra.sid@email.com"
```

## 💻 Development

### Start Development Server
```bash
npm run dev
```

Or using yarn:
```bash
yarn dev
```

The application will be available at `http://localhost:5173`

### Development Features
- **Hot Module Replacement (HMR)** - Instant updates without page refresh
- **TypeScript Checking** - Real-time type checking
- **ESLint Integration** - Code quality feedback
- **Fast Refresh** - Preserve component state during updates

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🏗 Build & Deployment

### Production Build
```bash
npm run build
```

This creates an optimized build in the `dist/` directory with:
- Minified JavaScript and CSS
- Optimized images and assets
- Gzipped files for better compression
- Source maps for debugging

### Preview Production Build
```bash
npm run preview
```

### Deployment Options

#### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist/` folder to Netlify
3. Configure redirects for SPA routing

#### Vercel
1. Connect your GitHub repository
2. Vercel will automatically detect Vite configuration
3. Deploy with zero configuration

#### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run build && npm run deploy`

## 📁 Project Structure

```
dharmendra-portfolio/
├── public/                 # Static assets
│   └── vite.svg           # Favicon
├── src/                   # Source code
│   ├── components/        # React components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Hero.tsx       # Hero section
│   │   ├── About.tsx      # About section
│   │   ├── Skills.tsx     # Skills showcase
│   │   ├── Experience.tsx # Professional experience
│   │   ├── Projects.tsx   # Featured projects
│   │   ├── Contact.tsx    # Contact form
│   │   └── Footer.tsx     # Site footer
│   ├── contexts/          # React contexts
│   │   └── ThemeContext.tsx # Theme management
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   ├── index.css          # Global styles
│   └── vite-env.d.ts      # Vite type definitions
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
├── eslint.config.js       # ESLint configuration
├── postcss.config.js      # PostCSS configuration
└── README.md              # Project documentation
```

## 🎨 Customization

### Personal Information
Update personal details in the following components:
- `src/components/Hero.tsx` - Name, role, location
- `src/components/About.tsx` - Personal story and vision
- `src/components/Experience.tsx` - Professional experience
- `src/components/Contact.tsx` - Contact information

### Styling
- **Colors**: Modify `tailwind.config.js` for custom color schemes
- **Fonts**: Update font families in Tailwind configuration
- **Spacing**: Adjust spacing scale in Tailwind config
- **Animations**: Customize animations in component files

### Content
- **Skills**: Update skill categories in `Skills.tsx`
- **Projects**: Add your projects in `Projects.tsx`
- **Social Links**: Update social media links in `Contact.tsx` and `Footer.tsx`

### Theme Configuration
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      }
    }
  }
}
```

## ⚡ Performance

### Optimization Features
- **Code Splitting** - Automatic route-based splitting
- **Tree Shaking** - Remove unused code
- **Asset Optimization** - Compressed images and fonts
- **Lazy Loading** - Components loaded on demand
- **Bundle Analysis** - Analyze bundle size

### Performance Metrics
- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

### Bundle Size Analysis
```bash
npm run build
npx vite-bundle-analyzer dist/
```

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

### Features Used
- CSS Grid and Flexbox
- CSS Custom Properties
- ES6+ JavaScript features
- Modern React features (Hooks, Context)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use semantic commit messages
- Ensure all tests pass
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email dharmendra.sid@email.com or create an issue in the GitHub repository.

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the beautiful icon set
- **Vite** - For the fast build tool
- **Vercel/Netlify** - For easy deployment options

---

**Built with ❤️ by Dharmendra Sid**

*Ready to build scalable applications and explore the future of AI-powered development*
