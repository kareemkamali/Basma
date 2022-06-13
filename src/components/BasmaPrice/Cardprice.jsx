import React from 'react';
import classes from './Cardprice.module.css'
import Bike from '../../assets/Images/bike.png';
import Moto from '../../assets/Images/motorbike.png';
import Button from '../../shared/Button/Button';
import Card from '../../shared/UiElment/Card/Card';

const Cardprice = () => {
  return (
    <>   
    <Card>
    <img size='10px' src={Bike} alt='Bike'/>
 <h2>Basic</h2>
 <div className={classes.content}>
     <h3>49$</h3>
     <hr/>
     <p>5Gb Linux Web Space</p>
     <hr/>
     <p>5 Sql DataBase</p>
     <hr/>
     <p>24/7 Tech Support</p>
     <hr/>
     <p>Daily Backups</p>
     <hr/>
     <div className={classes.Button}>
         <Button to='/'>
             Sign Up
         </Button>
     </div>
 </div>
 </Card>
 <Card>
    <img size='10px' src={Moto} alt='Bike'/>
 <h2>Pro</h2>
 <div className={classes.content}>
     <h3>129$</h3>
     <hr/>
     <p>10Gb Linux Web Space</p>
     <hr/>
     <p>50 Sql DataBase</p>
     <hr/>
     <p>Unlimited Email</p>
     <hr/>
     <p>Daily Backups</p>
     <hr/>
     <div className={classes.Button}>
         <Button to='/'>
             Sign Up
         </Button>
     </div>
 </div>
 </Card>
 </>
  )
}

export default Cardprice