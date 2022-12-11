import React from "react";
import { Link } from "react-router-dom";

const  Button = (props)=> {
    return (
        <>
            <button className="leading-5 h-12 w-[45%] rounded-lg bg-white text-bgBlue text-bgBlue hover:bg-bgBlue hover:text-white" > <Link to={props.link} className='leading-5 text-inherit ' target={props.target}>{props.value}</Link> </button>
        </>
    )
};


export default Button