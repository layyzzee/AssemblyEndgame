export default function GuessCounter(props) {
    const numGuessesLeft = props.numGuessesLeft - props.wrongGuessCount
    return (
        <div className="guess-counter">
            <span className="guess-counter-text">Guesses Left: </span>
            <span className="guess-counter-number">{numGuessesLeft}</span>
        </div>
    )
}