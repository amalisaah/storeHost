import { BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom';
// import { useState, useEffect } from 'react';
import './App.css';
import useState from 'react-usestateref'
import { useEffect } from 'react';
import axios from 'axios';
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
import Templates1 from './pages/Templates/Blog/Template1/Templates1';
import Blog1 from './pages/Hosted/Blog/Blog1';
import Templates2 from './pages/Templates/Blog/Template2/Templates2';
import Blog2 from './pages/Hosted/Blog/Blog2';
import Templates from './pages/Templates/Templates';
import FinanceTemp1 from './pages/Templates/Finance/Finance1/Finance1';
import PersonalTemp1 from './pages/Templates/Finance/Finance1/Personal';
import BusinessTemp1 from './pages/Templates/Finance/Finance1/Business';
import Finance1 from './pages/Hosted/Finance/Finance1';
import Personal from './pages/Hosted/Finance/Personal';
import Business from './pages/Hosted/Finance/Business';
import EcomHome from './pages/Templates/Ecommerce/Pages/EcomHome';
import Cart from './pages/Templates/Ecommerce/Pages/Cart';
import Checkout from './pages/Templates/Ecommerce/Pages/Checkout';
import Delivery from './pages/Templates/Ecommerce/Pages/Delivery';
import Payment from './pages/Templates/Ecommerce/Pages/Payment';
import ProductDescription from './pages/Templates/Ecommerce/Pages/ProductDescription';




function App() {
  axios.defaults.withCredentials = true;
  // const [user,setUser] = useState({name:'thor odinson',id:243})
  const [user,setUser,userRef] = useState({});

  const [projectName,setProjectName,projectNameRef] = useState('');

  const [projectData,setProjectData,projectDataRef] = useState({})
  

  /*List of all projects*/
  const [projectList,setProjectList,projectListRef] = useState([]);

  /*Temporarily stores response*/
  const [response,setResponse,responseRef] = useState('')

  /*Dashboard values */
  const [dashboard,setDashboard] = useState({})

  /*List of published Project */
  const [allHosted, setAllHosted,allHostedRef] = useState([]);
  const [check,setCheck]=useState(false)
  function UpdateHosted (site,name,path){

    (async()=>{
      try {
          const url=`${baseUrl}/dashboard/projects`;
          
          const data={store:name,type:path};
          // console.log(data,'post');
          const response = await axios.put(url,data);
          setCheck(prev=>response.status<205 ? true : false )
           
      } catch (error) {
          // console.log(error);
          // if (error.response.data==='Unauthorized'){setError(true)}
      }     
    })();
    
  }

/**HANDLE Clearing data on LOGOUT */
function clearData() {
  setUser({});
  setProjectName('');
  setProjectData('');
  setProjectList([]);
  setResponse('')

}



////PROJECT//////
/*Fetching Data on first render*/
  useEffect(()=>{
    const path=`/hstores`;
    getData(path,false,true);
    
   
  },[])

  useEffect(()=>{
    let item=sessionStorage.getItem('allHosted'); // FETCH FROM BG*********
    setAllHosted(prev=>item ?[...JSON.parse(item)] : prev);
    // console.table(allHostedRef.current);
    // console.table(projectListRef.current);

  
  if (userRef.current.id){
    const path=`/dashboard/projects`;
    getData(path,true);
    }
   
  },[user])

  /*storing all hosted projects  */ //EDIT WHEN BG IS READY
  useEffect(()=>{
    //edit to include data of all hosted proj
     sessionStorage.setItem('projectData',JSON.stringify(projectDataRef.current)) 
       
},[projectDataRef.current])  
  useEffect(()=>{
    
    const temp = sessionStorage.getItem('projectData')
    setProjectData(prev =>temp ? JSON.parse(temp): prev)  
       
},[responseRef.current])  


////////DASHBOARD ///////////////////////////////
  
useEffect(()=>{

  if (userRef.current.id){
    const path=`/dashboard`;
    getData(path,true,false,true);
  }
  
  },[user])

  useEffect(()=>{
  
  const item=JSON.stringify(dashboard)
  sessionStorage.setItem('dashboard',item)
  
  },[dashboard])




  /* DATA POSTING AND DATA GETTING */
  const baseUrl = 'https://storefront-dpqh.onrender.com';
  function postData(path,data){
    (async()=>{
      try {
          const url=`${baseUrl}${path}?uid=${userRef.current.id}`;
          // console.log(data,'data');
          const val=data;
          // console.log(val,'post');
          const response = await axios.post(url,val);
          // console.log(response.data) 
      } catch (error) {
          console.log(error);
          // if (error.response.data==='Unauthorized'){setError(true)}
      }     
    })();
  }

  
  function getData(path,query,host,dash){
    (async()=>{
      try {
          let url= query ? `${baseUrl}${path}?uid=${userRef.current.id}` : `${baseUrl}${path}`;
          // console.log(url);
          const response = await axios.get(url);
          // const data = response.data
          setResponse((prev)=> response.data) 
          setProjectData(prev=>(query && !dash) ? response.data : prev);
          setAllHosted(prev=>(!query && host) ? response.data : prev);
          setDashboard(prev=>response.data.summary ? response.data : prev)  ///DASHBOARD
          // console.log(response.data)
      } catch (error) {
          console.log(error.response);
          // if (error.response.data==='Unauthorized'){setError(true)}
      }     
    })();
  }

  /*Deleting Projects*/
  function deleteProject(name){
    (async()=>{
      try {
          let path = '/dashboard/projects'
          let url= `${baseUrl}${path}?uid=${userRef.current.id}&name=${name}`
          // console.log(url);
          const response = await axios.delete(url);
          setProjectData(prev=>response.data)
          // console.log(response.data)
      } catch (error) {
          console.log(error);
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
                  <Route path='/home' element={<Home clearData={clearData} responseRef={responseRef} clearResponse={clearResponse} allHostedRef={allHostedRef} /> } >
                    <Route index element={<Dashboard dashboard={dashboard} />} />
                    <Route path='projects' element={<Project postData={postData} deleteProject={deleteProject} /> } >
                      <Route path='ecommerce' element={<Ecommerce/>} />
                      <Route path='Blog' element={<Blog/>} />
                      <Route path='finance' element={<Finance/>} />
                    </Route>
                    <Route path='dashboard' element={<Dashboard dashboard={dashboard} />} />
                    <Route path='profile' element={<Profile/>} />
                        
                    <Route path='support' element={<Support/>} />
                  </Route>
                  <Route path='/template' element={<Templates allHosted={allHosted} allHostedRef={allHostedRef} UpdateHosted={UpdateHosted} postData={postData} check={check} />} >
                    <Route path='blog/blog-1/*' element={<Templates1 />} />
                    <Route path='blog/blog-2/*' element={<Templates2 />} />
                    <Route path='blog/blog-3/*' element={<Templates3 />} />
                    <Route path='finance/finance-1' element={<FinanceTemp1 />} >
                      <Route path='personal' element={<PersonalTemp1 />}/>
                      <Route path='business' element={<BusinessTemp1 />}/>
                    </Route>
                    <Route path='ecom/ecomHome/cart' element={<Cart/>} />
                    <Route path='ecom/ecomHome/checkout' element={<Checkout/>} />
                    <Route path='ecom/ecomHome/delivery' element={<Delivery/>} />
                    <Route path='ecom/ecomHome/payment' element={<Payment/>} />
                    <Route path='ecom/ecomHome/product' element={<ProductDescription/>} />
                    <Route path='ecom/ecomHome/*' element={<EcomHome/>} />
                  </Route>
                    {allHosted.map((site,index)=>
                    <Route path={site.store} element={
                      
                      ({
                        'Blog-1': <Blog1 data={site.features} />,
                        'Blog-2': <Blog2 data={site.features} />,
                        'Blog-3': <Blog3 data={site.features} />,
                        'finance-1': <Finance1 data={site.features} />
                      }[site.type] 
                      )
                      } 
                      key={index}>
                        <Route path='personal' element={<Personal /> } />
                        <Route path='business' element={<Business /> } />
                    </Route> )}
                    {/* <Route path='*' element={<Navigate to='/' />} /> */}
                    {/* <Route path='*' element={<h1 className='mx-auto' ><Link to='/authentication'> GO BACK</Link></h1>} /> */}
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
