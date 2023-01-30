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


const  Templates1 = ()=> {

    /*Controls editable states*/
    const [edit,setEdit,editRef,labelVisible,pagesVisible,componentVisible,style,changeStyle,colorVisible,colorVisibility,sectionsVisible,onContentBlur,picture,handlePicChange,mobile] = useOutletContext() ; ;
    
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

    return (
        <>
            <Header logo={edit.logo} logoClass='text-orange col' template={template} onBlur={changeValue} style={style} searchClass='col text-orange fSearch'  >

                <div className='flex items-center'>
                    <div className=''>
                        {navs.map((nav,index)=><NavItem style={style} value={edit['nav'+index] ? edit['nav'+index] :nav} className='text-fontRoboto text-orange text-xl font-normal ' onBlur={changeValue}  suppressContentEditableWarning contentEditable={template} id={'nav'+index} key={index} /> )}
                    </div>
                    <NavItem value='Log in' className='text-fontRoboto text-orange text-xl font-normal mr-[39px] ml-20' link='/authentication' />
                    <Button value='Sign up' className='h-10 w-36 bg-orange' link='#' style={style.col ?{backgroundColor:style.col.color}: {}} />
                </div>

            </Header>
            <main className=''>
                <section className="px-[5%]">
                    <div className='h-[475px] py-8 flex justify-between items-center'>
                        <div className='w-[51.7%]'>
                            <h2 className="font-fontRoboto font-bold text-4xl">The Eminence in Shadow (Kage no Jitsuryokusha ni Naritakute) Chapter 47: Release Date, Raw Scans, Spoilers, Read Online</h2>
                        </div>
                        <div className='w-[34.5%]'>
                            <Image src={picture.one ? picture.one.src : "/images/Blog/Blog 1/image4.png"} alt='Happy Child' imageId="one" id="fileOne" labelVisible={labelVisible} onChange={changePic} />

                        </div>
                    </div>
                    <div className='w-full flex mb-10'>
                        <PictureCard className=' bg-orange' >
                        <Image src={picture.one ? picture.one.src : "/images/Blog/Blog 1/image1.png"} alt='Happy Child' className='my-4 mx-auto' imageId="one" id="fileOne" labelVisible={labelVisible} onChange={changePic} />
                        </PictureCard>

                        <PictureCard className='bg-[#DAA8F2] text-black' >
                        <Image src={picture.one ? picture.one.src : "/images/Blog/Blog 1/image2.png"} alt='Happy Child' className='my-4 mx-auto' imageId="one" id="fileOne" labelVisible={labelVisible} onChange={changePic} />
                        </PictureCard>

                        <PictureCard className='bg-[#F0B797] text-black'  >
                        <Image src={picture.one ? picture.one.src : "/images/Blog/Blog 1/image3.png"} alt='Happy Child' className='my-4 mx-auto' imageId="one" id="fileOne" labelVisible={labelVisible} onChange={changePic} />
                        </PictureCard>
                        
                        
                    </div>
                    
                    <section>
                        <h2 className=' font-fontRoboto font-bold text-[32px]' >Select Items</h2>
                        <ZigZag >
                            <Picture src={picture.one ? picture.one.src : "/images/Blog/Blog 1/image5.png"} alt='Happy Child'className='w-[22%]' text='Lorem ipsum dolor sit amet.' imageId="one" id="fileOne" labelVisible={labelVisible} onChange={changePic} />

                            <Picture src={picture.one ? picture.one.src : "/images/Blog/Blog 1/image6.png"} alt='Happy Child' className='w-[22%] self-end' text='Lorem ipsum dolor sit amet.' imageId="one" id="fileOne" labelVisible={labelVisible} onChange={changePic}  />

                            <Picture src={picture.one ? picture.one.src : "/images/Blog/Blog 1/image7.png"} alt='Happy Child' className='w-[22%]' text='Lorem ipsum dolor sit amet.' imageId="one" id="fileOne" labelVisible={labelVisible} onChange={changePic} />

                            <Picture src={picture.one ? picture.one.src : "/images/Blog/Blog 1/image8.png"} alt='Happy Child' className='w-[22%] self-end' text='Lorem ipsum dolor sit amet.' imageId="one" id="fileOne" labelVisible={labelVisible} onChange={changePic}  />
                        </ZigZag>
                    </section>
                    
                </section>
                <section className="h-[855px] pt-[120px] bg-[#f6f6f6]" >
                    <span className="font-fontRoboto text-2xl">Join our community</span>
                    <div className='flex my-[57px]'>
                        <div className='w-1/2 py-[54px] px-[88px] h-[443px] flex flex-col justify-evenly bg-[#F0B797]'>
                            <h2 className="font-fontRoboto font-bold text-5xl text-black">Join us or something</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit amet, consectetur adipiscing elit.</p>
                            <Button value="Register" className='w-40 h-10 bg-black'/>
                        </div>
                        <div className='w-1/2 py-[54px] px-[88px] h-[443px] flex flex-col justify-evenly bg-[#DAA8F2]'>
                            <h2 className="font-fontRoboto font-bold text-5xl text-black">Join us or something</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit amet, consectetur adipiscing elit.</p>
                            <Button value="Join us" className='w-40 h-10 bg-black'/>
                        </div>
                    </div>
                </section>
                <section className="bg-[#2f2f2f] py-[42px] px-20 text-white">
                    <ZigZag >
                    <Picture src={picture.one ? picture.one.src : "/images/Blog/Blog 1/image9.png"} alt='Happy Child' text='Lorem ipsum dolor sit amet.' className='w-[26%]'  imageId="one" id="fileOne" labelVisible={labelVisible} onChange={changePic} />

                    <Picture src={picture.one ? picture.one.src : "/images/Blog/Blog 1/image10.png"} alt='Happy Child' text='Lorem ipsum dolor sit amet.' className='w-[28%]' imageId="one" id="fileOne" labelVisible={labelVisible} onChange={changePic} />

                    <Picture src={picture.one ? picture.one.src : "/images/Blog/Blog 1/image11.png"} alt='Happy Child' text='Lorem ipsum dolor sit amet.' className='w-[25%]' imageId="one" id="fileOne" labelVisible={labelVisible} onChange={changePic} />
                    </ZigZag>

                    <ZigZag >
                            <Picture src={picture.one ? picture.one.src : "/images/Blog/Blog 1/image12.png"} alt='Happy Child'className='w-[22%]' text='Lorem ipsum dolor sit amet.' imageId="one" id="fileOne" labelVisible={labelVisible} onChange={changePic} />

                            <Picture src={picture.one ? picture.one.src : "/images/Blog/Blog 1/image13.png"} alt='Happy Child' className='w-[22%] self-end' text='Lorem ipsum dolor sit amet.' imageId="one" id="fileOne" labelVisible={labelVisible} onChange={changePic}  />

                            <Picture src={picture.one ? picture.one.src : "/images/Blog/Blog 1/image14.png"} alt='Happy Child' className='w-[22%]' text='Lorem ipsum dolor sit amet.' imageId="one" id="fileOne" labelVisible={labelVisible} onChange={changePic} />

                            <Picture src={picture.one ? picture.one.src : "/images/Blog/Blog 1/image15.png"} alt='Happy Child' className='w-[22%] self-end' text='Lorem ipsum dolor sit amet.' imageId="one" id="fileOne" labelVisible={labelVisible} onChange={changePic}  />
                    </ZigZag>

                    <ZigZag >
                            <Picture src={picture.one ? picture.one.src : "/images/Blog/Blog 1/image16.png"} alt='Happy Child'className='w-[22%]' text='Lorem ipsum dolor sit amet.' imageId="one" id="fileOne" labelVisible={labelVisible} onChange={changePic} />

                            <Picture src={picture.one ? picture.one.src : "/images/Blog/Blog 1/image17.png"} alt='Happy Child' className='w-[22%] self-end' text='Lorem ipsum dolor sit amet.' imageId="one" id="fileOne" labelVisible={labelVisible} onChange={changePic}  />

                            <Picture src={picture.one ? picture.one.src : "/images/Blog/Blog 1/image18.png"} alt='Happy Child' className='w-[22%]' text='Lorem ipsum dolor sit amet.' imageId="one" id="fileOne" labelVisible={labelVisible} onChange={changePic} />

                            <Picture src={picture.one ? picture.one.src : "/images/Blog/Blog 1/image19.png"} alt='Happy Child' className='w-[22%] self-end' text='Lorem ipsum dolor sit amet.' imageId="one" id="fileOne" labelVisible={labelVisible} onChange={changePic}  />
                    </ZigZag>

                   
                </section>
            </main>
            <Footer   logo={edit.logo} text={edit.footText} textId='footText' socialClass='hidden' teleClass='hidden' customerClass='hidden' template={true} onBlur={onContentBlur} />
        </>
    )
};


export default Templates1