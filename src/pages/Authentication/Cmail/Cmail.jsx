import React from "react";
import EmailDiv from "../Components/EmailDiv";
import Logo from "../Components/Logo";
import Input from "../Components/Input";
import Submit from "../Components/Submit";
import { useNavigate } from "react-router-dom";

const  Cmail = (props)=> {

    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault();
        const path='/reset'
        props.handleSubmit(path);;
        // props.changeHide();
        navigate('../auth')
    }

    function handleBlur(e){
        if (e.target.validity.patternMismatch){
            props.handleBlur(true);
            
        } 
    }

    return (
        <>
            <main className='cmail'>
                <Logo />
                <EmailDiv heading='Change password' text='Please enter email address' />
                <form className='my-8 m-auto w-[35%]' onSubmit={handleSubmit}>
                  {/* { props.hide ? null : */}
                  <>
                    <Input type="email" id="email" name="email"  label='Email' onChange={props.handleChange} value={props.value.email} onBlur={handleBlur} pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'  />
                    <div className='flex justify-center'><Submit value='send'/></div>
                    
                    </> 
                    {/* } */}
                </form>
            </main>
        </>
    )
};


export default Cmail