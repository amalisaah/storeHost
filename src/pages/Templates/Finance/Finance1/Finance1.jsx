import React, { useEffect } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { sanitize } from "../../../../utils/sanitizeUtils";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { data } from "./data";
import Image from "../../../Home/Components/Image";
import Pages from "../../Components/Pages";
import Components from "../../Components/Components";
import Sections from "../../Components/Sections";
import ImageInput from "../../../Home/Components/ImageInput";
import MessageForm from "../../Components/MessageForm";


const  Finance1 = ()=> {

    /*Controls editable states*/
    const [edit,setEdit,,labelVisible,pagesVisible,componentVisible,style,changeStyle,colorVisible,colorVisibility,sectionsVisible,onContentBlur,picture,handlePicChange,mobile,socialChange,social] = useOutletContext() ;


    /*  Set edit to data if no existing changes available*/
    useEffect(()=>{
        setEdit((prev)=> Object.keys(edit).length === 0 ? data : prev);
        // setEdit(()=> data);
       
    },[])
    // let stylesheet;
    // useEffect (()=>{
    //     if (mobile){
    //         stylesheet = import('./mobileStyle.css').then(data=>{
    //             let link=document.createElement('link');
    //             link.setAttribute('rel','stylesheet');
    //             link.setAttribute('type','text/css');
    //             link.setAttribute('id','temp');
    //             document.head.appendChild(link);
    //         }) 
    //         // 
    //     }
    //     if(!mobile){
    //         let lnk = document.head.getElementsByTagName('link'); 
    //         for (let i =0; i<lnk.length; i++){
    //          console.log(lnk[i].getAttribute('id'))
    //          if (lnk[i].getAttribute('id')==='temp'){
    //              lnk[i].parentNode.removeChild(lnk[i]);
                 
    //          }
    //         }
            
    //      }console.log(document.head)
    //     return ()=>{
    //         // console.log(document.head)
    //         let lnk = document.head.getElementsByTagName('link'); 
    //         for (let i =0; i<lnk.length; i++){
    //          console.log(lnk[i].getAttribute('id'))
    //          if (lnk[i].getAttribute('id')==='temp'){
    //              lnk[i].parentNode.removeChild(lnk[i]);
                 
    //          }
    //         }
            
    //     }
    // },)
    // mobile ? import('./mobileStyle.css') : null;
    

    

    /////////////////////////////////
      /**Handles Picture Change */
    function changePic (pic,id) {  
        handlePicChange(pic,id)               
    };


    /*Sections*/
    const arr=['Hero','section 1','section 2','section 3','footer'];
   
  

    return (
        <>
            <Header logo={edit.logo} template={true} className='fHeader relative' logoClass='col text-orange font-bold font-fontRoboto text-[36px] fLogo' searchClass='col text-orange fSearch' searchButtonClass='col text-orange fSearchButton' onBlur={onContentBlur} style={style}>
                <span className="tex-black text-xl font-fontRoboto">Login</span> | <span className="col text-orange text-xl font-fontRoboto" style={style.col} >Register</span>
            </Header>

            {pagesVisible ? <Pages pages={['Personal', 'Business']} /> : null}
            {componentVisible ? <Components style={style} changeStyle={changeStyle} colorVisible={colorVisible} colorVisibility={colorVisibility} /> : null}
            {sectionsVisible ? <Sections sections={arr}  /> : null}
            
            <main className='font-fontRoboto fMain'>
                <div style={{backgroundImage:picture.Hero ?`url(${picture.Hero.src}`: 'url(/images/finance/background.png)',backgroundRepeat: 'no-repeat',backgroundSize:
            'cover'}}  className="h-[556px] text-white font-fontRoboto flex flex-col justify-center bg-no-repeat bg-cover relative fHero "   >

                    <div  id='Hero' className=' w-full h-full absolute -z-10'></div>
                    <ImageInput id="bg" labelVisible={labelVisible} onChange={changePic} />
                    <div className='z-5 flex flex-col items-center justify-center mt-[120px]' >
                        <h2 id='header1' contentEditable onBlur={onContentBlur}
                            dangerouslySetInnerHTML={sanitize(edit.header1)} className="text-[40px] font-semibold font-fontRoboto text-center mb-5" style={style.header} />
                        <p className='text-inherit font-normal font-fontRoboto text-xl text-center w-[42%] mx-auto leading-[23px] ' id='para1' onBlur={onContentBlur} contentEditable dangerouslySetInnerHTML={sanitize(edit.para1)} />
                    </div>
                
                    <div className='z-5 mt-[113px] flex justify-center text-[36px]'  >
                        <button className='w-[353px] h-[100px] font-fontRoboto rounded-l-xl bg-white text-orange fButton' id="personal" contentEditable onBlur={onContentBlur}
                            dangerouslySetInnerHTML={sanitize(edit.personal)} style={style.col ? style.col: {}}/>
                        <button className='bg-orange w-[353px] font-fontRoboto h-[100px] rounded-r-xl fButton' id="business" contentEditable onBlur={onContentBlur}
                            dangerouslySetInnerHTML={sanitize(edit.business)} style={style.col ? ({background: style.col.color}) : {}}/>
                    </div>
                </div>
                <div className='outlet'>
                
                    <Outlet context={[edit,picture,changePic,onContentBlur,labelVisible,style]} />
                </div>
                
                <div className="flex justify-between items-center bg-[url('/images/finance/bgGradient.png')] h-[696px] px-[5.5%] fDivForm" id="section 3">
                        
                        <Image className='w-[517px]'   src={picture.three ? picture.three.src : '/images/finance/scrabble.png'} alt='Happy Child' imageId="three" id="fileThree" labelVisible={labelVisible} onChange={changePic} />
                        <MessageForm />
                    
                </div>
            </main>
            <Footer logoClass='fLogo' className=' fFooter' logo={edit.logo} text={edit.footText} textId='footText' tel={edit.tel} telId='tel' template={true} onBlur={onContentBlur} socialChange={socialChange} social={social} />
        </>
    )
};


export default Finance1