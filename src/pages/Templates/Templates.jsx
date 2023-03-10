import React, { useCallback, useContext, useEffect } from "react";
import useState from 'react-usestateref';
import axios from "axios";
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

    
    const {user,setUser,userRef} = useContext(LoginContext)
    /*Check if User is already logged in*/
    useEffect(()=>{
        let temp = localStorage.getItem('user')
        if (!temp) temp = sessionStorage.getItem('user'); 
        setUser(prev=>temp ? JSON.parse(temp) : {})
        !userRef.current.id && navigate('/authentication/login')

    },[])
    


    /*HANDLE USER CHANGES IN TEMPLATE*/
    const [edit,setEdit,editRef] = useState('');

    const onContentBlur = useCallback(e => {
        const id=e.currentTarget.id
        setEdit(prev=>({...prev,[id]:e.currentTarget.innerText}))
        // console.log(id,'\n',edit)
    })

    /*social media handles*/
    const [social,setSocial,socialRef] = useState({});
    function socialChange(id,val){
        setSocial(prev=>({...prev,[id]:val}))
    }


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

    function handleLocalSubmit () {
        // const name=[projectNameRef.current];
        submitPic()
        const name=nameUtil(projectNameRef.current,user);
        setEdit(prev=>(
            {...prev,pathName:location.pathname,projStyle:styleRef.current,picture:pictureRef.current,social:socialRef.current}
            ))//pathname is to acess template type to aid in rerouting from proect page
        setSocial({})
        setProjectData(prev=>({...prev,[name]:editRef.current}));
        // console.table(projectDataRef.current)
        // setProjectList(prev=>[...prev,([name,'errrh'])]); //adds name to project list
        // console.log(projectListRef.current)
        setBox(false)
        sessionStorage.setItem('projectData',JSON.stringify(projectDataRef.current));
        const data={[name]:editRef.current}
        sessionStorage.setItem('projectName',JSON.stringify(projectName));
        return data
           
    };

    function handleSubmit(){
        const path=`/dashboard/projects`;
        const data=handleLocalSubmit()
        props.postData(path,data);
        
        // props.postData(path,projectDataRef.current);
        
    }

    
    useEffect(()=>{
        let Name = sessionStorage.getItem('projectName');
        setProjectName((prev)=>Name ? JSON.parse(Name) : prev)
        let Data = sessionStorage.getItem('projectData');
        Data = JSON.parse(Data);
        let len = Object.keys(Data).length
        setEdit((prev)=> (len && Name) ?  Data[projectNameRef.current] : prev);
        // setStyle((prev)=> (Data && Name) ?  Data[projectNameRef.current.projStyle] : prev);
        setStyle((prev)=> (len && Name) ?  (Data[projectNameRef.current] && Data[projectNameRef.current].projStyle) ? Data[projectNameRef.current].projStyle : prev :prev);

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
        handleLocalSubmit();
        setPubBox(false);
        const temp=location.pathname.split('/').at(3);
        const name = nameUtil(projectNameRef.current,user);
        const path=`/dashboard/projects`;
        // const hosted= [temp,name];
        const data=handleLocalSubmit()
       props.UpdateHosted(name,path,temp,data)
        // sessionStorage.setItem('allHosted',JSON.stringify(props.allHostedRef.current));

        
        // props.postData(path,props.allHostedRef)
        
        
    }
    useEffect(()=>{
        console.log(props.check)
        props.check==200 && navigate('/home/projects',{state:{published:true}})
    },[props.check])

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

    /*Handles Picture changes*/
    const [picture,setPicture,pictureRef] = useState({});
    function handlePicChange (pic,id) {
        setPicture(prev=>({...prev,[id]:pic}));                   
    };

    /*Picture Submission */
    function submitPic(){
        const pics=Object.keys(pictureRef.current);
        let url =  `https://storefront-dpqh.onrender.com/uploads/${projectNameRef.current}?uid=${user.id}`;
        if (pics.length > 0){
            const formData = new FormData()
            for (const id of pics){
                formData.append([id], picture[id].picture)
            }
            // console.log(url)
            // console.log(picture)
            axios.post(url, formData, { 
                headers: {
                    'Content-Type':'multipart/form-data'
                }
            }).then(res => { 
                // console.log(res);
                //
                const data=res.data
                // console.log(data)
                setPicture(prev=>({...prev,...data}))
            }).catch(error =>{
                console.log(error)
            })
        }
        // console.log(picture) 
        // axios.post(url,picture).then(res=>{
        //     console.log(res)
        // }).catch(err=>{
        //     console.log(err)
        // })       
       
    } 

    useEffect(()=>{
        user.id &&
        (async()=>{
            try {
                let url =  `https://storefront-dpqh.onrender.com/uploads/${projectNameRef.current}?uid=${user.id}`;
                // console.log(url);
                const response = await axios.get(url);
                setPicture(prev=> response.data)
            } catch (error) {
                console.log(error.response);
                // if (error.response.data==='Unauthorized'){setError(true)}
            }     
          })();
    },[user])
    

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
    const [colorVisible,setColorVisible] =useState({visible:false});
    function colorVisibility(selector){
        setColorVisible(prev=>({visible:!prev.visible,selector:selector}))
    }
    /*Sections Options Display */ 
    const [sectionsVisible,setSectionsVisible ]=useState(false);
    function sectionsVisibility(){
        setSectionsVisible(prev=>!prev)
    }
    /*Mobile View Display */
    const [mobile,setMobile] = useState(false);
    function mobileView(bool) {
        setMobile(bool)
    }  



    /*COMPONENTS STYLING*/
    const [style,setStyle,styleRef]=useState({});
    function changeStyle (item,obj){
        let temp=style[item]
        temp={...temp,...obj}
        // // console.log(temp)
        setStyle(prev=>({...prev,[item]:temp}))
        // console.log(style)
    }



    /* HIDE OR SHOW LOGOUT BUTTON*/
    const [logout,setLogout]= useState(false);
    function toggleLogout(){
        setLogout(prev=>!prev)
        // console.log(logout);
    }

    /*LOGS USER OUT*/
    
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
                    <ProfilePic src={team} text={user.business  || user.firstname }   alt="user's pic" icon={arrow} alternative='arrow down icon' onClick={toggleLogout} />
                    {logout ? <Button value="Logout" className='absolute left-[150px] top-[50px]  text-white bg-darkBlue font-fontRoboto font-semibold w-[136px] h-[45px] ' onClick={handleLogout}  /> : null}
                    <div className='text-black cursor-pointer'><Link to='/home/support'>Hire a Professional</Link> </div>
                </div>
                <div className=''>
                <i className="fa-solid fa-tv pr-4 border-r-2 border-solid border-darkBlue cursor-pointer" onClick={()=>{mobileView(false)}}></i>
                <i className="fa-solid fa-mobile ml-4 cursor-pointer" onClick={()=>{mobileView(true)}} ></i>
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
                        <SideItem className='text-orange text-xl' onClick={picVisibility} icon= {<i className="fa fa-upload"></i>}/>
                    </Side>
                    <Side className=' top-0 right-0'>
                        <SideItem className='text-bgBlue' onClick={pagesVisibility} icon={<i className="fa fa-copy text-2xl"></i>} />
                        <SideItem className='text-orange text-xl'  onClick={sectionsVisibility} icon= {<i className="fa fa-layer-group"></i>}/>
                    </Side>
                   
                { box ? <NameBox buttonText={'Save'} onClick={handleSubmit} duplicate={duplicate} user={user} checkDuplicate={checkDuplicate} /> : null }
                { pubBox ? <NameBox buttonText={'Save and Publish'} onClick={handleHosting} duplicate={duplicate} user={user} checkDuplicate={checkDuplicate} /> : null }
                <div className='mx-[5.4%]'>
                    <Outlet context={[edit,setEdit,editRef,labelVisible,pagesVisible,componentVisible,style,changeStyle,colorVisible,colorVisibility,sectionsVisible,onContentBlur,picture,handlePicChange,mobile,socialChange,social]}/>
                </div>

            </main>
            
        </> : null
    )
};


export default Templates