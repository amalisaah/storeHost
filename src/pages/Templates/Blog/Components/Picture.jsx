import React from "react";
import PropTypes from 'prop-types';
import Image from "../../../Home/Components/Image";
import { sanitize } from "../../../../utils/sanitizeUtils";

const  Picture = (props)=> {


    return (
        <>
            <div className={' h-[296px]  '+props.className} >
                <Image src={props.src} alt={props.alt} className='max-h-[300px] mx-auto mb-4' imageId={props.imageId} id={props.id} labelVisible={props.labelVisible} onChange={props.onChange} />
                <span id={props.spanId} className="font-fontRoboto text-inherit " contentEditable={props.template} onBlur={props.onBlur}
                            dangerouslySetInnerHTML={sanitize(props.text)} />
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
    spanId: PropTypes.string.isRequired,    
    imageId: PropTypes.string.isRequired,
    onChange: PropTypes.func,    
    onBlur: PropTypes.func,    
    template: PropTypes.bool,    
    labelVisible: PropTypes.bool,    
}

export default Picture