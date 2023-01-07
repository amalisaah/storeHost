import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const  Logo = (props)=> {
    return (
        <div className={"logo text-2xl text-bg text-white "+ props.className } onBlur={props.changeState} ><h2 id='logo' contentEditable={props.template} >{props.logo}</h2> </div>
    )
};

Logo.propTypes = {
    className: PropTypes.string,
    logo: PropTypes.string,
    onBlur: PropTypes.func,
}
export default Logo