import React, { useContext, useEffect } from "react";
import useState from "react-usestateref";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../Components/Header";
import ProfilePic from "../../Components/ProfilePic";
import { LoginContext } from "../../Context/LoginContext";
import  team from '../../assets/images/Ellipse3.png';
import arrow from "../../assets/images/icons/arrow.png";
import SideBar from "./Components/SideBar";
import Button from "../../Components/Button";
import { projectDataContext } from "../../Context/projectDataContext";
import { projectNameContext } from "../../Context/projectNameContext";

const  Home = (props)=> {

    const {user,setUser,userRef} = useContext(LoginContext);

    /*Check if User is already logged in*/
    useEffect(()=>{
        let temp = localStorage.getItem('user')
        if (!temp) temp = sessionStorage.getItem('user'); 
        setUser(prev=>temp ? JSON.parse(temp): prev)
        setValue({...userRef.current})
        console.log(user)

    },[])
    
    
    /* HIDE OR SHOW LOGOUT BUTTON*/
    const [logout,setLogout]= useState(false);
    function toggleLogout(){
        setLogout(prev=>!prev)
         console.log(logout);
    }

    const navigate = useNavigate()
    function handleLogout(){
        localStorage.clear();
        sessionStorage.clear();
        // setUser({});
        props.clearData();
        navigate('/authentication/login')
    }

    /*hHandles Alerts*/
    const [ isAlertVisible, setIsAlertVisible ] = useState(false);
    useEffect(()=> {
        if (responseRef.current.status===200){
            // setResp
        setIsAlertVisible(true);

        setTimeout(() => {
            setIsAlertVisible(false);
        }, 3000);
        setResponse({})
    }
    })



    /////////////////// PROJECT /////////////////
    /*Fetch Project Data */
    const [projectData,setProjectData] = useContext(projectDataContext)
    // useEffect(()=>{
    //     setProjectData((prev)=>{
    //         // const id=user.id;
    //         return({
    //         ...prev,
            
    //         })
    //     })
    // },[])  

    /*populating session storage with fetched data on first render*/
    useEffect(()=>{
        let temp = sessionStorage.getItem('projectData'); 
        if ((temp==='""'|| !temp || Object.keys(temp).length === 0)){
          sessionStorage.setItem('projectData',JSON.stringify(props.responseRef.current))  
        }      
    },[props.responseRef.current])   

      /*Toggles Select Box Options*/
      const [categorySel,setCategorySel] = useState(true);
      function selectCategory (bol){
        setCategorySel(bol)
      }

    /*Keep track of projects */
    // const [projectName,setProjectName] = useState('mm')

    /*Handle Submission*/
    const [response,setResponse,responseRef] =useState({})
    function handleSubmit(role,val) {
        const baseUrl='https://storefront-dpqh.onrender.com';
        (async()=>{
            try {
                const url=`${baseUrl}${role}`;
                console.log(url,val);
                // const val=value;
                const response = await axios.post(url,val);
                response.data.id  && setUser(response.data);
                setResponse(response)
                console.log(response) 
            } catch (error) {
                console.log(error)
                setResponse(error.response.data)
            }
            
        })()
        
    }

    /*set Name to an empty string to enable new project be started */
    const [projectName,setProjectName,projectNameRef] = useContext(projectNameContext);
    function handleClearName(){
        setProjectName('');
        sessionStorage.removeItem('projectName');
        // console.log(e.target.parentNode.firstElementChild);
    }







    ///////////  PROFILE  /////////////////
    /*Change Profile Pic*/
    const [profilePic,setProfilePic] = useState({});
    function changePic (pic) {

        console.log(pic);                  
        setProfilePic(prev=>(pic));  
        const endpoint='/dashboard/profile/img';
        const path=`https://storefront-dpqh.onrender.com${endpoint}?uid=${userRef.current.id}`;
        // onSubmit(pic,value) //handleSubmit function in homepage
        const data = new FormData() 
        data.append('tag',pic.picture);
        console.log(pic.picture);
        console.log(data);
        console.log(path);
        (async()=>{
            try {
                const response = await axios.post(path,data);
                if (response.status===200)
                    setProfilePic(prev=> response.data ? ({...prev,src:response.data}) : prev)
                
                console.log(response) 
            } catch (error) {
                console.log(error)
                
            }
        })()
      };

    //   useEffect(()=>{
    //         sessionStorage.setItem('profilePic',JSON.stringify(profilePic))
    //   },[profilePic])
      useEffect(()=>{
        if (user.id){
            console.log(user)
            const endpoint='/dashboard/profile/img';
        const path=`https://storefront-dpqh.onrender.com${endpoint}?uid=${user.id}`;
        
        (async()=>{
            try {
                const response = await axios.get(path);
                if (response.status===200)
                    setProfilePic(prev=> response.data ? ({...prev,src:response.data}) : prev)
                console.log(response) 
            } catch (error) {
                console.log(error)
                
            }
        })()}
      },[user])

    /*Handle Editing in Profile Page*/
    const [value,setValue] = useState({...user});




     //////////// SUPPORT //////////////
    /*Handle text in support page */
    const email=user.email;
    const [support,setSupport,supportRef] = useState({email})



    
    return (
        <>
        { user.id ?
        <>
        <Header className={'h-[88px] flex-row-reverse fixed'}>
            <ProfilePic src={profilePic.data || profilePic.src} text={user.business || user.firstname} alt="user's pic" icon={arrow} alternative='arrow down icon' onClick={toggleLogout} />
            {logout ? <Button value="Logout" className='absolute left-[150px] bg-white text-darkBlue hover:text-white hover:bg-darkBlue font-fontRoboto font-semibold w-[136px] h-[45px] ' onClick={handleLogout}  /> : null}
        </Header>
         <div className='flex pt-[88px]'>
            <SideBar onClick={selectCategory}/>
            <div className='ml-[15.5%] w-full'>
            <Outlet  context={[value,setValue,handleSubmit,support,setSupport,supportRef,changePic,profilePic,handleClearName,isAlertVisible,selectCategory,categorySel]} /> {/*displays selected page from side bar*/}
            </div>

        </div> </>
    
            
         : <h1 className="text-center mt-6">Please login first</h1>}
         </>
    )
};


export default Home