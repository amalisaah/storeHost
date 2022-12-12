import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Submit from './Submit';
import Input from "./Input";

const  Form = ({value,handleChange,handleBlur,error,personal,changeForm,onSubmit,pattern})=> {

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault();
        const role=personal ? 'personal': 'business'
        onSubmit(role);
        navigate('../auth')
    }

    

      
    // console.log(error)
    return (
        <>
            <form className='' onSubmit={handleSubmit}  >
                {personal ? 
                <div className='nameIn  flex justify-between '>
                    <Input type="text" id="fname" name="fname" label='First Name' onChange={handleChange} value={value.fname} />
                    <Input type="text" id="lname" name="lname"  label='Last Name' onChange={handleChange} value={value.lname} />    
                </div>
                :
                <Input type="text" id="name" name="name"  label='Business Name' onChange={handleChange} value={value.name} />
                }
                
                {/* <Input type="email" id="email" name="email"  label='Email' onChange={handleChange} value={value.email} onBlur={handleBlur} pattern={pattern.mail}  /> */}
                <Input type="email" id="email" name="email"  label='Email' onChange={handleChange} value={value.email} onBlur={handleBlur} pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'  />
                {error && <p role='alert' className='text-red-600' >input a valid email</p>}
                <Input type="password" id="pwd" name="pwd"  label='Password' onChange={handleChange} value={value.pwd} onBlur={handleBlur} pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$' />
                <Submit value='Create Account'  />
            </form>
                <p className="mt-9"> Already A Member? <Link to='../login'>Log In</Link> </p>
            <div className='account mt-16 '>Create <span className='text-bgBlue cursor-pointer' onClick={changeForm} >{personal ? 'Business':'Personal' } Account</span></div>
        </>
    )
};


export default Form