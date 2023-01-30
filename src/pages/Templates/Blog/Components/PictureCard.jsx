import React from "react";
import PropTypes from 'prop-types';

const  PictureCard = (props)=> {
    
    return (
        <>
            <div className={'w-[33.33%] h-[590px] pt-[41px] px-[2.7%] text-white font-fontRoboto '+props.className}>
                <div className="font-fontRoboto">{props.title}</div>
                {props.children}
                <div className='flex justify-between'>
                    <div className='font-fontRoboto'>{props.left}</div>
                    <div className='font-fontRoboto'>{props.right}</div>
                </div>
                <div className='my-4 font-fontRoboto text-bold text-xl '>{props.description}</div>
            </div>
        </>
    )
};

PictureCard.propTypes={
    className : PropTypes.string,
    title : PropTypes.string,
    left : PropTypes.string,
    right : PropTypes.string,
    description : PropTypes.string,
}

export default PictureCard