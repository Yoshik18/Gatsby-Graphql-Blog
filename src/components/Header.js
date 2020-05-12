import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { graphql } from "gatsby"
import { Link } from "gatsby"

const header = ({ data }) => {
  console.log(data)
  return (
    <div>
      <Navbar className="myNav p-4" bg="light" expand="lg">
        <Navbar.Brand href="/">Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* {data.allWordpressWpApiMenusMenusItems.nodes.items.map(item => (
              <Nav.Link as={Link} to={item.slug}>
                {item.title}
              </Nav.Link>
            ))} */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export const query = graphql`
  {
    allWordpressWpApiMenusMenusItems {
      nodes {
        items {
          title
          url
        }
      }
    }
  }
`

export default header
