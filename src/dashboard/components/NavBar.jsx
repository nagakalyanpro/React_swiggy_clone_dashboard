import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import {Link, useNavigate } from 'react-router-dom';

import 'rsuite/dist/rsuite.min.css';

const NavBar = ({ onSelect, activeKey, ...props }) => {

  const isLoggedIn = localStorage.getItem('token') !== null;

  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('vendorId');
    // Perform any additional logout actions if needed
    navigate('/')
    // Redirect or update state to reflect the logged-out state
  };

  return (
    <Navbar {...props} className='navSection'>
      {isLoggedIn ? (
        <Navbar.Brand>
          <Link to="/main-page"
          className='nav-link'
          >Vendor Dashboard</Link>
        </Navbar.Brand>
      ) : (
        <Navbar.Brand>Vendor Dashboard</Navbar.Brand>
      )}
    {isLoggedIn && (
        <Nav onSelect={onSelect} activeKey={activeKey}>
          <Nav.Item eventKey="1">Home</Nav.Item>
          <Nav.Item eventKey="2">News</Nav.Item>
          <Nav.Item eventKey="3">Products</Nav.Item>
        </Nav>
      )}
    <Nav pullRight>
    {!isLoggedIn ? (
          <Nav.Item icon={<CogIcon />}>Login</Nav.Item>
        ) : (
          <Nav.Item onClick={handleLogout}>Logout</Nav.Item>
        )}
      {/* <Nav.Menu title="Login">
        <Nav.Item eventKey="4">Company</Nav.Item>
        <Nav.Item eventKey="5">Team</Nav.Item>
        <Nav.Item eventKey="6">Contact</Nav.Item>
      </Nav.Menu> */}
    </Nav>
  </Navbar>
  )
}

export default NavBar