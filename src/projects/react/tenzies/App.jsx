import { useState, useRef, useEffect } from "react"
import Die from "./Die"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

export default function TenziesApp() {
    const [dice, setDice] = useState(() => generateAllNewDice())
    const buttonRef = useRef(null)

    const gameWon = dice.every(die => die.isHeld) &&
        dice.every(die => die.value === dice[0].value)
        
    useEffect(() => {
        if (gameWon) {
            buttonRef.current.focus()
        }
    }, [gameWon])

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            }))
    }
    
    function rollDice() {
        if (!gameWon) {
            setDice(oldDice => oldDice.map(die =>
                die.isHeld ?
                    die :
                    { ...die, value: Math.ceil(Math.random() * 6) }
            ))
        } else {
            setDice(generateAllNewDice())
        }
    }

    function hold(id) {
        setDice(oldDice => oldDice.map(die =>
            die.id === id ?
                { ...die, isHeld: !die.isHeld } :
                die
        ))
    }

    const diceElements = dice.map(dieObj => (
        <Die
            key={dieObj.id}
            value={dieObj.value}
            isHeld={dieObj.isHeld}
            hold={() => hold(dieObj.id)}
        />
    ))

    return (
        <section className="w-full max-w-4xl p-4 rounded-lg overflow-hidden bg-[#3A3A3A] my-4 mx-auto pb-3">
        <h2
          className="font-semibold text-[#FA9600] mt-0 mb-2 sm:mb-4"
          style={{
            fontSize: "clamp(2rem, 4vw, 2.75rem)",
          }}
        >Tenzies</h2>
        <p className="text-[#8C8C8C] my-4">A fun game using a randomizer and conditional rendering</p>
        <div className="bg-gray-100 p-8 rounded-lg shadow-md w-full max-w-md mx-auto flex flex-col items-center justify-center">
            {gameWon && <Confetti />}
            <div aria-live="polite" className="sr-only">
                {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
            </div>
            <p className="text-gray-600 mb-8 text-center">
                Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
            </p>
            <div className="grid grid-cols-5 gap-4 mb-8">
                {diceElements}
            </div>
            <button 
                ref={buttonRef}
                onClick={rollDice}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
            >
                {gameWon ? "New Game" : "Roll"}
            </button>
        </div>
        </section>
    )
}