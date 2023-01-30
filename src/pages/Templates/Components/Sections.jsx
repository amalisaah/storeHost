import React from "react";
import PropTypes from 'prop-types';

const  Sections = (props)=> {
    const arr=props.sections

    return (
        <>
         <div className='bg-[#ffffffe6] w-[280px] cursor-pointer z-10 fixed right-[5.4%] top-[160px] py-9  mr-1 text-black'>
            <ul className="list-[circle] list-inside px-6">
                {arr.map((item,index)=>(<li className="font-fontPoppins text-2xl leading-9" key={index}><a href={"#"+item}>{item}</a> </li>))}
            </ul>
        </div>   
        </>
    )
};

Sections.propTypes = {
    sections : PropTypes.array.isRequired, 
}

export default Sections