import React, {useState} from "react";
import Button from "./button";
import RandomProgramngText from "./randomProgramngText";

const Anecdotes = () => {
    const anecsArray = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'People are smarter than you think. Give them a chance to prove themselves'
    ]

    const [anecs, setAnecs] = useState(" ");
    const [vote, setVotes] = useState(Array(anecsArray.length).fill(0))
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    const [totalVote, setTotalVote] = useState(vote[current])

    const getRandomAnecdotes = ()=>{
        let rand = ""
        const randomText = Math.floor(Math.random() * anecsArray.length)
        rand= anecsArray[randomText]
        setAnecs(rand)
        setCurrent(randomText)
        console.log(current)
        setCount(vote[randomText])
    }

    const voteCount = () => {
        const votee = [...vote]
        votee[current] += 1
        setVotes(votee)
        setCount(votee[current])
    }

    return (
        <div>
            <RandomProgramngText randomProgrammingText={anecs} vote={count} total={totalVote}></RandomProgramngText>
            <Button clicks={getRandomAnecdotes} text="Generate Text"></Button> <br/>
            <Button clicks={voteCount} text="Vote for me"></Button>
        </div>
    )
}
export default Anecdotes;
