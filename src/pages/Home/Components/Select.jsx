import React from "react";
import { NavLink } from "react-router-dom";

const  Select = (props)=> {

    const values=['Ecommerce', 'Finance', 'Blog']
    const shapes=['fa-shapes','fas fa-money-bill-alt',]

    /*For changing the values displayed in box check project*/
    function handleClick(){
        props.onClick()
    }

    return (
        <>
            <div className='w-[287px]  bg-white absolute top-20 left-28 z-5'>
                {
                    values.map((value,index)=>
                    (
                        <NavLink to={value} className='flex items-center text-2xl border-b mx-auto py-7 px-11 ' key={index} onClick={handleClick}> <i className='fas fa-shapes' ></i>
                            <div className='ml-6 '>{value}</div> 
                        </NavLink>
                    
                ))
                }
            </div>
        </>
    )
};


export default Select