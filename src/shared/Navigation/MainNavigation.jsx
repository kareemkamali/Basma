import React,{useState} from 'react'
import Header from './Header'
import classes from './MainNavigation.module.css';
import NavLinks from './NavLinks';

const MainNavigation = () => {

  return (
    <>

    <Header>
     
        <div  className={classes.polygone}></div>
   
        <div className={classes.main_navigation}>
            <NavLinks></NavLinks>
        </div>
    </Header>
    </>
  )
}

export default MainNavigation