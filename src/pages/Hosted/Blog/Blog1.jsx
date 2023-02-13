import React, { useEffect } from "react";
import axios from "axios";
import NavItem from "../../../Components/NavItem";
import Header from "../../Templates/Components/Header";
import Button from "../../../Components/Button";
import Footer from "../../Templates/Components/Footer";
import {createSyle} from "../../../utils/styleUtils";
import PictureCard from "../../Templates/Blog/Components/PictureCard";
import ZigZag from "../../Templates/Blog/Components/ZigZag";
import Picture from "../../Templates/Blog/Components/Picture";


const  Blog1 = (props)=> {

     /*Controls editable states*/
     const [edit] = [props.data];
     let template= false;
 
     let projStyle = edit.projStyle ? edit.projStyle :{};
     let picture = edit.picture ? edit.picture: {};
     
    useEffect(()=>{
    
        const styles = createSyle(projStyle)
        // console.log(styles)
        const head=document.head;
        const style = document.createElement('style');
        style.innerHTML = styles;
        head.appendChild(style)
        
        return ()=>{
            head.removeChild(style)
        }
    },[])
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

    

    /*default nav values*/
    const navs=['Article','News','About Us']
    

    return (
        <>
            <Header logo={edit.logo} logoClass='text-orange col' template={false} searchClass='col text-orange fSearch'  >

                <div className='flex items-center'>
                    <div className=''>
                        {navs.map((nav,index)=><NavItem  value={edit['nav'+index] ? edit['nav'+index] :nav} className='text-fontRoboto text-orange text-xl font-normal '    contentEditable={template} id={'nav'+index} key={index} /> )}
                    </div>
                    <NavItem value='Log in' className='text-fontRoboto text-orange text-xl font-normal mr-[39px] ml-20' link='' />
                    <Button value='Sign up' className='h-10 w-36 bg-orange' link='#' style={projStyle.col ?{backgroundColor:projStyle.col.color}: {}} />
                </div>

            </Header>
            <main className=''>
                <section className="px-[5%]">
                    <div className='h-[475px] py-8 flex justify-between items-center'>
                        <div className='w-[51.7%]'>
                            <h2 className="font-fontRoboto font-bold text-4xl">{edit.header1}</h2>
                        </div>
                        <div className='w-[34.5%]'>
                            <img src={picture.four ? picture.four.src : "/images/Blog/Blog 1/image4.png"} alt='picture'   />

                        </div>
                    </div>
                    <div className='w-full flex mb-10'>
                        <PictureCard className=' bg-orange' title={edit.title1} left={edit.left1} right={edit.right1} description={edit.description1} >
                            <div className='w-[88%] mx-auto'>
                               <img src={picture.one ? picture.one.src : "/images/Blog/Blog 1/image1.png"} alt='picture' className='my-4 mx-auto w-full'  /> 
                            </div>
                        </PictureCard>

                        <PictureCard className='bg-[#DAA8F2] text-black' title={edit.title2} left={edit.left2} right={edit.right2} description={edit.description2} >
                            <div className='w-[88%] mx-auto'>
                               <img src={picture.two ? picture.two.src : "/images/Blog/Blog 1/image2.png"} alt='picture' className='my-4 mx-auto w-full'    /> 
                            </div>
                        </PictureCard>

                        <PictureCard className='bg-[#F0B797] text-black' title={edit.title3} left={edit.left3} right={edit.right3} description={edit.description3}  >
                            <div className='w-[88%] mx-auto'>
                               <img src={picture.three ? picture.three.src : "/images/Blog/Blog 1/image3.png"} alt='picture' className='my-4 mx-auto w-full'    /> 
                            </div>
                        </PictureCard>
                        
                        
                    </div>
                    
                    <section>
                        <h2 className=' font-fontRoboto font-bold text-[32px]' >Select Items</h2>
                        <ZigZag >
                            <Picture src={picture.five ? picture.five.src : "/images/Blog/Blog 1/image5.png"} alt='picture'className='w-[22%]' text={edit.picText1} imageId="five" id="fileFive"  />

                            <Picture src={picture.six ? picture.six.src : "/images/Blog/Blog 1/image6.png"}  alt='picture' className='w-[22%] self-end'  text={edit.picText2} imageId="six" id="fileSix"   />

                            <Picture src={picture.seven ? picture.seven.src : "/images/Blog/Blog 1/image7.png"} alt='picture' className='w-[22%]' text={edit.picText3} imageId="seven" id="fileSeven"  />

                            <Picture src={picture.eight ? picture.eight.src : "/images/Blog/Blog 1/image8.png"}  alt='picture' className='w-[22%] self-end' text={edit.picText4} imageId="eight" id="fileEight"   />
                        </ZigZag>
                    </section>
                    
                </section>
                <section className="h-[855px] pt-[120px] bg-[#f6f6f6]" >
                    <span className="font-fontRoboto text-2xl">{edit.header2}</span>
                    <div className='flex my-[57px]'>
                        <div className='w-1/2 py-[54px] px-[88px] h-[443px] flex flex-col justify-evenly bg-[#F0B797]'>
                            <h2 className="font-fontRoboto font-bold text-5xl text-black">{edit.header3}</h2>
                            <p>{edit.para1}.</p>
                            <Button value="Register" className='w-40 h-10 bg-black'/>
                        </div>
                        <div className='w-1/2 py-[54px] px-[88px] h-[443px] flex flex-col justify-evenly bg-[#DAA8F2]'>
                            <h2 className="font-fontRoboto font-bold text-5xl text-black">{edit.header4}</h2>
                            <p>{edit.para2}</p>
                            <Button value="Join us" className='w-40 h-10 bg-black'/>
                        </div>
                    </div>
                </section>
                <section className="bg-[#2f2f2f] py-[42px] px-20 text-white">
                    <ZigZag >
                        <Picture src={picture.nine ? picture.nine.src : "/images/Blog/Blog 1/image9.png"} alt='picture' text={edit.picText5} className='w-[26%]'  imageId="nine" id="fileNine"  />

                        <Picture src={picture.ten ? picture.ten.src : "/images/Blog/Blog 1/image10.png"} alt='picture' text={edit.picText6} className='w-[28%]' imageId="ten" id="fileTen"  />

                        <Picture src={picture.eleven ? picture.eleven.src : "/images/Blog/Blog 1/image11.png"} alt='picture' text={edit.picText7} className='w-[25%]' imageId="eleven" id="fileEleven"  />
                    </ZigZag>

                    <ZigZag >
                            <Picture src={picture.twelve ? picture.twelve.src : "/images/Blog/Blog 1/image12.png"}alt='picture'className='w-[22%]' text={edit.picText8} imageId="twelve" id="fileTwelve"  />

                            <Picture src={picture.thirteen ? picture.thirteen.src : "/images/Blog/Blog 1/image13.png"} alt='picture' className='w-[22%] self-end' text={edit.picText9} imageId="thirteen" id="fileThirteen"    />

                            <Picture src={picture.fourteen ? picture.fourteen.src : "/images/Blog/Blog 1/image14.png"} alt='picture' className='w-[22%]' text={edit.picText10} imageId="fourteen" id="fileFourteen" />

                            <Picture src={picture.fifteen ? picture.fifteen.src : "/images/Blog/Blog 1/image15.png"} alt='picture' className='w-[22%] self-end' text={edit.picText11} imageId="fifteen" id="fileFifteen"   />
                    </ZigZag>

                    <ZigZag >
                            <Picture src={picture.sixteen ? picture.sixteen.src : "/images/Blog/Blog 1/image16.png"} alt='picture'className='w-[22%]' text={edit.picText12} imageId="sixteen" id="fileSixteen"   />

                            <Picture src={picture.seventeen ? picture.seventeen.src : "/images/Blog/Blog 1/image17.png"} alt='picture' className='w-[22%] self-end' text={edit.picText13} imageId="seventeen" id="fileSeventeen"   />

                            <Picture src={picture.eighteen ? picture.eighteen.src : "/images/Blog/Blog 1/image18.png"} alt='picture' className='w-[22%]' text={edit.picText14} imageId="eighteen" id="fileEighteen"  />

                            <Picture src={picture.nineteen ? picture.nineteen.src : "/images/Blog/Blog 1/image19.png"} alt='picture' className='w-[22%] self-end' text={edit.picText15} imageId="nineteen" id="fileNineteen"   />
                    </ZigZag>

                   
                </section>
            </main>
            <Footer  text={edit.footText}  textId='footText' socialClass='hidden' teleClass='hidden' customerClass='hidden' template={false}  />
        </>
    )
};


export default Blog1