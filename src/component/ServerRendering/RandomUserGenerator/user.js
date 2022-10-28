import React, {useEffect, useState} from "react";
import axios from "axios";
import DisplayUser from "./displayUser";
import NumOfUsersToSearch from "./NumOfUsersToSearch";
import SelectGender from "./selectGender";
import PaginateInput from "./paginateInput";
const User = ()=>{
    const [users, setUsers] = useState([])
    const [userNum, setUserNum] = useState()
    const [userGender, setUserGender] = useState()
    const [resultsNum, setResultsNum] = useState()
    const [paginateNumber, setPaginateNumber] = useState(3)
    const url ='https://randomuser.me/api/'
    const url_two = `https://randomuser.me/api/?results=${userNum}`
    const url_three = `https://randomuser.me/api/?results=${userGender}`
    const paginate_url = `https://randomuser.me/api/?page=${paginateNumber}&results=${resultsNum}&seed=abc`

    const searchForUsers = (number)=> {
        setUserNum(number)
    }
    const searchByGender=(sex)=>{
        setUserGender(sex)
    }
    const paginateFunc = (usersPerPage)=>{
        setResultsNum(usersPerPage)
    }
    useEffect(()=>{
        const getUser = async ()=>{
            const response =await axios.get(url)
            setUsers(response.data.results)
            console.log(response)
        }
        getUser()
    }, [])

    useEffect(()=>{
        const getUserNum = async ()=>{
            const response = await axios.get(url_two)
            setUsers(response.data.results)
            console.log(response)
        }
        getUserNum()
    }, [userNum])

    useEffect(()=>{
        const fetchWithGender = async ()=>{
            const response =await axios.get(url_three)
            setUsers(response.data.results)
            console.log(response)
        }
        fetchWithGender()
    }, [userGender])

    useEffect(()=>{
        const paginationSearch = async ()=>{
            const response =await axios.get(paginate_url)
            setUsers(response.data.results)
            console.log(response)
        }
        paginationSearch()
    }, [resultsNum])

    return (
        <>
            <div className="container">
                <NumOfUsersToSearch getUsers={searchForUsers} />
                <SelectGender ByGender={searchByGender}/>
                <PaginateInput pageResult={paginateFunc}/>
                {users.map(user=>
                    <DisplayUser userPhoto={user.picture.medium} userPhoneNum={user.phone} userEmail={user.email} userFirstName={user.name.first} userLastName={user.last}/>
                )}
            </div>
        </>
    )
}
export default User;
