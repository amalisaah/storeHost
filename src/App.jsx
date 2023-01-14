import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
// import { useState, useEffect } from 'react';
import useState from 'react-usestateref'
import './App.css';
import { LoginContext } from './Context/LoginContext';
import { projectNameContext } from './Context/projectNameContext';
import { projectDataContext } from './Context/projectDataContext';
import { projectListContext } from './Context/projectListContext';
import Authentication from './pages/Authentication/Authentication';
import LandingPage from './pages/LandingPage/LandingPage';
import Home from './pages/Home/Home';
import Project from './pages/Home/Project/Project';
import Dashboard from './pages/Home/Dashboard/Dashboard';
import Support from './pages/Home/Support/Support';
import Profile from './pages/Home/Profile/Profile';
import Ecommerce from './pages/Home/Project/Ecommerce/Ecommerce';
import Blog from './pages/Home/Project/Blog/Blog';
import Finance from './pages/Home/Project/Finance/Finance';
import Templates3 from './pages/Templates/Blog/Template3/Templates3';
import Blog3 from './pages/Hosted/Blog/Blog3';
import Templates from './pages/Templates/Templates';
import { useEffect } from 'react';
import Hosted from './pages/Hosted/Hosted';
import axios from 'axios';
import { hostedDuplicates } from './utils/helperUtils';
import FinanceTemp1 from './pages/Templates/Finance/Finance1/Finance1';
import PersonalTemp1 from './pages/Templates/Finance/Finance1/Personal';
import BusinessTemp1 from './pages/Templates/Finance/Finance1/Business';
import Finance1 from './pages/Hosted/Finance/Finance1';
import Personal from './pages/Hosted/Finance/Personal';
import Business from './pages/Hosted/Finance/Business';


function App() {
  axios.defaults.withCredentials = true;
  // const [user,setUser] = useState({name:'thor odinson',id:243})
  const [user,setUser,userRef] = useState({});

  const [projectName,setProjectName,projectNameRef] = useState('');

  const [projectData,setProjectData,projectDataRef] = useState({})
  console.log(projectDataRef.current)

  /*List of all projects*/
  const [projectList,setProjectList,projectListRef] = useState([]);

  /*List of published Project */
  const [allHosted, setAllHosted,allHostedRef] = useState([]);
  function UpdateHosted (site){
    const temp=hostedDuplicates(allHosted,site);
    setAllHosted(prev=>temp ? [...prev,[...site]]:prev)
    
  }

/**HANDLE Clearing data on LOGOUT */
function clearData(params) {
  setUser({});
  setProjectName('');
  setProjectData('');
  setProjectList([]);
  setResponse('')

}



////PROJECT//////
/*Fetching Data on first render*/
  useEffect(()=>{
    let item=sessionStorage.getItem('allHosted'); // FETCH FROM BG*********
    setAllHosted(prev=>item ?[...prev,...JSON.parse(item)] : prev);
    // console.table(allHostedRef.current);
    // console.table(projectListRef.current);

  
  if (userRef.current.id){
    const path=`/dashboard/projects`;
    getData(path,true);
    }
   
  },[user])

  /*storing all hosted projects  */ //EDIT WHEN BG IS READY
  useEffect(()=>{
    //edt to be data of all hosted proj
    (projectData && Object.keys(projectDataRef.current)>0) ? sessionStorage.setItem('projectData',JSON.stringify(projectDataRef.current)): null 
       
},[projectDataRef.current])  
  useEffect(()=>{
    
    const temp = sessionStorage.getItem('projectData')
    setProjectData(temp ? JSON.parse(temp): prev)  
       
})  





  /* DATA POSTING AND DATA GETTING */
  const baseUrl = 'https://storefront-dpqh.onrender.com';
  function postData(path,data){
    (async()=>{
      try {
          const url=`${baseUrl}${path}?uid=${userRef.current.id}`;
          console.log(url);
          const val=data;
          console.log(val);
          const response = await axios.post(url,val);
          console.log(response.data) 
      } catch (error) {
          console.log(error);
          // if (error.response.data==='Unauthorized'){setError(true)}
      }     
    })();
  }

  const [response,setResponse,responseRef] = useState('')
  function getData(path,query){
    (async()=>{
      try {
          const url= query ? `${baseUrl}${path}?uid=${userRef.current.id}` : `${baseUrl}${path}`;
          console.log(url);
          const response = await axios.get(url);
          // const data = response.data
          setResponse((prev)=> response.data) 
          setProjectData(prev=>query ? response.data : prev)
      } catch (error) {
          console.log(error.response);
          // if (error.response.data==='Unauthorized'){setError(true)}
      }     
    })();
  }

  /*Clear response after use to prevent wrong data*/
  function clearResponse() {
    setResponse('')
  }

  return (
    <LoginContext.Provider value={{user,setUser,userRef}} >
      <projectNameContext.Provider value={[projectName,setProjectName,projectNameRef]} >
        <projectDataContext.Provider value={[projectData,setProjectData,projectDataRef]} >
          <projectListContext.Provider value={[projectList,setProjectList,projectListRef]} >
            <div className="App">
              <Router>
                <Routes>
                  <Route path='/' element={<LandingPage/>} />
                  <Route path='/authentication/*' element={<Authentication  />} />
                  <Route path='/home' element={<Home clearData={clearData} getData={getData} responseRef={responseRef} clearResponse={clearResponse} /> } >
                    <Route index element={<Dashboard />} />
                    <Route path='projects' element={<Project/> } >
                      <Route path='ecommerce' element={<Ecommerce/>} />
                      <Route path='Blog' element={<Blog/>} />
                      <Route path='finance' element={<Finance/>} />
                    </Route>
                    <Route path='dashboard' element={<Dashboard/>} />
                    <Route path='profile' element={<Profile/>} />
                        
                    <Route path='support' element={<Support/>} />
                  </Route>
                  <Route path='/template' element={<Templates allHosted={allHosted} allHostedRef={allHostedRef} UpdateHosted={UpdateHosted} postData={postData} />} >
                    <Route path='blog/blog-3' element={<Templates3 />} />
                    <Route path='finance/finance-1' element={<FinanceTemp1 />} >
                      <Route path='personal' element={<PersonalTemp1 />}/>
                      <Route path='business' element={<BusinessTemp1 />}/>
                    </Route>
                  </Route>
                  
                  {/* <Route path='/hosted' element={<Hosted/> } > */}
                    {allHosted.map((site,index)=>
                    <Route path={`/${site[1]}`} element={
                      
                      ({
                        'Blog-1': <h1>naana</h1>,
                        'Blog-2': <h1>naana</h1>,
                        'Blog-3': <Blog3 name={projectDataRef.current[site[1]]} />,
                        'finance-1': <Finance1 name={projectDataRef.current[site[1]]} />
                      }[site[0]] 
                      )
                      } 
                      key={index}>
                        <Route path='personal' element={<Personal /> } />
                        <Route path='business' element={<Business /> } />
                    </Route> )}
                    <Route path='*' element={<h1 className='mx-auto' ><Link to='/authentication'> GO BACK</Link></h1>} />
                  {/* <Route path='*' element={<Templates/>} /> */}
                  
                </Routes>
              </Router>
              
            </div>
          </projectListContext.Provider>
        </projectDataContext.Provider>
      </projectNameContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
