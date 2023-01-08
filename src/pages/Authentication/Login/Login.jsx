import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Submit from "../Components/Submit";
// import Button from "../Components/Button"
import Input from "../Components/Input";
import Picture from "../Components/Picture";
import OuterDiv from "../Components/OuterDiv";
import { LoginContext } from "../../../Context/LoginContext";
import Alert from "../Components/Alert";
import Loading from "../../../Components/Loading";

const  Login = (props)=> {
    
    const navigate = useNavigate()

    const {user,setUser} = useContext(LoginContext)
    function handleSubmit(e){
        e.preventDefault();
        const path='/login';
        props.handleSubmit(path);
        // !user.id && props.handleBlur(true)
        
    }
  
    /*SET REMEMBER ME STATE*/
    // function handleSelect () {  
    //     props.Remember()
    // };

    /*LOgging in if user exists*/
    useEffect(()=>{
        if(user.id) {
            props.rememberMe ? localStorage.setItem('user',JSON.stringify(user)) : sessionStorage.setItem('user',JSON.stringify(user));
            // console.log(user.id);
            navigate('/home')
        }
    },[user])
  
    /*SET REMEMBER ME STATE*/
    function handleSelect () {  
        props.Remember()
    };


    return (
        <>

            <main className="login flex justify-between h-screen" >
                
                <OuterDiv heading='Login'>
                {/* {props.error ? <Alert text={'username or password incorrect'}/> : null} */}
                {props.response.status === 401 ? <Alert text={'username or password incorrect'}/> : null}
                {props.response.status === 404 ? <Alert text={'email not verified'}/> : null}
                    <form className='' onSubmit={handleSubmit}  >
                        <Input type="email" id="email" name="email"  label='Email' onChange={props.handleChange} value={props.value.email} pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'  />

                        <Input type="password" id="pwd" name="password"  label='Password' onChange={props.handleChange} value={props.value.password} />

                        {/* <div className=''> */}
                            <input className='bg-[#4E4E4E]' type="checkbox" name="" id="check" onClick={handleSelect} />
                            <label  className='text-4 text-[#4E4E4E] text-sm' id='' htmlFor='check' > Remember me </label>
                        {/* </div> */}

                        <div className='loginSubmit flex justify-between'>
                            {/* <Button value='Forgot Password' link='/authentication/cmail' />   */}
                            <div role='button' className="button leading-5 h-12  flex  text-center w-[45%] rounded-lg bg-white text-bgBlue hover:bg-hoverBlue hover:text-white" > <Link to='/authentication/password-reset' className='leading-5 text-inherit h-full w-full pt-[6.5%]'>Forgot Password</Link> </div>                     
                            {props.loading ? <Loading /> : null}
                            <Submit value='Log In'className='hover:bg-hoverBlue' />                       
                        </div>
                        <p className="text-center"> Not a member? <Link to='/authentication/signup' className="text-bgBlue">Sign up</Link> </p>
                    </form>
                </OuterDiv>
                <Picture text={props.text} />
                
            </main>
        </>
    )
};


export default Login