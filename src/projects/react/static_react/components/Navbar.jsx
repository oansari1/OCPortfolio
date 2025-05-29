import ReactLogo from '../images/react-logo.png';

export default function Navbar() {
    return (
        <header className="bg-gray-700 rounded-t-xl py-7 px-6">
            <nav className="flex items-center h-full">
                <img src={ReactLogo} alt="React logo" className="w-10 mr-2" />
                <span className="text-[#61DAFB] text-xl font-bold">ReactFacts</span>
            </nav>
        </header>
    );
}
