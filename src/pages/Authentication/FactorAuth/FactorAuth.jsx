import React from "react";
import Logo from "../Components/Logo";
import EmailDiv from "../Components/EmailDiv";
import './FactorAuth.css';

const  FactorAuth = (props)=> {

    // function  handleSubmit (e) {
    //     e.preventDefault()
    //     props.handleSubmit('')
    // };
    
    // const names=["first","second","third","fourth","fifth","sixth"]

    return (
        <>
            <main className='auth'>               
                <Logo />
                {/* <EmailDiv heading='Authentication' text={props.response.data }/> */}
                <EmailDiv heading='Authentication' text="Kindly check your email" />
            </main>
        </>
    )
};


export default FactorAuth