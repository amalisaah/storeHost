import React, { useContext } from "react";
import './Dashboard.css';
import ProfilePic from "../../../Components/ProfilePic";
import pic from "../../../assets/images/Ellipse 15.png";
import { LoginContext } from "../../../Context/LoginContext";
import Input from "../../../Components/Input";



const  Dashboard = ()=> {

    const views = ['Sites Created','Views','Orders','Earnings'];
    const table = [1,2,3,4,5,6,]


    return (
        <>
            <div className="flex justify-around">
                {views.map((view,index)=>
                    <div className='w-[274px] border-solid border-2 border-darkBlue h-[125px] px-5 py-2 shadow-1 text-center' key={index}>
                        <h2 className="font-fontPoppins text-2xl font-semibold mb-2">{view}</h2>
                        <div className='h-[1px] bg-fontGrayW'></div>
                        <div className='font-fontRoboto text-2xl font-normal pt-2'>GHC 240</div>
                        <div className='flex justify-between text-sm mt-2'>
                            <div className='text-fontGrayW '>From last period</div>
                            <div className='text-[#18BB14]'>12.56%</div>
                        </div>
                    </div>
                )}
            </div>
            <div className='w-full font-fontRoboto py-8 px-4'>
                <h2 className="font-semibold text-3xl mb-4">Vendors</h2>
                <table className="w-full">
                    <thead>
                        <tr className="w-full font-fontRoboto font-semibold text-2xl">
                            <th>Vendor</th>
                            <th>ID</th>
                            <th>items</th>
                            <th>Commision</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table.map((item,index)=>
                            <tr key={index}>
                                <td>James Cottage</td>
                                <td>ID</td>
                                <td>items</td>
                                <td>Commision</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            
        </>
    )
};


export default Dashboard