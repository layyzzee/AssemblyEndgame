import { useState } from "react"
import Header from "./components/Header"
import Status from "./components/Status"
import Languages from "./components/Languages"
import CurrentWord from "./components/CurrentWord"

/**
 * Goal: Build out the main parts of our app
 * 
 * Challenge: 
 * 1. Save a "currentWord" in state. Initialize as "react".
 * 2. Map over the letters of the word (you'll need to turn 
 *    the string into an array of letters first) and display
 *    each one as a <span>. Capitalize the letters when
 *    displaying them.
 * 3. Style to look like the design. You can get the underline 
 *    effect on the box using `border-bottom`.
 */

export default function AssemblyEndgame() {

  const [isWon, setIsWon] = useState(true)

  const [currentWord, setCurrentWord] = useState("React")

  return (
    <main>
      <Header />
      {isWon && <Status />}
      <Languages />
      <CurrentWord currentWord={currentWord} />
    </main>
  )
}
