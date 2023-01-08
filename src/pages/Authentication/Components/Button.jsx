import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const  Button = (props)=> {
    return (
        <>
            {/* <button className={"leading-5 h-12 w-[45%] rounded-lg bg-bgBlue text-white text-center hover:bg-bgBlue hover:text-white font-semibold "+ props.className } onClick={props.onClick} >  className='leading-5 text-inherit ' {props.value}</Link> </button> */}
            <button className={"leading-5 h-12 w-[45%] rounded-lg bg-bgBlue text-white text-center hover:bg-bgBlue hover:text-white font-semibold "+ props.className } onClick={props.onClick} > <Link to={props.link} className='leading-5 text-inherit ' target={props.target}>{props.value}</Link> </button>
        </>
    )
};

Button.propTypes = {
    link: PropTypes.string,
    value: PropTypes.string.isRequired,
    target: PropTypes.string,
    className: PropTypes.string,
    handleClick: PropTypes.func,
    
}

export default Button