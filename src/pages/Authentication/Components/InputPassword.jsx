import React from "react";
import Input from "./Input";
import PropTypes from 'prop-types';

const  InputPassword = (props)=> {

    function handleClick(e){
        let input=document.getElementById(props.id);
        let node=e.target.nextSibling || e.target.previousSibling;
        node.style.display = 'block';
        e.target.style.display = 'none'
        if (input.type=='password'){
            input.type='text';
        }
        else input.type='password';

    }

    return (
        <>
           <div className='relative z-1'>
                <Input type="password" id={props.id} name={props.name}  label={props.label} onChange={props.handleChange} value={props.value} onBlur={props.onBlur} pattern={props.pattern} />
                    <i className="fas fa-eye-slash absolute top-6 right-2 text-fontGrayW hidden" onClick={handleClick} ></i>
                    <i className="fas fa-eye absolute top-6 right-2 text-fontGrayW" onClick={handleClick} ></i>
                
            </div> 
        </>
    )
};

InputPassword.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    pattern: PropTypes.string,
    id: PropTypes.string.isRequired,
    handleChange: PropTypes.func,
    show: PropTypes.bool.isRequired,
    showPassword: PropTypes.func.isRequired,
}

export default InputPassword