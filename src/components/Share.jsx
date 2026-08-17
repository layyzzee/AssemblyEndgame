export default function Share({ currentWord, guessedLetters, isGameWon }) {

    const guessResults = guessedLetters.map(letter =>
        currentWord.includes(letter) ? "🟩" : "🟥"
    ).join("")

    function shareResults() {
        const shareText = `🎮 Hangman #42
        ${guessResults}
    ${isGameWon? `Won in ${guessedLetters.length} guesses` : 
    `I got ${guessedLetters.length} correct`}`
    
        navigator.clipboard.writeText(shareText)
    }

    return (
        <button onClick={shareResults}>
            Share
        </button>
    )
}