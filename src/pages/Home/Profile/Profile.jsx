import React, { useContext } from "react";
import ProfilePic from "../../../Components/ProfilePic";
import pic from "../../../assets/images/Ellipse 15.png";
import pencil from "../../../assets/images/icons/pencil.png"
import { LoginContext } from "../../../Context/LoginContext";
import Input from "../../../Components/Input";
import Submit from "../../../Components/Submit";
import { useOutletContext } from "react-router-dom";

const  Profile = ()=> {

    const {user,setUser} = useContext(LoginContext);

    /*Handle editing*/
    const [value,setValue,onSubmit]=useOutletContext();
    function handleChange(e){
        e.preventDefault()
        const name=e.target.name;
        setValue(prev=>({...prev,[name]:e.target.value}));
        // if(error){ // to remove error msg
        //     const isValid=!e.target.validity.patternMismatch
        //     isValid && setError(false)
        // }
        console.log(value)
        
    }

    function handleSubmit(e) {
        e.preventDefault();
        const endpoint='/dashboard/profile';
        const path=`${endpoint}?id=${user.id}`;
        onSubmit(path,value) //handleSubmit function in homepage
    }
    
    /* handles username editing*/
    function handleClick(){
        
    }

    return (
        <>
            <div className='w-[559px] m-auto '>
                <ProfilePic src={pic} text={user.business} alt='profile pic' icon={pencil} alternative='edit button' className='h-[226px] w-[226px]' textClass={'text-[32px] leading-[36px] mx-8 '} onClick={handleClick} />    

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