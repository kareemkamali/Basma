import React from 'react'
import classes from './CodeChalenge.module.css';
import codeContent from './CodeApi'
import Title from '../../shared/UiElment/Title/Title';

const CodeChalenge = () => {


  return (
<>
<Title
title='Code Challenge'
desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem quas'
hr={true}


/>
<section>

{
    codeContent?.map((code,i)=>{
        return(
        <div key={i} className={classes.code_content}>
        <img src={code.icon} alt={code.name}/>
        <h2>{code.name}</h2>
        <p>{code.desc}</p>
        </div>
        )


    })
}



</section>
</>
  )
}

export default CodeChalenge