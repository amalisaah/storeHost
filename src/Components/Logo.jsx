import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const  Logo = (props)=> {
    return (
        <div className={"logo  text-2xl text-bgBlue font-black " + props.className }><Link to='/' >Storefront</Link> </div>
    )
};

Logo.propTypes = {
    className: PropTypes.string,
}
export default Logo