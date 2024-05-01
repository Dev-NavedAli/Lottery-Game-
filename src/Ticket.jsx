import "./Ticket.css"
import TicketNum from "./TicketNum"
import { useState } from "react"

export default function Ticket({ticket,isWinner}){
    const [won,setWon] = useState(isWinner);

    if(isWinner && !won){
        setWon(true);
    }

    return(
        <div className={`Ticket ${isWinner ? 'winner' : ''}`}>
            <p>Ticket</p>
            {ticket.map((num,idx)=>(
                <TicketNum num={num} key={idx}/>
            ))}
        </div>
    )
}