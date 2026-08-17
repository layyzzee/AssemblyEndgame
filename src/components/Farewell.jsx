import { getFarewellText } from "../utils"
import { languages } from "../languages"

export default function Farewell(props) {
    const lastGuess = props.guessedLetters[props.guessedLetters.length - 1]

    if (!lastGuess) {
        return null
    } else if (props.currentWord.includes(lastGuess)) {
        return <div className="farewell-correct">{lastGuess} is Correct!</div>
    } else {
        return (
            <div className="farewell-wrong">
                {getFarewellText(languages[props.wrongGuessCount - 1].name)}
            </div>
        )
    }
}