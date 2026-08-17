import { useState } from "react"

export default function Share({ currentWord, guessedLetters, isGameWon }) {
    const [copied, setCopied] = useState(false)

    const guessResults = guessedLetters.map(letter =>
        currentWord.includes(letter) ? "🟩" : "🟥"
    ).join("")

    async function shareResults() {
        const shareText = `🎮 Hangman #42
        ${guessResults}
        ${isGameWon ? `Won in ${guessedLetters.length} guesses` : 
        `I got ${guessedLetters.length} correct`}`
        
        try {
            await navigator.clipboard.writeText(shareText)
            setCopied(true)

            setTimeout(() => {
                setCopied(false)
            }, 2000)
        } catch (error) {
            console.error("Failed to copy:", error)
        }
    }

    return (
        <button
            className="share-button"
            onClick={shareResults}
        >
            {copied ? "Copied! ✓" : "Share 🔗"}
        </button>
    )
}