import React from "react";
import PropTypes from 'prop-types';
import Logo from "./Logo";

const  Header = (props)=> {

    return (
        <>
            <header className={"h-[58px] bg-white w-full z-50 flex justify-between px-[5.5%] items-center  "+ props.className}>
                <Logo logo={props.logo} template={props.template} changeState={props.changeState} />
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
    className : PropTypes.string
}

export default Header