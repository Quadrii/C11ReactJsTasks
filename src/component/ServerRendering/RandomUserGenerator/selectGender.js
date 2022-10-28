import React, {useState} from "react";
import uuid from "react-uuid";
const SelectGender = (props)=>{
    const sex = ["female", "male"]
    const [gender, setGender] = useState();
    const handleChange =(e) => {
        setGender(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        props.ByGender(gender)
        setGender("")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <select onChange={handleChange} value={gender}>
                    <option value="">select gender</option>
                    {sex.map(s=>(
                            <option key={s} value={s} >{s}</option>
                        )
                    )}
                </select>
                <button type="submit">search</button>
            </form>
        </>
    )
}
export default SelectGender;
