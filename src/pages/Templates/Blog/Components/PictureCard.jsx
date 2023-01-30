import React from "react";
import PropTypes from 'prop-types';
import { sanitize } from "../../../../utils/sanitizeUtils";

const  PictureCard = (props)=> {
    
    return (
        <>
            <div className={'w-[33.33%] h-[590px] pt-[41px] px-[2.7%] text-white font-fontRoboto overflow-hidden '+props.className}>
                <div id={props.titleId} className="font-fontRoboto" contentEditable={props.template} onBlur={props.onBlur} 
                            dangerouslySetInnerHTML={sanitize(props.title)} />
                {props.children}
                <div className='flex justify-between'>
                    <div id={props.leftId} className='font-fontRoboto' contentEditable={props.template} onBlur={props.onBlur}
                            dangerouslySetInnerHTML={sanitize(props.left)} />
                    <div id={props.rightId} className='font-fontRoboto'contentEditable={props.template} onBlur={props.onBlur}
                            dangerouslySetInnerHTML={sanitize(props.right)} />
                </div>
                <div id={props.descId} className='my-4 font-fontRoboto text-bold text-xl 'contentEditable={props.template} onBlur={props.onBlur}
                            dangerouslySetInnerHTML={sanitize(props.description)} />
            </div>
        </>
    )
};

PictureCard.propTypes={
    className : PropTypes.string,
    title : PropTypes.string,
    titleId : PropTypes.string.isRequired,
    left : PropTypes.string,
    leftId : PropTypes.string.isRequired,
    right : PropTypes.string,
    rightId : PropTypes.string.isRequired,
    description : PropTypes.string,
    descId : PropTypes.string.isRequired,
}

export default PictureCard