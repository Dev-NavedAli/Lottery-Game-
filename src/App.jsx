import "./App.css"
import Lottery from "./Lottery";
import Ticket from "./Ticket";
import { sum } from "./helper";

function App(){
  let winCondition = (ticket)=>{
    return ticket[0]==0;
  }
  return(
    <>
    <Lottery n={3} winningSum winCondition={winCondition}/>
    </>
    
    // <Lottery/>
  )
}

export default App;