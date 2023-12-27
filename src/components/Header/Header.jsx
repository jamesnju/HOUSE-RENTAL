import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
    {/* <nav className='container'>
        <div className="logo">
            <span><li><Link to='/'>HOUSEING</Link></li></span>
        </div>
        <ul className='links'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/services'>Services</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
        </nav> */}
           {/* <Navbar expand="lg" className="bg-body-dark">
    <Container  fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contact us</Nav.Link>
            <Nav.Link as={Link} to='/about'>About us</Nav.Link>

            
        </Nav>
        
        </Navbar.Collapse>
    </Container>
    </Navbar> */}



        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand to="/">HOUSING</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="links ml-auto">
            <li><Nav.Link as={NavLink} to="/" exact>
              Home
            </Nav.Link></li>
            <li><Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link></li>
            <li><Nav.Link as={NavLink} to="/services">
              Services
            </Nav.Link></li>
            <li><Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link></li>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      
    
    </>
  )
}

export default Header