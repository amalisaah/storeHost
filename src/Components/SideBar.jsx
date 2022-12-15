import React from "react";
import { NavLink } from "react-router-dom";
import Dashboard from "../assets/images/icons/Overview Icon.png";
import Profile from "../assets/images/icons/Profile.png"
import Project from "../assets/images/icons/Vector.svg"
// import Project from "../assets/images/icons/Project.png"
import Support from "../assets/images/icons/Support.png";


const  SideBar = ()=> {
    const items=['Dashboard','Profile','Projects','Support']
    const icons=[Dashboard,Profile,Project,Support]

    return (
        <>
            <div className='bg-darkBlue w-[15.5%] min-h-screen text-white fixed'>
                {items.map((item,index)=>
                    <NavLink to='' className="hover:bg-red-400 active:bg-red-400 " key={index} >
                        <div className='mt-8 p-4 h-8 flex items-center pl-10 mb-5 bg-inherit' >
                        <img src={icons[index]} alt={icons[index] + " icon"} className="mr-5 fill-red-400"  />
                            <div>{item}</div>
                            
                        </div>
                    </NavLink>
                    
                )}
            </div>
        </>
    )
};


export default SideBar