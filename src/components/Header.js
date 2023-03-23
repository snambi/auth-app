import React from 'react'
import { Button } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      
      <Link className='me-md-auto text-dark text-decoration-none' to='/'>
        <span class="fs-4 text-decoration-none">Logo</span>
      </Link>
      
      <Nav className='justify-content-end'>
        <Nav.Item>
            <LinkContainer to='/yatras'>
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