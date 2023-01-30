import React from "react";
import PropTypes from 'prop-types';
import Image from "../../../Home/Components/Image";

const  Picture = (props)=> {


    return (
        <>
            <div className={' h-[296px] '+props.className}>
                <Image src={props.src} alt={props.alt} className=' mx-auto mb-4' imageId={props.imageId} id={props.id} labelVisible={props.labelVisible} onChange={props.onChange} />
                <span className="font-fontRoboto text-inherit ">{props.text}</span>
            </div>
        </>
    )
};

Picture.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    src: PropTypes.string.isRequired,    
    alt: PropTypes.string.isRequired,    
    id: PropTypes.string.isRequired,    
    imageId: PropTypes.string.isRequired,
    onChange: PropTypes.func,    
    labelVisible: PropTypes.bool,    
}

export default Picture