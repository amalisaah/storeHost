import React, { useContext, useEffect } from "react";
import { Link,useLocation,useOutletContext } from "react-router-dom";
import NavItem from "../../../../Components/NavItem";
import Header from "../../Components/Header";
import Button from "../../../../Components/Button";
import { data } from "./data";
import Footer from "../../Components/Footer";
import Pages from "../../Components/Pages";
import Components from "../../Components/Components";
import Sections from "../../Components/Sections";
import Image from "../../../Home/Components/Image";




const  Templates3 = (props)=> {  

    /*Controls editable states*/
    const [edit,setEdit,editRef,labelVisible,pagesVisible,componentVisible,style,changeStyle,colorVisible,colorVisibility,sectionsVisible,onContentBlur,picture,handlePicChange,mobile,socialChange,social] = useOutletContext() ; ;
    
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

    

    /*default nav values*/
    const navs=['Article','Shop','About']

    /*Sections*/
    const arr=['section 1','section 2','section 3','footer']

    return (
        <>
        {editRef.current && <>
            
            <Header logo={edit.logo} logoClass='text-lnkColorB col' template={template} onBlur={changeValue} style={style}  >

                <div className=''>
                    {navs.map((nav,index)=><NavItem style={style} value={edit['nav'+index] ? edit['nav'+index] :nav} className='text-fontRoboto text-lnkColorB text-xl font-normal ' onBlur={changeValue}  suppressContentEditableWarning contentEditable={template} id={'nav'+index} key={index} /> )}
                </div>

            </Header>

            {pagesVisible ? <Pages pages={['Home']} /> : null}
            {componentVisible ? <Components style={style} changeStyle={changeStyle} colorVisible={colorVisible} colorVisibility={colorVisibility} /> : null}
            {sectionsVisible ? <Sections sections={arr}  /> : null}

            <main className='px-[5.5%] bg-bgColorb pt-8 disabled'>
                
                <div className='flex mb-12' id="section 1">
                    <div className='mr-[2.7%] flex items-center w-[58.7%] '>
                        <h2 className=" font-bold text-2xl leading-[37.5px] text-black header" id='topLeft' suppressContentEditableWarning  contentEditable={template} onBlur={changeValue} style={style.header} > {edit.topLeft} </h2></div>
                    <div className='w-[40%]'>
                    <Image src={picture.one ? picture.one.src : "/images/Blog/Blog 3/image2.png"} alt='Happy Child' imageId="one" id="fileOne" labelVisible={labelVisible} onChange={changePic} />
                    </div>
                </div>
                
                <div className='flex mb-12' id="section 2">
                    <div className='mr-[2.7%]  w-[58.7%] font-fontRoboto font-normal'>
                        <p className="  text-base leading-[18.5px] mb-8 " id="para1" suppressContentEditableWarning contentEditable={template} onBlur={changeValue}>{edit.para1}</p>

                        <p className="  text-base leading-[18.5px] mb-8 " id="para2" suppressContentEditableWarning contentEditable={template} onBlur={changeValue}> {edit.para2} </p>

                        <div className=''>
                            <h2 className=" col font-bold text-2xl leading-[37.5px]" id="head2" suppressContentEditableWarning contentEditable={template} onBlur={changeValue} style={style.header} > {edit.head2} </h2>
                            
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
                <div className='w-full' id="section 3">
                    <Image className='w-full' src={picture.two ? picture.two.src : '/images/Blog/Blog 3/image3.png'} alt='Happy Child' imageId="two" id="fileTwo" labelVisible={labelVisible} onChange={changePic} />
                </div>
                <div className='py-8' id="para4" suppressContentEditableWarning contentEditable={template} onBlur={changeValue}>
                     {edit.para4}

                </div>
            </main>

            <Footer logoClass='fLogo' className=' fFooter' logo={edit.logo} text={edit.footText} textId='footText' tel={edit.tel} telId='tel' template={true} onBlur={changeValue} socialChange={socialChange} social={social} >
                
            </Footer>
        </>}
        
        </>
    )
};


export default Templates3