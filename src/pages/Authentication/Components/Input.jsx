import React from "react";
import PropTypes from 'prop-types';

const  Input = (props)=> {
    return (
        
        <div className='inputBox h-[58px] bg-white rounded-lg focus-within:border-solid focus-within:border focus-within:border-green-400'>
            <label className="font-light leading-5 text-left text-fontGrayW " htmlFor={props.id}>{props.label}</label><br/>
            <input className="w-[98%] border-none border-inherit"
             type={props.type} id={props.id} name={props.name} value={props.value ? props.value : ''} pattern={props.pattern}  onChange={props.onChange} onBlur={props.onBlur}  required /><br/>
        </div>
        
    )
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    label: PropTypes.string.isRequired,
    pattern:PropTypes.string,
    handleBlur:PropTypes.func,
}

export default Input