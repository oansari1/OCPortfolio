import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import ProjectCategory from "./pages/ProjectCategory"
import NotFound from "./pages/NotFound"

export default function App() {
  
  return (
    <div className="bg-[#252525] text-[#8C8C8C] font-sans min-h-screen flex flex-col">
      <Router>
        <Navbar />
        <main className="flex flex-grow items-center justify-center w-screen mx-auto mt-2 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:category" element={<ProjectCategory />} />
            <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

// const tailwindLinks = [
//   { label: 'Typography', href: 'Tailwind/typography.html' },
//   { label: 'Layout', href: 'Tailwind/layouts.html' },
//   { label: 'Spacing', href: 'Tailwind/spacing.html' },
//   { label: 'Flex', href: 'Tailwind/flex.html' },
//   { label: 'Grid', href: 'Tailwind/grids.html' },
//   { label: 'Borders', href: 'Tailwind/borders.html' },
//   { label: 'Effects', href: 'Tailwind/effects.html' },
//   { label: 'Animations', href: 'Tailwind/animations.html' },
//   { label: 'Darkmode', href: 'Tailwind/darkmode.html' },
// ]

// const reactLinks = [
//   { label: 'Static Pages', href: './React/static_react/index.html' },
//   { label: 'Data Driven', href: './React/travel/index.html' },
//   { label: 'React State', href: './React/chef_claude/index.html' },
//   { label: 'Side Effects', href: './React/meme_generator/index.html' },
//   { label: 'Tenzies', href: './React/tenzies/index.html' },
//   { label: 'Assembly Endgame', href: './React/assembly_endgame/index.html' },
// ]
//<div className="bg-[#252525] min-h-screen flex flex-col items-center justify-center">
// <Navbar />
// <main className="flex-grow w-screen mx-auto mt-8 p-4">
// { <HorizontalAccordion
//     sections={[
//       { title: 'C', links: [], logo: 'c-plain.svg' },
//       { title: 'Tailwind CSS', links: tailwindLinks, logo: 'tailwindcss-original.svg' },
//       { title: 'React', links: reactLinks, logo: 'react-original.svg' },
//       { title: 'Java', links: [], logo: 'java-plain.svg' },
//       { title: 'Web Basics', links: [], logo: 'web-basics.svg' }, // HTML, CSS, JS combined
//       { title: 'WordPress', links: [], logo: 'wordpress-plain-wordmark.svg' },
//       { title: 'Adobe XD', links: [], logo: 'xd-plain.svg' },
//     ]}
//   />}
// </main>
// <footer className="py-4">
//   <p className="text-center text-sm">© 2025 My Portfolio. All rights reserved.</p>
// </footer>
// </div>