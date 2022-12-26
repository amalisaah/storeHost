import React, { useContext, useEffect } from "react";
import useState from 'react-usestateref';
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import ProfilePic from "../../Components/ProfilePic";
import  team from '../../assets/images/Ellipse3.png';
import { LoginContext } from "../../Context/LoginContext";
import Button from "../../Components/Button";
import Logo from "../../Components/Logo";
import NameBox from "./Blog/Components/NameBox";
import { projectNameContext } from "../../Context/projectNameContext";
import { projectDataContext } from "../../Context/projectDataContext";
import { projectListContext } from "../../Context/projectListContext";



const  Templates = ()=> {

    /*Check if User is already logged in*/
    useEffect(()=>{
        let temp = localStorage.getItem('user')
        if (!temp) temp = sessionStorage.getItem('user'); 
        setUser(prev=>temp && JSON.parse(temp))
        console.log(user,temp)

    },[])


    /*Check if webpage is still in templates mode*/
    const [template,setTemplate] = useState(true);


    /*HANDLE USER CHANGES IN TEMPLATE*/
    const [edit,setEdit,editRef] = useState('');


    /*Get Name of project  HANDLE NAME SAVE set data to name as key*/
    const [projectName,setProjectName,projectNameRef] = useContext(projectNameContext);
    const [projectData,setProjectData,projectDataRef] = useContext(projectDataContext);

    const location = useLocation() //aids in routing to page from recent projects
    function handleSubmit () {
        const name=[projectNameRef.current];
        setEdit(prev=>({...prev,pathName:location.pathname}))
        setProjectData(prev=>({...prev,[name]:editRef.current}));
        console.table(projectDataRef.current)
        setProjectList(prev=>[...prev,name]); //adds name to project list
        setBox(false)
        sessionStorage.setItem('projectData',JSON.stringify(projectDataRef.current));
        sessionStorage.setItem('projectName',JSON.stringify(projectName));
        
    };
    
    useEffect(()=>{
        let Name = sessionStorage.getItem('projectName');
        setProjectName((prev)=>Name ? JSON.parse(Name) : prev)
        let Data = sessionStorage.getItem('projectData');
        Data = JSON.parse(Data)
        // console.log(projectNameRef.current);
        // console.log(Name,'errrhm');
        setEdit((prev)=> (Data && Name) ?  Data[projectNameRef.current] : prev)

    },[])

    /*Display or hide name box*/
    const [box,setBox] = useState(false);
    function handleBoxDisplay () {
        setBox(prev=>{
             return !prev
        });
        projectNameRef.current && handleSubmit()
    };

    /*List of all projects*/
    const [projectList,setProjectList,projectListRef] = useContext(projectListContext);


    /* HIDE OR SHOW LOGOUT BUTTON*/
    const [logout,setLogout]= useState(false);
    function toggleLogout(){
        setLogout(prev=>!prev)
        console.log(logout);
    }

    /*LOGS USER OUT*/
    const {user,setUser} = useContext(LoginContext)
    const navigate = useNavigate()
    function handleClick(){
        localStorage.clear();
        sessionStorage.clear();
        setUser({});
        navigate('/authentication/login')
    }



    return (
       user ? <>            
            <header className={"h-[88px] bg-white w-full z-50 flex justify-between px-[2.4%] items-center fixed " }>
                <div className='flex w-[25%] items-center justify-between '>
                    <ProfilePic src={team} text={user.firstname || user.business}   alt="user's pic" onClick={toggleLogout} />
                    {logout ? <Button value="Logout" className='absolute left-[150px] top-[50px]  text-white bg-darkBlue font-fontRoboto font-semibold w-[136px] h-[45px] ' onClick={handleClick}  /> : null}
                    <div className='text-black'>Hire a Professional</div>
                </div>
                <div className='flex w-[35%] items-center justify-between'>
                    <Button value="Save" className='text-white bg-darkBlue font-fontRoboto font-semibold w-[125px] h-[45px] rounded-none 'onClick={handleBoxDisplay}  />
                    <Button value="Publish" className='text-white bg-darkBlue font-fontRoboto font-semibold w-[125px] h-[45px] rounded-none mr-[71px]'  />
                    <Logo/> 
                </div>
                
            </header>
            <main className='pt-[100px]'>
                { box ? <NameBox onClick={handleSubmit} /> : null }
                <Outlet context={[edit,setEdit,editRef,template]}/>
            </main>
            
        </> : null
    )
};


export default Templates