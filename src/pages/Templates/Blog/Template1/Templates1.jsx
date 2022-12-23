import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "../../../../Components/NavItem";
import Header from "../Components/Header";
import Logo from "../Components/Logo";
import Button from "../../../../Components/Button";
import imge1 from "../../../../assets/images/Blog/image2.png"
import imge3 from "../../../../assets/images/Blog/image3.png";
import { data } from "./data";
import NameBox from "../Components/NameBox";
import { projectNameContext } from "../../../../Context/projectNameContext";


const  Templates1 = ()=> {

    /*Check if webpage is still in templates mode*/
    const [template,setTemplate] = useState(true);
    console.log(data)
    /*Controls editable states*/
    const [edit,setEdit] = useState(data);
    // useEffect(()=>{
    //     const temp={}
    //     localStorage.setItem(temp,)
    // })
    function changeValue(e){    
        const id=e.target.id;
        console.log(id)
        setEdit(prev=>({...prev,[id]:e.target.innerText}));
        // setEdit(prev=>(...prev,))
        console.log(edit)
    }

    

    /*default nav values*/
    const navs=['Article','Shop','About']

    return (
        <>
        <div className="">
            <NameBox />
            <Header logo={edit.logo} template={template} changeState={changeValue} >
                {/* <Link to='' contentEditable={template} onBlur={changeState}>{edit.about}</Link> */}
                <div className=''>
                    {navs.map((nav,index)=><NavItem value={nav} className='text-fontRoboto text-lnkColorB text-xl font-normal' onBlur={changeValue}  contentEditable={template} key={index} /> )}
                </div>
                {/* <NavItem value="about" className='text-fontRoboto text-lnkColor'/> */}
                {/* <NavItem value='Log in' className='mr-[39px]' link='/authentication' />
                <Button value='Register' className='h-10 w-36' link='/authentication/signup' /> */}

            </Header>
            <main className='px-[5.5%] bg-bgColorb pt-8 disabled'>
                
                <div className='flex mb-12'>
                    <div className='mr-[2.7%] flex items-center w-[58.7%] '>
                        <h2 className=" font-bold text-2xl leading-[37.5px] text-black" id='topLeft' contentEditable={template} onBlur={changeValue}>{edit.topLeft}</h2></div>
                    <div className='w-[40%]'>
                        <img src={imge1} alt='picture' className="w-full" />
                    </div>
                </div>

                <div className='flex mb-12'>
                    <div className='mr-[2.7%]  w-[58.7%] font-fontRoboto font-normal'>
                        <p className="  text-base leading-[18.5px] mb-8 " id="para1" contentEditable={template} onBlur={changeValue}>{edit.para1}</p>

                        <p className="  text-base leading-[18.5px] mb-8 " id="para2" contentEditable={template} onBlur={changeValue}> {edit.para2} </p>

                        <div className=''>
                            <h2 className=" font-bold text-2xl leading-[37.5px]" id="head2" contentEditable={template} onBlur={changeValue}> {edit.head2} </h2>
                            
                            <p className="  text-base leading-[18.5px] mb-8 "  id="para3" contentEditable={template} onBlur={changeValue}> {edit.para3}
                            </p>
                        </div>
                    </div>
                    <div className='w-[40%] flex flex-col justify-center items-center text-xl font-semibold'>
                        <div className='text-[#6A6A6A] w-full flex justify-center shadow-1  py-3 cursor-pointer'> Subscribe to our newsletter</div>
                        <div className='mt-9'>
                            <Button value="subscribe" className='h-10 w-52  bg-lnkColorB'/>
                        </div>
                    </div>
                   

                </div>
                <div className='w-full'>
                    <img src={imge3} alt='image' className='w-full' />
                </div>
                <div className='py-8' id="para4" contentEditable={template} onBlur={changeValue}>
                     {edit.para4}

                </div>
            </main>
        </div>
        </>
    )
};


export default Templates1