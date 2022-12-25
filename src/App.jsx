import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
// import { useState, useEffect } from 'react';
import useState from 'react-usestateref'
import './App.css';
import { LoginContext } from './Context/LoginContext';
import { projectNameContext } from './Context/projectNameContext';
import { projectDataContext } from './Context/projectDataContext'
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
import Templates from './pages/Templates/Templates';



function App() {
  // const [user,setUser] = useState({name:'thor odinson',id:243})
  const [user,setUser] = useState({});

  const [projectName,setProjectName,projectNameRef] = useState('');

  const [projectdata,setProjectData,projectDataRef] = useState({})

  return (
    <LoginContext.Provider value={{user,setUser}} >
      <projectNameContext.Provider value={[projectName,setProjectName,projectNameRef]} >
        <projectDataContext.Provider value={[projectdata,setProjectData,projectDataRef]} >
          <div className="App">
            <Router>
              <Routes>
                <Route path='/' element={<LandingPage/>} />
                <Route path='/authentication/*' element={<Authentication  />} />
                <Route path='/home' element={<Home/>} >
                  <Route path='projects' element={<Project/> } >
                    <Route path='ecommerce' element={<Ecommerce/>} />
                    <Route path='Blog' element={<Blog/>} />
                    <Route path='finance' element={<Finance/>} />
                  </Route>
                  <Route path='dashboard' element={<Dashboard/>} />
                  <Route path='profile' element={<Profile/>} />
                      
                  <Route path='support' element={<Support/>} />
                </Route>
                <Route path='/template' element={<Templates/>} >
                  <Route path='blog/template 3' element={<Templates3 />} />
                </Route>
                  {/* <Route path='*' element={<h1><Link to='/authentication'> No Page</Link></h1>} /> */}
                <Route path='*' element={<Templates/>} />
              </Routes>
            </Router>
            
          </div>
        </projectDataContext.Provider>
      </projectNameContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
