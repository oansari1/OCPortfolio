import Globe from '../images/globe.png';

export default function Header() {
    return (
        <header className="bg-[#F55A5A] flex items-center justify-center text-white h-14 px-4">
            <img src={Globe} alt="Globe icon" className="w-6 mr-2" />
            <h1 className="text-base font-medium">My Travel Journal</h1>
        </header>
    )
}
