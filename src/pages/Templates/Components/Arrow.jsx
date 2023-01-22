import React from "react";
import PropTypes from 'prop-types';

const  Arrow = (props)=> {
    function handleClick(e){
        props.onClick(props.selector)
        console.log(props.selector)
    }
    return (
        <>
            <i className={"fa-solid fa-caret-up rotate-90 text-black text-4xl ml-3  " +props.className} onClick={handleClick}></i>
        </>
    )
};

Arrow.propTypes = {
    onClick: PropTypes.func.isRequired,
    selector: PropTypes.string.isRequired,
    className: PropTypes.string,
}

export default Arrow