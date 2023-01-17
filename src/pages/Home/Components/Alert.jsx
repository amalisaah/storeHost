import React from "react";
import PropTypes from 'prop-types';

const  Alert = (props)=> {
    
    return (
        <>
        {/* <div className='w-full  flex justify-center  '> */}
            <div className={'w-[654px] h-16 bg-hoverBlue shadow-1 text-white text-2xl text-center fixed top-[108px] left-[35%] flex justify-center items-center opacity-70 z-10 '+props.className}>
                {props.text}
            </div>
        {/* </div> */}
        </>
    )
};

Image.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired,       
}
export default Alert