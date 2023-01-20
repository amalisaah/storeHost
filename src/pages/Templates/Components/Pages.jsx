import React from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

const  Pages = (props)=> {
    const navigate = useNavigate();

    return (
        <>
            <div className='bg-[#ffffffe6] w-[282px] min-h-[376px] z-10 fixed right-[5.4%] top-[108px] px-6 mr-1 text-darkBlue '>
                <div className='font-fontPoppins text-2xl leading-9 font-semibold pb-[18px] mb-2 border-solid border-darkBlue border-b'>
                     Pages
                </div>
                {props.pages && props.pages.map(((page,index)=>
                    <div className='font-fontPoppins text-2xl leading-9 py-2 cursor-pointer '  key={index} onClick={()=>{navigate('./'+page)}} >
                    <i className="fa-solid fa-square w-[26px] h-[26px] "></i> {page}
                    </div>
                ))}
                
            </div>
        </>
    )
};

Pages.propTypes = {
    pages : PropTypes.array, 
}


export default Pages