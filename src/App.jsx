import { useState, useEffect } from "react"
import Die from "./components/Die"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

export default function App() {
  function randomDiceValue() { return Math.ceil(Math.random() * 6) }
  let [dice, setDice] = useState(initDice()) 

  let [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const val = dice[0].num
    let won = true
    for (const die of dice) {
      if (die.num !== val || !die.clicked) {
        won = false;
        break;
      }
    }
    setTenzies(won)
  }, [dice])

  function initDice() {
    let firstDice = []
    for (let i = 0; i < 10; i++) {
      firstDice.push({
        id: nanoid(),
        clicked: false,
        num: randomDiceValue()
      })
    }
    return firstDice
  }
  function reroll() {
    if (tenzies) setDice(initDice())
    else setDice(prevDice => prevDice.map(die => die.clicked ? die : {...die, num: randomDiceValue()}))
  }

  function clickDie(id) {
    setDice(prevDice => prevDice.map(die => die.id === id ? {...die, clicked: !die.clicked} : die))
  }

  let diceComponents = dice.map((die) => <Die key={die.id} id={die.id} num={die.num} clicked={die.clicked} handleClick={() => clickDie(die.id)}/>)

  return(
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <h3 className="manual">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h3>
      <div className="dice">
        {diceComponents}
      </div>
      <button className="roll-button" onClick={reroll}>{tenzies ? "New Game" : "Roll"}</button>
    </main>
  )
}