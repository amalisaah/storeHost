import React from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import Button from "./Button";
import Logo from "./Logo";

const  Header = ()=> {
    // const d=document.getElementById('re')
    // d.className +=' text-[60px]'
    // console.log(d.className)
    return (
        <>
            <header className="h-[58px] bg-white flex px-[2.4%] relative items-center ">
            <Logo />
                <div className='w-full flex justify-end ml-[16.45%] items-center'>
                    <div className='inline'>
                    <NavItem value='Log in' className='mr-[39px]' link='/authentication' />
                        <Button value='Register' className='h-10 w-36' link='/authentication/signup' />
                    </div>
                </div>
            </header> 
        </>
    )
};


export default Header