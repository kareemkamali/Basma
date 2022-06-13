import React from 'react'
import classes from './header.module.css';
const Header = (props) => {
  return (
// the header container the navigation into this box
    <div className={classes.header}>{props.children}</div>
  )
}

export default Header