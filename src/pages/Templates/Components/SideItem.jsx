import React from "react";
import PropTypes from 'prop-types';

const  SideItem = (props)=> {
    return (
        <>
           <div className={'rounded-full cursor-pointer flex justify-center items-center h-[55px] w-[55px] shadow-1 my-6 font-bold font-fontRoboto text-4xl '+props.className} onClick={props.onClick} >{props.icon}</div> 
        </>
    )
};

SideItem.propTypes = {
    className: PropTypes.string,


}

export default SideItem