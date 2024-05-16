import { useState } from "react"

export default function Player({initialName, symbol, isActive}){
  const [playerName, setPlayerName] = useState(initialName);/*<- we use this state to save the player name and 
  to update the {playerName} whenever it change, here we use initialName as an inital vlaue for the use state,
   we use obj destructuring to get functions called playerName, setPlayerNmae function */
  const [isEditing, setIsEditing] = useState(false);


  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }//this updates the state based on the old state.it best to update the state with the help of a function,
  /*why not use setIsEditing(!isEditing) thats because react in the is indeed scheduling the state updates
   you are triggering with those state updating functionslike setIsEditing.*/
  //state updates are not performed instantly but at some point in th future(when react has time for it)
  //because of this criteria if we use the state update like this it doesnt work look below.
  /* setIsEditing(!isEditing); => true as isEditing is set to false by default 
  setIsEditing(!isEditing);=> false  this is what we would expect but that is not the case with react */
/*  we have the same behaviour as we did with the second like here, so that is why we should use the 
functions here as in this case react schedules the code here */ 
/* so the second line also does not change the state update to false but it stays true, so avoid this from 
happening and to update the state based on the old state without any hiccups we use the function to 
declare it*/ 
 /* setIsEditing(editing => !editing) so now if we take this as an example and pass these two lines here
  the first line will update the state to true setIsEditing(editing => !editing)and the second time the
 state is  being updated, react will remember the allready updated state valu and updat the value to 
 false or true  according to the previous update   */
/* when using the function form we have a guarentiee by react that we will be using the latest 
 updated state as reference to the next update */  
 function handleChange(event) {  /* here create the handle change function to handle the changed 
 player name, here we accept the event object as an event parameter whcih was emitted  */
    setPlayerName(event.target.value);
 /* we call setPlayer name to set that state to the  new name that was enetered by the user and now we
  have to find out which value was enetered by the user  */
  }/* // the target property reffers to the element that did emit the event that is the input feild
   which has the handleChange, and this input element turns out to have a value property which will 
   hold the value property the used tried to enter  */

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );/*  here it is really important to understand that on change will trigger for every key 
    stroke and it will provide us witht the event opbject that contains the value that was provided 
    by the user  */
  }// baiscally this statement says if (isEditing === true ){execute this}

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}