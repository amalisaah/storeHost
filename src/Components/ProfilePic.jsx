import React from "react";

const  ProfilePic = (props)=> {
    return (
        <>
             <div className="flex">
                <img src={props.src} alt={props.alt} className='rounded-[50%] h-10 w-10 mr-4' />
                <div className="flex items-center text-darkBlue font-fontRoboto ">
                <p className="text-darkBlue leading-[19px] font-medium">{props.text}</p>
                </div>
            </div>
        </>
    )
};


export default ProfilePic