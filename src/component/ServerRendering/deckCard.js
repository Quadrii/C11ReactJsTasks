import React, {useEffect, useState} from "react";
import axios from 'axios';
import Button from "../ReactProps-States/button";
const deckUrl = "https://deckofcardsapi.com/api/deck/new/shuffle/"
const DeckCard = ()=>{
    const [deck, setDeck] = useState();
    const [deckId, setDeckId] = useState("")
    useEffect(
        async ()=>{
            let getCardData = await axios.get(deckUrl);
            let response = getCardData.data
            setDeck(response)
        }, [deck]
    )
    // const getCard = async ()=>{
    //     let deckEyeDee = deck.deck_id
    //     let getCradUrl = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/`
    //     let getSingleCard = await axios.get(getCradUrl)
    // }
    return(
        <>
            <div>
                <p>Show Card</p>
                {/*<Button click={getCard} text="Get Card"/>*/}
            </div>
        </>
    )
}
export default DeckCard;