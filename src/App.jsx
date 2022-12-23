import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import { LoginContext } from './Context/LoginContext';
import { projectNameContext } from './Context/projectNameContext';
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
import Templates1 from './pages/Templates/Blog/Template1/Templates1';



function App() {
  // const [user,setUser] = useState({name:'thor odinson',id:243})
  const [user,setUser] = useState({});

  const [projectName,setProjectName] = useState('m')

  return (
    <LoginContext.Provider value={{user,setUser}} >
      <projectNameContext.Provider value={[projectName,setProjectName]} >
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
                {/* <Route path='*' element={<h1><Link to='/authentication'> No Page</Link></h1>} /> */}
                <Route path='*' element={<Templates1/>} />
            </Routes>
          </Router>
          
        </div>
      </projectNameContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
