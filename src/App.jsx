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


function App() {
  // const [user,setUser] = useState({name:'thor odinson',id:243})
  const [user,setUser,userRef] = useState({});

  const [projectName,setProjectName,projectNameRef] = useState('');

  const [projectData,setProjectData,projectDataRef] = useState({})

  /*List of all projects*/
  const [projectList,setProjectList,projectListRef] = useState([]);

  /*List of published Project */
  const [allHosted, setAllHosted,allHostedRef] = useState([]);
  function UpdateHosted (site){
    const temp=hostedDuplicates(allHosted,site);
    setAllHosted(prev=>temp ? [...prev,[...site]]:prev)
    
  }
  useEffect(()=>{
    let item=sessionStorage.getItem('allHosted'); // FETCH FROM BG*********
    setAllHosted(prev=>item ?[...prev,...JSON.parse(item)] : prev);
    // console.table(allHostedRef.current);
    // console.table(projectListRef.current);

    let data=sessionStorage.getItem('projectData');// FETCH FROM BG**********
    setProjectData(prev=>data ? {...JSON.parse(data)} : prev)
    // console.log(projectDataRef.current)
  },[])


  /* DATA POSTING AND DATA GETTING */
  const baseUrl = 'https://storefront-dpqh.onrender.com';
  function postData(path,data){
    (async()=>{
      try {
          const url=`${baseUrl}${path}`;
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

  const [response,setResponse] = useState(null)
  function getData(path,data){
    (async()=>{
      try {
          const url=`${baseUrl}${path}`;
          console.log(url);
          const val=data;
          const response = await axios.get(url);
          setResponse(response.data) 
      } catch (error) {
          console.log(error.response.staus);
          // if (error.response.data==='Unauthorized'){setError(true)}
      }     
    })();
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
                  <Route path='/home' element={<Home/> } >
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
                  </Route>
                  {/* <Route path='/hosted' element={<Hosted/> } > */}
                    {allHosted.map((site,index)=>
                    <Route path={`/${site[1]}`} element={
                      
                      ({
                        'Blog-1': <h1>naana</h1>,
                        'Blog-2': <h1>naana</h1>,
                        'Blog-3': <Blog3 name={projectDataRef.current[site[1]]} />,
                        'kojo': <h1>akos</h1>
                      }[site[0]] || <h1>forget the rest</h1>
                      )
                      } 
                      key={index}>
                    </Route> )}
                  {/* </Route> */}
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
