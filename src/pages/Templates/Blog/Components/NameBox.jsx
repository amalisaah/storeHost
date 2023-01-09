import { PropTypes } from "prop-types";
import React, { useContext } from "react";
import Submit from "../../../../Components/Submit";
import { projectNameContext } from "../../../../Context/projectNameContext";
import { projectListContext } from "../../../../Context/projectListContext";
import { preventDuplicates } from "../../../../utils/helperUtils";

const  NameBox = (props)=> {

    /*Set Name of Project */
    const [projectName,setProjectName,projectNameRef] = useContext(projectNameContext);
    function handleChange(e){
        setProjectName((prev)=>e.target.value);
        props.checkDuplicate(false) 

    }
    const [projectList]=useContext(projectListContext);
    // const [user,setUser,userRef] = useContext(LoginContext)
    function handleSubmit(e) {
        e.preventDefault();
        preventDuplicates(projectList,projectNameRef.current,props.user) ?
        props.onClick() : props.checkDuplicate(true)       
    }

    return (
        <>
            <form className={'w-[533px] h-[278px] bg-white p-11 font-fontRoboto fixed top-[30%] left-[30%] shadow-2' + props.className} onSubmit={handleSubmit}>
                
                <div className='' >
                   <h2 className="font-semibold text-2xl mb-2">Name Box</h2> 
                   {props.duplicate ? <p className='text-error mb-4 '> Name already exists </p> : null }
                    <input type='text' id='' placeholder="Untitled" required value={projectName} onChange={handleChange} className="w-full h-[57px] shadow-2 p-5 text-xl focus:border-none" autoFocus />
                </div>
                <div className='flex justify-end mt-24 items-end'>
                    <Submit value={props.buttonText} className='w-[206px] h-10 bg-darkBlue text-semibold' />
                </div>
            </form>
        </>
    )
};

NameBox.propTypes={
    value: PropTypes.string,
    buttonText: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string,
    duplicate: PropTypes.bool.required,
    handleSave: PropTypes.func,

    
}


export default NameBox