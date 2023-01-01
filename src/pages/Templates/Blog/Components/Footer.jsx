import React from "react";
import { PropTypes } from "prop-types";

const  Footer = (props)=> {
    return (
        <>
            <footer className={"bg-black w-full  " + props.className}>
                {props.children}
            </footer>        
        </>
    )
};

Footer.propTypes={
    className: PropTypes.string,

    
}

export default Footer