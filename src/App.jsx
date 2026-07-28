import { useState } from "react"
import clsx from "clsx"
import Header from "./components/Header"
import Status from "./components/Status"
import Languages from "./components/Languages"
import CurrentWord from "./components/CurrentWord"
import Keyboard from "./components/Keyboard"
import NewGame from "./components/NewGame"

/**
 * Goal: Allow the user to start guessing the letters
 * 
 * Challenge: Update the keyboard when a letter is right
 * or wrong.
 * 
 * Bonus: use the `clsx` package to easily add conditional 
 * classNames to the keys of the keyboard. Check the docs 
 * to learn how to use it 📖
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
      <Languages />
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
