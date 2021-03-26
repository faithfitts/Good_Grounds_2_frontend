import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#create-recipe">Create!</Nav.Link>
    <Nav.Link href="#allrecipes">Explore!</Nav.Link>
    <Nav.Link href="#recipes">My Recipes</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="primary" variant="dark" expand="md">
    <Navbar.Brand href="#">
      ☕ GG2
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <NavDropdown title={user.username} id="basic-nav-dropdown" className="dropdownitem">
          <NavDropdown.Item className="dropdownitem" href="#change-password">Change Password</NavDropdown.Item>
          <NavDropdown.Divider className="dropdownitem" />
          <NavDropdown.Item className="dropdownitem" href="#sign-out">Sign Out</NavDropdown.Item>
        </NavDropdown>}
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
