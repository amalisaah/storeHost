import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { projectNameContext } from "../../../../Context/projectNameContext";
import template1 from "../../../../assets/images/Blog/Template1.png";
import template2 from "../../../../assets/images/Blog/Template2.png";
import template3 from "../../../../assets/images/Blog/Template3.png";
import preview1 from "../../../../assets/images/Blog/Desktop - 2.jpg";
import preview2 from "../../../../assets/images/Blog/Desktop - 5.png";
import preview3 from "../../../../assets/images/Blog/Desktop - 1.png";
// import desktop from "../../../../assets/images/Blog/Desktop - 1.png"
import Button from "../../../../Components/Button";
const  Blog = ()=> {

    const navigate = useNavigate();

    /*Images of  available templates*/
    const templates= [template1,template2,template3];
    const alts= ['Blog-1','Blog-2','Blog-3'];
    const preview= [preview1,preview2,preview3];

    /*set Name to an empty string to enable new project be started */
    const [projectName,setProjectName,projectNameRef] = useContext(projectNameContext);
    function handleClick(){
        setProjectName('');
        sessionStorage.removeItem('projectName')
    }

    /*Control preview of templates */
    // const [preview,setPreview] = useState(false);
    function showPreview(e) {
        console.log(e.target.parentNode.parentNode.firstElementChild);
        e.target.parentNode.parentNode.firstElementChild.style.display='block';
        console.log(e.currentTarget);
    }
    function hidePreview(e) {
        e.target.style.display='none';
    }
    

    return (
        <>
             {/* <div className='w-[full] flex justify-around'>        
                    <div className='font-fontRoboto text-xl text-center'  >
                         <img src={preview1} alt='review' className="absolute w-5/6 left-[7%] top-[176px]" style={{display:'none'}}/> 
                        <Link>
                            <img src={templates[0]} alt={alts[0]} className='w-full  border-[#59AFFF] hover:border-2 shadow-1' onClick={ham}/>
                        </Link>
                        {alts[0]}
                        <div className=''></div>
                        <Button value="Edit" className='bg-darkBlue font-fontPoppins w-[156px] h-[46px] rounded-none ' onClick={()=>{
                            handleClick();
                            navigate('/template/blog/'+alts[0])}}/>
                    </div>     

                    <div className='font-fontRoboto text-xl text-center'  >
                            <img src={preview1} alt='review' className="absolute w-5/6 left-[7%] top-[176px]" style={{display:'none'}}/> 
                        <Link>
                            <img src={templates[1]} alt={alts[1]} className='w-full  border-[#59AFFF] hover:border-2 shadow-1' onClick={ham}/>
                        </Link>
                        {alts[1]}
                        <div className=''></div>
                        <Button value="Edit" className='bg-darkBlue font-fontPoppins w-[156px] h-[46px] rounded-none ' onClick={()=>{
                            handleClick();
                            navigate('/template/blog/'+alts[1])}}/>
                    </div>   

                    <div className='font-fontRoboto text-xl text-center'  >
                        <img src={preview1} alt='review' className="absolute w-5/6 left-[7%] top-[176px]" style={{display:'none'}}/> 
                        <Link>
                            <img src={templates[2]} alt={alts[2]} className='w-full  border-[#59AFFF] hover:border-2 shadow-1' onClick={ham}/>
                        </Link>
                        {alts[2]}
                        <div className=''></div>
                        <Button value="Edit" className='bg-darkBlue font-fontPoppins w-[156px] h-[46px] rounded-none ' onClick={()=>{
                            handleClick();
                            navigate('/template/blog/'+alts[2])}}/>
                    </div>      
                
            </div>  */}

            <div className='w-[full] flex justify-around'>
                {templates.map((template,index)=>
                    <div className='font-fontRoboto text-xl text-center' key={index} >
                         <img src={preview[index]} alt='review' className="absolute w-5/6 left-[7%] top-[176px]" style={{display:'none'}} onMouseLeave={hidePreview} />
                        <Link>
                            <img src={template} alt={alts[index]} className='w-full  border-[#59AFFF] hover:border-2 shadow-1' onClick={showPreview}/>
                        </Link>
                        {alts[index]}
                        <div className=''></div>
                        <Button value="Edit" className='bg-darkBlue font-fontPoppins w-[156px] h-[46px] rounded-none ' onClick={()=>{
                            handleClick();
                            navigate('/template/blog/'+alts[index])}}/>
                    </div>
                )}       
            </div>
            
        </>
    )
};


export default Blog