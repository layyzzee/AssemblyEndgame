export default function ToggleDark({ theme, setTheme }) {
    const nextTheme = theme === "dark" ? "light" : "dark"
    return (
        <button onClick={() => setTheme(nextTheme)}
            className="toggle-dark-button">
            {nextTheme} mode
        </button>
    )
}