import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const  Logo = (props)=> {
    
    return (
        // <div className={"logo text-2xl text-bg text-white "+ props.className } onBlur={props.changeState} style={props.style ? props.style.col : {}}><h2 id='logo' contentEditable={props.template} suppressContentEditableWarning>{props.logo}</h2> </div>
        <div className={"logo text-2xl text-bg text-white "+ props.className } style={props.style ? props.style.col : {}}><h2 id='logo' onBlur={props.onBlur} contentEditable={props.template} suppressContentEditableWarning>{props.logo}</h2> </div>
    )
};

Logo.propTypes = {
    className: PropTypes.string,
    logo: PropTypes.string,
    onContentBlur: PropTypes.func,
    style : PropTypes.object,
    template : PropTypes.bool,
}
export default Logo