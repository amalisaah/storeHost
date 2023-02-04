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
import PictureCard from "../Components/PictureCard";
import ZigZag from "../Components/ZigZag";
import Picture from "../Components/Picture";
import { sanitize } from "../../../../utils/sanitizeUtils";



const  Templates1 = ()=> {

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

    

    /*default nav values*/
    const navs=['Article','News','About Us']

    const arr=['intro','items','community','section 4','footer']

    return (
        <>
            <Header logo={edit.logo} logoClass='text-orange col' template={template} onBlur={changeValue} style={style} searchClass='col text-orange fSearch'  >

                <div className='flex items-center'>
                    <div className=''>
                        {navs.map((nav,index)=><NavItem style={style} value={edit['nav'+index] ? edit['nav'+index] :nav} className='text-fontRoboto text-orange text-xl font-normal ' onBlur={changeValue}  suppressContentEditableWarning contentEditable={template} id={'nav'+index} key={index} /> )}
                    </div>
                    <NavItem value='Log in' className='text-fontRoboto text-orange text-xl font-normal mr-[20px] ml-20' link='/authentication' />
                    <Button value='Sign up' className='h-10 w-36 bg-orange' link='#' style={style.col ?{backgroundColor:style.col.color}: {}} />
                </div>

            </Header>

            {pagesVisible ? <Pages pages={['Home']} /> : null}
            {componentVisible ? <Components style={style} changeStyle={changeStyle} colorVisible={colorVisible} colorVisibility={colorVisibility} /> : null}
            {sectionsVisible ? <Sections sections={arr}  /> : null}

            <main className=''>
                <section className="px-[5%]" id='intro'>
                    <div className='h-[475px] py-8 flex justify-between items-center'>
                        <div className='w-[51.7%]'>
                            <h2 className="font-fontRoboto font-bold text-4xl" id='header1' contentEditable onBlur={onContentBlur} style={style.header}
                            dangerouslySetInnerHTML={sanitize(edit.header1)}/>
                        </div>
                        <div className='w-[34.5%]'>
                            <Image src={picture.four ? picture.four.src : "/images/Blog/Blog 1/image4.png"} alt='picture' imageId="four" id="fileFour" labelVisible={labelVisible} onChange={changePic} />

                        </div>
                    </div>
                    <div className='w-full flex mb-10'>
                        <PictureCard className=' bg-orange' template={template} onBlur={onContentBlur} titleId='title1' leftId='left1' rightId='right1' descId='description1' title={edit.title1} left={edit.left1} right={edit.right1} description={edit.description1}  >
                            <Image src={picture.one ? picture.one.src : "/images/Blog/Blog 1/image1.png"} alt='picture' className='my-4 mx-auto' imageId="one" id="fileOne" labelVisible={labelVisible} onChange={changePic} />
                        </PictureCard>

                        <PictureCard className='bg-[#DAA8F2] text-black' template={template} onBlur={onContentBlur} titleId='title2' leftId='left2' rightId='right2' descId='description2' title={edit.title2} left={edit.left2} right={edit.right2} description={edit.description2}  >
                            <Image src={picture.two ? picture.two.src : "/images/Blog/Blog 1/image2.png"} alt='picture' className='my-4 mx-auto' imageId="two" id="fileTwo" labelVisible={labelVisible} onChange={changePic} />
                        </PictureCard>

                        <PictureCard className='bg-[#F0B797] text-black'  template={template} onBlur={onContentBlur} titleId='title3' leftId='left3' rightId='right3' descId='description3' title={edit.title3} left={edit.left3} right={edit.right3} description={edit.description3}  >
                            <Image src={picture.three ? picture.three.src : "/images/Blog/Blog 1/image3.png"} alt='picture' className='my-4 mx-auto' imageId="three" id="fileThree" labelVisible={labelVisible} onChange={changePic} />
                        </PictureCard>
                        
                        
                    </div>
                    
                    <section id='items'>
                        <h2 className=' font-fontRoboto font-bold text-[32px]' >Select Items</h2>
                        <ZigZag >
                            <Picture spanId='picText1' src={picture.five ? picture.five.src : "/images/Blog/Blog 1/image5.png"} alt='picture' className='w-[22%]' text={edit.picText1} imageId="five" id="fileFive" labelVisible={labelVisible} onChange={changePic}  template={template} onBlur={onContentBlur}  />

                            <Picture spanId='picText2' src={picture.six ? picture.six.src : "/images/Blog/Blog 1/image6.png"} alt='picture' className='w-[22%] self-end' text={edit.picText2} imageId="six" id="fileSix" labelVisible={labelVisible} onChange={changePic} template={template} onBlur={onContentBlur}  />

                            <Picture spanId='picText3' src={picture.seven ? picture.seven.src : "/images/Blog/Blog 1/image7.png"} alt='picture' className='w-[22%]' text={edit.picText3} imageId="seven" id="fileSeven" labelVisible={labelVisible} onChange={changePic} template={template} onBlur={onContentBlur}  />

                            <Picture spanId='picText4' src={picture.eight ? picture.eight.src : "/images/Blog/Blog 1/image8.png"} alt='picture' className='w-[22%] self-end' text={edit.picText4} imageId="eight" id="fileEight" labelVisible={labelVisible} onChange={changePic}  template={template} onBlur={onContentBlur}  />
                        </ZigZag>
                    </section>
                    
                </section>
                <section className="h-[855px] pt-[120px] bg-[#f6f6f6]" id='community' >
                    <span className="font-fontRoboto text-2xl" contentEditable onBlur={onContentBlur} style={style.header}
                           id='header2' dangerouslySetInnerHTML={sanitize(edit.header2)}/>
                    <div className='flex my-[57px]'>
                        <div className='w-1/2 py-[54px] px-[88px] h-[443px] flex flex-col justify-evenly bg-[#F0B797]'>
                            <h2 id='header3' className="font-fontRoboto font-bold text-5xl text-black" contentEditable onBlur={onContentBlur} 
                            dangerouslySetInnerHTML={sanitize(edit.header3)}/>

                            <p id='para1' contentEditable onBlur={onContentBlur} 
                            dangerouslySetInnerHTML={sanitize(edit.para1)}/>
                            <Button value="Register" className='w-40 h-10 bg-black'/>
                        </div>
                        <div className='w-1/2 py-[54px] px-[88px] h-[443px] flex flex-col justify-evenly bg-[#DAA8F2]'>
                            <h2 id='header4' className="font-fontRoboto font-bold text-5xl text-black" contentEditable onBlur={onContentBlur} 
                            dangerouslySetInnerHTML={sanitize(edit.header4)}/>

                            <p id='para2' contentEditable onBlur={onContentBlur} 
                            dangerouslySetInnerHTML={sanitize(edit.para2)}/>
                            <Button value="Join us" className='w-40 h-10 bg-black'/>
                        </div>
                    </div>
                </section>
                <section className="bg-[#2f2f2f] py-[42px] px-20 text-white" id='section 4'>
                    <ZigZag >
                        <Picture spanId='picText5' src={picture.nine ? picture.nine.src : "/images/Blog/Blog 1/image9.png"} alt='picture' text={edit.picText5} className='w-[26%]'  imageId="nine" id="fileNine" labelVisible={labelVisible} onChange={changePic}  template={template} onBlur={onContentBlur} />

                        <Picture spanId='picText6' src={picture.ten ? picture.ten.src : "/images/Blog/Blog 1/image10.png"} alt='picture' text={edit.picText6} className='w-[28%]' imageId="ten" id="fileTen" labelVisible={labelVisible} onChange={changePic} template={template} onBlur={onContentBlur} />

                        <Picture spanId='picText7' src={picture.eleven ? picture.eleven.src : "/images/Blog/Blog 1/image11.png"} alt='picture' text={edit.picText7} className='w-[25%]' imageId="eleven" id="fileEleven" labelVisible={labelVisible} onChange={changePic} template={template} onBlur={onContentBlur} />
                    </ZigZag>

                    <ZigZag >
                            <Picture spanId='picText8' src={picture.twelve ? picture.twelve.src : "/images/Blog/Blog 1/image12.png"} alt='picture'className='w-[22%]' text={edit.picText8} imageId="twelve" id="fileTwelve" labelVisible={labelVisible} onChange={changePic} template={template} onBlur={onContentBlur} />

                            <Picture spanId='picText9' src={picture.thirteen ? picture.thirteen.src : "/images/Blog/Blog 1/image13.png"} alt='picture' className='w-[22%] self-end' text={edit.picText9} imageId="thirteen" id="fileThirteen" labelVisible={labelVisible} onChange={changePic} template={template} onBlur={onContentBlur} />

                            <Picture spanId='picText10' src={picture.fourteen ? picture.fourteen.src : "/images/Blog/Blog 1/image14.png"} alt='picture' className='w-[22%]' text={edit.picText10} imageId="fourteen" id="fileFourteen" labelVisible={labelVisible} onChange={changePic}template={template} onBlur={onContentBlur} />

                            <Picture spanId='picText11' src={picture.fifteen ? picture.fifteen.src : "/images/Blog/Blog 1/image15.png"} alt='picture' className='w-[22%] self-end' text={edit.picText11} imageId="fifteen" id="fileFifteen" labelVisible={labelVisible} onChange={changePic} template={template} onBlur={onContentBlur} />
                    </ZigZag>

                    <ZigZag >
                            <Picture spanId='picText12' src={picture.sixteen ? picture.sixteen.src : "/images/Blog/Blog 1/image16.png"} alt='picture'  className='w-[22%]' text={edit.picText12} imageId="sixteen" id="fileSixteen" labelVisible={labelVisible} onChange={changePic} template={template} onBlur={onContentBlur} />

                            <Picture spanId='picText13' src={picture.seventeen ? picture.seventeen.src : "/images/Blog/Blog 1/image17.png"} alt='picture' className='w-[22%] self-end' text={edit.picText13} imageId="seventeen" id="fileSeventeen" labelVisible={labelVisible} onChange={changePic} template={template} onBlur={onContentBlur}  />

                            <Picture spanId='picText14' src={picture.eighteen ? picture.eighteen.src : "/images/Blog/Blog 1/image18.png"} alt='picture' className='w-[22%]' text={edit.picText14} imageId="eighteen" id="fileEighteen" labelVisible={labelVisible} onChange={changePic} template={template} onBlur={onContentBlur} />

                            <Picture spanId='picText15' src={picture.nineteen ? picture.nineteen.src : "/images/Blog/Blog 1/image19.png"} alt='picture' className='w-[22%] self-end' text={edit.picText15} imageId="nineteen" id="fileNineteen" labelVisible={labelVisible} onChange={changePic} template={template} onBlur={onContentBlur} />
                    </ZigZag>

                   
                </section>
            </main>
            <Footer    text={edit.footText} textId='footText' socialClass='hidden' teleClass='hidden' customerClass='hidden' template={true} onBlur={onContentBlur} />
        </>
    )
};


export default Templates1