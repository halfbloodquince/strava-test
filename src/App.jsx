import Home from './pages/home'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StravaRedirect from './pages/StravaRedirect';
import { useState } from 'react';
import YourDistance from './pages/YourDistance';

function App() {


  const [userData, setUserData] = useState({})

  return (
    <BrowserRouter>
      <Routes>
                <Route path="/" element={<Home />} exact={true} />
                <Route path="/redirect/*" element={<StravaRedirect setUserData={setUserData} userData={userData}/>} />
                <Route path="/yourdistance" element={<YourDistance userData={userData}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
