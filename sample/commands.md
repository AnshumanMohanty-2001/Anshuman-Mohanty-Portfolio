# Anshuman Mohanty - Data Science Portfolio

A modern, interactive portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring MDX-powered case studies and a live ML model playground.

## 🚀 Features

- **Interactive Landing Page** with animated particles and data visualizations
- **Dark Data Theme** with gradient accents and glassmorphism effects
- **MDX Case Studies** with embedded Visx chart components
- **ML Model Playground** connected to FastAPI backend on Hugging Face Spaces
- **Fully Responsive** design with mobile-first approach
- **TypeScript** for type safety
- **CSS Modules** for scoped styling

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── app/                    # Next.js 14 app directory
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/             # React components
│   │   ├── layout/            # Navbar, Footer
│   │   └── home/              # Landing page components
│   └── styles/                # CSS modules
│       ├── animations.css
│       └── components/
├── public/                     # Static assets
└── fastapi-model/             # ML API (separate deployment)
```

## 🛠️ Installation

### Prerequisites
- Node.js 18+ and npm
- Git

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Create environment file**
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Hugging Face API URL:
```env
NEXT_PUBLIC_HF_API_URL=https://your-space.hf.space/api
```

4. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Colors
Edit CSS variables in `src/app/globals.css`:
```css
:root {
  --bg-primary: #0a0e17;
  --accent-cyan: #00d9ff;
  --accent-purple: #b366ff;
  /* ... */
}
```

### Content
- **Hero Section**: Edit `src/components/home/Hero.tsx`
- **Projects**: Add to `src/data/projects.ts`
- **Case Studies**: Create MDX files in `src/content/case-studies/`

## 📊 Adding Case Studies

Create a new `.mdx` file in `src/content/case-studies/`:

```mdx
---
title: "My Case Study"
date: "2024-01-30"
description: "Brief description"
tags: ["Python", "Machine Learning"]
---

# Introduction

Your content here...

<BarChart data={yourData} />
```

## 🤖 ML Model Playground

### Setting up FastAPI Backend

1. **Navigate to fastapi directory**
```bash
cd fastapi-model
```

2. **Install Python dependencies**
```bash
pip install -r requirements.txt
```

3. **Run locally**
```bash
uvicorn app.main:app --reload
```

4. **Deploy to Hugging Face Spaces**
   - Create a new Space on Hugging Face
   - Select "Docker" as SDK
   - Push your `fastapi-model/` directory
   - Copy the Space URL to your `.env.local`

## 🚢 Deployment

### Deploy to Vercel

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables
   - Deploy!

### Environment Variables on Vercel
Add these in your Vercel project settings:
- `NEXT_PUBLIC_HF_API_URL`: Your Hugging Face Spaces API URL

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Modules
- **Charts**: Visx
- **Content**: MDX
- **Animations**: Framer Motion
- **Backend**: FastAPI (Python)
- **Deployment**: Vercel + Hugging Face Spaces

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

Anshuman Mohanty - [Your Email]

Project Link: [https://github.com/yourusername/portfolio-website](https://github.com/yourusername/portfolio-website)

---

Made with ❤️ using Next.js and TypeScript