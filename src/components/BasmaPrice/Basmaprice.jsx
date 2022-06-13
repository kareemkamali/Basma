import React from 'react'
import Card from '../../shared/UiElment/Card/Card'
import Title from '../../shared/UiElment/Title/Title'
import classes from './Basmaprice.module.css'
import Bike from '../../assets/Images/bike.png';
import Moto from '../../assets/Images/motorbike.png';
import Button from '../../shared/Button/Button';
import Cardprice from './Cardprice';

const Basmaprice = () => {
  return (
<section className={classes.section}>
<Title
title='Basma Code Challenge'
hr={true}
desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. A eaque aliquid labore laborum, tenetur blanditiis maiores '
/>
<div className={classes.card}>
<Cardprice/>
</div>
<div className={classes.contact}>
<h3> Not sure what to choose?<a href='/'>Contact Us</a></h3>

</div>


</section>
  )
}

export default Basmaprice