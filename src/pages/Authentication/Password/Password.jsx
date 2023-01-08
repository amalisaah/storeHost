import React, { useEffect } from "react";
import './Password.css';
import Input from "../Components/Input";
import Submit from "../Components/Submit";
import OuterDiv from "../Components/OuterDiv";
import { useNavigate } from "react-router";
import Logo from "../Components/Logo";
import Alert from "../Components/Alert";
import Loading from "../../../Components/Loading";

const  Password = (props)=> {

    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        handleCheck();
        if(props.sameRef.current){
            const endpoint ='/reset-password';
            const params = (window.location.search);
            const path=endpoint + params
            console.log(path);
            props.handleSubmit(path);
        }else console.log("password doesn't match")
        
    }

    function handleCheck(){       
        if(props.value.password===props.value.password2){
            props.handleCheck(true)
        }else props.handleCheck(false)     
    }
    
    /** Handle Navigation*/
    useEffect(()=>{
        if (props.response.status === 200)
            navigate('/authentication/login')
    })


    return (
        <>
        <main className='passwd'>
            <Logo />
            <OuterDiv heading='change password' >
                {props.response.status===404 ? <p className="text-error text-center text-2xl ">Link has expired</p> :
                 <form className='' onSubmit={handleSubmit} >
                    {props.sameRef.current ? null : <Alert text={'passwords do not match'} /> }
                    <Input type="password" id="pwd" name="password" label='New Password' onChange={props.handleChange} value={props.value.password} onBlur={props.handleBlur} pattern='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$' />
                    <Input type="password" id="Confirmpwd" name="password2" label='Confirm Password' onChange={props.handleChange} value={props.value.password2} onBlur={props.handleCheck}  />   
                    {props.loading ? <Loading /> : null}
                    <div className='flex justify-center'>
                        <Submit value='save'  />
                    </div>
                    
                </form>}
            </OuterDiv>
        </main>
        </>
    )
};


export default Password