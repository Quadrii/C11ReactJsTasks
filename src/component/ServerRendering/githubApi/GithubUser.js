import React, {useEffect, useState} from "react";
import axios from "axios";
import FindUserForm from "./findUserForm";

const GithubUser = ()=>{
    const [userImg, setUserImg]=useState()
    const [userLocation, setUserLocation]=useState()
    const [bio, setBio] = useState()
    const [nameUser, setNameUser] = useState()
    const url=`https://api.github.com/users/${nameUser}`

    const searchForUser = (name) => {
        setNameUser(name)
    }

    useEffect(()=>{
        const getGithubUser = async ()=>{
            const response = await axios.get(url)
            let data = response.data
            setUserImg(data.avatar_url)
            setUserLocation(data.location)
            setBio(data.bio)
        }
        getGithubUser()
    }, [nameUser])

    return (
        <>
            <FindUserForm findUser={searchForUser} />
            <img src= {userImg} />
            <p>
                {userLocation}
            </p>
           <strong>
               {bio}
           </strong>
        </>
    )
}
export default GithubUser;
