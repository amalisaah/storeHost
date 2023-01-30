import React from "react";
import PropTypes from 'prop-types';
import Logo from "../Blog/Components/Logo";

const  Header = (props)=> {

    return (
        <>
            <header className={"h-[70px] bg-white w-full z-5 flex justify-between px-[5.5%] items-center  "+ props.className} id='header' >
                <Logo logo={props.logo} template={props.template}  className={props.logoClass} onBlur={props.onBlur} style={props.style} />
                <form onSubmit={()=>{}} className={"shadow-1 w-[26%] h-[38px] flex justify-between items-center text-base text-inherit font-fontRoboto text-[#ACACAC] px-4 "+props.searchClass}>
                    <input type="text" placeholder="Search.." name="search" />
                    <button type="submit"><i className={"fa fa-search text-2xl border-l-4 my-2 pl-3 " +props.searchButtonClass} style={props.style ? props.style.col : {}}></i></button>
                </form>
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
    searchClass : PropTypes.string,
    searchButtonClass : PropTypes.string,
    logoClass : PropTypes.string,
    style : PropTypes.object,
    onBlur : PropTypes.func,

}

export default Header