import React from "react";
import './Password.css';
import Input from "../Components/Input";
import Submit from "../Components/Submit";
import OuterDiv from "../Components/OuterDiv";
import { useNavigate } from "react-router";
import Logo from "../Components/Logo";

const  Password = (props)=> {

    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        
        if(props.value.newPassword===props.value.confirmPassword){
            const path='/reset-password'
            props.handleSubmit(path);
            navigate('/authentication/login')
        }else console.log("password doesn't match")

        
    }
    return (
        <>
        <main className='passwd'>
            <Logo />
            <OuterDiv heading='change password' >
                <form className='' onSubmit={handleSubmit} >
                    <Input type="password" id="pwd" name="newPassword" label='New Password' onChange={props.handleChange} value={props.value.newPassword} onBlur={props.handleBlur} pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$' />
                    <Input type="password" id="Confirmpwd" name="confirmPassword" label='Confirm Password' onChange={props.handleChange} value={props.value.confirmPassword} onBlur={props.handleBlur}  />   
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