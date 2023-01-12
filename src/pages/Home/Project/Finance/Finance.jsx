import React, { useContext, useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import preview1 from "../../../../assets/images/Blog/Desktop - 2.jpg";
import template1 from "../../../../assets/images/Blog/Template1.png";
import Button from "../../../../Components/Button";

const  Finance = ()=> {

    const navigate = useNavigate();
    const [handleClearName] = useOutletContext();

    function showPreview(e) {
        console.log(e.target.parentNode.parentNode.firstElementChild);
        e.target.parentNode.parentNode.firstElementChild.style.display='block';
        console.log(e.currentTarget);
    }

    function hidePreview(e) {
        e.target.style.display='none';
    }

    return (
        <>
            <div className='w-[full] flex justify-start pl-10'>
                <div className='font-fontRoboto text-xl text-center w-[30%]'  >
                    <img src={preview1} alt='review' className="absolute w-5/6 left-[7%] top-[176px]" style={{display:'none'}} onMouseLeave={hidePreview} />
                    <Link>
                        <img src={template1} alt={'finance'} className='w-full  border-[#59AFFF] hover:border-2 shadow-1' onClick={showPreview}/>
                    </Link>
                    finance-1
                    <div className=''></div>
                    <Button value="Edit" className='bg-darkBlue font-fontPoppins w-[156px] h-[46px] rounded-none ' onClick={()=>{
                        handleClearName()
                        navigate('/template/finance/finance-1')}
                    } />
                </div>
            </div>
        </>
    )
};


export default Finance