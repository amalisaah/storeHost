import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../../../../Components/Button";
import Logo from "../Components/Logo";
import Image from "../../../Home/Components/Image";
import Footer from "../../Components/Footer";
import MessageForm from "../../Components/MessageForm";
import SearchBar from "../../Components/SearchBar";
import ImageInput from "../../../Home/Components/ImageInput";
import { sanitize } from "../../../../utils/sanitizeUtils";
import { data } from "./data";
import Pages from "../../Components/Pages";
import Components from "../../Components/Components";
import Sections from "../../Components/Sections";

const  Templates2 = ()=> {

    /*Controls editable states*/
    const [edit,setEdit,editRef,labelVisible,pagesVisible,componentVisible,style,changeStyle,colorVisible,colorVisibility,sectionsVisible,onContentBlur,picture,handlePicChange,mobile] = useOutletContext() ;

    let template= true;
    useEffect(()=>{
       setEdit((prev)=> Object.keys(edit).length === 0 ? data : prev);
       console.log(editRef.current,'effect')
    
    },[])
    /*Editing text on page*/
    function changeValue(e){    
        onContentBlur(e)
    }
      /**Handles Picture Change */
    function changePic (pic,id) {  
        handlePicChange(pic,id)               
    };

    
    const arr=['Hero','section 1','section 2','section 3','footer']

    return (
        <>
            <header className="h-[693px]  flex flex-col relative " style={{backgroundImage:picture.Hero ?`url(${picture.Hero.src}`: 'url(/images/Blog/Blog2/image1.png)',backgroundRepeat: 'no-repeat',backgroundSize:
            'cover'}} >
                <div  id='Hero' className=' w-full h-full absolute -z-10'></div>
                 <ImageInput id="bg" labelVisible={labelVisible} onChange={changePic} />
                <div className='h-20 flex justify-between px-20 pt-6'>
                    <div className='flex align-center   '>
                        <Logo logo={edit.logo}  onBlur={onContentBlur} template={template} style={style}className='text-white' />
                        <i className="fa-solid fa-bars text-white ml-20 text-xl"></i>
                    </div>
                    <SearchBar searchButtonClass='text-[#525252] bg-white' searchClass='bg-white' style={style} />
                </div>
                <div className='mt-[90px] text-center px-40 '>
                    <h1 className="text-white text-[85px] font-bold leading-[85px] mb-2" id='header1' contentEditable onBlur={onContentBlur} style={style ? style.col : {}}
                            dangerouslySetInnerHTML={sanitize(edit.header1)}/>
                    <p className="text-white text-2xl font-semibold leading-[28px]" id='paraH' contentEditable onBlur={onContentBlur} 
                            dangerouslySetInnerHTML={sanitize(edit.paraH)}/>
                </div>
                <div className=' absolute right-4 bottom-14'>
                    <span  className='text-white text-xl mr-8 cursor-pointer '>Login</span>
                    <Button value='Sign up' className='h-10 w-36 bg-white text-black' link='#' style={style.col ?{backgroundColor:style.col.color}: {}} />
                </div>
            </header>

            {pagesVisible ? <Pages pages={['Home']} /> : null}
            {componentVisible ? <Components style={style} changeStyle={changeStyle} colorVisible={colorVisible} colorVisibility={colorVisibility} /> : null}
            {sectionsVisible ? <Sections sections={arr}  /> : null}

            <main className=''>
                <section className="my-20 px-20" >
                    <div className='my-20 flex justify-between' id="section 1">
                        <div className='w-[40%] self-center'>
                            <h2 className="font-fontUbuntu text-5xl font-bold leading-[62px]" id='header2' contentEditable onBlur={onContentBlur} style={style.header}
                            dangerouslySetInnerHTML={sanitize(edit.header2)}/>
                            <p className="font-fontRoboto text-xl leading-5" id='para1' contentEditable onBlur={onContentBlur} 
                            dangerouslySetInnerHTML={sanitize(edit.para1)}/>
                        </div>
                        <div className='w-[39.8%]'>
                            <Image src={picture.one ? picture.one.src : "/images/Blog/Blog2/image2.png"} alt='picture' imageId="one" id="fileOne" labelVisible={labelVisible} onChange={changePic} />
                        </div>
                    </div>

                    <div className='text-center px-[10%] my-20'>
                        <h2 className="font-fontUbuntu text-5xl font-bold leading-[62px] mb-3" id='header3' contentEditable onBlur={onContentBlur} style={style.header}
                            dangerouslySetInnerHTML={sanitize(edit.header3)}/>
                        <p className="font-fontRoboto text-2xl leading-5" id='para2' contentEditable onBlur={onContentBlur} 
                            dangerouslySetInnerHTML={sanitize(edit.para2)}/>
                    </div>

                    <div className='flex justify-between' id="section 2">
                        <div className='relative w-[40%] '>
                            <Image src={picture.two ? picture.two.src : "/images/Blog/Blog2/image3.png"} alt='picture' imageId="two" id="fileTwo" labelVisible={labelVisible} onChange={changePic} className=' self-center' />

                            <div className='absolute bottom-14 right-8 text-white' id='para3' contentEditable onBlur={onContentBlur} 
                            dangerouslySetInnerHTML={sanitize(edit.para3)}/>

                        </div>
                    
                        <MessageForm />
                    </div>
                </section>

                <section id="section 3" >

                    <div className='h-[329px] flex flex-col justify-center align-center text-white relative' style={{backgroundImage:picture.section3 ?`url(${picture.section3.src}`: 'url(/images/Blog/Blog2/image4.png)',backgroundRepeat: 'no-repeat',backgroundSize:
        'cover'}}>
                        <div  id='section3' className=' w-full h-full absolute -z-10'></div>
                    <ImageInput id="section" labelVisible={labelVisible} onChange={changePic} />

                        <h1 className="text-white text-center " id='header4' contentEditable onBlur={onContentBlur} style={style.header}
                        dangerouslySetInnerHTML={sanitize(edit.header4)}/>
                    </div>

                    <div className='text-center w-[370px] m-auto my-16 font-fontRoboto font-semibold' id='para4' contentEditable onBlur={onContentBlur} 
                        dangerouslySetInnerHTML={sanitize(edit.para4)}/> 

                </section>
            </main>
            <Footer logoClass='fLogo' className=' fFooter' logo={edit.logo} text={edit.footText} textId='footText' tel={edit.tel} telId='tel' template={true} onBlur={changeValue} />
                
            
        </>
    )
};


export default Templates2