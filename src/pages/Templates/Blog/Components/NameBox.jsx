import { PropTypes } from "prop-types";
import React, { useContext } from "react";
// import Button from "../../Authentication/Components/Button";
import Button from "../../../../Components/Button";
import { projectNameContext } from "../../../../Context/projectNameContext";

const  NameBox = (props)=> {

    /*Set Name of Project */
    const [projectName,setProjectName] = useContext(projectNameContext);
    function handleChange(e){
        setProjectName((prev)=>e.target.value)

    }

    return (
        <>
            <div className={'w-[533px] h-[278px] bg-white p-11 font-fontRoboto absolute top-[10%] left-[30%] shadow-2' + props.className}>
                <div className=''>
                   <h2 className="font-semibold text-2xl">Name Project</h2> 
                    <input type='text' id='' placeholder="Untitled" required value={projectName} onChange={handleChange} className="w-full h-[57px] shadow-2 p-5 text-xl focus:border-none" autoFocus />
                </div>
                <div className='flex justify-end mt-14'>
                    <Button value="Save" className='w-[206px] h-10 bg-darkBlue text-semibold' />
                </div>
            </div>
        </>
    )
};

NameBox.propTypes={
    value: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
}


export default NameBox