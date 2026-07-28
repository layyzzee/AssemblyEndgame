

export default function Keyboard(props) {

    const charElements = props.alphabet.map((char, index) => {
        return (
            <button key={index} className="keyboard-button">{char}</button>
        )
    })
    return (
        <div className="keyboard-container">
            {charElements}
        </div>
    )
}