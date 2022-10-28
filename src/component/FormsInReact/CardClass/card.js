import React, {useState} from "react";
import ShowCard from "./showCard";
import NewCard from "./newCard";
import uuid from "react-uuid";
import {faker} from "@faker-js/faker";

const Card = ()=>{
    const cardData = [
        {
            id:uuid(),
            image:faker.image.city(),
            title:"The title of them",
            description:"All about card data"
        }
    ]

    const [cardDetails, setCardDetails] = useState(cardData)
    return (
        <>
            {cardDetails.map(detail=>
                <ShowCard id={detail.id} key={detail.id} cardTitle={detail.title} description={detail.description} image={detail.image}/>
            )}
            <NewCard newSetData={setCardDetails}/>
        </>
    )
}
export default Card;