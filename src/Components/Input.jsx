import React from "react";
import PropTypes from 'prop-types';
import pencil from '../assets/images/icons/pencil.png'

const  Input = (props)=> {
    return (
        
        <div className='inputBox h-[58px] bg-white rounded-lg focus-within:border-solid focus-within:border focus-within:border-green-400 px-5 shadow-2 relative '>
            <label className="font-light text-left text-fontGrayW p-2 text-sm " htmlFor={props.id}>{props.label}</label><br/>
            <input className="w-[98%] border-none bg-white border-inherit "
             type={props.type} id={props.id} name={props.name} value={props.value ? props.value : ''} pattern={props.pattern}  onChange={props.onChange} onBlur={props.onBlur}  disabled={props.enable} reauired={props.required} /><br/>
            <img src={pencil} alt={props.alt} role='icon' className='absolute right-4 top-4 w-[18.25px] ' onClick={props.onClick} />
        </div>
        
    )
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    required: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string.isRequired,
    pattern: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    handleBlur: PropTypes.func,
    onClick: PropTypes.func,
}

export default Input