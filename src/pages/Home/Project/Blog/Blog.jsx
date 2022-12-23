import React from "react";
import { Link, useNavigate } from "react-router-dom";
import template1 from "../../../../assets/images/Blog/Template1.png"
import template2 from "../../../../assets/images/Blog/Template2.png"
import template3 from "../../../../assets/images/Blog/Template3.png"
import desktop from "../../../../assets/images/Blog/Desktop - 1.png"
import Button from "../../../Authentication/Components/Button";
const  Blog = ()=> {

    const navigate = useNavigate();

    const templates=[template1,template2,template3];
    const alts=['Template 1','Template 2','Template 3'];

    // function handleClick(){
        
    // }
    

    return (
        <>
            <div className='w-[full] flex justify-around'>
                {templates.map((template,index)=>
                    <div className='font-fontRoboto text-xl text-center' key={index} >
                        <Link>
                            <img src={template} alt={alts[index]} className='w-full  border-[#59AFFF] hover:border-2 shadow-1' />
                        </Link>
                        {alts[index]}
                        <Button value="Edit" onClick={()=>{navigate(alts[index])}}/>
                    </div>
                )}       
                {/* <div className='absolute'>
                    <img src={desktop} alt='' />
                </div>          */}
            </div>
            
        </>
    )
};


export default Blog