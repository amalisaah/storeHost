import React from "react";
import { useOutletContext } from "react-router-dom";
import Paragraph from "./Component/Paragraph";
import Image from "../../../Home/Components/Image";


const  Business = ()=> {

    const [edit,picture,changePic,onContentBlur,labelVisible,style] = useOutletContext();
    return (
        <>
            <div className='h-[286px] font-fontRoboto flex justify-evenly items-center bg-orange fAccounts' id="section 1" style={style.col ? {background :style.col.color} : {}}>
                <div className='rounded-full h-[218px] w-[218px] bg-white font-medium font-fontRoboto text-center flex flex-col justify-center fAccount'>
                    <i className='fas fa-handshake fa-5x text-orange  mb-4 ' style={style.col}></i>Request a  loan
                </div>
                <div className='rounded-full h-[218px] w-[218px] bg-white font-medium text-center flex flex-col justify-center fAccount'>
                    <i className='fas fa-landmark fa-5x text-orange  mb-4' style={style.col}></i> Open an investment account
                </div>
                <div className='rounded-full h-[218px] w-[218px] bg-white font-medium text-center flex flex-col justify-center fAccount'>
                    <i className='fas fa-chart-line fa-5x text-orange  mb-4 ' style={style.col}></i>Manage your money
                </div>
            </div>
            <div className='px-[5.5%] py-8 ' id="section 2">
                <div className='flex justify-between fArticle-one section'>
                    <Paragraph style={style} headerId='businessHeader2' header={edit.businessHeader2} paraId='businessPara2' para={edit.businessPara2} onBlur={onContentBlur} />
                    <Image className='w-[517px]'   src={picture.businessOne ? picture.businessOne.src : '/images/finance/Office.png'} alt='Office' imageId="businessOne" id="fileOneB" labelVisible={labelVisible} onChange={changePic} />
                </div>

                <div className='flex justify-between fArticle-two section'>
                    <Image className='w-[517px]'   src={picture.businessTwo ? picture.businessTwo.src : '/images/finance/Pepper.png'} alt='Pepper' imageId="businessTwo" id="fileTwoB" labelVisible={labelVisible} onChange={changePic} />
                    <Paragraph style={style} headerId='businessHeader3' header={edit.businessHeader3} paraId='businessPara3' para={edit.businessPara3} onBlur={onContentBlur} />
                </div>
            </div> 
            
        </>
    )
};


export default Business