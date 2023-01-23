/*Changeable pictures for templates and profile pic*/ 
import React from "react";
import PropTypes from 'prop-types';
import ImageInput from "./ImageInput";


const  Image = (props)=> {

    return (
        <>
            <div className={'w-[517px] relative '+props.className} >
                <img src={props.src} alt={props.alt} id={props.imageId} className="w-[517px] object-cover " />
                <ImageInput labelVisible={props.labelVisible} id={props.id} onChange={props.onChange} />
            </div>
        </>
    )
};

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,    
    alt: PropTypes.string.isRequired,    
    id: PropTypes.string.isRequired,    
    imageId: PropTypes.string.isRequired,
    onChange: PropTypes.func    
}

export default Image