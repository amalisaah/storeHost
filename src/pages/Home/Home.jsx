import React, { useContext, useEffect } from "react";
import useState from "react-usestateref";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../Components/Header";
import ProfilePic from "../../Components/ProfilePic";
import { LoginContext } from "../../Context/LoginContext";
import  team from '../../assets/images/Ellipse3.png';
import arrow from "../../assets/images/icons/arrow.png";
import SideBar from "../../Components/SideBar";
import Button from "../../Components/Button";
import { projectDataContext } from "../../Context/projectDataContext";

const  Home = ()=> {

    const {user,setUser,userRef} = useContext(LoginContext);

    /*Check if User is already logged in*/
    useEffect(()=>{
        let temp = localStorage.getItem('user')
        if (!temp) temp = sessionStorage.getItem('user'); 
        setUser(prev=>temp ? JSON.parse(temp): prev)
        setValue({...userRef.current})

    },[])


    /*Fetch Project Data */
    const [projectData,setProjectData] = useContext(projectDataContext)
    useEffect(()=>{
        setProjectData((prev)=>{
            const id=user.id;
            return({id,
            ...prev,
            
            })
        })
    },[])


    /* HIDE OR SHOW LOGOUT BUTTON*/
    const [logout,setLogout]= useState(false);
    function toggleLogout(){
        setLogout(prev=>!prev)
         console.log(logout);
    }
    
    const navigate = useNavigate()
    function handleClick(){
        localStorage.clear();
        sessionStorage.clear();
        setUser({});
        navigate('/authentication/login')
    }
    

    /*Handle Editing in Profile Page*/
    const [value,setValue] = useState({...user});

    /*Handle text in support page */
    const email=user.email;
    const [support,setSupport,supportRef] = useState({email})

    /*Keep track of projects */
    // const [projectName,setProjectName] = useState('mm')
    function handleSubmit(role,val) {
        const baseUrl='https://storefront-dpqh.onrender.com';
        (async()=>{
            try {
                const url=`${baseUrl}${role}`;
                console.log(url,val);
                // const val=value;
                const response = await axios.post(url,val);
                response.data.id  && setUser(response.data);
    //             // setResponse(response.data)
                console.log(response) 
            } catch (error) {
                console.log(error)
    //             // setResponse(error.response.data)
            }
            
        })()
        
    }

 

    
    return (
        <>
        { user.id ?
        <>
        <Header className={'h-[88px] flex-row-reverse fixed'}>
            <ProfilePic src={team} text={user.firstname || user.business} alt="user's pic" icon={arrow} alternative='arrow down icon' onClick={toggleLogout} />
            {logout ? <Button value="Logout" className='absolute left-[150px] bg-white text-darkBlue hover:text-white hover:bg-darkBlue font-fontRoboto font-semibold w-[136px] h-[45px] ' onClick={handleClick}  /> : null}
        </Header>
         <div className='flex pt-[88px]'>
            <SideBar />
            <div className='ml-[15.5%] w-full'>
            <Outlet  context={[value,setValue,handleSubmit,support,setSupport,supportRef]} /> {/*displays selected page from side bar*/}
            </div>

        </div> </>
    
            
         : <h1 className="text-center mt-6">Please login first</h1>}
         </>
    )
};


export default Home