import React from "react";
import PropTypes from 'prop-types';

const  PicFrame = (props)=> {
    return (
        <>
            <div className="w-[295px] bg-inherit">
                <img src={props.src} alt={props.alt} className='rounded-[50%] h-[295px] w-full mb-8' />
                <div classame="text-center py-[60px] font-fontRoboto ">
                <p>{props.text}</p>
                </div>
            </div>
        </>
    )
};

PicFrame.propTypes = {
    text: PropTypes.string,
    src: PropTypes.string.isRequired,    
    alt: PropTypes.string.isRequired,    
}

export default PicFrame