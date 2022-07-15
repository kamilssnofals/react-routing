import React from 'react'
import { Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink } from './NavBarElements'
export const Navbar = () => {
  return (
   <>
     <Nav>
      <NavLink to='/'>
        <h1>Logo</h1>
      </NavLink>
      <Bars/>
      <NavMenu>
      <NavLink to='/about' activeStyle>
        About
      </NavLink>
      <NavLink to='/servicers' activeStyle>
        Services
      </NavLink>
      <NavLink to='/contact-us' activeStyle>
       Contact Us
      </NavLink>
      <NavLink to='sign-up' activeStyle>
        Sign Up
      </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to='Sign-in22pz'>Sign in</NavBtnLink>
      </NavBtn>
     </Nav>
    </>
  )
}
