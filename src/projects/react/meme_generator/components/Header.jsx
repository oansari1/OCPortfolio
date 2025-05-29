import trollFace from "../images/troll-face.png"

export default function Header() {
    return (
        <div className="flex items-center bg-gradient-to-r from-purple-800 to-purple-500 text-white py-5 px-4 mb-6 rounded-lg shadow-md">
            <img src={trollFace} alt="Troll face logo" className="h-10 mr-2" />
            <h1 className="text-lg font-bold tracking-wide">Meme Generator</h1>
        </div>
    )
}