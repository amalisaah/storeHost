import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const  NavItem = (props)=> {
    return (
        <>
            <div className={"text-fontGray leading-6 inline mr-16 " + props.className} ><Link to={props.link}  contentEditable={props.contentEditable} onBlur={props.onBlur} >{props.value}</Link> </div>
        </>
    )
};

NavItem.propTypes = {
    link: PropTypes.string,
    className: PropTypes.string,
    contentEditable: PropTypes.bool,
    value: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
}

export default NavItem