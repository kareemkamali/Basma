import React from 'react'
import Title from '../../shared/UiElment/Title/Title';
import classes from './DevicesSection.module.css';
import android from '../../assets/Images/google-play.png';
import ios from '../../assets/Images/app-store.png';

const DevicesSection = () => {
  return (
    <>  
   <section className={classes.background}>
<Title
title='Basma is available for all devices'
desc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam atque eum distinctio vero harum consectetur, velit et beatae provident obcaecati doloribus hic commodi praesentium reiciendis mollitia temporibus. Obcaecati, quis veniam.'
color='white'
></Title>

<div className={classes.devicestore}>
    <img onClick={(e)=>console.log('androud')} src={android} alt='android'></img>
    <img src={ios} alt='android'></img>
</div>
<div className={classes.footer}>
<p>*Available on Iphone,Ipod and all Android devices
</p>
</div>

   </section>

   </>
  )
}

export default DevicesSection