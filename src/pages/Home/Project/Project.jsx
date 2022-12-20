import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Select from "../Components/Select";
import Category from '../../../assets/images/icons/Category.png';
import arrow from '../../../assets/images/icons/arrow.png';


const  Project = ()=> {
    // /* Toggles template options
    const [menu,setMenu] = useState(false);
    function toggleMenu () {
        setMenu(prev=>!prev)
    };
    /* Change selected value*/
    const [value,setValue] = useState('')
    function handleClick(){
        let pathArray = window.location.pathname.split('/');
        let len=pathArray.length
        setValue(pathArray[len-1])
        console.log(pathArray,value);
        
    }

    return (
        <>
             <div className="">
                    {/* <div className='h-[100px] w-[352px] flex justify-around items-center border-solid border border-darkBlue m-6'>
                        <div className='flex items-center text-2xl   '>
                            <i className="fa fa-file mr-4 text-2xl" ></i>
                            New project
                        </div>
                        <i className="fa fa-plus  mr-4 text-2xl" ></i>
                    </div> */}
                    <div className='h-[100px] w-[352px] flex justify-around items-center border-solid border border-darkBlue m-6 relative'>
                        <div className='flex items-center text-2xl  '>
                        
                        <img src={Category} role='icon' alt='category icon' />
                            <div className='ml-6 '>{value ? value : 'Category'}</div> 
                        </div>
                    
                        <img src={arrow} role='icon' alt='category icon' className='w-[10px] h-[5px]' onClick={toggleMenu} />
                        {menu ? <Select onClick={handleClick} /> : null} 
                    </div>
                </div>
                <div className='border-solid border border-fontGrayW mx-12 '></div>
                <div className=''>
                    <Outlet/>
                </div>
        </>
    )
};


export default Project