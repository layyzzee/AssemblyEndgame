import clsx from "clsx"

export default function Keyboard(props) {

    const charElements = props.alphabet.map((char, index) => {
        return (
            <button key={index}
                className={clsx(
                    "keyboard-button",
                    props.currentWord.toUpperCase().includes(char.toUpperCase()) && "correct",
                    !props.currentWord.toUpperCase().includes(char.toUpperCase()) && props.guessedLetters.includes(char.toUpperCase()) && "wrong"
                )}
                onClick={() => props.guessLetter(char.toUpperCase())}>{char}</button>
        )
    })
    return (
        <div className="keyboard-container">
            {charElements}
        </div>
    )
}