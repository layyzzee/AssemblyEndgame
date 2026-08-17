import { languages } from "../languages"

export default function Languages(props) {

    const languageElements = languages.map((lang, index) => {
        const isLanguageLost = index < props.wrongGuessCount
        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        return (
            <span className={`chip ${isLanguageLost ? "lost" : ""}`}
                style={styles}
                key={lang.name}>
                {lang.name}
            </span>
        )
    })
    return (
        <div className="languages-container">{languageElements}</div>
    )
}