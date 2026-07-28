
export default function CurrentWord(props) {

    const wordArray = [...props.currentWord]
    const wordElements = wordArray.map((letter, index) => {
        const isGuessed = props.guessedLetters.includes(letter)
        return (
            isGuessed ?
            <span className="letter" key={index}>{letter.toUpperCase()}</span> :
            <span className="hidden-letter" key={index}>?</span>
        )
    })
    console.log(props.guessedLetters)
    return (
        <div className="word-container">
            {wordElements}
        </div>
    )
}