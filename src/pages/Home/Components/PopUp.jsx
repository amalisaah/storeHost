import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { checkExistence } from "../../../utils/helperUtils";

const  PopUp = (props)=> {

    const navigate = useNavigate();
    const ref = useRef();

    const hidePreview = (event) => {
        console.log(ref.current && ref.current.contains(event.target))
        if(ref.current && ref.current.contains(event.target)){
            ref.current.role='popup'
        }
        // if (ref.current && !ref.current.contains(event.target)) {
            let elements = document.getElementsByClassName('preview');
            Array.prototype.map.call(elements,element=>{element.style.display='none'})
        // }
        
    };

    useEffect(() => {
        document.addEventListener('click', hidePreview, true);
        return () => {
            document.removeEventListener('click', hidePreview, true);
        };
    }, []);
    function openProject(){
        const hosted = checkExistence(props.allHostedRef.current,props.path.name);
        if (hosted) navigate('/'+props.path.name)
        
    }
    function handleDelete(e) {
        props.deleteProject(props.path.name);
    }

    return (
        <>
            <div className='preview w-[257px] absolute top-40 left-[40%] z-10 bg-white shadow-1 divide-y divide-solid text-left cursor-pointer hidden' ref={ref} >
                <div className='font-fontPoppins text-2xl text-black py-5 pl-12' onClick={()=>{navigate(props.path.path)}}>Edit</div>
                <div className='font-fontPoppins text-2xl text-black py-5 pl-12' onClick={openProject}>Open project</div>
                <div className='font-fontPoppins text-2xl text-black py-5 pl-12' onClick={handleDelete}>Delete</div>
            </div>
        </>
    )
};

PopUp.propTypes = {
    path: PropTypes.object,
    allHostedRef: PropTypes.object,    
    deleteProject: PropTypes.func,    
       
}

export default PopUp 