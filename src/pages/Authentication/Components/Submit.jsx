
import React from "react";
// import { useNavigate } from "react-router";


const  Submit = (props)=> {

    // const navigate=useNavigate()
    return (
        <>
            
            <input type='submit' className="leading-5 h-12 w-[45%] rounded-lg bg-white text-bgBlue text-bgBlue hover:bg-bgBlue hover:text-white font-semibold" onClick={props.handleSubmit} value={props.value} /> 
        </>
    )
};


export default Submit



