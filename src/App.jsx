import { useState } from "react"
import Header from "./components/Header"
import Status from "./components/Status"
import Languages from "./components/Languages"
import CurrentWord from "./components/CurrentWord"
import Keyboard from "./components/Keyboard"
import NewGame from "./components/NewGame"

/**
 * Goal: Build out the main parts of our app
 * 
 * Challenge: 
 * Display the keyboard ⌨️. Use <button>s for each letter
 * since it'll need to be clickable and tab-accessible.
 */

export default function AssemblyEndgame() {

  const [isOver, setIsOver] = useState(true)

  const [currentWord, setCurrentWord] = useState("React")

  const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("")

  const [guessedLetters, setGuessedLetters] = useState([])
  console.log(guessedLetters)

  function guessLetter(letter) {
    setGuessedLetters(prev => prev.includes(letter) ? prev : [...prev, letter])
  }

  return (
    <main>
      <Header />
      {isOver && <Status />}
      <Languages />
      <CurrentWord currentWord={currentWord} />
      <Keyboard alphabet={alphabet} guessLetter={guessLetter}/>
      {isOver && <NewGame />}
    </main>
  )
}
