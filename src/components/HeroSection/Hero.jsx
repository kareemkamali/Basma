import React from 'react'
import classes from './Hero.module.css';
import heroImage from '../../assets/Images/thumb-1.png';
import Button from '../../shared/Button/Button';
const Hero = () => {
  return (
   <section className={classes.hero_section}>
  
   <div className={classes.hero_content}>
       <h1>Creative way to Showcase your App</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ex voluptatem excepturi enim expedita vel. Cumque, rem placeat laboriosam, tenetur quam, earum incidunt voluptate alias illo aperiam possimus quasi tempora!</p>
       <div className={classes.hero_button}>
       <Button
       to='/'
       >
         Get Started
       </Button>
       </div>
    
         </div>

   <div className={classes.hero_image}>
       <img src={heroImage} alt='hero'></img>
   </div>
   </section>
  )
}

export default Hero