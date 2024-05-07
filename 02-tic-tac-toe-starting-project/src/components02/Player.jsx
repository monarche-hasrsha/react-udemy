import { useState } from "react"

export default function Player({initialName, symbol}){
  const [playerName, setPlayerName] = useState(initialName);
  const[isEditing, setIsEditing]= useState(false);

  function handleEdit(){
    setIsEditing(editing => !editing)
  }//ask bava about how is react understanding that !editing variable is taking the isEditing usestate into account when there is a name difference 

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>
  
  if(isEditing){
    editablePlayerName= <input type="text" required onChange={handleChange}/>
  }

  return (
  <li className={isActive ? 'active':undefined}>
    <span className="player">
      {editablePlayerName}
      <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
  </li>
  )
}