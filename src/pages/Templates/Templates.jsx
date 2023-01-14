import React, { useContext, useEffect } from "react";
import useState from 'react-usestateref';
import { Outlet, useLocation, useNavigate, Link } from "react-router-dom";
import ProfilePic from "../../Components/ProfilePic";
import arrow from "../../assets/images/icons/arrow.png";
import  team from '../../assets/images/Ellipse3.png';
import { LoginContext } from "../../Context/LoginContext";
import Button from "../../Components/Button";
import Logo from "../../Components/Logo";
import NameBox from "./Components/NameBox";
import { projectNameContext } from "../../Context/projectNameContext";
import { projectDataContext } from "../../Context/projectDataContext";
import { projectListContext } from "../../Context/projectListContext";
import { nameUtil } from "../../utils/helperUtils";
import Side from "./Components/Side";
import SideItem from "./Components/SideItem";



const  Templates = (props)=> {

    

    /*Check if User is already logged in*/
    useEffect(()=>{
        let temp = localStorage.getItem('user')
        if (!temp) temp = sessionStorage.getItem('user'); 
        setUser(prev=>temp ? JSON.parse(temp) : {})
        !userRef.current.id && navigate('/authentication/login')

    },[])
    


    /*HANDLE USER CHANGES IN TEMPLATE*/
    const [edit,setEdit,editRef] = useState('');


    /*Get Name of project  HANDLE NAME SAVE set data to name as key*/
    const [projectName,setProjectName,projectNameRef] = useContext(projectNameContext);
    const [projectData,setProjectData,projectDataRef] = useContext(projectDataContext);

    /*List of all projects*/
    const [projectList,setProjectList,projectListRef] = useContext(projectListContext);

    /*Checks duplicate*/
    const [duplicate,setDuplicate] = useState(false);
    function checkDuplicate(val){
        setDuplicate(val)
        
    }

    const location = useLocation() //aids in routing to page from recent projects
    // function handleSubmit () {
    //     const name=[projectNameRef.current];
    //     setEdit(prev=>({...prev,pathName:location.pathname}))
    //     setProjectData(prev=>({...prev,[name]:editRef.current}));
    //     console.table(projectDataRef.current)
    //     setProjectList(prev=>[...prev,name]); //adds name to project list
    //     setBox(false)
    //     sessionStorage.setItem('projectData',JSON.stringify(projectDataRef.current));
    //     const path=`/dashboard/projects?uid=${user.id}`
    //     // props.postData(path,JSON.stringify(projectDataRef.current))
    //     sessionStorage.setItem('projectName',JSON.stringify(projectName));

        
    // };
    function handleSubmit () {
        // const name=[projectNameRef.current];
        const name=nameUtil(projectNameRef.current,user);
        setEdit(prev=>({...prev,pathName:location.pathname,projStyle:styleRef.current}))//pathname is to acess template type to aid in rerouting from proect page
        // setEdit(prev=>({...prev,pathName:location.pathname}))//pathname is to acess template type to aid in rerouting from proect page
        setProjectData(prev=>({...prev,[name]:editRef.current}));
        console.table(projectDataRef.current)
        setProjectList(prev=>[...prev,name]); //adds name to project list
        setBox(false)
        sessionStorage.setItem('projectData',JSON.stringify(projectDataRef.current));
        const path=`/dashboard/projects?uid=${user.id}`
        // props.postData(path,JSON.stringify(projectDataRef.current))
        props.postData(path,projectDataRef.current);
        sessionStorage.setItem('projectName',JSON.stringify(projectName));

        
    };

    
    useEffect(()=>{
        let Name = sessionStorage.getItem('projectName');
        setProjectName((prev)=>Name ? JSON.parse(Name) : prev)
        let Data = sessionStorage.getItem('projectData');
        Data = JSON.parse(Data)
        // console.log(projectNameRef.current);
        // console.log(Name,'errrhm');
        setEdit((prev)=> (Data && Name) ?  Data[projectNameRef.current] : prev);
        // setStyle((prev)=> (Data && Name) ?  Data[projectNameRef.current.projStyle] : prev);
        setStyle((prev)=> (Data && Name) ?  Data[projectNameRef.current].projStyle ? Data[projectNameRef.current].projStyle : prev :prev);
        console.log(styleRef.current)
        console.log(editRef.current)

    },[])

    /*Display or hide name box*/
    const [box,setBox] = useState(false);
    function handleBoxDisplay () {
        setBox(prev=>{
             return !prev
        });
        projectNameRef.current && handleSubmit()
    };


    /* Handles HOSTING */
    function handleHosting(){
        edit.template=false;
        handleSubmit();
        setPubBox(false);
        const temp=location.pathname.split('/').at(3);
        console.log(temp);
        const name = nameUtil(projectNameRef.current,user);
        console.log(name)
        const hosted= [temp,name];
        props.UpdateHosted(hosted)
        sessionStorage.setItem('allHosted',JSON.stringify(props.allHostedRef.current));
        const path=''
        // props.postData(path,props.allHostedRef)
        
    }

    /*Display or hide Pub box*/
    const [pubBox,setPubBox] = useState(false);
    function handlePubBoxDisplay () {
        setPubBox(prev=>{
             return !prev
        });
        projectNameRef.current && handleHosting()
    };

    /*Pictures Label Display */
    const [labelVisible,setLabelVisible] =useState(false);
    function picVisibility(){
        setLabelVisible(prev=>!prev)
    }

    /*Pages Options Display */
    const [pagesVisible,setPagesVisible] =useState(false);
    function pagesVisibility(){
        setPagesVisible(prev=>!prev)
    }

    /*Components Options Display */
    const [componentVisible,setComponentVisible] =useState(false);
    function componentVisibility(){
        setComponentVisible(prev=>!prev)
    }
    /*Components Options Display */
    const [colorVisible,setColorVisible] =useState(false);
    function colorVisibility(){
        setColorVisible(prev=>!prev)
    }
    



    /*COMPONENTS STYLING*/
    const [style,setStyle,styleRef]=useState({});
    function changeStyle (item,obj){
        let temp=style[item]
        temp={...temp,...obj}
        console.log(temp)
        setStyle(prev=>({...prev,[item]:temp}))
    }



    /* HIDE OR SHOW LOGOUT BUTTON*/
    const [logout,setLogout]= useState(false);
    function toggleLogout(){
        setLogout(prev=>!prev)
        console.log(logout);
    }

    /*LOGS USER OUT*/
    const {user,setUser,userRef} = useContext(LoginContext)
    const navigate = useNavigate()
    function handleLogout(){
        localStorage.clear();
        sessionStorage.clear();
        setUser({});
        navigate('/authentication/login')
    }




    return (
       user.id ? <>            
            <header className={"h-[88px] bg-white w-full z-50 flex justify-between px-[2.4%] items-center fixed " }>
                <div className='flex w-[25%] items-center justify-between '>
                    <ProfilePic src={team} text={user.firstname || user.business}   alt="user's pic" icon={arrow} alternative='arrow down icon' onClick={toggleLogout} />
                    {logout ? <Button value="Logout" className='absolute left-[150px] top-[50px]  text-white bg-darkBlue font-fontRoboto font-semibold w-[136px] h-[45px] ' onClick={handleLogout}  /> : null}
                    <div className='text-black cursor-pointer'><Link to='/home/support'>Hire a Professional</Link> </div>
                </div>
                <div className='flex w-[35%] items-center justify-between'>
                    <Button value="Save" className='text-white bg-darkBlue font-fontRoboto font-semibold w-[125px] h-[45px] rounded-none mr-4'onClick={handleBoxDisplay}  />
                    <Button value="Publish" className='text-white bg-darkBlue font-fontRoboto font-semibold w-[125px] h-[45px] rounded-none mr-[71px]' onClick={handlePubBoxDisplay}  />
                    <Logo/> 
                </div>
                
            </header>
            <main className='pt-[100px]'>
                    <Side className=' top-0'>
                        <SideItem className='text-bgBlue' onClick={componentVisibility} icon='+'/>
                        <SideItem className='text-bgBlue text-xl' onClick={picVisibility} icon= {<i className="fa fa-upload"></i>}/>
                    </Side>
                    <Side className=' top-0 right-0'>
                        <SideItem className='text-bgBlue' onClick={pagesVisibility} icon={<i className="fa fa-copy text-2xl"></i>} />
                        <SideItem className='text-bgBlue text-xl' onClick={picVisibility} icon= {<i className="fa fa-upload"></i>}/>
                    </Side>
                   
                { box ? <NameBox buttonText={'Save'} onClick={handleSubmit} duplicate={duplicate} user={user} checkDuplicate={checkDuplicate} /> : null }
                { pubBox ? <NameBox buttonText={'Save and Publish'} onClick={handleHosting} duplicate={duplicate} user={user} checkDuplicate={checkDuplicate} /> : null }
                <div className='mx-[5.4%]'>
                    <Outlet context={[edit,setEdit,editRef,labelVisible,pagesVisible,componentVisible,style,changeStyle,colorVisible,colorVisibility]}/>
                </div>

            </main>
            
        </> : null
    )
};


export default Templates