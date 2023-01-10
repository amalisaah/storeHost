/*Changeable pictures for templates and profile pic*/ 
import React from "react";
import PropTypes from 'prop-types';


const  Image = (props)=> {

    function handleChange(event){
        var picture = event.currentTarget.files[0];
        var src     = URL.createObjectURL(picture);
        const id = event.currentTarget.parentNode.firstChild.id;
        const obj = {
            picture: picture,
            src: src
        }
        props.onChange(obj,id)
    }
    return (
        <>
            <div className={'w-[517px] relative '+props.className} >
                <img src={props.src} alt={props.alt} id={props.imageId} className="w-[517px] object-cover " />
                <label style={props.labelVisible ? {display:'none'} : {}} className=" absolute top-0 z-2 bg-black w-full h-full flex justify-center items-center text-3xl bg-blur cursor-pointer text-white" htmlFor={props.id}>
                    <span className="fa fa-camera m-2"></span>
                    <span>Change Image</span>
                </label>
                <input id={props.id} type="file" onChange={handleChange} className='hidden'/>
            </div>
        </>
    )
};

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,    
    alt: PropTypes.string.isRequired,    
    id: PropTypes.string.isRequired,    
    imageId: PropTypes.string.isRequired,
    onChange: PropTypes.func    
}

export default Image