import React from "react";
import { useOutletContext } from "react-router-dom";

const  Business = (props)=> {

    const [edit,projStyle] = useOutletContext();

    return (
        <>
            <div className='fAccounts h-[286px] font-fontRoboto flex justify-evenly items-center bg-orange' style={projStyle.col ? {background :projStyle.col.color} : {}}>
                    <div className='fAccount rounded-full h-[218px] w-[218px] bg-white font-semibold font-fontRoboto text-center flex flex-col justify-center'>
                        <i className='fas fa-handshake fa-5x text-orange col mb-4 '></i>Request a  loan
                    </div>
                    <div className='fAccount rounded-full h-[218px] w-[218px] bg-white font-semibold text-center flex flex-col justify-center'>
                        <i className='fas fa-landmark fa-5x text-orange col mb-4'></i> open an account
                    </div>
                    <div className='fAccount rounded-full h-[218px] w-[218px] bg-white font-semibold text-center flex flex-col justify-center'>
                        <i className='fas fa-chart-line fa-5x text-orange col mb-4 '></i>Manage your money
                    </div>
                </div>
                <div className='px-[5.5%] py-8'>
                    <div className='fArticle fArticle-one flex justify-between'>
                        <div className=' flex flex-col justify-center w-[43.4%]'>
                            <h2 id='businessHeader2'className="header font-bold text-[45px] leading-[62.74px] text-black">{edit.businessHeader2}</h2>
                            <p id='businessPara2'>{edit.businessPara2} </p>
                        </div>
                        <img src='/images/finance/Office.png' alt='Happy Child' className="w-[517px]" />
                    </div>
                    <div className='fArticle fArticle-two flex justify-between'>
                        <img src='/images/finance/Pepper.png' alt='Happy Child' className=' w-[517px] '/>
                        <div className='flex flex-col justify-center w-[43.4%]'>
                            <h2 id="businessHeader3" className="header font-bold text-[45px] leading-[62.74px] text-black">{edit.businessHeader3}</h2>
                            <p id='businessPara3'>{edit.businessPara3} </p>
                        </div>
                    </div>
                </div>
        </>
    )
};


export default Business