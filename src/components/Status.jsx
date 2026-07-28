
export default function Status() {
    const title="You win!"
    const description="Well done! 🎉"
    return(
        <div className="status-container">
            <h2 className="status-title">{title}</h2>
            <p className="status-description">{description}</p>
        </div>
    )
}