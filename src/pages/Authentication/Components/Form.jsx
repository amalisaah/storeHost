import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Submit from './Submit';
import Input from "./Input";

const  Form = ({value,handleChange,handleBlur,error,personal,changeForm,onSubmit,pattern})=> {

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault();
        const role=personal ? 'individual': 'business';
        const path=`/register?role=${role}`
        onSubmit(path);
        navigate('../auth')
    }

    

      
    console.log(error)
    return (
        <>
            <form className='' onSubmit={handleSubmit}  >
                {personal ? 
                <div className='nameIn  flex justify-between '>
                    <Input type="text" id="fname" name="firstname" label='First Name' onChange={handleChange} value={value.firstname} />
                    <Input type="text" id="lname" name="lastname"  label='Last Name' onChange={handleChange} value={value.lastname} />    
                </div>
                :
                <Input type="text" id="name" name="bname"  label='Business Name' onChange={handleChange} value={value.bname} />
                }
                
                {/* <Input type="email" id="email" name="email"  label='Email' onChange={handleChange} value={value.email} onBlur={handleBlur} pattern={pattern.mail}  /> */}
                <Input type="email" id="email" name="email"  label='Email' onChange={handleChange} value={value.email} pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'  />
                {error && <p role='alert' className='text-red-600' >accepted criteria for password</p>}
                <Input type="password" id="pwd" name="password"  label='Password' onChange={handleChange} value={value.password} onBlur={handleBlur} pattern='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$' />
                {/* <Input type="password" id="pwd" name="password2"  label='Confirm Password' onChange={handleChange} value={value.password2} onBlur={()=>{ (props.value.password===props.value.password2) ? handleBlur : }}  /> */}
                <Submit value='Create Account'  />
            </form>
                <p className="mt-9"> Already A Member? <Link to='../login'>Log In</Link> </p>
            <div className='account mt-16 '>Create <span className='text-bgBlue cursor-pointer' onClick={changeForm} >{personal ? 'Business':'Personal' } Account</span></div>
        </>
    )
};


export default Form