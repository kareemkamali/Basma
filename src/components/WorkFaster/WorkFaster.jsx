
import React from 'react'
import classes from './WorkFaster.module.css';
import checkIcon from '../../assets/Images/check.svg';
import phoneImage from '../../assets/Images/thumb-2 (1).png'
import { BsFillBellFill,BsFillCameraVideoFill } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

const WorkFaster = () => {
  return (
  <section className={classes.background}>
   <div className={classes.phoneImage}>
   <img src={phoneImage} alt='phone Image'></img>

   </div>
    <div className={classes.content}>
        <h1>Work faster with powerful tools</h1>
        <ul className={classes.lists}>

          <div className={classes.list}>
          <img alt='check' src={checkIcon}/>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Loerum ipsim dolor sit amet consectetut
             </p>  
          </div>
          <div className={classes.list}>
          <img src={checkIcon}/>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Loerum ipsim dolor sit amet consectetut
             </p>  
          </div>
          <div className={classes.list}>
          <img src={checkIcon}/>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Loerum ipsim dolor sit amet consectetut
             </p>  
          </div>
          <div className={classes.list}>
          <img src={checkIcon}/>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Loerum ipsim dolor sit amet consectetut
             </p>  
          </div>
          <div className={classes.list}>
          <img src={checkIcon}/>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Loerum ipsim dolor sit amet consectetut
             </p>  
          
          </div>
          <div className={classes.contact}>
<BsFillBellFill size='10px' className={classes.icon}/>
<FiMail size='10px' className={classes.icon}/>
<BsFillCameraVideoFill size='10px' className={classes.icon}/>
</div>
        </ul>
        
    </div>
    
  </section>
  )
}

export default WorkFaster