import React from 'react'
import { Button, Container, Image, Navbar } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Header = () => {

  const { loggedin, logout, setLoggedin, setCurrentUser } = useAuth();

  async function handleSubmit(e){
    e.preventDefault();

    const logoutPromise = logout();

    logoutPromise.then((result) => {
      console.log("logged out, loggedIn: "+ loggedin + ", res= "+ JSON.stringify(result));
      if( loggedin == true ){
        setLoggedin(false);
        setCurrentUser(null);
      }
    })
    .catch((error) => {
    })
    .finally(()=>{
    });
  }

  return (
    <Navbar bg="light" expand="md" className="border-bottom mb-4">
      <Container>
        <Navbar.Brand href='/'>
          <img src="/logo48.png" width="35" height="35" />
          <span>&nbsp;App</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='me-2 justify-content-end'>
          <Nav>
              <Nav.Item>
                <LinkContainer to='/tech'><Nav.Link>Tech</Nav.Link></LinkContainer>
              </Nav.Item>
              <Nav.Item>
                <LinkContainer to='/home'><Nav.Link>Home</Nav.Link></LinkContainer>
              </Nav.Item>
              <Nav.Item>
                <LinkContainer to='/shoes'><Nav.Link>Shoes</Nav.Link></LinkContainer>
              </Nav.Item>
              <Nav.Item>
                <LinkContainer to='/yatras'><Nav.Link>Yatras</Nav.Link></LinkContainer>
              </Nav.Item>
              <Nav.Item>
                <LinkContainer to='/orders'><Nav.Link>Orders</Nav.Link></LinkContainer>
              </Nav.Item>
              <Nav.Item id='login-button'>
                  { loggedin && 
                      <LinkContainer to='/logout'>
                          <Button onClick={handleSubmit}>Logout</Button>
                      </LinkContainer>
                  } 
                  { !loggedin && 
                      <LinkContainer to='/login'>
                          <Button>Login</Button>
                      </LinkContainer>
                  } 
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header

/*
<header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"> 
      <Link className='me-md-auto text-dark text-decoration-none' to='/'>
        <span class="fs-4 text-decoration-none">
          <Image src='/logo48.png'></Image>
        </span>
      </Link>
      <Nav className='justify-content-end'>
        <Nav.Item>
            <LinkContainer to='/tech'>
                <Nav.Link>Tech</Nav.Link>
            </LinkContainer>
        </Nav.Item>
        <Nav.Item>
            <LinkContainer to='/home'>
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
        </Nav.Item>
        <Nav.Item>
            <LinkContainer to='/shoes'>
                <Nav.Link>Shoes</Nav.Link>
            </LinkContainer>
        </Nav.Item>     
        <Nav.Item>
            <LinkContainer to='/yatras'>
                <Nav.Link>Yatras</Nav.Link>
            </LinkContainer>
        </Nav.Item>            
        <Nav.Item>
            <LinkContainer to='/orders'>
                <Nav.Link>Orders</Nav.Link>
            </LinkContainer>
        </Nav.Item>
        <Nav.Item id='login-button'>
          { loggedin && 
              <LinkContainer to='/logout'>
                  <Button onClick={handleSubmit}>Logout</Button>
              </LinkContainer>
          } 
          { !loggedin && 
              <LinkContainer to='/login'>
                  <Button>Login</Button>
              </LinkContainer>
          } 
        </Nav.Item>
      </Nav>
    </header>

*/