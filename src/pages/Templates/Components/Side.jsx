import React from "react";
import PropTypes from 'prop-types';

const  Side = (props)=> {
    return (
        <>
            <div className={'bg-white min-h-screen w-[5.4%] flex flex-col items-center pt-[62px] fixed '+ props.className}>
                {props.children}
            </div>
        </>
    )
};

Side.propTypes = {
    className: PropTypes.string,


}

export default Side