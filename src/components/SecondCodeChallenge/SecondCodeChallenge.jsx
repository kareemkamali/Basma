import classes from './SecondCodeChallenge.module.css';
import donwload from '../../assets/Images/download.png';
import settings from '../../assets/Images/settings.png'
import app from '../../assets/Images/app.png'
import {MdArrowForwardIos} from 'react-icons/md';
import Title from '../../shared/UiElment/Title/Title';

const SecondCodeChallenge = () => {
  return (
  <section className={classes.section}>

<Title
title='Code Challenge'
desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod accusantium asperiores quia modi quas amet possimus ex?'
hr={false}
color='white'


/>
    <div className={classes.content_desc}>
      <div className={classes.content}>
<img src={donwload} alt='download'/>
<h2>Install app</h2>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore </p>
      </div>
      <MdArrowForwardIos color='white' size={'50px'}/>
      <div className={classes.content}>
<img src={settings} alt='download'/>
<h2>Setup Profile</h2>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore </p>
      </div>
      <MdArrowForwardIos color='white' size={'50px'}/>
      <div className={classes.content}>
<img src={app} alt='download'/>
<h2>Enjoy The features!</h2>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore </p>
      </div>
    </div>
    </section>
  )
}

export default  SecondCodeChallenge
