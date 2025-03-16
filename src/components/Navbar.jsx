import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <header className="min-w-screen bg-[#3A3A3A] pb-4 flex justify-between items-end relative text-center shadow-xl shadow-neutral-900">
        <nav className="min-w-full mx-auto -mt-3 px-6 flex justify-between items-end">
          <h1 className="text-5xl text-[#FA9600] tracking-wider ml-2 relative top-3">
            <span className="text-7xl">O</span>zzie <span className="text-7xl">A</span>nsari
        </h1>
          <ul className="flex space-x-8 text-2xl font-bold mr-2 relative top-3">
            <Link to="/" className="transition-transform duration-300 transform hover:scale-115 hover:text-[#FA9600] hover:underline hover:shadow-lg">Home</Link>
            <Link to="/About" className="transition-transform duration-300 transform hover:scale-115 hover:text-[#FA9600] hover:underline hover:shadow-lg">About</Link>
            <Link to="/Projects" className="transition-transform duration-300 transform hover:scale-115 hover:text-[#FA9600] hover:underline hover:shadow-lg">Projects</Link>
          </ul>
        </nav>
      </header>    )
}
