import React, {useState} from 'react'
import NavBar from './dashboard/components/NavBar';
import SideBar from './dashboard/components/SideBar';
import MainPage from './dashboard/pages/MainPage';
import { Routes, Route } from 'react-router-dom';

import './App.css'
import FirmProducts from './dashboard/components/FirmProducts';
import LoginForm from './dashboard/components/Login';
import AddProduct from './dashboard/components/AddProduct';
import FirmReg from './dashboard/components/FirmReg';

const App = () => {
  const [activeKey, setActiveKey] = useState(null);
  
  return (
    <div>
      <NavBar appearance="inverse" activeKey={activeKey} onSelect={setActiveKey}/>
      <Routes>
      <Route path='/' element= {<LoginForm />}/>
      <Route path='/main-page' element= {<SideBar />}/>
      <Route path='/add-product' element= {<AddProduct />}/>
      <Route path='/firm-reg' element= {<FirmReg />}/>
      <Route path='/all-products/:vendorId' element= {<FirmProducts />}/>
      </Routes>
    
    </div>
  )
}

export default App