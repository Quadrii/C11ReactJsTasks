import React, {useState} from "react";
import DisplayNote from "./displayNote";
import uuid from "react-uuid";
import AddNoteForm from "./addNoteForm";
const Note = ()=>{
    const notes = [
        {
            id:uuid(),
            word:"it is what it is"
        },
        {
            id:uuid(),
            word:"let it go"
        }
    ]
    const [theNote, setTheNote] = useState(notes)
    const addToNote = (newNote)=>{
        let note = {...newNote, id:uuid()}
        let updateNote = [...theNote, note]
        setTheNote(updateNote)
    }
    return (
        <>
            {theNote.map(note=>
               <DisplayNote text={note.word}/>
            )}
            <AddNoteForm postNote={addToNote}/>
        </>
    )
}
export default Note;