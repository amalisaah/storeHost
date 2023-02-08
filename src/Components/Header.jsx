import React from "react";
import PropTypes from 'prop-types';
import Logo from "./Logo";

const  Header = (props)=> {

    return (
        <>
            <header className={"h-[58px] bg-white w-full z-20 flex justify-between px-[2.4%] items-center  "+ props.className} style={props.style} >
                <Logo />
                <div className='flex justify-end items-center'>
                    <div className='inline'>
                        {props.children}
                    </div>
                </div>
                
            </header> 
        </>
    )
};

Header.propTypes = {
    className : PropTypes.string,
    style : PropTypes.object
}

export default Header