import { useState } from "react"

import Player from "./components02/Player"
import GameBoard from "./components02/GameBoard"

//import Player from "./components02/Player.jsx"
function App() {
  const[activePlayer, setActivePlayer]=useState('X')

  function handleSelectSquare(){
    setActivePlayer((curActivePlayer)=> curActivePlayer=== 'X'?'O':'X');
  }

  return (
    <main>
      <div>
        <div id="game-container">
          <ol id="players" className="heighligh-player">
            <Player initialName="Player 1" symbol= 'X'/>
            <Player initialName="Player 2" symbol= 'O'/>
          </ol>
          <GameBoard onSelectSquare={handleSelectSquare}/>
        </div>
        LOG
      </div>
    </main>
  )
}

export default App
