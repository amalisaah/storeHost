import React from "react";
import { PropTypes } from "prop-types";

const  Alert = (props)=> {
    return (
        <>
           <p role='alert' className={'text-error text-center ' + props.className} >{props.text}</p> 
        </>
    )
};

Alert.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    
}

export default Alert