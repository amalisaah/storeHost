import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import Dashboard from "../../../assets/images/icons/Overview Icon.png";
import Profile from "../../../assets/images/icons/Profile.png"
import Project from "../../../assets/images/icons/Vector.svg"
// import Project from "../assets/images/icons/Project.png"
import Support from "../../../assets/images/icons/Support.png";


const  SideBar = (props)=> {
    const items=['Dashboard','Projects','Profile','Support']
    const icons=[Dashboard,Project,Profile,Support]

    function handleClick() {
        props.onClick(true) 
    }

    return (
        // <>
            <div className='bg-darkBlue w-[15.5%] min-h-screen text-white fixed'>
                {items.map((item,index)=>
                    <NavLink to={items[index]} className="hover:bg-sideHover active:bg-[#59AFFF]" style={({ isActive }) => 
                    (isActive ? {background: '#59AFFF'} : null)} key={index} >
                        <div className='mt-8 p-4 h-8 flex items-center pl-10 mb-5 bg-inherit' onClick={handleClick} >
                        <img src={icons[index]} alt={icons[index] + " icon"} className="mr-5 fill-red-400"  />
                            <div>{item}</div>
                            
                        </div>
                    </NavLink>
                    
                )}
            </div>
        // </>
    )
};

SideBar.propTypes = {
    onClick: PropTypes.func,
}
export default SideBar