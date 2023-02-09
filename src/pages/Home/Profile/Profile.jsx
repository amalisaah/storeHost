import React, { useContext, useEffect } from "react";
import Alert from "../Components/Alert";
import ProfilePic from "../../../Components/ProfilePic";
import pencil from "../../../assets/images/icons/pencil.png"
import { LoginContext } from "../../../Context/LoginContext";
import Input from "../../../Components/Input";
import Submit from "../../../Components/Submit";
import { useOutletContext } from "react-router-dom";

const  Profile = ()=> {

    const {user,setUser} = useContext(LoginContext);

    /*Handle editing*/
    const [value,setValue,onSubmit,,,,changePic,profilePic,,isAlertVisible]=useOutletContext();
    function handleChange(e){
        e.preventDefault()
        const name=e.target.id;
        setValue(prev=>({...prev,[name]:e.target.value}));
        // if(error){ // to remove error msg
        //     const isValid=!e.target.validity.patternMismatch
        //     isValid && setError(false)
        // }
        
    }
    /* handles username editing*/
    function nameChange(e){
        const name=e.target.id;
        console.log(name);
        setValue(prev=>({...prev,[name]:e.target.innerText}));
    }

    /*Handle Submission*/

    function handleSubmit(e) {
        e.preventDefault();
        const endpoint='/dashboard/profile';
        const path=`${endpoint}?id=${user.id}`;
        onSubmit(path,value) //handleSubmit function in homepage
    }
    
      useEffect(()=>{
        if (user.id){
            let temp = localStorage.getItem('user')
            console.log(user)
            if (temp) localStorage.setItem('user',JSON.stringify(user)); 
            else sessionStorage.setItem('user',JSON.stringify(user)); 
        }
    },[user])

    

    return (
        <>
            <div className='w-[559px] m-auto '>
            {isAlertVisible ? <Alert text='Profile details sucessfully updated' /> : null}
                <ProfilePic src={profilePic.src} template={true} text={user.business || user.firstname} alt='profile pic' icon={pencil} user={user} name={user.business ? 'business' : 'firstname'} alternative='edit button' className='h-[226px] w-[226px] profilePic transition-all duration-1000' textClass={'text-[32px] leading-[36px] mx-8 '} onChange={changePic} id={'pic'} changeText={nameChange} />    

                <form onSubmit={handleSubmit} className='mt-8'>
                    <Input id="email" value={value.email || user.email } label={'Email'} type={'email'} name={'email'}  onChange={handleChange} />
                    <Input id="contact" value={value.contact || user.contact } label={'Contact'} type={'tel'} name={'contact'} onChange={handleChange} />
                    <Input id="location" value={value.location || user.location } label={'Location'} type={'text'} name={'location'} onChange={handleChange} />
                    <div className='flex justify-end'><Submit value='Save' className='bg-darkBlue w-[126px]' /></div>
                    
                </form>            
            </div>
        </>
    )
};


export default Profile