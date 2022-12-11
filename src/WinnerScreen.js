import React from 'react'

const WinnerScreen = ({restartGame, playerWon}) => {
    
  return (
    <div className='winner'>
        <h2 className="congo">
            {playerWon == "no one"? "opps! it!'s a draw" : "congratulations!"}
        </h2>
        <h3 className="player">
            {playerWon} won the game.
        </h3>
        <button onClick = {restartGame}>Restart</button>
    </div>
  )
}

export default WinnerScreen