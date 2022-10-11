import React, {useState} from "react";
import DisplayFontAwesome from "./displayFontAwesome";
import Button from "./button";

const Fontawesomes = ()=>{
    const displayIcon = [
        "cloud",
        "dice",
        "water",
        "door"
    ]
    const [icons, setIcons] = useState([]);
    const randomIcon = () => {
        let pickRandIcon = displayIcon[Math.floor(Math.random() * displayIcon.length)]
        let iconDem = icons
        iconDem.push(pickRandIcon)
        setIcons(iconDem)
        console.log(iconDem)
    }
    //spread operator method
    const randomIcons = () => {
        let iconDem = displayIcon[Math.floor(Math.random() * displayIcon.length)]
        setIcons([...icons, iconDem])
        console.log(iconDem)
    }
    return (
        <>
            <h1>List Of Icons:
                {icons.map(icon =>
                    <DisplayFontAwesome name={icon}/>
                )}
            </h1>
            <Button clicks={randomIcons} text="add Icon"/>
        </>
    )
}
export default Fontawesomes;