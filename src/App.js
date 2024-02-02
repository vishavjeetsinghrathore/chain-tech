import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import {Route,Routes} from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/SignUp';
import MyProfile from './components/dashboard/MyProfile';
import Settings from './components/dashboard/Settings';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className='w-screen min-h-screen bg-richblack-900 flex flex-col font-inter'>
          <Navbar/>       
          <Routes>
            <Route path="/signup"
            element={<Signup/>}/>
            <Route/>
            <Route path="/login"
            element={<Login/>}
            />
             <Route 
      element={
        
          <Dashboard/>
     
      }
    >
      <Route path="dashboard/my-profile" element={<MyProfile />} />
      <Route path="dashboard/Settings" element={<Settings />} /> 
    
    </Route>
          </Routes>
    </div>
  );
}

export default App;
