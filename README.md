# Portfolio

A personal developer portfolio built with React and Vite, featuring a Three.js hyperspeed road animation as a live background, smooth page transitions, and animated UI components.

## ✨ Features

- **Hyperspeed background** — real-time Three.js WebGL animation with post-processing bloom
- **Animated UI** — typewriter effect, scroll-reveal, 3D tilt cards, and count-up counters
- **Multi-page SPA** — Home, About, Skills, Projects, Achievements, and Contact sections
- **Responsive** — mobile hamburger menu with full-screen overlay nav
- **Zero layout flash** — fixed background layer with scrollable content on top

## 🛠️ Tech Stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Three.js](https://threejs.org/) + [postprocessing](https://github.com/pmndrs/postprocessing) (bloom, SMAA)
- Tailwind CSS + custom CSS animations

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/anandprasad03/Portfolio.git
cd your-repo-name

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
src/
├── Components/
│   └── Hyperspeed.jsx   # Three.js animated background
├── Pages/
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── SkillsPage.jsx
│   ├── ProjectsPage.jsx
│   ├── AchievementsPage.jsx
│   └── ContactPage.jsx
├── App.jsx              # Nav, routing, layout
├── utils.jsx            # Shared hooks and components
├── main.jsx             # Entry point
└── index.css
```

## 📦 Build

```bash
npm run build
```

Output goes to the `dist/` folder, ready for static hosting (Vercel, Netlify, GitHub Pages, etc.).

## 📄 License

MIT
