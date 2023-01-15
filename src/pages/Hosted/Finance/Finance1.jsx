import React, { useContext, useEffect } from "react";
import useState from "react-usestateref";
import { Link, NavLink, Outlet, useOutletContext } from "react-router-dom";
import Submit from "../../../Components/Submit";
import Input from "../../Authentication/Components/Input";
import Footer from "../../Templates/Blog/Components/Footer";
import Header from "../../../Components/Header";
import { projectNameContext } from "../../../Context/projectNameContext";


const  Finance1 = (props)=> {

    /*Controls editable states*/
    const [edit] = [props.data];
    // const [projectName,setProjectName] = useContext(projectNameContext)


    // /*  Set edit to data associated with projectName*/
    // useEffect(()=>{
    //     // let Name = sessionStorage.getItem('projectName');
    //     const Name=props.name;
    //     console.log(props.name);
    //     // setProjectName((prev)=>Name ? Name : prev)
    //     let Data = sessionStorage.getItem('projectData');
    //     Data = JSON.parse(Data);
    //     console.log(Data);
    //     // console.log(Name);
    //     console.log(Data[Name]);
    //     // console.log(projectNameRef.current);
    //     // console.log(Name,'errrhm');
    //     setEdit((prev)=> (Data && Name) ?  Data[Name] : prev);
    //     console.log(editRef.current)

    // },[])


    return (
        <>
            <Header logo={edit.logo} logoClass='text-orange font-bold font-fontRoboto text-[36px]' searchClass='text-orange'>
                <span className="tex-black text-xl font-fontRoboto">Login</span> | <span className="text-orange text-xl font-fontRoboto">Register</span>
            </Header>
            <main className='font-fontRoboto'>
                <div className="h-[556px] text-white font-fontRoboto flex flex-col justify-center bg-[url('/images/finance/background.png')]">
                    <div className='z-5 flex flex-col items-center justify-center mt-[120px]'>
                        <h2 id='header1' className="text-[40px] font-semibold font-fontRoboto text-center mb-5">{edit.header1}</h2>
                        <p className='text-inherit font-normal font-fontRoboto text-xl text-center w-[42%] mx-auto leading-[23px] ' id='para1'>{edit.para1} </p>
                    </div>
                
                    <div className='z-5 mt-[113px] flex justify-center text-[36px]'>
                        <NavLink to='./personal' style={({ isActive }) => 
                    (isActive ? {background: 'var(--bgOrange)', color:'white'} : {background: 'white', color:'var(--bgOrange)'})}><button className='w-[353px] h-[100px] font-fontRoboto rounded-l-xl bg-inherit text-inherit' id="btn1">Personal</button></NavLink>

                        <NavLink to='./business' style={({ isActive }) => 
                    (isActive ? {background: 'var(--bgOrange)', color:'white'} : {background: 'white', color:'var(--bgOrange)'})}><button className='w-[353px] h-[100px] font-fontRoboto rounded-l-xl bg-inherit text-inherit' id="btn1">Business</button></NavLink>
                        {/* <button className='bg-orange w-[353px] font-fontRoboto h-[100px] rounded-r-xl' id="btn2"><Link to='./business'>Business</Link></button> */}
                    </div>
                </div>
                <div className='outlet'>
                    <Outlet context={[edit]}  />
                </div>
                <div className="flex justify-between items-center bg-[url('/images/finance/bgGradient.png')] h-[696px] px-[5.5%]">
                    
                        <img src='/images/finance/scrabble.png' alt='motivation' className="w-[523px]"/>
                    
                    <form className="w-[42.36%]">
                        <h2 id="header4" className="font-ubuntu font-semibold text-xl mb-[17px]">Shoot us a message</h2>
                        <Input type='text' id='name' label="name" name="name" placeholder='type name here' onChange={()=>{}} />
                        <Input type='email' id='email' label="email" name="email" placeholder='example@storefront.com' onChange={()=>{}} />
                        <textarea className="w-full h-[226px] rounded-lg bg-white  shadow-1 mt-4 p-6 focus:border-solid focus:border-2 focus:outline-none border-darkBlue " name='message' placeholder=" Hello Storefront, I would like to ... " value={ ''} onChange={()=>{}} ></textarea>
                        <Submit value='Submit' className='text-white bg-black rounded-lg w-[148px]'/>
                    </form>
                </div>
            </main>
            <Footer logo={edit.logo} className='font-outfit' />
        </>
    )
};


export default Finance1