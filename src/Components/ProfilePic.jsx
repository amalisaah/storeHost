import React from "react";
import PropTypes from 'prop-types';
import pic from "../assets/images/Ellipse 15.png";


const  ProfilePic = (props)=> {

    function handleClick() {
        props.onClick()
    }
    
    function handlePicChange(event){        
        var picture = event.currentTarget.files[0];
        var src     = URL.createObjectURL(picture);
        const obj = {
            picture: picture,
            src: src
        }
       props.onChange(obj)
    }
    

    return (
        <>
             <div className="flex">
                <div className={'rounded-[50%] h-10 w-10 mr-4  relative '+props.className}>
                    <img src={ props.src ? props.src : pic} alt={props.alt} className='w-full rounded-full h-full' id="profile" />
                    <label className=" absolute top-0 z-2 rounded-full w-full h-full flex justify-center items-center text-xl bg-blur cursor-pointer text-white hidden" htmlFor={props.id}>
                    <span className="fa fa-camera m-2"></span>
                    <span>Change Image</span>
                </label>
                <input  type="file" id={props.id} className='hidden' onChange={props.onChange && handlePicChange} accept="image/*" capture='user'/>
                </div>

                <div className="flex items-center text-darkBlue font-fontRoboto ">
                <p className={"text-darkBlue leading-[19px] font-medium "+props.textClass} id={props.name} contentEditable={props.template} suppressContentEditableWarning  onBlur={props.changeText}>{props.text || 'No Name'} </p>
                <img src={props.icon} alt={props.alternative} className=" text-darkBlue ml-2" onClick={handleClick}  />
                </div>
            </div>
        </>
    )
};

ProfilePic.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    textClass: PropTypes.string,
    src: PropTypes.string,    
    alt: PropTypes.string.isRequired,  
    icon: PropTypes.string.isRequired,    
    id: PropTypes.string,
    name: PropTypes.string,
    alternative: PropTypes.string.isRequired,
    onCliick: PropTypes.func, 
    onChange: PropTypes.func, 
}

export default ProfilePic