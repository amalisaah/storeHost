import React, { useContext } from "react";
import './Dashboard.css';




const  Dashboard = ({dashboard})=> {

    const heading = ['Sites Created','Views','Orders','Earnings'];
    const item = (dashboard && dashboard.summary) ? Object.keys(dashboard.summary) : [] ;
    const summary = dashboard && dashboard.summary;
    const table = (dashboard && dashboard.vendors) ? dashboard.vendors : [];
   
    return (
        <>
            <div className="flex justify-around">
                {heading.map((view,index)=>
                    <div className='w-[274px] border-solid border-2 border-darkBlue h-[125px] px-5 py-2 shadow-1 text-center' key={index}>
                        <h2 className="font-fontPoppins text-2xl font-semibold mb-2">{view}</h2>
                        <div className='h-[1px] bg-fontGrayW'></div>
                        <div className='font-fontRoboto text-2xl font-normal pt-2'>{summary ? summary[item[index]]: '-' }</div>
                        <div className='flex justify-between text-sm mt-2'>
                            {/* <div className='text-fontGrayW '>From last period</div>
                            <div className='text-[#18BB14]'>12.56%</div> */}
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
                                <td>{item.vendor}</td>
                                <td>{item.id} </td>
                                <td>{item.items}</td>
                                <td>{item.commision}</td>
                            </tr>
                        )}
                        
                    </tbody>
                </table>
            </div>
            
        </>
    )
};


export default Dashboard