import React from "react";
import { useOutletContext } from "react-router-dom";

const  Personal = ()=> {

    const [edit,projStyle,picture] = useOutletContext();
    return (
        <>
            <div className='fAccounts py-9 font-fontRoboto flex justify-evenly items-center bg-orange' style={projStyle.col ? {background :projStyle.col.color} : {}}>
                <div className='fAccount rounded-full h-[218px] w-[218px] bg-white font-semibold text-center flex flex-col justify-center'>
                    <i className='fas fa-landmark fa-5x text-orange col mb-4'></i> open an account
                </div>
                <div className='fAccount rounded-full h-[218px] w-[218px] bg-white font-semibold text-center flex flex-col justify-center'>
                    <i className='fas fa-chart-line fa-5x text-orange col mb-4 '></i>Manage your money
                </div>
            </div>
                <div className='px-[5.5%] py-8 '>
                    <div className='flex justify-between fArticle fArticle-one'>
                        <div className='flex flex-col justify-center w-[43.4%]'>
                            <h2 id='personalHeader2' className="header font-bold text-[45px] leading-[62.74px] text-black">{edit.personalHeader2}</h2>
                            <p id='personalPara2'>{edit.personalPara2} </p>
                        </div>
                        <img src={picture.personalOne ? picture.personalOne.src : '/images/finance/Child.png'} alt='Happy Child' className="w-[517px]" />
                    </div>
                    <div className='flex justify-between fArticle fArticle-two'>
                        <img src={picture.personalTwo ? picture.personalTwo.src : '/images/finance/House.png'} className=' w-[517px] '/>
                        <div className='flex flex-col justify-center w-[43.4%]'>
                            <h2 id="personalHeader3" className="header font-bold text-[45px] leading-[62.74px] text-black">{edit.personalHeader3}</h2>
                            <p id='personalPara3'>{edit.personalPara3} </p>
                        </div>
                    </div>
                </div>
        </>
    )
};


export default Personal