import React from "react";
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';

const  Color = (props)=> {

    
    function handleClick(item,val) {
        props.changeStyle(item,val);
        console.log(val)
    }

    return (
        <>
           <div className={'absolute left-[320px] top-[90px] '+props.className}>
                <SketchPicker  onChange={(color)=>{handleClick(props.selector,{color:color.hex})}}/>
            </div> 
        </>
    )
};

Color.propTypes = {
    changeStyle: PropTypes.func.isRequired,
    selector: PropTypes.string.isRequired,
    className: PropTypes.string,
}

export default Color