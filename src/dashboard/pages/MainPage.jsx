import React from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Login from '../components/Login'
import FirmReg from '../components/FirmReg'
import AddProduct from '../components/AddProduct'
import FirmProducts from '../components/FirmProducts'

const MainPage = ({addFirm}) => {
  console.log(addFirm);
  return (
    <div className='mainSection'>
        <div className="content">
            <div className="sideBar">
                <SideBar />
            </div>
            <div className="collection">
    
                {/* <Login /> */}
                <FirmReg />
                {/* <AddProduct /> */}
                {/* {showFirm && <FirmReg />} */}
                {/* <FirmProducts /> */}
            </div>
        </div>
    </div>
  )
}

export default MainPage