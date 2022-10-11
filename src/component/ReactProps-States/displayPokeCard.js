import React from "react";
import './pokemon.css';
const DisplayPokeCard = (props)=>{
    const pokeApi = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const imgSrc = `${pokeApi} ${props.id}.png`
    return (
        <>
            <div className="pokemon-wrapper">
                <h2>{props.pokeName}</h2>
                <img src={imgSrc} alt={props.pokeName}/>
                <p>{props.pokeType}</p>
                <p>{props.pokExp}</p>
            </div>
        </>
    )
}
export default DisplayPokeCard;