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
        <Header className={'h-[88px] flex-row-reverse relative'}>
            <ProfilePic src={team} text='Business Name' />
            {/* <Button value="Logout" className='absolute left-[150px] bg-white text-darkBlue hover:text-white hover:bg-darkBlue font-fontRoboto font-semibold w-[136px] h-[45px] ' onClick={handleClick} /> */}
        </Header>
         <div className='flex '>
            <SideBar />
            <div className='ml-[15.5%] w-full'>
                <div className="">
                    <div className='h-[100px] w-[352px] flex justify-around items-center border-solid border border-darkBlue m-6'>
                        <div className='flex items-center  '>
                        <i className="fa fa-file mr-4 text-2xl" ></i>
                                New project
                        </div>
                        <i className="fa fa-plus  mr-4 text-2xl" ></i>
                    </div>
                </div>
                <div className='border-solid border border-darkBlue mx-12 '></div>
            </div>

        </div> 
            {/* <h1 className='m-auto mt-14'>Welcome {user.name} to the Sanctum Sanctorum</h1>
            <button onClick={handleClick}>logOut</button>   */}
            
        </>
    )
};


export default Profile