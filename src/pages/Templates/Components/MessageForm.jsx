import React from "react";
import Input from "../../Authentication/Components/Input";
import Submit from "../../../Components/Submit";

const  MessageForm = ()=> {
    return (
        <>
            <form className="w-[42.36%]" id="form">
                <h2 id="header4" className="font-ubuntu font-semibold text-xl mb-[17px]">Shoot us a message</h2>
                <Input type='text' id='name' label="name" name="name" placeholder='type name here' onChange={()=>{}} />
                <Input type='email' id='email' label="email" name="email" placeholder='example@storefront.com' onChange={()=>{}} />
                <textarea className="w-full h-[226px] rounded-lg bg-white  shadow-1 mt-4 p-6 focus:border-solid focus:border-2 focus:outline-none border-darkBlue " name='message' placeholder=" Hello Storefront, I would like to ... " value={ ''} onChange={()=>{}} ></textarea>
                <Submit value='Submit' className='text-white bg-black rounded-lg w-[148px]'/>
            </form>
        </>
    )
};


export default MessageForm