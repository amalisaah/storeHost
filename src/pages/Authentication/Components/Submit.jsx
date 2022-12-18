
import React from "react";
import PropTypes from "prop-types";
// import { useNavigate } from "react-router";


const  Submit = (props)=> {

    // const navigate=useNavigate()
    return (
        <>
            
            <input type='submit' className="leading-5 h-12 w-[45%] rounded-lg bg-bgBlue text-white text-center hover:bg-bgBlue hover:text-white font-semibold" onClick={props.handleSubmit} value={props.value} /> 
        </>
    )
};

Submit.propTypes = {
    value: PropTypes.string,
    onClick:PropTypes.func,
}

export default Submit



