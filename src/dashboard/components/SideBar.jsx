import React, { useEffect, useState } from 'react';
import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import { Link, useParams } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import FirmReg from './FirmReg';
import AddProduct from './AddProduct';

const SideBar = () => {
  const [vendorId, setVendorId] = useState(null);
  const [showMain, setShowMain] = useState(false)
  const [addFirm, setAddFirm] = useState(false);
  const [addProduct, setAddProduct] = useState(false);

  useEffect(() => {
    const storedVendorId = localStorage.getItem('vendorId');
    setVendorId(storedVendorId);
  }, []);

  const firmHandler = ()=>{
    setAddFirm(true);
    setAddProduct(false)
  }
  const productHandler = ()=>{
    setAddProduct(true)
    setAddFirm(false);
  }



  return (
<>
<div className="mainSection sidebarSection">
<div className="content">
<div style={{ width: 240, height: '100vh' }}>
    <Sidenav defaultOpenKeys={['3', '4']} className='sideBar'>
      <Sidenav.Body className='sideBar-container'>
        <Nav activeKey="1" className='sideBarNav'>
          <Nav.Item eventKey="1" icon={<DashboardIcon />}>
            Dashboard
          </Nav.Item>
          <Nav.Item eventKey="2" icon={<GroupIcon />} onClick={firmHandler}>
            Add Firm
          </Nav.Item>
          <Nav.Menu eventKey="3" title="Products" icon={<MagicIcon />}>
            <Nav.Item eventKey="3-2">
            <Link to={`/all-products/${vendorId}`}
            className='link'
            >
              All Products
            </Link>
              </Nav.Item>
            <Nav.Item eventKey="3-1" onClick={productHandler}>Add Product</Nav.Item>
            {/* <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
            <Nav.Item eventKey="3-4">Visit Depth</Nav.Item> */}
          </Nav.Menu>
          {/* <Nav.Menu eventKey="4" title="Settings" icon={<GearCircleIcon />}>
            <Nav.Item eventKey="4-1">Applications</Nav.Item>
            <Nav.Item eventKey="4-2">Channels</Nav.Item>
            <Nav.Item eventKey="4-3">Versions</Nav.Item>
            <Nav.Menu eventKey="4-5" title="Custom Action">
              <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
              <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
            </Nav.Menu>
          </Nav.Menu> */}
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  
  </div>
  <div className="collection">
  {addFirm && <FirmReg />}
  {addProduct && <AddProduct />}
  </div>
</div>
  </div>
</>
  )
}

export default SideBar