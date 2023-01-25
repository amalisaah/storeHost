import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Submit from './Submit';
import Input from "./Input";
import Loading from "../../../Components/Loading";
import Alert from "./Alert";
import InputPassword from "./InputPassword";

const  Form = (props)=> {

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault();
        handleCheck();
        if (!props.error && props.sameRef.current){
            const role=props.personal ? 'individual': 'business';
            const path=`/register?role=${role}`
            props.onSubmit(path);
            
            
        }
        
    }

    function handleBlur(e){
        if (e.target.validity.patternMismatch){
            props.handleBlur(true);
            
        } 
    }

    function handleCheck(){       
        if(props.value.password===props.value.password2){
            props.handleCheck(true)
        }else props.handleCheck(false)

        
    }
    
    useEffect (()=>{
        if(props.responseRef.current.status ===201) {
            navigate('../auth')
        }
    })

      
    return (
        <>
            <form className=' ' onSubmit={handleSubmit} >
                {(props.responseRef.current.status === 404) && <Alert text='Email already exists' />}
                {props.sameRef.current || <Alert text={'passwords do not match'} /> }
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
                 {props.error ? 
                <div className='w-[268px] h-[108px] bg-[#ffffffcc] p-3 font-fontPoppins text-[#858585] text-sm z-10 border border-solid border-fontGrayW absolute right-[11.5%] top-[40.5%] rounded animate-fadeOut '>
                    
                    Passwords must contain at least 8 characters, including UPPERCASE, lowercase letters, number and a special character(@#$%^&*?)
                    
                </div> : null}
                {/* <Input type="password" id="pwd" name="password"  label='Password' onChange={props.handleChange} value={props.value.password} onBlur={handleBlur} pattern='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$' /> */}
                <InputPassword id="pwd" name='password' label='Password' handleChange={props.handleChange} value={props.value.password} onBlur={handleBlur} pattern='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$' />
                {/* <Input type="password" id="pwd2" name="password2"  label='Confirm Password' onChange={props.handleChange} value={props.value.password2} onBlur={handleCheck}  /> */}
                <InputPassword id="pwd2" name="password2"  label='Confirm Password' handleChange={props.handleChange} value={props.value.password2} onBlur={handleCheck}  />
                <div className='flex justify-center'> <Submit value='Create Account' className='hover:bg-hoverBlue w-[49%]' /> </div>

                {props.loading ? <Loading /> : null}
                {/* {true ? <img src={loading} alt='loading' className="bg-inherit w-[45%] rounded-lg bg-bgBlue text-white text-center hover:bg-bgBlue hover:text-white font-semibold" /> : null} */}
            </form>
                <p className="mt-9 text-center"> Already A Member? <Link to='../login' className="text-bgBlue">Log In</Link> </p>
            <div className='account mt-16 text-center'>Create <span className='text-bgBlue cursor-pointer' onClick={props.changeForm} >{props.personal ? 'Business':'Personal' } Account</span></div>
        </>
    )
};


export default Form