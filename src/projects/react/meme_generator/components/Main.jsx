import { useState, useEffect } from "react"

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = useState([])
    
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const newMemeUrl = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl: newMemeUrl
        }))
    }
    
    function handleChange(event) {
        const {value, name} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <div className="max-w-3xl mx-auto p-4 bg-gray-200 text-black rounded-lg shadow-md">
            <div className="grid gap-4 mb-6 grid-cols-1 sm:grid-cols-2">
                <label className="col-span-1">
                    Top Text
                    <input
                        type="text"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                        placeholder="One does not simply"
                        className="w-full mt-1 p-2 rounded border bg-white border-gray-300"
                    />
                </label>

                <label className="col-span-1 mt-1 sm:mt-0">
                    Bottom Text
                    <input
                        type="text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                        placeholder="Walk into Mordor"
                        className="w-full mt-1 p-2 rounded border bg-white border-gray-300"
                    />
                </label>

                <button
                    onClick={getMemeImage}
                    className="col-span-1 sm:col-span-2 bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-lg transition"
                >
                    Get a new meme image 🖼
                </button>
            </div>

            <div className="relative flex flex-col items-center">
                <img
                    src={meme.imageUrl}
                    alt="Meme"
                    className="w-full rounded shadow-md"
                    style={{ maxHeight: "400px", objectFit: "contain" }}
                />
                <span
                    className="absolute left-1/2 -translate-x-1/2 top-2 w-[95%] text-white text-lg sm:text-3xl font-bold tracking-wider uppercase text-center px-2 pointer-events-none"
                    style={{
                        textShadow: '2px 2px 5px rgba(0,0,0,0.7)',
                        wordBreak: 'break-word'
                    }}
                >
                    {meme.topText}
                </span>
                <span
                    className="absolute left-1/2 -translate-x-1/2 bottom-2 w-[95%] text-white text-lg sm:text-3xl font-bold tracking-wider uppercase text-center px-2 pointer-events-none"
                    style={{
                        textShadow: '2px 2px 5px rgba(0,0,0,0.7)',
                        wordBreak: 'break-word'
                    }}
                >
                    {meme.bottomText}
                </span>
            </div>
        </div>
    )
}