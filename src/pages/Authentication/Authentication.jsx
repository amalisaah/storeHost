import React, {useContext, useEffect,} from "react";
import useState from "react-usestateref";
import {Routes,Route, useLocation, Navigate } from 'react-router-dom';
import axios from "axios";
import { LoginContext } from "../../Context/LoginContext";
import Cmail from "./Cmail/Cmail";
import Login from "./Login/Login";
import Password from "./Password/Password";
import SignUp from "./SignUp/SignUp";
import FactorAuth from "./FactorAuth/FactorAuth";
import Verification from "./Verification/Verification"


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
        if(error){ // to remove error msg
            const isValid=!e.target.validity.patternMismatch
            isValid && setError(false)
        }
        if(!same){
            setSame(true)
        }
        
        
    }

    /*CHECK ERROR ON BLUR*/
    const [error,setError]=useState(false);

    function handleBlur(bol){ 
        setError(bol);  

    }

    /*CHECK IF PASSWD 1 === PASSWD 2*/
    const [same,setSame,sameRef] =useState(true);
    function handleCheck (bol){
        setSame(bol)
    }




    /*HANDLE FORM SUBMISSION*/
    const [response,setResponse,responseRef]=useState({});
    const [loading,setLoading] = useState(false)
    const {setUser,user} = useContext(LoginContext);
    const baseUrl='https://storefront-dpqh.onrender.com';
    function handleSubmit(role){
            setLoading(true)
        if(!error){ 
            (async()=>{
                try {
                    const url=`${baseUrl}${role}`;
                    console.log(url);
                    const val=value;
                    const responded = await axios.post(url,val);
                    responded && setLoading(false);
                    responded.data.id  && setUser(responded.data);
                    const data=responded.data
                    const status = responded.status
                    setResponse((prev)=> responded ? ({data,status}) : {})
                } catch (error) {
                    setLoading(false);
                    const data=error.response.data;
                    console.log(error.response);
                    const status=error.response.status;
                    setResponse(()=>error ? ({data,status}): {})
                }
                
            })();
            setValue({})
        }
        
    }
    /*For verification since it makes its own get request*/
    function handleLoading(bol){
        setLoading(bol)
    }

    function handleResponse(val){
        setResponse(val)
    }
    ////////////////////////////

    /*PERMANENTLY REMEMBER USER UNTIL LOGOUT*/ 
    const [rememberMe, setRememberMe] = useState(false);
    function Remember () {
        setRememberMe(prev=>!prev)
    };

    /*CLEARS VALUES ON LEAVING THE PAGE*/
    const location =useLocation()
    useEffect(()=>{ setValue({}) },[location])
    useEffect(()=>{ setHide(false) },[location])
    useEffect(()=>{ setResponse({}) },[location])


    /*FOR HiDING EMAIL BOX ON CHANGE PASSWORD*/
    const [hide,setHide]=useState(false);
    function changeHide(){
        setHide(true)
    }

    return (
        <Routes>
            <Route path='/signup' element={<SignUp value={value}  handleChange={handleChange} handleBlur={handleBlur} error={error}  personal={personal} changeForm={changeForm} handleSubmit={handleSubmit} handleCheck={handleCheck} sameRef={sameRef} loading={loading} responseRef={responseRef} reponse={response} text={text} />} />

            <Route index element={<Login value={value} handleChange={handleChange} handleBlur={handleBlur} error={error} response={response} handleSubmit={handleSubmit} Remember={Remember} rememberMe={rememberMe} loading={loading} text={text} />} />

            <Route path="/login" element={<Login value={value} handleChange={handleChange} handleBlur={handleBlur} error={error} response={response} handleSubmit={handleSubmit} Remember={Remember} rememberMe={rememberMe} loading={loading} text={text} />} />

            <Route path='/password-reset' element={<Cmail value={value} handleChange={handleChange} handleBlur={handleBlur} error={error} response={response} handleSubmit={handleSubmit} hide={hide} changeHide={changeHide} loading={loading} /> } />
            
            <Route path='/reset-password' element={<Password value={value}  handleChange={handleChange} handleBlur={handleBlur} error={error} response={response} handleSubmit={handleSubmit} handleCheck={handleCheck} sameRef={sameRef} loading={loading} />} />

            <Route path='/auth' element={<FactorAuth value={value} response={response}  handleChange={handleChange} handleSubmit={handleSubmit} /> } />

            <Route path='/verify-email/' element={<Verification loading={loading} handleLoading={handleLoading} handleResponse={handleResponse} response={response} />} />

            <Route path='*' element={<Navigate replace to='/login' />} />
        </Routes>
    )
};


export default Authentication