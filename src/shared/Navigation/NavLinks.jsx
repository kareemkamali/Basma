import React from 'react'
import classes from './NavLinks.module.css';
import { NavLink } from 'react-router-dom';
const NavLinks = () => {
  return (
      //the navLink i nedd to pass them to navigation
<ul className={classes.nav_links}>
   
   <li>
     <NavLink to='/home-page'  >
        Home
     </NavLink>
   </li>
   <li>
     <NavLink to='/' >
       Features
     </NavLink>
   </li>
   <li>
     <NavLink to='/' >
      Pages
     </NavLink>
   </li>
   <li>
     <NavLink to='/' >
     ScreenShots
     </NavLink>
   </li>
   <li>
     <NavLink to='/' >
    Pricing
     </NavLink>
   </li>
   <li>
     <NavLink to='/' >
       Contact
     </NavLink>
   </li>
   </ul>
  )
}

export default NavLinks