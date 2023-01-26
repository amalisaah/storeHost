import React, { useContext, useEffect } from "react";
import useState from "react-usestateref";
import './Finance1.css';
import { Link, NavLink, Outlet } from "react-router-dom";
import Submit from "../../../Components/Submit";
import Input from "../../Authentication/Components/Input";
import Footer from "../../Templates/Components/Footer";
import Header from "../../Templates/Components/Header";
import { createSyle } from "../../../utils/styleUtils";


const  Finance1 = (props)=> {

    /*Controls editable states*/
    const [edit] = [props.data];
  
    let projStyle = edit.projStyle ? edit.projStyle :{};
    let picture = edit.picture ? edit.picture: {};
    useEffect(()=>{
       
        const styles = createSyle(projStyle)
        console.log(styles)
        const head=document.head;
        const style = document.createElement('style');
        style.innerHTML = styles;
        head.appendChild(style)
        console.log(head)
        
        return ()=>{
            head.removeChild(style)
        }
    },[])


    return (
        <> 
            <Header logo={edit.logo} className=' fHeader' logoClass='col text-orange font-bold font-fontRoboto text-[36px] fLogo' searchButtonClass='col text-orange fSearchButton' searchClass='fSearch'>
                <span className="tex-black text-xl font-fontRoboto">Login</span> | <span className="col text-orange text-xl font-fontRoboto">Register</span>
            </Header>
            <main className='font-fontRoboto fMain'>
                <div className="fHero h-[556px] text-white font-fontRoboto flex flex-col justify-center" style={{backgroundImage:picture.Hero ?`url(${picture.Hero.src}`: 'url(/images/finance/background.png)',backgroundRepeat: 'no-repeat',backgroundSize:
            'cover'}}>
                    <div className='z-5 flex flex-col items-center justify-center mt-[120px]'>
                        <h2 id='header1' className="header text-[40px] font-semibold leading-[48.8px] font-fontRoboto text-center mb-5">{edit.header1}</h2>
                        <p className='text-inherit font-normal font-fontRoboto text-xl text-center w-[42%] mx-auto leading-[23px] ' id='para1'>{edit.para1} </p>
                    </div>
                
                    <div className=' z-5 mt-[113px] flex justify-center text-[36px] w-full '>
                        <NavLink to='./personal' className='rounded-l-xl w-[27%] fButton' style={({ isActive }) => 
                    (isActive ? {background : projStyle.col ? ( projStyle.col.color) : 'var(--bgOrange)', color:'white'} : {background: 'white', color : projStyle.col ? ( projStyle.col.color) :'var(--bgOrange)'})}><button className=' w-full h-[100px] font-fontRoboto rounded-l-xl bg-inherit text-inherit ' id="btn1">Personal</button></NavLink>

                        <NavLink to='./business' className='rounded-r-xl w-[27%] fButton' style={({ isActive }) => 
                    (isActive ? {background: projStyle.col ? ( projStyle.col.color) :'var(--bgOrange)', color:'white'} : {background: 'white', color : projStyle.col ? ( projStyle.col.color) :'var(--bgOrange)'})}><button className=' w-full h-[100px] font-fontRoboto rounded-r-xl bg-inherit text-inherit' id="btn2">Business</button></NavLink>
                        {/* <button className='bg-orange w-[353px] font-fontRoboto h-[100px] rounded-r-xl' id="btn2"><Link to='./business'>Business</Link></button> */}
                    </div>
                </div>
                <div className='outlet'>
                    <Outlet context={[edit,projStyle,picture]}  />
                </div>
                <div className="fDivForm flex justify-between items-center bg-[url('/images/finance/bgGradient.png')] h-[696px] px-[5.5%]">
                    
                        <img src={picture.three ? picture.three.src : '/images/finance/scrabble.png'}  alt='motivation' className="w-[523px]"/>
                    
                    <form className="w-[42.36%]">
                        <h2 id="header4" className="font-ubuntu font-semibold text-xl mb-[17px] header">Shoot us a message</h2>
                        <Input type='text' id='name' label="name" name="name" placeholder='type name here' onChange={()=>{}} />
                        <Input type='email' id='email' label="email" name="email" placeholder='example@storefront.com' onChange={()=>{}} />
                        <textarea className="w-full h-[226px] rounded-lg bg-white  shadow-1 mt-4 p-6 focus:border-solid focus:border-2 focus:outline-none border-darkBlue " name='message' placeholder=" Hello Storefront, I would like to ... " value={ ''} onChange={()=>{}} ></textarea>
                        <Submit value='Submit' className='text-white bg-black rounded-lg w-[148px]'/>
                    </form>
                </div>
            </main>
            <Footer logo={edit.logo} text={edit.footText} textId='footText' tel={edit.tel} telId='tel' className=' fFooter' logoClass='fLogo' />
        </>
    )
};


export default Finance1