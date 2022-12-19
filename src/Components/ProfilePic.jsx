import React from "react";
import PropTypes from 'prop-types';

const  ProfilePic = (props)=> {
    function handleClick() {
        props.onClick()
    }

    return (
        <>
             <div className="flex">
                <img src={props.src} alt={props.alt} className='rounded-[50%] h-10 w-10 mr-4' />
                <div className="flex items-center text-darkBlue font-fontRoboto ">
                <p className="text-darkBlue leading-[19px] font-medium" >{props.text} </p>
                <i className="fa fa-caret-down text-darkBlue ml-2" onClick={handleClick}></i>
                </div>
            </div>
        </>
    )
};

ProfilePic.propTypes = {
    text: PropTypes.string,
    src: PropTypes.string.isRequired,    
    alt: PropTypes.string.isRequired,  
    onClick: PropTypes.func  
}

export default ProfilePic