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
    
        /*CHANGE  BACKGROUND*/
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

        /* CHANGE TEXT */
        const [text,setText] = useState('');
        function changeText(){
            const msgs = ['Your own online store with a few clicks', 'Easy to use templates','Well created UI Design']
            const index = Math.floor((Math.random() * 3));
            setText(msgs[index])    
        }
        useEffect(()=>{
            const intervalId=setInterval(() => {
                changeText();    
            }, 18000);
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
        setValue(prev=>({...prev,[name]:e.target.value}));
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
    const baseUrl='https://storefront-dpqh.onrender.com'
    function handleSubmit(role){
        if(!error){
            // console.log(value,role)
            
            (async()=>{
                try {
                    const url=`${baseUrl}${role}`;
                    const val=value;
                    const response = await axios.post(url,val);
                    response.data.id  && setUser(response.data)
                    console.log(response.data) 
                } catch (error) {
                    console.log(error.response.data);
                    if (error.response.data==='Unauthorized'){setError(true)}
                }
                
            })();
            setValue({})
            // setUser({name:'thor odinson',id:243})
            console.log(user)
        }
        
    }

    /*PERMANENTLY REMEMBER USER UNTIL LOGOUT*/ 
    const [rememberMe, setRememberMe] = useState(false);
    function Remember () {
        setRememberMe(prev=>!prev)
    };

    /*CLEARS VALUES ON LEAVING THE PAGE*/
    const location =useLocation()
    useEffect(()=>{ setValue({}) },[location])
    useEffect(()=>{ setHide(false) },[location])


    /*FOR HiDING EMAIL BOX ON CHANGE PASSWORD*/
    const [hide,setHide]=useState(false);
    function changeHide(){
        setHide(true)
    }

    return (
        <Routes>
            <Route path='/signup' element={<SignUp value={value}  handleChange={handleChange} handleBlur={handleBlur} error={error} personal={personal} changeForm={changeForm} handleSubmit={handleSubmit} text={text} />} />

            <Route index element={<Login value={value} handleChange={handleChange} handleBlur={handleBlur} error={error} handleSubmit={handleSubmit} Remember={Remember} rememberMe={rememberMe} text={text} />} />

            <Route path="/login" element={<Login value={value} handleChange={handleChange} handleBlur={handleBlur} error={error} handleSubmit={handleSubmit} Remember={Remember} rememberMe={rememberMe} text={text} />} />

            <Route path='/verify-email' element={<Cmail value={value} handleChange={handleChange} handleBlur={handleBlur} handleSubmit={handleSubmit} hide={hide} changeHide={changeHide} /> } />
            
            <Route path='/changepassword' element={<Password value={value}  handleChange={handleChange} handleBlur={handleBlur} error={error} handleSubmit={handleSubmit}/>} />

            <Route path='/auth' element={<FactorAuth value={value} handleChange={handleChange} handleSubmit={handleSubmit} /> } />
        </Routes>
    )
};


export default Authentication