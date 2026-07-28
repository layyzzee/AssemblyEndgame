import { useState } from "react"
import Header from "./components/Header"
import Status from "./components/Status"
import Languages from "./components/Languages"
import CurrentWord from "./components/CurrentWord"
import Keyboard from "./components/Keyboard"

/**
 * Goal: Build out the main parts of our app
 * 
 * Challenge: 
 * Display the keyboard ⌨️. Use <button>s for each letter
 * since it'll need to be clickable and tab-accessible.
 */

export default function AssemblyEndgame() {

  const [isWon, setIsWon] = useState(true)

  const [currentWord, setCurrentWord] = useState("React")

  const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("")

  return (
    <main>
      <Header />
      {isWon && <Status />}
      <Languages />
      <CurrentWord currentWord={currentWord} />
      <Keyboard alphabet={alphabet}/>
    </main>
  )
}
