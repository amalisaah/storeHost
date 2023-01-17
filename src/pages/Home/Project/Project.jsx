import React, { useContext, useEffect, useState } from "react";
import { Outlet, Link, useLocation, useNavigate, useOutletContext } from "react-router-dom";
import Select from "../Components/Select";
import Category from '../../../assets/images/icons/Category.png';
import arrow from '../../../assets/images/icons/arrow.png';
import { projectListContext } from "../../../Context/projectListContext";
import { projectDataContext } from "../../../Context/projectDataContext";
import { projectNameContext } from "../../../Context/projectNameContext";
import PopUp from "../Components/PopUp";
import Alert from "../Components/Alert";


const  Project = (props)=> {

    const navigate = useNavigate()
    /*Displays active Projects*/
    const [projectList,setProjectList,projectListRef] = useContext(projectListContext);
    const [projectData,setProjectData,projectDataRef] = useContext(projectDataContext);
    // const [projectName,setProjectName] = useContext(projectNameContext)
    
    // console.log(projectList);
    const [,,,,,,,,,isAlertVisible,selectCategory,categorySel,allHostedRef] = useOutletContext();
    const [chooseIcon,setChooseIcon] = useState([]) //keeping track of listed project images
    /*List of project belonging to user*/
    useEffect(()=>{
        let list = sessionStorage.getItem('projectData');
        list = list && JSON.parse(list);
        setProjectData(prev=>list ? list : prev)
    },[])
    useEffect(()=>{
        const len = Object.keys(projectDataRef.current).length;
        if (len>0){
            let items = projectData && Object.keys(projectDataRef.current);
            const Icons=items && items.map(item=>projectDataRef.current[item]['pathName'].split('/').at(3));
            setChooseIcon(prev=>Icons ? Icons : prev )
            setProjectList((prev)=>items ? items : prev)
        }
    },[projectData])


    /*Handles selecting a project*/
    const [path,setPath] = useState({})
    function handleSelect (name,e) {
        const path=projectData[name] && projectData[name].pathName;
        setPath(({path,name}))        
        sessionStorage.setItem('projectName',JSON.stringify(name))
        // navigate(path)
        // onselect
        e.currentTarget.firstChild.style.display='block';
        // return name
    };

    function deleteProject (name){
        const temp=projectData;
        delete temp[name]
        setProjectData(({...temp}))
        sessionStorage.setItem('projectData',JSON.stringify(projectDataRef.current))
        const path=`/dashboard/projects`;
        // props.postData(path,projectDataRef.current);///make DELETE REQUEST
    }
  

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
    

    /*set Name to an empty string to enable new project be started */
    const [projectName,setProjectName] = useContext(projectNameContext);
    function handleClearName(){
        setProjectName('');
        sessionStorage.removeItem('projectName');
       
    }
    const location = useLocation();


    return (
        <>
             <div className="" >
                { categorySel ?
                    <div className='h-[100px] w-[352px] flex justify-around items-center border-solid border border-darkBlue m-6 cursor-pointer bg-white' onClick={()=>{selectCategory(false)}}>
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
                   { (location.state && location.state.published) ? <Alert text='Your work has been published'/> : null}
                    { categorySel ? 
                        <div className='w-[full] flex justify-start flex-wrap pl-8'>
                            {projectListRef.current.map((project,index)=>
                                <div className='font-fontRoboto text-xl w-[30%] mb-9 mr-3 text-center relative' key={index} onClick={(e)=>{handleSelect(project,e)}}>
                                    <PopUp onClick={handleSelect} path={path} allHostedRef={allHostedRef} deleteProject={deleteProject} />
                                    <Link>
                                        <img src={`/images/projects/${chooseIcon[index]}.png`} alt={'Project pic'} className='w-full  border-[#59AFFF] hover:border-2 shadow-1' role='icon' />
                                        
                                        {project}
                                        
                                    </Link>
                                </div>
                            )}                        
                        </div> 
                    : 
                    // null
                    <div className=''>
                        <Outlet context={[handleClearName]} />
                    </div>}
                </div>
        </>
    )
};


export default Project