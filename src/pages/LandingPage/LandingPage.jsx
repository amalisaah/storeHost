import React from "react";
import Header from "../../Components/Header";
import NavItem from "../../Components/NavItem";
import PicFrame from "../../Components/PicFrame";
import  team from '../../assets/images/Ellipse3.png';
import Button from "../../Components/Button";
import  laptop from '../../assets/images/laptop.png';
import  phone from '../../assets/images/phone.png';
import frame from '../../assets/images/Frame 10.png';
import webpage from '../../assets/images/webpage.png';
const  LandingPage = ()=> {

    const table=['Landing page','Eccomerce','Blogs','Portfolio','Hiring']

    return (
        <>
        <div className='page relative min-h-screen'>
            <Header className={'fixed'}>
                <NavItem value='Log in' className='mr-[39px]' link='/authentication' />
                <Button value='Register' className='h-10 w-36' link='/authentication/signup' />
            </Header>
            <div className='pt-28'>
                <div className='flex px-[100px]'>

                    <div className='w-1/2 ' >
                        <div className='font-fontPoppins font-black text-7xl leading-[110px] text-left '>More than just templates</div>

                        <div className='font-fontRoboto text-xl leading-6 text-left mt-9 pb-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</div>
                        <div className='flex justify-start'><Button value="Get Started" className='h-[58px] w-[190px] rounded-xl mt-8 ' /></div>        
                    </div>

                    <div className='w-1/2 relative'>
                        <img src={laptop} alt='laptop' className="w-full" />
                        <img src={phone} alt='phone' className="absolute top-[90px] right-[10px] h-1/2" />
                    </div> 
                </div>
                <div className='px-[100px]'>
                    <h2 className="font-semibold text-[40px] leading-15 text-left mb-8 ">Meet The Team</h2>
                    <div className='flex justify-between pb-12'>
                    <PicFrame src={team} alt='teamate 1' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti.' />
                    <PicFrame src={team} alt='teamate 1' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.' />
                    <PicFrame src={team} alt='teamate 1' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per.' />
                    </div>
                </div>

                <div className='bg-white '>
                    <div className='mb-10 justify-center flex items-center py-24'>
                        <div className='divide-y divide-solid divide-[#AAAAAA]'>
                            {
                                table.map((val,index)=>
                                    <div className='font-medium text-4xl text-left leading-[56px] py-8' key={index+1}>{val}</div>
                                )
                            }
                            
                        </div>

                        <div className='flex items-end pl-[9.1%] '>
                            <img src={frame} alt='frame' className="w-[100%] h-[629px] mr-5 "/>
                            <img src={webpage} alt='webpage'/>
                        </div>
                    </div>
                </div>
                <div className='py-[51px] px-[275px] text-center '>
                    <h2 className="font-fontPoppins text-[40px] leading-[72px] font-bold ">Lorem ipsum dolor sit amet</h2>
                    <p className="font-fontRoboto text-xl leading-9  "> 
                        consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                        Curabitur tempus urna at turpis condimentum lobortis. Class aptent taciti sociosqu ad litora 
                        torquent per conubia nostra.
                    </p>
                </div>
            </div>

        </div>
        </>
    )
};


export default LandingPage