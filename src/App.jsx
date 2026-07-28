import {useState} from "react"
import Header from "./components/Header"
import Status from "./components/Status"

/**
 * Goal: Build out the main parts of our app
 * 
 * Challenge: Add a header with the game title
 * and description. Startin' out easy 🙂🚶‍➡️
 */

export default function AssemblyEndgame() {

  const [isWon, setIsWon] = useState(true)

    return (
        <main>
            <Header />
            {isWon && <Status />}
        </main>
    )
}
