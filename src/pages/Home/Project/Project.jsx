import React, { useContext, useEffect, useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import Select from "../Components/Select";
import Category from '../../../assets/images/icons/Category.png';
import arrow from '../../../assets/images/icons/arrow.png';
import { projectListContext } from "../../../Context/projectListContext";
import desktop from "../../../assets/images/Blog/Template1.png"
import { projectDataContext } from "../../../Context/projectDataContext";
import { projectNameContext } from "../../../Context/projectNameContext";


const  Project = ()=> {

    const navigate = useNavigate()
    /*Displays active Projects*/
    const [projectList,setProjectList] = useContext(projectListContext);
    const [projectData,setProjectData] = useContext(projectDataContext);
    // const [projectName,setProjectName] = useContext(projectNameContext)
    
    console.log(projectList);
    useEffect(()=>{
        let list = sessionStorage.getItem('projectData');
        list = list && JSON.parse(list);
        setProjectData(prev=>list ? list : prev)
        console.log(list)
        let items = list && Object.keys(list);
        items=items && items.filter(item=>item!=='id');
        setProjectList((prev)=>items ? items : prev)
        console.log(projectList);
    },[])

    /*Handles selecting a project*/
    function handleSelect (name) {
        const path=projectData[name].pathName;        
        sessionStorage.setItem('projectName',JSON.stringify(name))
        navigate(path)
    };

    // const location =useLocation()
    // console.log(typeof location.pathname)
    /*Toggles Select Box Options*/
    const [categorySel,setCategorySel] = useState(true)

    // /* Toggles template options visible or hidden
    const [menu,setMenu] = useState(false);
    function toggleMenu () {
       setMenu(prev=>!prev)
    };
    
    /* Change selected value*/
    const [value,setValue] = useState('')
    function handleClick(val){
        setValue(val)
        // sessionStorage.setItem('value',JSON.stringify(value))     
    }
    

    /* sets id on templates */
    // const [templateId,setTemplateId] = useState({})
    // function Number (val){
    //     setTemplateId(prev=>(...prev,))
    // }

    // const [projectName,setProjectName] = useOutletContext();
    // console.log(projectName +'lll')

    return (
        <>
             <div className="" >
                { categorySel ?
                    <div className='h-[100px] w-[352px] flex justify-around items-center border-solid border border-darkBlue m-6 cursor-pointer bg-white' onClick={()=>{setCategorySel(false)}}>
                        <div className='flex items-center text-2xl   '>
                            <i className="fa fa-file mr-4 text-2xl" ></i>
                            New project
                        </div>
                        <i className="fa fa-plus  mr-4 text-2xl" ></i>
                    </div> 
                    :
                    <div className='h-[100px] w-[352px] flex justify-around items-center border-solid border border-darkBlue m-6 relative cursor-pointer bg-white' onClick={toggleMenu}>
                        <div className='flex items-center text-2xl  '>
                        
                        <img src={Category} role='icon' alt='category icon' />
                            <div className='ml-6 '>{value ? value : 'Category'}</div> 
                        </div>
                    
                        <img src={arrow} role='icon' alt='category icon' className='w-[15px] h-[8px]'  />
                        {menu ? <Select onClick={handleClick} /> : null} 
                    </div>
                }
            </div>
                <div className='border-solid border border-fontGrayW mx-12 '></div>
                <div className=''>
                    <h2 className="font-semibold text-2xl m-6">{categorySel? 'Recent' :'Templates'}</h2>
                    { categorySel ? 
                        <div className='w-[full] flex justify-start flex-wrap pl-8'>
                            {projectList.map((project,index)=>
                                <div className='font-fontRoboto text-xl mb-8 text-center' key={index} onClick={()=>{handleSelect(project)}}>
                                    <Link>
                                        <img src={desktop} alt={'Project pic'} className='w-full  border-[#59AFFF] hover:border-2 shadow-1' />
                                    </Link>
                                    {project}
                                </div>
                            )}                        
                        </div> 
                    : 
                    // null
                    <Outlet/>}
                </div>
        </>
    )
};


export default Project