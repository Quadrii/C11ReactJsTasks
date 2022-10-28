import React, {useState} from "react";
const NumOfUsersToSearch = (props)=>{
    const [num, setNum]=useState("");
    const handleUserNumChange = (e)=>{
        setNum(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (num.trim() !== "") {
            props.getUsers(num)
        }
        setNum("")
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input value={num} name="num" onChange={handleUserNumChange}/>
                <button type="submit">Get User</button>
            </form>
        </>
    )
}
export default NumOfUsersToSearch;
