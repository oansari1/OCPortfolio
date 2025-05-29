import { useState } from "react";
import { clsx } from "clsx";
import { languages } from "./languages";
import { getFarewellText, getRandomWord } from "./utils";
import Confetti from "react-confetti";

export default function AssemblyEndgameApp() {
    // State values
    const [currentWord, setCurrentWord] = useState(() => getRandomWord());
    const [guessedLetters, setGuessedLetters] = useState([]);

    // Derived values
    const numGuessesLeft = languages.length - 1;
    const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length;
    const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter));
    const isGameLost = wrongGuessCount >= numGuessesLeft;
    const isGameOver = isGameWon || isGameLost;
    const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
    const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

    // Static values
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    function addGuessedLetter(letter) {
        setGuessedLetters(prevLetters =>
            prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
        );
    }

    function startNewGame() {
        setCurrentWord(getRandomWord());
        setGuessedLetters([]);
    }

    const languageElements = languages.map((lang, index) => {
        const isLanguageLost = index < wrongGuessCount;
        return (
            <span
                key={lang.name}
                className={clsx(
                    "relative rounded px-2 py-1 text-xs font-medium",
                    isLanguageLost ? "bg-gray-700 text-white" : ""
                )}
                style={{ backgroundColor: isLanguageLost ? undefined : lang.backgroundColor, color: lang.color }}
            >
                {isLanguageLost && <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white">💀</span>}
                {lang.name}
            </span>
        );
    });

    const letterElements = currentWord.split("").map((letter, index) => {
        const shouldRevealLetter = isGameLost || guessedLetters.includes(letter);
        return (
            <span
                key={index}
                className={clsx(
                    "flex items-center justify-center w-10 h-10 rounded-sm bg-gray-700 text-white text-lg border-b-2 border-gray-200",
                    isGameLost && !guessedLetters.includes(letter) ? "text-red-500" : ""
                )}
            >
                {shouldRevealLetter ? letter.toUpperCase() : ""}
            </span>
        );
    });

    const keyboardElements = alphabet.split("").map(letter => {
        const isGuessed = guessedLetters.includes(letter);
        const isCorrect = isGuessed && currentWord.includes(letter);
        const isWrong = isGuessed && !currentWord.includes(letter);
        return (
            <button
                key={letter}
                className={clsx(
                    "w-9 h-9 rounded-sm font-bold text-lg",
                    isCorrect ? "bg-green-600 text-white" :
                    isWrong ? "bg-red-600 text-white" :
                    "bg-yellow-500 text-gray-800 hover:bg-yellow-600"
                )}
                disabled={isGameOver || isGuessed}
                onClick={() => addGuessedLetter(letter)}
            >
                {letter.toUpperCase()}
            </button>
        );
    });

    const gameStatusClasses = clsx(
        "w-full max-w-xs p-2 rounded-md text-center mb-8",
        {
            "bg-green-600 text-white": isGameWon,
            "bg-red-600 text-white": isGameLost,
            "bg-purple-700 text-white border border-gray-800": !isGameOver && isLastGuessIncorrect
        }
    );

    return (
        <div className="flex flex-col items-center gap-4 p-6 pt-2 border-2 border-yellow-500 text-gray-100 min-h-[700px] rounded-xl">
            {isGameWon && <Confetti recycle={false} numberOfPieces={1000} />}
            
            <header className="text-center">
                <h1 className="text-3xl font-bold text-yellow-500">Assembly: Endgame</h1>
                <p className="text-sm text-gray-400 max-w-xs mx-auto">
                    Guess the word within 8 attempts to keep the programming world safe from Assembly!
                </p>
            </header>

            <section className={gameStatusClasses} aria-live="polite">
                {isGameOver ? (
                    isGameWon ? (
                        <>
                            <h2>You win!</h2>
                            <p>Well done! 🎉</p>
                        </>
                    ) : (
                        <>
                            <h2>Game over!</h2>
                            <p>You lose! Better start learning Assembly 😭</p>
                        </>
                    )
                ) : isLastGuessIncorrect ? (
                    <p className="italic font-light">{getFarewellText(languages[wrongGuessCount - 1].name)}</p>
                ) : null}
            </section>

            <section className="flex flex-wrap gap-2 max-w-xs">
                {languageElements}
            </section>

            <section className="flex gap-2 mb-8">
                {letterElements}
            </section>

            <section className="grid grid-cols-[repeat(auto-fit,_minmax(2.5vw,1fr))] gap-2 max-w-xs mb-8">
                {keyboardElements}
            </section>


            {isGameOver && (
                <button
                    onClick={startNewGame}
                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-lg py-2 px-6 rounded-md"
                >
                    New Game
                </button>
            )}
        </div>
    );
}
