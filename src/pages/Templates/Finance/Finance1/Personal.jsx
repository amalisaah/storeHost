import React from "react";
import { useOutletContext } from "react-router-dom";
import Paragraph from "./Component/Paragraph";
import Image from "../../../Home/Components/Image";


const  Personal = ()=> {

    const [edit,picture,changePic,onContentBlur,labelVisible] = useOutletContext();
    return (
        <>
            <div className='h-[286px] font-fontRoboto flex justify-evenly items-center bg-orange'>
                {/* <div className='rounded-full h-[218px] w-[218px] bg-white font-medium font-fontRoboto text-center flex flex-col justify-center'>
                    <i className='fas fa-handshake fa-5x text-orange  mb-4 '></i>Request a  loan
                </div> */}
                <div className='rounded-full h-[218px] w-[218px] bg-white font-medium text-center flex flex-col justify-center'>
                    <i className='fas fa-landmark fa-5x text-orange  mb-4'></i> open an account
                </div>
                <div className='rounded-full h-[218px] w-[218px] bg-white font-medium text-center flex flex-col justify-center'>
                    <i className='fas fa-chart-line fa-5x text-orange  mb-4 '></i>Manage your money
                </div>
            </div>
            <div className='px-[5.5%] py-8'>
                <div className='flex justify-between'>
                    <Paragraph headerId='personalHeader2' header={edit.personalHeader2} paraId='personalPara2' para={edit.personalPara2} onBlur={onContentBlur} />
                    <Image src={picture.personalOne ? picture.personalOne.src : '/images/finance/Child.png'} alt='Happy Child' imageId="personalOne" id="fileOne" labelVisible={labelVisible} onChange={changePic} />
                </div>

                <div className='flex justify-between'>
                    <Image src={picture.personalTwo ? picture.personalTwo.src : '/images/finance/House.png'} alt='Happy Child' imageId="personalTwo" id="fileTwo" labelVisible={labelVisible} onChange={changePic} />
                    <Paragraph headerId='personalHeader3' header={edit.personalHeader3} paraId='personalPara3' para={edit.personalPara3} onBlur={onContentBlur} />
                </div>
            </div> 
            
        </>
    )
};


export default Personal