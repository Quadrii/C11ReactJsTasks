import React, {useState} from "react";
import {faker} from "@faker-js/faker";
import './newcard.css'
import uuid from "react-uuid";
const NewCard = (props)=>{
    const [inputs, setInputs] = useState({
        theTitle:"",
        description: ""
    })

    const handleChange = (e)=>{
        setInputs(prevState => {
            return {...prevState, [e.target.name]:e.target.value}
        })
    }

    const handleNewCardSubmit =(e)=>{
        e.preventDefault()
        const cardObj = {
            id: uuid(),
            image:faker.image.food(),
            ...inputs
        }
        props.newSetData(prevData =>
            [...prevData, cardObj]
        )
        setInputs({
            theTitle:"",
            description: ""
        })
    }

    return (
        <>
            <div className="form-wrapper">
                <form onSubmit={handleNewCardSubmit}>
                    <div className="input_one">
                        <label htmlFor="title">Card Title</label>
                        <input type="text" name="theTitle" id="title" value={inputs.theTitle} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="description">Card Description</label>
                        <input type="text" name="description" id="description" value={inputs.description} onChange={handleChange}/>
                    </div>
                    <button type="submit">Add Card</button>
                </form>
            </div>
        </>
    )
}
export default NewCard;
