import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css';
import Submit from "../Components/Submit";
// import Button from "../Components/Button"
import Input from "../Components/Input";
import Picture from "../Components/Picture";
import OuterDiv from "../Components/OuterDiv";
import { LoginContext } from "../../../Context/LoginContext";

const  Login = (props)=> {
    // console.log(typeof props.pattern.mail)
    const navigate = useNavigate()

    const {user} = useContext(LoginContext)
    function handleSubmit(e){
        e.preventDefault();
        props.handleSubmit('');
        if(user.id) {
            localStorage.setItem('user',JSON.stringify(user))
            console.log(user.id);
            navigate('/dashboard')
        }
    }
    return (
        <>
            <main className="login flex justify-between h-screen">
                
                <OuterDiv heading='Login'>
                    <form className='' onSubmit={handleSubmit}  >
                        <Input type="email" id="email" name="email"  label='Email' onChange={props.handleChange} value={props.value.email} pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$' onBlur={props.handleBlur}  />
                        {props.error && <p role='alert' className='text-red-600' >input a valid email</p>}
                        <Input type="password" id="pwd" name="pwd"  label='Password' onChange={props.handleChange} value={props.value.pwd} pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$' onBlur={props.handleBlur}  />
                        <div className='loginSubmit flex justify-between'>
                            {/* <Button value='Forgot Password' link='/authentication/cmail' />   */}
                            <div role='button' className="button leading-5 h-12 w-[45%] rounded-lg bg-white text-bgBlue hover:bg-bgBlue hover:text-white" > <Link to='/authentication/cmail' className='leading-5 text-inherit h-full w-full'>Forgot Password</Link> </div>                     
                            <Submit value='Log In' />                       
                        </div>
                        <p> Not a member? <Link to='/authentication/signup'>Sign up</Link> </p>
                    </form>
                </OuterDiv>
                <Picture/>
                
            </main>
        </>
    )
};


export default Login