import React, {useState, useRef, useEffect} from "react";
import styles from './Search.module.css';
const Search = (props)=>{
    const [searchWord, setSearchWord] =  useState("")
    const searchInput = useRef()

    const handleChange=(e)=>{
        setSearchWord(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (searchWord.trim() !== "") {
            props.getSearch(searchWord)
        }
        setSearchWord("")
    }
    useEffect(
        ()=>{
            searchInput.current?.focus()
        }, []
    )
    return (
        <>
            <div className={styles.search}>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={searchWord}
                           onChange={handleChange}
                           ref={searchInput}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        </>
    )
}
export default Search;
