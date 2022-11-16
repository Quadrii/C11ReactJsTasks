import React, {useEffect, useState} from "react";
import axios from 'axios';
import Button from "../../ReactProps-States/button";
import ShowCards from "./showCards";
const deckUrl = "https://deckofcardsapi.com/api/deck/new/shuffle/"
const DeckCard = ()=>{
    const [deck, setDeck] = useState({});
    const [drawn, setDrawn] = useState([])
    useEffect(()=>{
        const getCard = async ()=>{
            const response =await axios.get(deckUrl)
            setDeck(response.data)
            console.log(response.data)
        }
        getCard()
    }, [])

    const getSingleCard =async ()=>{
        let deck_id = deck.deck_id
        let getCradUrl = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/`
        let getSingleCard = await axios.get(getCradUrl)
        let data = getSingleCard.data.cards[0]
        setDrawn([...drawn, {id: data.code, image:data.image, name:`${data.value} of ${data.code}`}])
        console.log(getSingleCard)
    }
    return(
        <>
            <div>
                <Button clicks={getSingleCard} text="Get Card"/>
                {drawn.map(draw =>
                    <ShowCards keys={draw.code} image={draw.image} name={draw.name}/>
                )}
            </div>
        </>
    )
}
export default DeckCard;

