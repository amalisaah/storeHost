import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Submit from './Submit';
import Input from "./Input";
import Loading from "../../../Components/Loading";
import Alert from "./Alert";

const  Form = (props)=> {

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault();
        handleCheck();
        if (!props.error && props.sameRef.current){
            const role=props.personal ? 'individual': 'business';
            const path=`/register?role=${role}`
            props.onSubmit(path);
            props.response.status ==201 && navigate('../auth');
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
    

      
    return (
        <>
            <form className='' onSubmit={handleSubmit}  >
                {props.response.status ===404 && <Alert text={props.response.data} />}
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
                {props.sameRef.current || <Alert text={'passwords do not match'} /> }
                <Input type="password" id="pwd2" name="password2"  label='Confirm Password' onChange={props.handleChange} value={props.value.password2} onBlur={handleCheck}  />
                <div className='flex justify-center'> <Submit value='Create Account'  /> </div>

                {props.loading ? <Loading /> : null}
                {/* {true ? <img src={loading} alt='loading' className="bg-inherit w-[45%] rounded-lg bg-bgBlue text-white text-center hover:bg-bgBlue hover:text-white font-semibold" /> : null} */}
            </form>
                <p className="mt-9 text-center"> Already A Member? <Link to='../login'>Log In</Link> </p>
            <div className='account mt-16 text-center'>Create <span className='text-bgBlue cursor-pointer' onClick={props.changeForm} >{props.personal ? 'Business':'Personal' } Account</span></div>
        </>
    )
};


export default Form