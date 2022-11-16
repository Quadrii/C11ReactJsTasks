import React, {useState} from "react";
import uuid from "react-uuid";
const AddNoteForm = (props)=>{
    const [noteWord, setNoteWord] = useState();
    const handleWordChange = (e) => {
        setNoteWord(e.target.value)
    }
    const handleNoteFormSubmit = (e)=>{
        e.preventDefault();
        props.postNote({id:uuid(), word:noteWord})
        setNoteWord("")
    }
    return (
        <>
            <form onSubmit={handleNoteFormSubmit}>
                <input value={noteWord} id="word" onChange={handleWordChange}/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default AddNoteForm;

