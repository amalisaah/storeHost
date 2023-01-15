import React from "react";
import PropTypes from 'prop-types';

const  Arrow = (props)=> {
    function handleClick(e){
        props.onClick()
    }
    return (
        <>
            <i className="fa-solid fa-caret-up rotate-90 text-black text-4xl ml-3" onClick={handleClick}></i>
        </>
    )
};

Arrow.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default Arrow