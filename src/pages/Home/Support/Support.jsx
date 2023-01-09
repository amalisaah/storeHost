import React from "react";
import { useOutletContext } from "react-router-dom";
import Submit from "../../../Components/Submit";

const  Support = ()=> {

    const [value,setValue,onSubmit,support,setSupport,supportRef] = useOutletContext()

    function handleChange(e) {
        e.preventDefault();
        const name=e.target.name;
        setSupport(prev=>({...prev,[name]:e.target.value}));

    }
    function handleSubmit(e) {
        e.preventDefault();
        const path='/dashboard/support'
        const email=value.email;
        console.log(email);
        setSupport(prev=>({...prev,email}));
        onSubmit(path,supportRef.current)
    }
    

    return (
        <>
            <form className='' onSubmit={handleSubmit}>
                <div className='m-auto w-[95%] h-[382px]'>
                <textarea className="w-full h-full bg-white  shadow-1 mt-4 p-6 focus:border-solid focus:border-2 focus:outline-none border-darkBlue " name='message' placeholder=" Hello Storefront, I would like to ... " value={support.message || ''} onChange={handleChange} >                   
                </textarea>
                </div>
                <div className='ml-8 mt-8'><Submit value={'Send'} className='bg-darkBlue h-10 w-[206px]' /></div>
                
            </form>        
        </>
    )
};


export default Support