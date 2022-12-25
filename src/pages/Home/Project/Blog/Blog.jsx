import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { projectNameContext } from "../../../../Context/projectNameContext";
import template1 from "../../../../assets/images/Blog/Template1.png"
import template2 from "../../../../assets/images/Blog/Template2.png"
import template3 from "../../../../assets/images/Blog/Template3.png"
import desktop from "../../../../assets/images/Blog/Desktop - 1.png"
import Button from "../../../Authentication/Components/Button";
const  Blog = ()=> {

    const navigate = useNavigate();

    /*Images of  available templates*/
    const templates=[template1,template2,template3];
    const alts=['Blog-1','Blog-2','Blog-3'];

    /*set Name to an empty string to enable new project be started*/
    const [projectName,setProjectName,projectNameRef] = useContext(projectNameContext);
    function handleClick(){
        setProjectName('');
        sessionStorage.removeItem('projectName')
    }
    

    return (
        <>
            <div className='w-[full] flex justify-around'>
                {templates.map((template,index)=>
                    <div className='font-fontRoboto text-xl text-center' key={index} >
                        <Link>
                            <img src={template} alt={alts[index]} className='w-full  border-[#59AFFF] hover:border-2 shadow-1' />
                        </Link>
                        {alts[index]}
                        <Button value="Edit" onClick={()=>{
                            handleClick();
                            navigate('/template/blog/'+alts[index])}}/>
                    </div>
                )}       
                {/* <div className='absolute'>
                    <img src={desktop} alt='' />
                </div>          */}
            </div>
            
        </>
    )
};


export default Blog