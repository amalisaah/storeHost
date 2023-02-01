import React from "react";


const  ZigZag = (props)=> {

    
    return (
        <>
            <div className='my-[50px] h-[400px] flex justify-between '>
                {props.children}
            </div>
        </>
    )
};


export default ZigZag