import { useState } from "react"
import { getFarewellText, getRandomWord } from "./utils"
import { languages } from "./languages"
import clsx from "clsx"
import Header from "./components/Header"
import Status from "./components/Status"
import Languages from "./components/Languages"
import CurrentWord from "./components/CurrentWord"
import Keyboard from "./components/Keyboard"
import NewGame from "./components/NewGame"
import Farewell from "./components/Farewell"

export default function AssemblyEndgame() {

  const [currentWord, setCurrentWord] = useState(() => getRandomWord().toUpperCase())
  const [guessedLetters, setGuessedLetters] = useState([])

  const wrongGuessCount = guessedLetters.filter(letter =>
    !currentWord.includes(letter)).length

  const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("")
  function guessLetter(letter) {
    setGuessedLetters(prev => prev.includes(letter) ? prev : [...prev, letter])
  }

  function startNewGame() {
    setCurrentWord(getRandomWord().toUpperCase())
    setGuessedLetters([])
  }
  
  const numGuessesLeft = languages.length - 1
  const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
  const isGameLost = wrongGuessCount >= numGuessesLeft
  const isGameOver = isGameWon || isGameLost
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]


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
        isGameLost={isGameLost}
      />
      <section
        className="sr-only"
        aria-live="polite"
        role="status"
      >
        <p>
          {currentWord.includes(lastGuessedLetter) ?
            `Correct! The letter ${lastGuessedLetter} is in the word.` :
            `Sorry, the letter ${lastGuessedLetter} is not in the word.`
          }
          You have {numGuessesLeft} attempts left.
        </p>
        <p>Current word: {currentWord.split("").map(letter =>
          guessedLetters.includes(letter) ? letter + "." : "blank.")
          .join(" ")}</p>

      </section>
      <Keyboard
        alphabet={alphabet}
        guessedLetters={guessedLetters}
        guessLetter={guessLetter}
        currentWord={currentWord}
        isGameOver={isGameOver} />
      {isGameOver && <NewGame
        startNewGame={startNewGame} />}
    </main>
  )
}
