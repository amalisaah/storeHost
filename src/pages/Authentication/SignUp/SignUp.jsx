import React from "react";
import './SignUp.css';
import Form from "../Components/Form";
import Picture from "../Components/Picture";


const  SignUp = (props)=> {
    

    
    return (
        
        <>
            <main className="sign flex justify-between h-screen ">
                <Picture text={props.text} />
                <div className='signUp m-auto w-[33%]'>
                    <h1 className="mt-0 leading-10 mb-[4.6%] text-center text-bgBlue ">Sign up</h1>
                    <Form value={props.value} handleChange={props.handleChange}
                     handleBlur={props.handleBlur} error={props.error} personal={props.personal} 
                     changeForm={props.changeForm} onSubmit={props.handleSubmit} pattern={props.pattern} />
                </div>
            </main>
        </>
    )
};


export default SignUp