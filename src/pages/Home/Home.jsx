import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import ProfilePic from "../../Components/ProfilePic";
import { LoginContext } from "../../Context/LoginContext";
import  team from '../../assets/images/Ellipse3.png';
import SideBar from "../../Components/SideBar";
import Button from "../../Components/Button";

const  Home = ()=> {

    /*Check if User is already logged in*/
    useEffect(()=>{
        let temp = localStorage.getItem('user')
        if (!temp) temp = sessionStorage.getItem('user'); 
        setUser(JSON.parse(temp))
        console.log(user,temp)

    },[])
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
    
    /*Keep track of projects */
    const [projectName,setProjectName] = useState('mm')

    
    return (
        <>
        { user ?
        <>
        <Header className={'h-[88px] flex-row-reverse fixed'}>
            <ProfilePic src={team} text={user.firstname || user.business}   alt="user's pic" onClick={toggleLogout} />
            {logout ? <Button value="Logout" className='absolute left-[150px] bg-white text-darkBlue hover:text-white hover:bg-darkBlue font-fontRoboto font-semibold w-[136px] h-[45px] ' onClick={handleClick}  /> : null}
        </Header>
         <div className='flex pt-[88px]'>
            <SideBar />
            <div className='ml-[15.5%] w-full'>
               <Outlet  context={[projectName,setProjectName]} /> {/* displays selector box in side bar*/}
            </div>

        </div> </>
    
            
         : <h1 className="text-center mt-6">Please login first</h1>}
         </>
    )
};


export default Home