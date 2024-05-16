import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);/* here we created a useState with the intial value as the initalGamebord  */

  function handleSelectSquare(rowIndex, colIndex) {/*this function is triggered when the button is
   pressed, here we are updating the game board based on the previous state of the game board that is
   the null values and to do this handleSelectSquare needs some information like which rowIndex and colIndex */ 
   setGameBoard((prevGameBoard) => {
    const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]; /*here what we did
       is, we created a constant, which is a new array where we can use the spread operator to paste in
       all the existing elements of the old array so now this is technically a new array object in 
       memory that contains the old array elemnts as child elementsnow since here we are dealing with
       some nested arrays those should be coppied as well before we update anythin, we can do that by 
       calling the map method where we get our inner array and for every inner array we also return a
       new nested array which spreads the elements of that inner array inside of it */
       updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;/* here we updated the state in a immutable way that is we are creating a copy
       of  refrence type values and changing the copy instead of changing th original refrence value  */
    });

    onSelectSquare();
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (//here we are outputting the row dynamically so here we are
 /* going throught the items in the inner array with .map() to get our columns and their index and then 
for every inner value in this inner array we again want to output a list item where the key is set to 
collindex and in that list item we want to have a button that can be clicked and between the button tags 
we output the player symbol dynamically */ 
          <li key= {colIndex}>
            <button onClick={() =>handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
            </li>/* in the above step we have a onclick that we created a new anonimous function which
             is then actually passed as a value to onClick so that we have full control over how handleSelectSquare will then be called when it is being called */
           ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}