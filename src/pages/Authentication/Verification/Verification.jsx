import React from "react";
import Logo from "../Components/Logo";
import EmailDiv from "../Components/EmailDiv";
import Button from "../Components/Button";
import axios from "axios";
import { useParams, useSearchParams } from "react-router-dom";
import Submit from "../Components/Submit";

const  Verification = ()=> {

    // const queryParams = new URLSearchParams(window.location.search)
    const token = window.location.href;
    const param={token}
    function handleClick(){
        const param={token};
        console.log(param);   
        (async()=>{
            try {
                const url='https://storefront-dpqh.onrender.com/verify-email';
                const response = await axios.post(url,param);
                // response.data.id  && setUser(response.data)
                // setResponse(response.data)
                // if (response.status<200)navigate
                console.log(response.status) 
            } catch (error) {
                // console.log(error.response.data);
                // setResponse(error.response.data)
                // if (error.response.data==='Unauthorized'){setError(true)}
            }
            
        })();
    }


    return (
            <main className='auth'>               
                <Logo />
                <EmailDiv heading='Authentication' text="click link below to verify email"/>
                <div className='my-8 m-auto w-[35%] flex justify-center'>
                    <Button value='Verify' onClick={handleClick}  />
                    {/* <Submit value='Verify' handleSubmit={handleClick} link='../login' /> */}
                </div>
            </main>

    )
};


export default Verification