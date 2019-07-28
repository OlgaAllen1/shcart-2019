import { Nav, Navbar, NavbarBrand, NavLink } from 'reactstrap'
import React from 'react'

export default () => (
  <Navbar dark={true} className="bg-dark">
    <NavbarBrand>Shopping Cart</NavbarBrand>
    <Nav>
      <NavLink>Products</NavLink>
      <NavLink>Cart</NavLink>
    </Nav>
  </Navbar>
)
