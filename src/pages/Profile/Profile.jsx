import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../Context/LoginContext";

const  Profile = ()=> {
    const {user,setUser} = useContext(LoginContext)
    const navigate = useNavigate()
    function handleClick(){
        localStorage.clear();
        sessionStorage.clear();
        setUser({});
        navigate('/authentication/login')
    }


    return (
        <>
            <h1 className='m-auto mt-14'>Welcome {user.name} to the Sanctum Sanctorum</h1>
            <button onClick={handleClick}>logOut</button>  
        </>
    )
};


export default Profile