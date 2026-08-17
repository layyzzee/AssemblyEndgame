export default function ScreenReader(props) {
    const numGuessesLeft = props.numGuessesLeft - props.wrongGuessCount
    return(
      <section
        className="sr-only"
        aria-live="polite"
        role="status">
        <p>
          {props.currentWord.includes(props.lastGuessedLetter) ?
            `Correct! The letter ${props.lastGuessedLetter} is in the word.` :
            `Sorry, the letter ${props.lastGuessedLetter} is not in the word.`
          }
          You have {numGuessesLeft} attempts left.
        </p>
        <p>Current word: {props.currentWord.split("").map(letter =>
          props.guessedLetters.includes(letter) ? letter + "." : "blank.")
          .join(" ")}</p>
      </section>
    )
}