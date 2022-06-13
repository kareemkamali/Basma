import React from 'react'
import classes from './Title.module.css'
const Title = (props) => {
    let color='black';
    if(props.color){
        color=props.color;
    }
  return (
    <>
  <div className={classes.codeTitle}>
  <h1 style={{color:color}}>{props.title}</h1>
  {props.hr?<hr className={classes.hr}></hr>:''}
    <p style={{color:color}} className={classes.code_line}>{props.desc}</p>
   
  </div>
   </>
  )
}

export default Title