import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const  Logo = (props)=> {
    return (
        <div className={"logo  text-2xl text-bgBlue font-black "+ props.className } onBlur={props.changeState} ><Link to='JFJ' id='logo' contentEditable={props.template} >{props.logo}</Link> </div>
    )
};

Logo.propTypes = {
    className: PropTypes.string,
    logo: PropTypes.string,
    onBlur: PropTypes.func,
}
export default Logo