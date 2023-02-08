import React, { useContext, useEffect } from "react";
import axios from "axios";
import NavItem from "../../../Components/NavItem";
import Header from "../../Templates/Components/Header";
import Button from "../../../Components/Button";
import Footer from "../../Templates/Components/Footer";
import {createSyle} from "../../../utils/styleUtils";



const  Blog3 = (props)=> {

    /*Controls editable states*/
    const [edit] = [props.data];
    let template= false;

    let projStyle = edit.projStyle ? edit.projStyle :{};
    let picture = edit.picture ? edit.picture: {};

    useEffect(()=>{
        (async()=>{
            try {
                const baseUrl = 'https://storefront-dpqh.onrender.com';
                const temp=location.pathname.split('/').at(1);
                let path = '/store'
                let url= `${baseUrl}${path}/${temp}`
                console.log(url);
                const response = await axios.get(url);
                console.log(response)
            } catch (error) {
                console.log(error);
            }     
          })();
        
    
    },[])
    
    useEffect(()=>{
       
        const styles = createSyle(projStyle)
        console.log(styles)
        const head=document.head;
        const style = document.createElement('style');
        style.innerHTML = styles;
        head.appendChild(style)
        
        return ()=>{
            head.removeChild(style)
        }
    },[])

    

    /*Placeholder for nav*/
    const navs=['Article','Shop','About']

    return (
        <>
        
        {edit && <>
            
            <Header logo={edit.logo} template={template} logoClass='col text-lnkColorB font-bold font-fontRoboto text-2xl bLogo' searchButtonClass='col text-lnkColorB bSearchButton'   >
                {/* <Link to='' contentEditable={template} onBlur={changeState}>{edit.about}</Link> */}
                <div className='flex items-center'>
                <div className=''>
                    {navs.map((nav,index)=><NavItem value={nav} className='text-fontRoboto text-lnkColorB text-xl font-normal' link='#' key={index} /> )}
                </div>
                <NavItem value='Log in' className='text-fontRoboto text-lnkColorB text-xl font-normal mr-[39px] ml-20' link='/authentication' />
                <Button value='Register' className='h-10 w-36' link='#' style={projStyle.col ?{backgroundColor:projStyle.col.color}: {}} />
                </div>

            </Header>
            <main className='px-[5.5%] bg-bgColorb pt-8 disabled'>
                
                <div className='flex mb-12'>
                    <div className='mr-[2.7%] flex items-center w-[58.7%] '>
                        <h2 className="header font-bold text-2xl leading-[37.5px] text-black" id='topLeft'  >{edit.topLeft}</h2></div>
                    <div className='w-[40%]'>
                        <img src={picture.one ? picture.one.src : '/images/Blog/Blog 3/image2.png'} alt='picture' className="w-full" />
                    </div>
                </div>
                
                <div className='flex mb-12'>
                    <div className='mr-[2.7%]  w-[58.7%] font-fontRoboto font-normal'>
                        <p className="  text-base leading-[18.5px] mb-8 " id="para1" >{edit.para1}</p>

                        <p className="  text-base leading-[18.5px] mb-8 " id="para2"  > {edit.para2} </p>

                        <div className=''>
                            <h2 className=" header font-bold text-2xl leading-[37.5px]" id="head2" > {edit.head2} </h2>
                            
                            <p className="  text-base leading-[18.5px] mb-8 "  id="para3" > {edit.para3}
                            </p>
                        </div>
                    </div>
                    <div className='w-[40%] flex flex-col justify-center items-center text-xl font-semibold'>
                        <div className='text-[#6A6A6A] w-full flex justify-center shadow-1  py-3 cursor-pointer'><a href="mailto:#" > Subscribe to our newsletter</a></div>
                        <div className='mt-9'>
                            <Button value="subscribe" className='h-10 w-52  bg-lnkColorB' style={projStyle.col ?{backgroundColor:projStyle.col.color}: {}}  />
                        </div>
                    </div>
                   

                </div>
                <div className='w-full'>
                    <img src={picture.two ? picture.two.src : '/images/Blog/Blog 3/image3.png'} alt='picture' className="w-full" />
                </div>
                <div className='py-8' id="para4" >
                     {edit.para4}

                </div>
            </main>
            <Footer logo={edit.logo} text={edit.footText} textId='footText' fb={edit.social && edit.social.fb} ig={edit.social && edit.social.ig} twitter={edit.social && edit.social.twitter} tel={edit.tel} telId='tel' className=' fFooter' logoClass='fLogo' />
            
            </>}
        
        </>
    )
};


export default Blog3