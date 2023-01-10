import React from "react";
import PropTypes from 'prop-types';


const  ProfilePic = (props)=> {
    function handleClick() {
        props.onClick()
    }

    return (
        <>
             <div className="flex">
                <img src={props.src} alt={props.alt} className={'rounded-[50%] h-10 w-10 mr-4 '+props.className} />
                <div className="flex items-center text-darkBlue font-fontRoboto ">
                <p className={"text-darkBlue leading-[19px] font-medium "+props.textClass} >{props.text} </p>
                <img src={props.icon} alt={props.alternative} className=" text-darkBlue ml-2" onClick={handleClick} />
                </div>
            </div>
        </>
    )
};

ProfilePic.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    textClass: PropTypes.string,
    src: PropTypes.string.isRequired,    
    alt: PropTypes.string.isRequired,  
    icon: PropTypes.string.isRequired,    
    alternative: PropTypes.string.isRequired,  
    onClick: PropTypes.func  
}

export default ProfilePic