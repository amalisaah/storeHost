import React from "react";

const  Sections = (props)=> {
    // const arr=props.sections
    const arr = [1,2,3,4]
    return (
        <>
         <div className='bg-[#ffffffe6] w-[280px] cursor-pointer z-10 fixed right-[5.4%] top-[108px] py-9  mr-1 text-black'>
            <ul className="list-[square] list-inside px-6">
                {arr.map((item,index)=>(<li className="font-fontPoppins text-2xl leading-9" key={index}><a href="#section 2">{item}</a> </li>))}
            </ul>
        </div>   
        </>
    )
};


export default Sections