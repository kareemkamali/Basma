import Button from '../../shared/Button/Button';
import React from 'react';
import {FiLayers} from 'react-icons/fi';
import {MdInvertColors} from 'react-icons/md'
import {FaBrush} from 'react-icons/fa'
import phoneImage from '../../assets/Images/thumb-2.png'
import classes from './ShareSection.module.css'
const ShareSection = () => {
  return (
<section className={classes.share}>
   
    <div className={classes.left}>
        <h1>Share your photos with friends easily</h1>
  <div className={classes.desc}>
<FiLayers className={classes.icons} size={'15px'}/>
    <p> Fully layered dolor sit amet,consectetur adipisicing elit.
        focere,nobis,id expedita dolores officils laborisam.
    </p>
  </div>
  <div className={classes.desc}>
<FaBrush className={classes.icons} size={'15px'}/>
    <p> Customizable design dolor sit amet,consectetur adiplisicing elit.
        Forced,nablis,id expedita dolores officils laborisom
    </p>
  </div>
  <div className={classes.desc}>
<MdInvertColors className={classes.icons} size={'15px'}/>
    <p> 
        Drop ipsum dolor sit amet,consectetur adipisicing elit.
        Forces,nobis,id expedita officils laboriosam.  </p>
  </div>
  <div className={classes.desc}>
<FaBrush className={classes.icons} size={'15px'}/>
    <p>Marketing chart dolor sit amet,consectetur adipisicing elit.
        focere,nobis,id expedita dolores officils laborisam.
    </p>
  </div>
  <div className={classes.button}>
  <Button to='/'> LearnMore</Button>

  </div>

    </div>
    <div className={classes.image}>
        <img src={phoneImage} alt='sharePhone'></img>
    </div>
</section>
  )
}

export default ShareSection