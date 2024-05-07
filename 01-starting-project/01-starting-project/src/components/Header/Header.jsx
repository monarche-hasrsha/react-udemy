import reactImg from'../../assets/react-core-concepts.png';
import './Header.css';

const reactDescriptions = ['Fundamental','Crucial','Core']

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}// this a function to produce a random number, a function we can use to produce a random index which we can then use to get access to these different possible words on the randomn bases  


export default function Header(){
  const description = reactDescriptions[genRandomInt(2)];
  
    return (
      <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!  
      </p>
    </header>
    );
  }