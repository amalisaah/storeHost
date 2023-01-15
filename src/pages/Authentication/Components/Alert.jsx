import React from "react";
import { PropTypes } from "prop-types";

const  Alert = (props)=> {
    return (
        <>
           <p role='alert' className={'text-error text-center mb-4 font-fontRoboto text-base ' + props.className} >{props.text}</p> 
        </>
    )
};

Alert.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    
}

export default Alert