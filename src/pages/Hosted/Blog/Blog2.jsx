import React, { useContext, useEffect } from "react";
import Button from "../../../Components/Button";
import Logo from "../../Templates/Blog/Components/Logo";
import SearchBar from "../../Templates/Components/SearchBar";
import MessageForm from "../../Templates/Components/MessageForm";
import Footer from "../../Templates/Components/Footer";
import {createSyle} from "../../../utils/styleUtils";


const  Blog2 = (props)=> {

    /*Controls editable states*/
    const [edit] = [props.data];
  
    let projStyle = edit.projStyle ? edit.projStyle :{};
    let picture = edit.picture ? edit.picture: {};
    useEffect(()=>{
       
        const styles = createSyle(projStyle)
        console.log(styles)
        const head=document.head;
        const style = document.createElement('style');
        style.innerHTML = styles;
        head.appendChild(style)
        console.log(head)
        
        return ()=>{
            head.removeChild(style)
        }
    },[])

    return (
        <>
        <header className="h-[693px]  flex flex-col relative " style={{backgroundImage:picture.Hero ?`url(${picture.Hero.src}`: 'url(/images/Blog/Blog2/image1.png)',backgroundRepeat: 'no-repeat',backgroundSize:
            'cover'}} >
                
                <div className='h-20 flex justify-between px-20 pt-6'>
                    <div className='flex  align-center   '>
                        <Logo logo={edit.logo} className='col text-white' />
                        <i className="col fa-solid fa-bars text-white ml-20 text-xl"></i>
                    </div>
                    <SearchBar searchButtonClass='col text-[#525252] bg-white' searchClass='bg-white' />
                </div>
                <div className='mt-[90px] text-center px-40 '>
                    <h1 className="col text-white text-[85px] font-bold leading-[85px] mb-2">{edit.header1}</h1>
                    <p className="text-white text-2xl font-semibold leading-[28px]">{edit.paraH}</p>
                </div>
                <div className=' absolute right-4 bottom-14'>
                    <span  className='text-white text-xl mr-8 cursor-pointer '>Login</span>
                    <Button value='Sign up' className='h-10 w-36 bg-white text-black' link='#' style={projStyle.col ? {backgroundColor:projStyle.col.color}: {}} />
                </div>
            </header>
        <main className=''>
            <section className="my-20 px-20" >
                <div className='my-20 flex justify-between'>
                    <div className='w-[40%] self-center'>
                        <h2 className="header font-fontUbuntu text-5xl font-bold leading-[62px]">{edit.header2}</h2>
                        <p className="font-fontRoboto text-xl leading-5"> {edit.para1} </p>
                    </div>
                    <div className='w-[39.8%]'>
                        <img src={picture.one ? picture.one.src : "/images/Blog/Blog2/image2.png"} alt='picture'  id="fileOne"  />
                    </div>
                </div>

                <div className='text-center px-[10%] my-20'>
                    <h2 className="font-fontUbuntu text-5xl font-bold leading-[62px] mb-3">{edit.header3}</h2>
                    <p className="font-fontRoboto text-2xl leading-5">{edit.para2} </p>
                </div>

                <div className='flex justify-between'>
                    <div className='relative w-[40%] '>
                        <img src={picture.two ? picture.two.src : "/images/Blog/Blog2/image3.png"} alt='picture'  id="fileTwo" className=' self-center' />

                        <div className='absolute bottom-14 right-8 text-white'>
                        {edit.para3}
                        </div>

                    </div>
                
                    <MessageForm />
                </div>
            </section>

            <section >
                
                
                    <div className='h-[329px] flex flex-col justify-center align-center text-white' style={{backgroundImage:picture.section3 ?`url(${picture.section3.src}`: 'url(/images/Blog/Blog2/image4.png)',backgroundRepeat: 'no-repeat',backgroundSize:
        'cover'}}>
                        <h1 className="header text-white text-center ">{edit.header4}</h1>
                    </div>

                    <div className='text-center w-[370px] m-auto my-16 font-fontRoboto font-semibold'>{edit.paara4}
                        </div>

            </section>
        </main>
        <Footer logo={edit.logo} text={edit.footText} textId='footText' tel={edit.tel} telId='tel' className=' fFooter' logoClass='fLogo' />
        </>
    )
};


export default Blog2