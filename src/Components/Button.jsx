import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const  Button = (props)=> {
    return (
        <>
            {/* <button className={"leading-5 rounded bg-bgBlue text-center text-white hover:bg-bgBlue hover:text-white " + props.className} onClick={props.onClick} > <Link to={props.link} className='leading-5 text-inherit ' target={props.target}>{props.value}</Link> </button> */}
            <button className={"leading-5 rounded bg-bgBlue text-center text-white  " + props.className} onClick={props.onClick} > <Link to={props.link} className='leading-5 text-inherit ' target={props.target}>{props.value}</Link> </button>
        </>
    )
};

Button.propTypes = {
    link: PropTypes.string,
    value: PropTypes.string.isRequired,
    target: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    
}

export default Button