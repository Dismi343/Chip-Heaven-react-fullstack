import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/navigation/navBar';
import Home from "./pages/Home";
import About from './pages/about';
import "./index.css";
import UserPage from './pages/User';
//import SideBar from './components/navigation/SideBar';





function App() {
 

  return (
    <>
     
    <Router>
      <div >
        <NavBar/>
        {/* <SideBar /> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/user" element={<UserPage/>}  />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
      
   
    </>
  )
}

export default App;
