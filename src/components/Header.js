import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"

const header = props => {
  return (
    <div>
      <Navbar className="myNav p-4 mb-4" bg="light" expand="lg">
        <Navbar.Brand href="/">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
header.defaultProps = {
  title: "Blog",
}

export default header
