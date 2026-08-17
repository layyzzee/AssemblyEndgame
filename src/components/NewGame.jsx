export default function NewGame(props) {
    return (
        <button className="new-game-button"
        onClick={props.startNewGame}>
            New Game
        </button>
    )
}