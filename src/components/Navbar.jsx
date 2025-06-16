import { Link } from "react-router-dom"
import { useState } from "react"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full md:min-w-screen bg-[#3A3A3A] pb-0 flex flex-col md:flex-row justify-between items-end z-10 fixed top-0 left-0 right-0 md:relative md:z-0 text-center shadow-xl shadow-neutral-900">
            <nav className="w-full md:min-w-full mx-auto -mt-3 md:px-6 flex flex-col md:flex-row justify-between items-end">
                <div className="flex w-full justify-between items-end">
                    <div className="flex flex-col items-start mt-4">
                        <h1 className="text-3xl md:text-5xl text-[#FA9600] tracking-wider ml-2 mb-2">
                            <span className="text-5xl md:text-7xl">O</span>zzie <span className="text-5xl md:text-7xl">A</span>nsari
                        </h1>
                        <span className="ml-2 text-lg md:text-xl text-[#BDBDBD] font-normal mb-2">
                            Web &amp; Software Developer
                        </span>
                        <div className="ml-2 h-1 w-36 bg-[#FA9600] rounded-sm"></div>
                    </div>
                    {/* Hamburger button, visible on small screens */}
                    <button
                        className="md:hidden relative top-2 p-2 focus:outline-none"
                        aria-label="Toggle menu"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? (
                            // X icon
                            <svg className="w-8 h-8 text-[#FA9600]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Hamburger icon
                            <svg className="w-8 h-8 text-[#FA9600]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
                {/* Links: horizontal on md+, hidden on small unless menuOpen */}
                <ul
                    className={`
                        sm:text-2xl font-bold mr-2 relative w-full md:w-auto
                        justify-center md:justify-end items-center md:items-end
                        transition-all duration-300
                        overflow-hidden md:overflow-visible
                        flex-row
                        ${menuOpen ? "flex max-h-40 opacity-100 visible" : "flex max-h-0 opacity-0 invisible"}
                        md:flex md:flex-row md:space-x-2 lg:space-x-8 md:max-h-none md:opacity-100 md:visible
                    `}
                    style={{
                        transitionProperty: "max-height, opacity, visibility",
                        transitionDuration: "300ms",
                    }}
                >
                    <Link to="/" className="block md:inline transition-transform duration-300 transform md:hover:scale-115 md:hover:text-[#FA9600] md:hover:underline md:hover:shadow-lg px-2 py-1">
                        Home
                    </Link>
                    <Link to="/About" className="block md:inline transition-transform duration-300 transform md:hover:scale-115 md:hover:text-[#FA9600] md:hover:underline md:hover:shadow-lg px-2 py-1">
                        About
                    </Link>
                    <Link to="/Projects" className="block md:inline transition-transform duration-300 transform md:hover:scale-115 md:hover:text-[#FA9600] md:hover:underline md:hover:shadow-lg px-2 py-1">
                        Projects
                    </Link>
                    <Link to="/Blog" className="block md:inline transition-transform duration-300 transform md:hover:scale-115 md:hover:text-[#FA9600] md:hover:underline md:hover:shadow-lg px-2 py-1">
                        Blog
                    </Link>
                </ul>
            </nav>
        </header>
    )
}
