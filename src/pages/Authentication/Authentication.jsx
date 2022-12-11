import React, {useContext, useEffect, useState} from "react";
import {Routes,Route, useLocation, useNavigate} from 'react-router-dom';
import axios from "axios";
import { LoginContext } from "../../Context/LoginContext";
import Cmail from "./Cmail/Cmail";
import Login from "./Login/Login";
import Password from "./Password/Password";
import SignUp from "./SignUp/SignUp";
import FactorAuth from "./FactorAuth/FactorAuth";


const  Authentication = ()=> {

        /*CHANGE TEST AND BACKGROUND*/
        function changeBackground(){
            const id=document.getElementById('signP');
            if(id){
                const images=["bg1.jpg","bg2.jpg","bg3.jpg","bg4.jpg","bg5.jpg","bg6.jpg","bg7.jpg"]
                const index = Math.floor((Math.random() * 7));
                const src= "/images/";
                const url=`url(${src}${images[index]})`
                id.style.backgroundImage=url;
            }
            
        }
        useEffect(()=>{
            const intervalId=setInterval(() => {
                changeBackground();    
            }, 15000);
            return ()=>{clearInterval(intervalId)}
            
        },[])


    /*PATTERN*/
    // const pattern={ mail:'^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$',
    //                 pwd:"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
    //             }
  
    /*CHANGE FORM BTN PERSONAL AND BUSINESS*/
    const [personal,setPersonal]=useState(true)
    function changeForm(){
        setPersonal(prev=>!prev);
        setValue({})
    }

    /*SET VALID VALUES IN FORM INPUT*/
    const [value,setValue]=useState({});
    function handleChange(e){
        const name=e.target.name;
        setValue(prev=>({...prev,[name]:e.target.value}))
        
        if(error){
            const isValid=!e.target.validity.patternMismatch
            isValid && setError(false)
        }
        
    }

    /*CHECK ERROR ON BLUR*/
    const [error,setError]=useState(false);
    // const ref = useRef();
    function handleBlur(e){
        if (e.target.validity.patternMismatch){
            // ref.current.focus();
            setError(true);
        } 
        
    }




    /*HANDLE FORM SUBMISSION*/
    const {setUser,user} = useContext(LoginContext)
    const baseUrl=''
    function handleSubmit(role){
        if(!error){
            console.log(value,role)
            setValue({})
            // async()=>{
            //     const url=`${baseUrl}${role}`
            //     const response = await axios.post(url,value);
            //     setUser(response)
            // }();
            setUser({name:'thor odinson',id:243})
            console.log(user)
        }
        
    }

    /*CLEARS VALUES ON LEAVING THE PAGE*/
    const location =useLocation()
    useEffect(()=>{ setValue({}) },[location])
    useEffect(()=>{ setHide(false); console.log(hide)},[location])


    /*FOR HiDING EMAIL BOX ON CHANGE PASSWORD*/
    const [hide,setHide]=useState(false);
    function changeHide(){
        setHide(true)
    }

    return (
        <Routes>
            <Route path='/signup' element={<SignUp value={value}  handleChange={handleChange} handleBlur={handleBlur} error={error} personal={personal} changeForm={changeForm} handleSubmit={handleSubmit} />} />
            <Route index element={<Login value={value}  handleChange={handleChange} handleBlur={handleBlur} error={error} handleSubmit={handleSubmit}  />} />
            <Route path="/login" element={<Login value={value} handleChange={handleChange} handleBlur={handleBlur} error={error} handleSubmit={handleSubmit} />} />
            <Route path='/cmail' element={<Cmail value={value} handleChange={handleChange} handleBlur={handleBlur} handleSubmit={handleSubmit} hide={hide} changeHide={changeHide} /> } />
            <Route path='/changepassword' element={<Password value={value}  handleChange={handleChange} handleBlur={handleBlur} error={error} handleSubmit={handleSubmit}/>} />
            <Route path='/auth' element={<FactorAuth /> } />
        </Routes>
    )
};


export default Authentication