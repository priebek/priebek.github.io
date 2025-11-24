# Development Guide

## Prerequisites

- Node.js (v22 or higher recommended)
- npm

## Setup

1. Clone the repository:
```bash
git clone https://github.com/priebek/priebek.github.io.git
cd priebek.github.io
```

2. Install dependencies:
```bash
npm install
```

## Running Locally

1. Add `homepage` to `package.json`:
```json
"homepage": "https://priebek.github.io/"
```

2. Start the development server:
```bash
npm start
```

The site will open at http://localhost:3000

## Building

To create a production build:
```bash
npm run build
```

The optimized files will be in the `build/` directory.

## Deployment

1. **Important**: Remove `homepage` from `package.json` before deploying
2. Deploy to GitHub Pages:
```bash
npm run deploy
```

This command will automatically build and deploy to the `gh-pages` branch.

## Project Structure

```
├── public/               # Static assets
│   ├── images/          # Project images and icons
│   ├── portfolio_projects.json      # Projects data
│   └── portfolio_shared_data.json   # Shared portfolio data
├── src/
│   ├── components/      # React components
│   ├── scss/           # Stylesheets
│   └── App.js          # Main application
└── package.json
```

## Customization

### Adding a New Project

Edit `public/portfolio_projects.json` and add your project entry:

```json
{
  "title": "Project Name",
  "subtitle": "Short description",
  "startDate": "2025",
  "description": "Detailed description of the project...",
  "images": [
    "images/portfolio/project-name/p1.png"
  ],
  "url": "https://project-url.com",
  "technologies": [
    {
      "name": "Technology",
      "class": "devicon-technology-plain"
    }
  ]
}
```

### Adding Project Images

1. Create a directory: `public/images/portfolio/your-project-name/`
2. Add your images (e.g., `p1.png`, `p2.png`)
3. Reference them in the project JSON

## Technologies Used

- React 16
- React Scripts 5.0.1
- Bootstrap 4
- Sass
- React Typical (typing animation)
- React Awesome Slider
- Iconify

## Troubleshooting

### Port Already in Use
If port 3000 is already in use, the dev server will prompt you to use a different port.

### Build Errors
Make sure all dependencies are installed:
```bash
rm -rf node_modules package-lock.json
npm install
```
