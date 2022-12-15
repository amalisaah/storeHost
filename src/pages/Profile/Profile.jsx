import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import ProfilePic from "../../Components/ProfilePic";
import { LoginContext } from "../../Context/LoginContext";
import  team from '../../assets/images/Ellipse3.png';
import SideBar from "../../Components/SideBar";
import Button from "../../Components/Button";

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
        <Header className={'h-[88px] flex-row-reverse'}>
            <ProfilePic src={team} text='Business Name' />
        </Header>
        <div className='flex flex-col'>
            <SideBar />

        </div>
            {/* <h1 className='m-auto mt-14'>Welcome {user.name} to the Sanctum Sanctorum</h1>
            <button onClick={handleClick}>logOut</button>   */}
            <Button value="Logout" className='absolute left-[150px] bg-white text-darkBlue font-fontRoboto font-semibold w-[136px] h-[45px] ' onClick={handleClick} />
        </>
    )
};


export default Profile