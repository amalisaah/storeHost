import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import { LoginContext } from './Context/LoginContext';
import Authentication from './pages/Authentication/Authentication';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';


function App() {
  // const [user,setUser] = useState({name:'thor odinson',id:243})
  const [user,setUser] = useState({})

  return (
    <LoginContext.Provider value={{user,setUser}} >
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/authentication/*' element={<Authentication  />} />
          <Route path='/dashboard' element={<Profile/>} />
          <Route path='*' element={<h1><Link to='/authentication'> No Page</Link></h1>} />
        </Routes>
      </Router>
      
    </div>
    </LoginContext.Provider>
  );
}

export default App;
