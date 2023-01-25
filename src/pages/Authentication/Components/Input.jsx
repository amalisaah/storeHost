import React from "react";
import PropTypes from 'prop-types';

const  Input = (props)=> {
    return (
        
        <div className='inputBox h-[58px] bg-white rounded-lg focus-within:border-solid focus-within:border focus-within:fontGrayW px-5'>
            <label className="font-light text-left text-fontGrayW p-2 text-sm " htmlFor={props.id}>{props.label}</label><br/>
            <input className="w-[98%] border-none border-inherit px-[5px] py-[2px]"
             type={props.type} id={props.id} name={props.name} value={props.value ? props.value : ''} pattern={props.pattern}  onChange={props.onChange} onBlur={props.onBlur}  required /><br/>
        </div>
        
    )
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string.isRequired,
    pattern:PropTypes.string,
    handleBlur:PropTypes.func,
    onChange:PropTypes.func,
}

export default Input