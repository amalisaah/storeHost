import React, { useCallback, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import DOMPurify from 'dompurify';
import Submit from "../../../../Components/Submit";
import Input from "../../../Authentication/Components/Input";
import Footer from "../../Blog/Components/Footer";
import Header from "../../Components/Header";
import { data } from "./data";

const  Finance1 = ()=> {

    /*Controls editable states*/
    const [edit,setEdit,editRef] = useOutletContext() ;

    let template= true;

    /*  Set edit to data if no existing changes available*/
    useEffect(()=>{
        // setEdit(()=> Object.keys(edit).length === 0 && data);
        setEdit(()=> data);
       
    },[])

    const onContentBlur = React.useCallback(e => {
        const id=e.currentTarget.id
        console.log(id)
        setEdit(prev=>({...prev,[id]:e.currentTarget.innerHTML}))
    })

    const sanitize = (data) => ({
        __html: DOMPurify.sanitize(data)
      })

    /////////////////////////////////
      /**Handles Picture Change */
    const [picture,setPicture] = useState({});
    var loadFile = function (event) {
        // var image = document.getElementById("output");
        // image.src = URL.createObjectURL(event.target.files[0]);
        var picture = event.target.files[0];
        var src     = URL.createObjectURL(picture);

  setPicture({
    picture: picture,
    src: src
  });
        
        console.log(picture.src)
      };

      function submit(){
        const data = new FormData() 
        data.append('file', picture)
        console.warn(picture);
        let url =  'https://storefront-dpqh.onrender.com/';
 
        axios.post(url, data, { // receive two parameter endpoint url ,form data 
        })
        .then(res => { // then print response status
            console.warn(res);
        })
 
    }

    return (
        <>
            <Header logo={edit.logo} logoClass='text-orange font-bold font-fontRoboto text-[36px]' searchClass='text-orange'>
                <span className="tex-black text-xl font-fontRoboto">Login</span> | <span className="text-orange text-xl font-fontRoboto">Register</span>
            </Header>
            <main className='font-fontRoboto'>
                <div className="h-[556px] text-white font-fontRoboto flex flex-col justify-center bg-[url('/images/finance/background.png')]">
                    <div className='z-5 flex flex-col items-center justify-center mt-[120px]'>
                        <h2 id='header1' contentEditable onBlur={onContentBlur}
                            dangerouslySetInnerHTML={sanitize(edit.header1)} className="text-[40px] font-semibold font-fontRoboto text-center mb-5" />
                        <p className='text-inherit font-normal font-fontRoboto text-xl text-center w-[42%] mx-auto leading-[23px] ' id='para1' contentEditable dangerouslySetInnerHTML={sanitize(edit.para1)} />
                    </div>
                
                    <div className='z-5 mt-[113px] flex justify-center text-[36px]'>
                        <button className='w-[353px] h-[100px] font-fontRoboto rounded-l-xl bg-white text-orange' id="personal" contentEditable onBlur={onContentBlur}
                            dangerouslySetInnerHTML={sanitize(edit.personal)}/>
                        <button className='bg-orange w-[353px] font-fontRoboto h-[100px] rounded-r-xl' id="business" contentEditable onBlur={onContentBlur}
                            dangerouslySetInnerHTML={sanitize(edit.business)}/>
                    </div>
                </div>
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
                        <div className='flex flex-col justify-center w-[43.4%]'>
                            <h2 id="header2" className="font-bold text-[45px] leading-[62.74px] text-black"contentEditable onBlur={onContentBlur}
                            dangerouslySetInnerHTML={sanitize(edit.header2)}/>
                            <p id='para2' contentEditable onBlur={onContentBlur}
                            dangerouslySetInnerHTML={sanitize(edit.para2)}/>
                        </div>
                        {/* //////////////////////// */}
                        <input id="file" type="file" onChange={loadFile}/>
                        <img src={picture.src || '/images/finance/Child.png'} alt='Happy Child' id="output" className="w-[517px]" />
                    </div>
                    <div className='flex justify-between'>
                        <img src='/images/finance/House.png' alt='Happy Child' className=' w-[517px] '/>
                        <div className='flex flex-col justify-center w-[43.4%]'>
                            <h2 id="header3" className="font-bold text-[45px] leading-[62.74px] text-black" contentEditable onBlur={onContentBlur}
                            dangerouslySetInnerHTML={sanitize(edit.header3)} />
                            <p id='para3'  contentEditable onBlur={onContentBlur}
                            dangerouslySetInnerHTML={sanitize(edit.para3)}/>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center bg-[url('/images/finance/bgGradient.png')] h-[696px] px-[5.5%]">
                    
                        <img src='/images/finance/scrabble.png' alt='motivation' className="w-[523px]"/>
                        {/* <img src='blob:http://127.0.0.1:5173/9d054545-facf-4ed7-b76a-80619f230246' alt='motivation' className="w-[523px]"/> */}
                    
                    <form className="w-[42.36%]">
                        <h2 id="header4" className="font-ubuntu font-semibold text-xl mb-[17px]">Shoot us a message</h2>
                        <Input type='text' id='name' label="name" name="name" placeholder='type name here' onChange={()=>{}} />
                        <Input type='email' id='email' label="email" name="email" placeholder='example@storefront.com' onChange={()=>{}} />
                        <textarea className="w-full h-[226px] rounded-lg bg-white  shadow-1 mt-4 p-6 focus:border-solid focus:border-2 focus:outline-none border-darkBlue " name='message' placeholder=" Hello Storefront, I would like to ... " value={ ''} onChange={()=>{}} ></textarea>
                        <Submit value='Submit' className='text-white bg-black rounded-lg w-[148px]'/>
                    </form>
                </div>
            </main>
            <Footer logo={edit.logo} text={edit.footText} className='font-outfit' />
        </>
    )
};


export default Finance1