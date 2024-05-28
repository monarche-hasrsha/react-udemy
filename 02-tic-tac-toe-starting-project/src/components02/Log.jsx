/* here the idea of the log component here is in the end it simply outputs an <ol> where we output information
 about the different turns we have had in our games thus far, so that we can see which turns were taking by the 
 players whilest playing that game  */
 /* Now that ofcourse meanse we have to manage some dinamic array of turns here an array that grows with every 
 button click and that ofcourse means we cant manage that state here because that information on which button 
 was clicked was generated here on the game board component  */
 /* So we again need to lift the state up, to the app component, because thats the component that has access 
 to both the game board and the log component   */
export default function Log(){
    
    return<ol id="log">

    </ol>
}