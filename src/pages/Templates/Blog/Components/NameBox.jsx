import { PropTypes } from "prop-types";
import React, { useContext } from "react";
import Submit from "../../../../Components/Submit";
import { projectNameContext } from "../../../../Context/projectNameContext";

const  NameBox = (props)=> {

    /*Set Name of Project */
    const [projectName,setProjectName] = useContext(projectNameContext);
    function handleChange(e){
        setProjectName((prev)=>e.target.value)

    }
    function handleSubmit(e) {
        e.preventDefault();
        props.onClick()        
    }

    return (
        <>
            <form className={'w-[533px] h-[278px] bg-white p-11 font-fontRoboto fixed top-[30%] left-[30%] shadow-2' + props.className} onSubmit={handleSubmit}>
                <div className='' >
                   <h2 className="font-semibold text-2xl mb-2">Name Project</h2> 
                    <input type='text' id='' placeholder="Untitled" required value={projectName} onChange={handleChange} className="w-full h-[57px] shadow-2 p-5 text-xl focus:border-none" autoFocus />
                </div>
                <div className='flex justify-end mt-24 items-end'>
                    <Submit value="Save" className='w-[206px] h-10 bg-darkBlue text-semibold' />
                </div>
            </form>
        </>
    )
};

NameBox.propTypes={
    value: PropTypes.string,
    className: PropTypes.string,
    handleSave: PropTypes.func,

    
}


export default NameBox