import React, {useState} from "react";
import DisplayPerson from "./displayPerson";
const PhoneBook = ()=>{
    const contacts = [
        {
            name:"Ayo"
        },
        {
            name:"Tolu"
        },
        {
            name:"Basit"
        }

    ]
    const [contactName, setContactName] = useState();
    const [initialContacts, setInitialContacts]= useState();

    const handleChange = (event)=>{
        setContactName(event.target.value)
    }
    const addContact = (event)=>{
        event.preventDefault()
        setInitialContacts(contactName)
    }
    return (
        <>
            <ul>
                {contacts.map(contact=>
                    <DisplayPerson persin={contact.name}/>
                )}
            </ul>

            {/*<form onSubmit={addContact}>*/}
            {/*    <input value= onChange={handleChange}/>*/}
            {/*    <button type="submit">Add Contact</button>*/}
            {/*</form>*/}
        </>
    )
}
export default PhoneBook;

