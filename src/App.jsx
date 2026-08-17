import { useState } from "react"
import clsx from "clsx"
import Header from "./components/Header"
import Status from "./components/Status"
import Languages from "./components/Languages"
import CurrentWord from "./components/CurrentWord"
import Keyboard from "./components/Keyboard"
import NewGame from "./components/NewGame"

/**
 * Goal: Add in the incorrect guesses mechanism to the game
 * 
 * Challenge: When mapping over the languages, determine how
 * many of them have been "lost" and add the "lost" class if
 * so.
 * 
 * Hint: use the wrongGuessCount combined with the index of
 * the item in the array while inside the languages.map code
 */

export default function AssemblyEndgame() {

  const [isOver, setIsOver] = useState(true)
  const [currentWord, setCurrentWord] = useState("REACT")
  const [guessedLetters, setGuessedLetters] = useState([])

  const wrongGuessCount = guessedLetters.filter(letter =>
    !currentWord.includes(letter)).length
  

  const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("")


  function guessLetter(letter) {
    setGuessedLetters(prev => prev.includes(letter) ? prev : [...prev, letter])
  }

  return (
    <main>
      <Header />
      {isOver && <Status />}
      <Languages 
        wrongGuessCount={wrongGuessCount}
      />
      <CurrentWord
        currentWord={currentWord}
        guessedLetters={guessedLetters}
      />
      <Keyboard
        alphabet={alphabet}
        guessedLetters={guessedLetters}
        guessLetter={guessLetter}
        currentWord={currentWord} />
      {isOver && <NewGame />}
    </main>
  )
}
