export default function Header(){
    const title="Assembly: Endgame"
    const description="Guess the word in under 8 attempts to keep the programming world safe from Assembly!"
    return (
        <>
        <h1 className="header-title">{title}</h1>
        <p className="header-description">{description}</p>
        </>
    )
}