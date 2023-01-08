import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Submit from './Submit';
import Input from "./Input";

const  Form = (props)=> {

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault();
        if (!props.error){
            const role=props.personal ? 'individual': 'business';
            const path=`/register?role=${role}`
            props.onSubmit(path);
            navigate('../auth')
        }
    }

    function handleBlur(e){
        if (e.target.validity.patternMismatch){
            props.handleBlur(true);
            
        } 
    }

    function handleCheck(e){
        e.preventDefault();
        console.log(props.value)       
        if(props.value.password===props.value.password2){
            
        }else props.handleBlur(true)

        
    }
    

      
    console.log(props.error)
    return (
        <>
            <form className='' onSubmit={handleSubmit}  >
                {props.personal ? 
                <div className='nameIn  flex justify-between '>
                    <Input type="text" id="fname" name="firstname" label='First Name' onChange={props.handleChange} value={props.value.firstname} />
                    <Input type="text" id="lname" name="lastname"  label='Last Name' onChange={props.handleChange} value={props.value.lastname} />    
                </div>
                :
                <Input type="text" id="name" name="bname"  label='Business Name' onChange={props.handleChange} value={props.value.bname} />
                }
                
                {/* <Input type="email" id="email" name="email"  label='Email' onChange={props.handleChange} value={props.value.email} onBlur={handleBlur} pattern={pattern.mail}  /> */}
                <Input type="email" id="email" name="email"  label='Email' onChange={props.handleChange} value={props.value.email}  pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'  />
                {props.error && <p role='alert' className='text-red-600' >accepted criteria for password</p>}
                <Input type="password" id="pwd" name="password"  label='Password' onChange={props.handleChange} value={props.value.password} onBlur={handleBlur} pattern='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$' />
                <Input type="password" id="pwd2" name="password2"  label='Confirm Password' onChange={props.handleChange} value={props.value.password2} onBlur={handleCheck}  />
                <div className='flex justify-center'> <Submit value='Create Account'  /> </div>
            </form>
                <p className="mt-9 text-center"> Already A Member? <Link to='../login'>Log In</Link> </p>
            <div className='account mt-16 text-center'>Create <span className='text-bgBlue cursor-pointer' onClick={props.changeForm} >{props.personal ? 'Business':'Personal' } Account</span></div>
        </>
    )
};


export default Form