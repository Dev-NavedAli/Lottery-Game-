import { useState } from "react" ;
import { genTicket ,sum} from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({n,winCondition}){
    let [ticket,setTicket]=useState(genTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket = ()=>{
        setTicket(genTicket(n));
    };

    return(
        <div>
            <h1>Lottery Game</h1>
                <Ticket ticket={ticket} isWinner={isWinning}/>
                <Button action={buyTicket}/>
            <h3>{isWinning && "Congratulations you won"}</h3>
        </div>
    )
}