import React, { useEffect } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { sanitize } from "../../../../utils/sanitizeUtils";
import Submit from "../../../../Components/Submit";
import Input from "../../../Authentication/Components/Input";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { data } from "./data";
import Image from "../../../Home/Components/Image";
import Pages from "../../Components/Pages";
import Components from "../../Components/Components";
import Sections from "../../Components/Sections";
import ImageInput from "../../../Home/Components/ImageInput";

const  Finance1 = ()=> {

    /*Controls editable states*/
    const [edit,setEdit,,labelVisible,pagesVisible,componentVisible,style,changeStyle,colorVisible,colorVisibility,sectionsVisible,onContentBlur,picture,handlePicChange] = useOutletContext() ;


    /*  Set edit to data if no existing changes available*/
    useEffect(()=>{
        setEdit((prev)=> Object.keys(edit).length === 0 ? data : prev);
        // setEdit(()=> data);
       
    },[])



    

    /////////////////////////////////
      /**Handles Picture Change */
    function changePic (pic,id) {  
        handlePicChange(pic,id)               
    };


    /*Sections*/
    const arr=['Hero','section 1','section 2','section 3','footer'];
   

  

    return (
        <>
            <Header logo={edit.logo} template={true} logoClass='col text-orange font-bold font-fontRoboto text-[36px]' searchClass='col text-orange' onBlur={onContentBlur} style={style}>
                <span className="tex-black text-xl font-fontRoboto">Login</span> | <span className="col text-orange text-xl font-fontRoboto" style={style.col} >Register</span>
            </Header>
            {pagesVisible ? <Pages pages={['Personal', 'Business']} /> : null}
            {componentVisible ? <Components style={style} changeStyle={changeStyle} colorVisible={colorVisible} colorVisibility={colorVisibility} /> : null}
            {sectionsVisible ? <Sections sections={arr}  /> : null}
            <main className='font-fontRoboto'>
                <div style={{backgroundImage:picture.Hero ?`url(${picture.Hero.src}`: 'url(/images/finance/background.png)',backgroundRepeat: 'no-repeat',backgroundSize:
            'cover'}}  className="h-[556px] text-white font-fontRoboto flex flex-col justify-center bg-no-repeat bg-cover relative "   >
                    <div  id='Hero' className=' w-full h-full absolute '></div>
                <ImageInput src={picture.three ? picture.three.src : '/images/finance/scrabble.png'} alt='Happy Child' imageId="Hero" id="bg" labelVisible={labelVisible} onChange={changePic} />
                    <div className='z-5 flex flex-col items-center justify-center mt-[120px]' >
                        <h2 id='header1' contentEditable onBlur={onContentBlur}
                            dangerouslySetInnerHTML={sanitize(edit.header1)} className="text-[40px] font-semibold font-fontRoboto text-center mb-5" style={style.header} />
                        <p className='text-inherit font-normal font-fontRoboto text-xl text-center w-[42%] mx-auto leading-[23px] ' id='para1' onBlur={onContentBlur} contentEditable dangerouslySetInnerHTML={sanitize(edit.para1)} />
                    </div>
                
                    <div className='z-5 mt-[113px] flex justify-center text-[36px]'  >
                        <button className='w-[353px] h-[100px] font-fontRoboto rounded-l-xl bg-white text-orange' id="personal" contentEditable onBlur={onContentBlur}
                            dangerouslySetInnerHTML={sanitize(edit.personal)} style={style.col ? style.col: {}}/>
                        <button className='bg-orange w-[353px] font-fontRoboto h-[100px] rounded-r-xl' id="business" contentEditable onBlur={onContentBlur}
                            dangerouslySetInnerHTML={sanitize(edit.business)} style={style.col ? ({background: style.col.color}) : {}}/>
                    </div>
                </div>
            <div className='outlet'>
            
                <Outlet context={[edit,picture,changePic,onContentBlur,labelVisible,style]} />
            </div>
                
                <div className="flex justify-between items-center bg-[url('/images/finance/bgGradient.png')] h-[696px] px-[5.5%]" id="section 3">
                        <Image src={picture.three ? picture.three.src : '/images/finance/scrabble.png'} alt='Happy Child' imageId="three" id="fileThree" labelVisible={labelVisible} onChange={changePic} />
                    
                    <form className="w-[42.36%]" id="form">
                        <h2 id="header4" className="font-ubuntu font-semibold text-xl mb-[17px]">Shoot us a message</h2>
                        <Input type='text' id='name' label="name" name="name" placeholder='type name here' onChange={()=>{}} />
                        <Input type='email' id='email' label="email" name="email" placeholder='example@storefront.com' onChange={()=>{}} />
                        <textarea className="w-full h-[226px] rounded-lg bg-white  shadow-1 mt-4 p-6 focus:border-solid focus:border-2 focus:outline-none border-darkBlue " name='message' placeholder=" Hello Storefront, I would like to ... " value={ ''} onChange={()=>{}} ></textarea>
                        <Submit value='Submit' className='text-white bg-black rounded-lg w-[148px]'/>
                    </form>
                </div>
            </main>
            <Footer logo={edit.logo} text={edit.footText} textId='footText' tel={edit.tel} telId='tel' template={true} onBlur={onContentBlur} />
        </>
    )
};


export default Finance1