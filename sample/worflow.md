# Visual File Placement Guide

## 🗂️ Exact Directory Structure with All Files

```
portfolio-website/
│
├── 📄 index.html                          ← Standalone demo (optional, keep in root)
├── 📄 package.json                        ← Dependencies & scripts
├── 📄 package-lock.json                   ← Lock file (auto-generated)
├── 📄 tsconfig.json                       ← TypeScript configuration
├── 📄 tailwind.config.ts                  ← Tailwind CSS config
├── 📄 next.config.js                      ← Next.js configuration
├── 📄 .gitignore                          ← Git ignore rules
├── 📄 README.md                           ← Project documentation
├── 📄 DIRECTORY_STRUCTURE.md              ← Structure reference
├── 📄 MIGRATION_GUIDE.md                  ← This guide
│
├── 📁 .github/
│   └── 📁 workflows/
│       └── 📄 deploy.yml                  ← CI/CD (optional)
│
├── 📁 public/                             ← Static assets
│   ├── 📁 images/
│   │   ├── 📁 hero/
│   │   ├── 📁 projects/
│   │   └── 📁 about/
│   ├── 📄 favicon.ico
│   └── 📄 robots.txt
│
├── 📁 src/                                ← Main source code
│   │
│   ├── 📁 app/                            ← Next.js 14 App Router
│   │   ├── 📄 layout.tsx                  ← Root layout (has Navbar)
│   │   ├── 📄 page.tsx                    ← Home page (landing page)
│   │   ├── 📄 globals.css                 ← Global styles + CSS variables
│   │   │
│   │   ├── 📁 about/
│   │   │   └── 📄 page.tsx                ← About page
│   │   │
│   │   ├── 📁 projects/
│   │   │   ├── 📄 page.tsx                ← Projects listing
│   │   │   └── 📁 [slug]/
│   │   │       └── 📄 page.tsx            ← Individual project
│   │   │
│   │   ├── 📁 playground/
│   │   │   └── 📄 page.tsx                ← ML Playground
│   │   │
│   │   ├── 📁 case-studies/
│   │   │   ├── 📄 page.tsx                ← Case studies listing
│   │   │   └── 📁 [slug]/
│   │   │       └── 📄 page.tsx            ← Individual case study
│   │   │
│   │   └── 📁 contact/
│   │       └── 📄 page.tsx                ← Contact page
│   │
│   ├── 📁 components/                     ← React components
│   │   │
│   │   ├── 📁 layout/                     ← Layout components
│   │   │   ├── 📄 Navbar.tsx              ← Navigation bar ✅
│   │   │   ├── 📄 Footer.tsx              ← Footer (to create)
│   │   │   └── 📄 Container.tsx           ← Wrapper (to create)
│   │   │
│   │   ├── 📁 home/                       ← Landing page components
│   │   │   ├── 📄 Hero.tsx                ← Hero section ✅
│   │   │   ├── 📄 ParticleBackground.tsx  ← Particles ✅
│   │   │   ├── 📄 GridBackground.tsx      ← Grid ✅
│   │   │   ├── 📄 DataVisualization.tsx   ← Bars ✅
│   │   │   └── 📄 ScrollIndicator.tsx     ← Scroll ✅
│   │   │
│   │   ├── 📁 ui/                         ← Reusable UI components
│   │   │   ├── 📄 Button.tsx              ← Button component
│   │   │   ├── 📄 Card.tsx                ← Card component
│   │   │   └── 📄 Modal.tsx               ← Modal component
│   │   │
│   │   ├── 📁 charts/                     ← Visx chart components
│   │   │   ├── 📄 BarChart.tsx            ← Bar chart
│   │   │   ├── 📄 LineChart.tsx           ← Line chart
│   │   │   └── 📄 ScatterPlot.tsx         ← Scatter plot
│   │   │
│   │   └── 📁 playground/                 ← Playground components
│   │       ├── 📄 ModelInput.tsx          ← Input form
│   │       └── 📄 ModelOutput.tsx         ← Results display
│   │
│   ├── 📁 styles/                         ← CSS Modules & Styles
│   │   ├── 📄 animations.css              ← All keyframes ✅
│   │   ├── 📄 variables.css               ← CSS variables (optional)
│   │   │
│   │   ├── 📁 components/                 ← Component-specific styles
│   │   │   ├── 📄 navbar.module.css       ← Navbar styles ✅
│   │   │   ├── 📄 hero.module.css         ← Hero styles ✅
│   │   │   ├── 📄 grid.module.css         ← Grid styles ✅
│   │   │   ├── 📄 particles.module.css    ← Particle styles ✅
│   │   │   ├── 📄 datavis.module.css      ← DataViz styles ✅
│   │   │   ├── 📄 scroll.module.css       ← Scroll styles ✅
│   │   │   ├── 📄 button.module.css       ← Button styles
│   │   │   └── 📄 card.module.css         ← Card styles
│   │   │
│   │   └── 📁 pages/                      ← Page-specific styles
│   │       ├── 📄 home.module.css         ← Home page styles
│   │       ├── 📄 about.module.css        ← About page styles
│   │       └── 📄 projects.module.css     ← Projects styles
│   │
│   ├── 📁 lib/                            ← Utilities & helpers
│   │   ├── 📄 api.ts                      ← API functions (HF)
│   │   ├── 📄 mdx.ts                      ← MDX processing
│   │   └── 📄 utils.ts                    ← Helper functions
│   │
│   ├── 📁 types/                          ← TypeScript types
│   │   ├── 📄 project.ts                  ← Project types
│   │   ├── 📄 caseStudy.ts                ← Case study types
│   │   └── 📄 model.ts                    ← ML model types
│   │
│   ├── 📁 hooks/                          ← Custom React hooks
│   │   ├── 📄 useIntersectionObserver.ts  ← Scroll detection
│   │   ├── 📄 useParticles.ts             ← Particle logic
│   │   └── 📄 useModelPrediction.ts       ← API calls
│   │
│   ├── 📁 data/                           ← Static data
│   │   ├── 📄 projects.ts                 ← Project metadata
│   │   └── 📄 skills.ts                   ← Skills data
│   │
│   └── 📁 content/                        ← MDX content
│       └── 📁 case-studies/
│           ├── 📄 sentiment-analysis.mdx  ← Case study 1
│           ├── 📄 customer-churn.mdx      ← Case study 2
│           └── 📄 stock-prediction.mdx    ← Case study 3
│
└── 📁 fastapi-model/                      ← ML API (separate)
    ├── 📁 app/
    │   ├── 📄 main.py                     ← FastAPI entry
    │   ├── 📁 models/
    │   │   └── 📄 predictor.py            ← Model wrapper
    │   └── 📁 routers/
    │       └── 📄 predict.py              ← API routes
    ├── 📁 model_artifacts/
    │   └── 📄 model.pkl                   ← Trained model
    ├── 📄 requirements.txt                ← Python deps
    ├── 📄 Dockerfile                      ← Docker config
    └── 📄 README.md                       ← API docs
```

## 🎯 Files Created from index.html

### ✅ Already Created (from index.html conversion)

| Original (index.html) | New Location | Status |
|----------------------|--------------|--------|
| `<nav>` HTML | `src/components/layout/Navbar.tsx` | ✅ Created |
| `.navbar` CSS | `src/styles/components/navbar.module.css` | ✅ Created |
| `<div class="hero">` | `src/components/home/Hero.tsx` | ✅ Created |
| `.hero` CSS | `src/styles/components/hero.module.css` | ✅ Created |
| `<div class="grid-background">` | `src/components/home/GridBackground.tsx` | ✅ Created |
| `.grid-background` CSS | `src/styles/components/grid.module.css` | ✅ Created |
| `<div class="particles">` | `src/components/home/ParticleBackground.tsx` | ✅ Created |
| `.particles` CSS | `src/styles/components/particles.module.css` | ✅ Created |
| `<div class="viz-accent">` | `src/components/home/DataVisualization.tsx` | ✅ Created |
| `.viz-accent` CSS | `src/styles/components/datavis.module.css` | ✅ Created |
| `<div class="scroll-indicator">` | `src/components/home/ScrollIndicator.tsx` | ✅ Created |
| `.scroll-indicator` CSS | `src/styles/components/scroll.module.css` | ✅ Created |
| CSS Variables (`:root`) | `src/app/globals.css` | ✅ Created |
| All @keyframes | `src/styles/animations.css` | ✅ Created |
| Main page structure | `src/app/page.tsx` | ✅ Created |
| Root layout | `src/app/layout.tsx` | ✅ Created |

## 🔧 Configuration Files

| File | Purpose | Status |
|------|---------|--------|
| `package.json` | Dependencies & scripts | ✅ Created |
| `tsconfig.json` | TypeScript config | ✅ Created |
| `tailwind.config.ts` | Tailwind config | ✅ Created |
| `next.config.js` | Next.js config | ✅ Created |
| `.gitignore` | Git exclusions | ✅ Created |
| `README.md` | Documentation | ✅ Created |

## 📦 What You Need to Do

1. **Create the directory structure:**
```bash
cd portfolio-website
mkdir -p src/{app,components/{layout,home,ui,charts,playground},styles/{components,pages},lib,types,hooks,data,content/case-studies}
mkdir -p public/{images/{hero,projects,about},fonts}
mkdir -p fastapi-model/app/{models,routers,schemas}
```

2. **Copy the files I created to their locations** (all in `/mnt/user-data/outputs/`)

3. **Install dependencies:**
```bash
npm install
```

4. **Start development:**
```bash
npm run dev
```

That's it! Everything is organized and ready to scale! 🚀