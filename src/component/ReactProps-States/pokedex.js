import React from "react";
import DisplayPokeCard from "./displayPokeCard";
const Pokedex =()=>{
    const pokes = [
        {
            id:4,
            name:"charmander",
            type:"fire",
            exp:41
        },
        {
            id:7,
            name:"Squirtle",
            type:"water",
            exp:63
        },
        {
            id:11,
            name:"Metapod",
            type:"bug",
            exp:53
        },
        {
            id:12,
            name:"Butterfree",
            type:"flying",
            exp:178
        },
        {
            id:25,
            name:"Pikachu",
            type:"electric",
            exp:95
        },
        {
            id:39,
            name:"Jigglypuff",
            type:"normal",
            exp:225
        }
    ]
    let totalExperience = pokes.reduce((acc, poke)=>(
        acc+poke.exp
    ),0)
    return (
        <>
            {pokes.map(poke=>
                <DisplayPokeCard id={poke.id} pokeName={poke.name} pokeType={poke.type} pokExp={poke.exp}/>
            )}
            <div>
                {totalExperience}
            </div>
        </>
    )
}
export default Pokedex;
