import React, {useState} from "react";
const FindUserForm = (props)=>{
    const [userName, setUserName] = useState("")
    const handleNameChange = (e)=>{
        setUserName(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (userName.trim() !== ''){
            props.findUser(userName)
        }
        setUserName("")
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input value={userName} onChange={handleNameChange}/>
            <button>Search</button>
        </form>
        </>
    )

}
export default FindUserForm;
