
import React from "react";

const  OuterDiv = ({children,heading})=> {
    return (
        <>
            
            <div className='password m-auto w-[33%]'>
                <h1 className="mt-0 leading-10 mb-[4.6%] text-bgBlue">{heading}</h1>
                {children}
            </div>
        </>
    )
};


export default OuterDiv