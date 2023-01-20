import React, { useContext, useEffect } from "react";
import useState from 'react-usestateref';
import { Link,useLocation,useOutletContext } from "react-router-dom";
import NavItem from "../../../../Components/NavItem";
import Header from "../../Components/Header";
import Button from "../../../../Components/Button";
import imge1 from "../../../../assets/images/Blog/image2.png"
import imge3 from "../../../../assets/images/Blog/image3.png";
import { data } from "./data";
import Footer from "../../Components/Footer";
import Logo from "../Components/Logo";



const  Templates3 = (props)=> {

    
    


    /*Controls editable states*/
    const [edit,setEdit,editRef] = useOutletContext() ;
    // setEdit()
    // let template= edit && editRef.template
    let template= true;
    useEffect(()=>{
       setEdit(()=> Object.keys(edit).length === 0 && data);
       console.log(editRef.current,'effect')
    // console.log(projectData.projectName)
    // setProjectData(prev=>({...prev,[projectName]:data}))
        // setEdit(()=>projectData.name);
    },[])
    function changeValue(e){    
        const id=e.target.id;
        console.log(id)
        setEdit(prev=>({...prev,[id]:e.target.innerText}));
        // setEdit(prev=>(...prev,))
        // console.log(edit)
    }

    

    /*default nav values*/
    const navs=['Article','Shop','About']

    return (
        <>
        {editRef.current && <>
            
            <Header logo={edit.logo} logoClass='text-lnkColorB' template={template} changeState={changeValue}  >
                {/* <Link to='' suppressContentEditableWarning contentEditable={template} onBlur={changeState}>{edit.about}</Link> */}
                <div className=''>
                    {navs.map((nav,index)=><NavItem value={nav} className='text-fontRoboto text-lnkColorB text-xl font-normal' onBlur={changeValue}  suppressContentEditableWarning contentEditable={template} key={index} /> )}
                </div>
                {/* <NavItem value="about" className='text-fontRoboto text-lnkColor'/> */}
                {/* <NavItem value='Log in' className='mr-[39px]' link='/authentication' />
                <Button value='Register' className='h-10 w-36' link='/authentication/signup' /> */}

            </Header>
            <main className='px-[5.5%] bg-bgColorb pt-8 disabled'>
                
                <div className='flex mb-12'>
                    <div className='mr-[2.7%] flex items-center w-[58.7%] '>
                        <h2 className=" font-bold text-2xl leading-[37.5px] text-black" id='topLeft' suppressContentEditableWarning  contentEditable={template} onBlur={changeValue}>{edit.topLeft}</h2></div>
                    <div className='w-[40%]'>
                        <img src={imge1} alt='picture' className="w-full" />
                    </div>
                </div>
                
                <div className='flex mb-12'>
                    <div className='mr-[2.7%]  w-[58.7%] font-fontRoboto font-normal'>
                        <p className="  text-base leading-[18.5px] mb-8 " id="para1" suppressContentEditableWarning contentEditable={template} onBlur={changeValue}>{edit.para1}</p>

                        <p className="  text-base leading-[18.5px] mb-8 " id="para2" suppressContentEditableWarning contentEditable={template} onBlur={changeValue}> {edit.para2} </p>

                        <div className=''>
                            <h2 className=" font-bold text-2xl leading-[37.5px]" id="head2" suppressContentEditableWarning contentEditable={template} onBlur={changeValue}> {edit.head2} </h2>
                            
                            <p className="  text-base leading-[18.5px] mb-8 "  id="para3" suppressContentEditableWarning contentEditable={template} onBlur={changeValue}> {edit.para3}
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
                <div className='py-8' id="para4" suppressContentEditableWarning contentEditable={template} onBlur={changeValue}>
                     {edit.para4}

                </div>
            </main>
            <Footer logo={edit.logo}>
                
            </Footer>
        </>}
        
        </>
    )
};


export default Templates3