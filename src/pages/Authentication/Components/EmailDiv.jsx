import React from "react";
import PropTypes from "prop-types"

const  EmailDiv= (props)=> {
    return (
        <>
            <div className='check m-auto'>
                <h1 className='text-bgBlue mb-[3.2%] mt-[12%] '>{props.heading}</h1>
                {/* <p className="text-2xl "> {props.text}</p> */}
                <p className="text-[20px] "> {props.text}</p>
            </div>
        </>
    )
};

EmailDiv.propTypes = {
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default EmailDiv