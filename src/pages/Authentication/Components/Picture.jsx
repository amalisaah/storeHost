import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const  Picture = (props)=> {
    return (
        <div className='signPic relative bg-no-repeat bg-cover w-[44%] h-full' id="signP">
            <div className='signLogo text-5xl font-semibold text-white text-left ml-3'><Link to='/' >Storefront</Link></div>
            <div className='text absolute w-[50%] right-[7.75%] bottom-[17.9%] text-right text-3xl text-white'>{props.text}</div>
        </div>
    )
};

Picture.propTypes = {
    text: PropTypes.string.isRequired
}

export default Picture