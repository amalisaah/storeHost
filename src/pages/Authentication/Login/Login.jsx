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
    
    const navigate = useNavigate()

    const {user} = useContext(LoginContext)
    function handleSubmit(e){
        e.preventDefault();
        const path='/login';
        props.handleSubmit(path);
        if(user.id) {
            props.rememberMe ? localStorage.setItem('user',JSON.stringify(user)) : sessionStorage.setItem('user',JSON.stringify(user));
            console.log(user.id);
            navigate('/dashboard')
        }
    }
  
    /*SET REMEMBER ME STATE*/
    function handleSelect (e) {  
        props.Remember()
    };

    return (
        <>
            <main className="login flex justify-between h-screen">
                
                <OuterDiv heading='Login'>
                {props.error && <p role='alert' className='text-error' >username or password incorrect</p>}
                    <form className='' onSubmit={handleSubmit}  >
                        <Input type="email" id="email" name="email"  label='Email' onChange={props.handleChange} value={props.value.email} pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'  />

                        <Input type="password" id="pwd" name="password"  label='Password' onChange={props.handleChange} value={props.value.password} />

                        {/* <div className=''> */}
                            <input className='bg-[#4E4E4E]' type="checkbox" name="" id="check" onClick={handleSelect} />
                            <label  className='text-4 text-[#4E4E4E]' id='' htmlFor='check' > Remember me </label>
                        {/* </div> */}

                        <div className='loginSubmit flex justify-between'>
                            {/* <Button value='Forgot Password' link='/authentication/cmail' />   */}
                            <div role='button' className="button leading-5 h-12 w-[45%] rounded-lg bg-white text-bgBlue hover:bg-hoverBlue hover:text-white" > <Link to='/authentication/verify-email' className='leading-5 text-inherit h-full w-full'>Forgot Password</Link> </div>                     
                            <Submit value='Log In' />                       
                        </div>
                        <p> Not a member? <Link to='/authentication/signup'>Sign up</Link> </p>
                    </form>
                </OuterDiv>
                <Picture text={props.text} />
                
            </main>
        </>
    )
};


export default Login