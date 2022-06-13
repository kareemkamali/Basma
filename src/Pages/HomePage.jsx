import React from 'react'
import CodeChalenge from '../components/CodeChalenge/CodeChalenge'
import Hero from '../components/HeroSection/Hero'
import ShareSection from '../components/ShareSection/ShareSection'
import WorkFaster from '../components/WorkFaster/WorkFaster'
import MainNavigation from '../shared/Navigation/MainNavigation'
import SecondCodeChallenge from '../components/SecondCodeChallenge/SecondCodeChallenge'
import Basmaprice from '../components/BasmaPrice/Basmaprice'
import DevicesSection from '../components/BasmaDevices/DevicesSection'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import ContactUs from '../components/ContactUs/ContactUs'

const HomePage = () => {
  return (
   <>
   
   <MainNavigation></MainNavigation>
   <Hero/>
   <CodeChalenge/>
   <WorkFaster/>
   <ShareSection/>
   <SecondCodeChallenge/>
   <Basmaprice/>
   <DevicesSection/>
   <NewsLetter/>
   <ContactUs/>
   </>
  )
}

export default HomePage