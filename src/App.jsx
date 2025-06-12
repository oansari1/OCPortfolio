import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Blog from './pages/Blog'
import ProjectCategory from "./pages/ProjectCategory"
import AssemblyEndgameApp from "./projects/react/assembly_endgame/App"
import TenziesApp from './projects/react/tenzies/App';
import MemeGeneratorWrapper from "./projects/react/meme_generator/MemeGeneratorWrapper"
import ChefClaudeWrapper from "./projects/react/chef_claude/ChefClaudeWrapper"
import TravelWrapper from "./projects/react/travel/TravelWrapper"
import StaticReactWrapper from "./projects/react/static_react/StaticReactWrapper"
import NotFound from "./pages/NotFound"

export default function App() {
  
  return (
    <div className="bg-[#252525] text-[#8C8C8C] font-sans min-h-screen flex flex-col">
      <Router>
        <Navbar />
        <main id="mainContent" className="flex flex-grow items-center justify-center w-full mx-auto mt-36 p-2 md:pt-0 md:mt-0">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/projects/:category" element={<ProjectCategory />} />
            <Route path="/projects/react/assembly_endgame" element={<AssemblyEndgameApp />} />
            <Route path="/projects/react/tenzies" element={<TenziesApp />} />
            <Route path="/projects/react/meme_generator" element={<MemeGeneratorWrapper />} />
            <Route path="/projects/react/chef_claude" element={<ChefClaudeWrapper />} />
            <Route path="/projects/react/travel" element={<TravelWrapper />} />
            <Route path="/projects/react/static_react" element={<StaticReactWrapper />} />
            {/* Add more project routes here */}
            {/* Catch-all route for 404 Not Found */}
            <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  )
}