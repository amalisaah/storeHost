import React, { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import ProfilePic from "../../Components/ProfilePic";
import { LoginContext } from "../../Context/LoginContext";
import  team from '../../assets/images/Ellipse3.png';
import SideBar from "../../Components/SideBar";
import Button from "../../Components/Button";

const  Home = ()=> {

    /* HIDE OR SHOW LOGOUT BUTTON*/
    const [logout,setLogout]= useState(false);
    function toggleLogout(){
        setLogout(prev=>!prev)
         console.log(logout);
    }
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
        <Header className={'h-[88px] flex-row-reverse relative'}>
            <ProfilePic src={team} text='Business Name' alt="user's pic" onClick={toggleLogout} />
            {logout ? <Button value="Logout" className='absolute left-[150px] bg-white text-darkBlue hover:text-white hover:bg-darkBlue font-fontRoboto font-semibold w-[136px] h-[45px] ' onClick={handleClick}  /> : null}
        </Header>
         <div className='flex '>
            <SideBar />
            <div className='ml-[15.5%] w-full'>
               <Outlet /> {/* displays nav in side bar*/}
            </div>

        </div> 
    
            
        </>
    )
};


export default Home