import React from "react";
import { NavLink } from "react-router-dom";
import Blog from "../../../assets/images/icons/Blog.png";
import Ecommerce from '../../../assets/images/icons/Eommerce.png';
import Finance from '../../../assets/images/icons/Finance.png';

const  Select = (props)=> {

    const values=['Ecommerce', 'Finance', 'Blog']
    const icon=[Ecommerce ,Finance, Blog]

    /*For changing the values displayed in box check project*/
    function handleClick(e){
        console.log(e.target.innerText || e.target.alt)
        let val = e.target.innerText || e.target.alt;
        props.onClick(val)
    }

    return (
        <>
            <div className='w-[287px]  bg-white absolute top-20 left-28 z-5'>
                {
                    values.map((value,index)=>
                    (
                        <NavLink to={value} className='flex items-center text-2xl border-b mx-auto py-7 px-11 ' key={index} onClick={handleClick}> 
                            <img className='' src={icon[index]} alt={value } />
                            <div className='ml-6 '>{value}</div> 
                        </NavLink>
                    
                ))
                }
            </div>
        </>
    )
};


export default Select