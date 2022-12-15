import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const  NavItem = (props)=> {
    return (
        <>
            <div className={"text-fontGray leading-6 inline mr-16 " + props.className} key={props.key}><Link to={props.link}>{props.value}</Link> </div>
        </>
    )
};

NavItem.propTypes = {
    link: PropTypes.string,
    value: PropTypes.string.isRequired,
}

export default NavItem