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
            <Route path="/blog" element={<Blog />} />
            <Route path="/projects/:category" element={<ProjectCategory />} />
            <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  )
}