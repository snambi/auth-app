import React from 'react'
import { Button, NavLink } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg> */}
        <span class="fs-4">Logo</span>
      </a>
      
      <Nav className='justify-content-end'>
        <Nav.Item>
            <LinkContainer to='/yatra'>
                <Nav.Link>Yatras</Nav.Link>
            </LinkContainer>
        </Nav.Item>
        <Nav.Item>
            <LinkContainer to='/temples'>
                <Nav.Link>Temples</Nav.Link>
            </LinkContainer>
        </Nav.Item>
        <Nav.Item>
            <LinkContainer to='/signup'>
                <Nav.Link>Sign Up</Nav.Link>
            </LinkContainer>
        </Nav.Item>
        <Nav.Item>
            <LinkContainer to='/login'>
                <Button>Login</Button>
            </LinkContainer>
        </Nav.Item>
      </Nav>
    </header>
  )
}

export default Header