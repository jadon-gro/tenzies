import { useState } from "react"
import Die from "./components/Die"

export default function App() {
  function randomDiceValue() { return Math.floor(Math.random() * 10) }
  let [dice, setDice] = useState([
    {
      id: 0,
      num: randomDiceValue(),
      clicked: false
    },
    {
      id: 1,
      num: randomDiceValue(),
      clicked: false
    },
    {
      id: 2,
      num: randomDiceValue(),
      clicked: false
    },
    {
      id: 3,
      num: randomDiceValue(),
      clicked: false
    },
    {
      id: 4,
      num: randomDiceValue(),
      clicked: false
    },
    {
      id: 5,
      num: randomDiceValue(),
      clicked: false
    },
    {
      id: 6,
      num: randomDiceValue(),
      clicked: false
    },
    {
      id: 7,
      num: randomDiceValue(),
      clicked: false
    }
  ])

  let diceComponents = dice.map((die) => <Die key={die.id} num={die.num} clicked={die.clicked}/>)
  return(
    <main>
      <div className="dice">
        {diceComponents}
      </div>
    </main>
  )
}