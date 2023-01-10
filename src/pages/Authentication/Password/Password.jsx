import React from "react";
import './Password.css';
import Input from "../Components/Input";
import Submit from "../Components/Submit";
import OuterDiv from "../Components/OuterDiv";
import { useNavigate } from "react-router";
import Logo from "../Components/Logo";
import Alert from "../Components/Alert";

const  Password = (props)=> {

    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        handleCheck();
        if(props.sameRef.current){
            const path='/reset-password'
            props.handleSubmit(path);
            // navigate('/authentication/login')
        }else console.log("password doesn't match")

        
    }
    function handleCheck(){       
        if(props.value.password===props.value.password2){
            props.handleCheck(true)
        }else props.handleCheck(false)     
    }
    
    return (
        <>
        <main className='passwd'>
            <Logo />
            <OuterDiv heading='change password' >
                <form className='' onSubmit={handleSubmit} >
                    {props.sameRef.current || <Alert text={'passwords do not match'} /> }
                    <Input type="password" id="pwd" name="newPassword" label='New Password' onChange={props.handleChange} value={props.value.newPassword} onBlur={props.handleBlur} pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$' />
                    <Input type="password" id="Confirmpwd" name="confirmPassword" label='Confirm Password' onChange={props.handleChange} value={props.value.confirmPassword} onBlur={props.handleCheck}  />   
                    <div className='flex justify-center'>
                        <Submit value='save'  />
                    </div>
                    
                </form>
            </OuterDiv>
        </main>
        </>
    )
};


export default Password