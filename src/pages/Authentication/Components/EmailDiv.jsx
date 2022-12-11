import React from "react";

const  EmailDiv= (props)=> {
    return (
        <>
            <div className='check m-auto'>
                <h1 className='text-bgBlue mb-[3.2%] mt-[12%] '>{props.heading}</h1>
                <p className="text-2xl "> {props.text}</p>
            </div>
        </>
    )
};


export default EmailDiv