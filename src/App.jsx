import { useState } from "react"
import clsx from "clsx"
import { languages } from "./languages"
import Header from "./components/Header"
import Status from "./components/Status"
import Languages from "./components/Languages"
import CurrentWord from "./components/CurrentWord"
import Keyboard from "./components/Keyboard"
import NewGame from "./components/NewGame"
import { getFarewellText } from "./utils"
import Farewell from "./components/Farewell"

export default function AssemblyEndgame() {

  const [currentWord, setCurrentWord] = useState("REACT")
  const [guessedLetters, setGuessedLetters] = useState([])

  const wrongGuessCount = guessedLetters.filter(letter =>
    !currentWord.includes(letter)).length

  const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("")
  function guessLetter(letter) {
    setGuessedLetters(prev => prev.includes(letter) ? prev : [...prev, letter])
  }

  const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
  const isGameLost = wrongGuessCount >= languages.length - 1
  const isGameOver = isGameWon || isGameLost

  return (
    <main>
      <Header />
      {isGameOver ? <Status 
      isGameWon={isGameWon} /> : <Farewell 
      wrongGuessCount={wrongGuessCount}
      guessedLetters={guessedLetters}
      currentWord={currentWord} />}
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
        currentWord={currentWord}
        isGameOver={isGameOver} />
      {isGameOver && <NewGame />}
    </main>
  )
}
