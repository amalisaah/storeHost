import React from "react";
import Logo from "../Components/Logo";
import EmailDiv from "../Components/EmailDiv";
import Button from "../Components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Submit from "../Components/Submit";
import Alert from "../Components/Alert";
import Loading from "../../../Components/Loading";

const  Verification = (props)=> {

    const navigate = useNavigate()
    const token = window.location.href;
    console.log(token)
    const param=token.split('?')[1]
    function handleClick(){
        props.handleLoading(true)
        console.log(param);   
        (async()=>{
            try {
                const url='https://storefront-dpqh.onrender.com/verify-email'+'?'+param;
                const response = await axios.get(url);
                response && props.handleLoading(false);
                // setResponse(response.data)
                console.log(response) 
                response.status===201 && navigate('/authentication/login')
            } catch (error) {
                props.handleLoading(false)
                console.log(error.response);
                props.handleResponse(error.response)
                // if (error.response.data==='Unauthorized'){setError(true)}
            }
            
        })();
    }


    return (
            <main className='auth'>               
                <Logo />
                <EmailDiv heading='Authentication' text={props.response.data ? '' : "click link below to verify email"}/>
                <Alert text={props.response.data} className='text-[24px] ' />
                <div className='my-8 m-auto w-[35%] flex justify-center'>
                    <Button value='Verify' onClick={handleClick}  />
                    {props.loading ? <div className='w-10 block'> <Loading /> </div> : null }
                </div>
            </main>

    )
};


export default Verification