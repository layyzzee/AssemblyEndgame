
export default function CurrentWord(props) {

    const wordArray = [...props.currentWord]
    const wordElements = wordArray.map((letter, index) => {
        return (
            <span className="letter" key={index}>{letter.toUpperCase()}</span>
        )
    })

    return (
        <div className="word-container">
            {wordElements}
        </div>
    )
}