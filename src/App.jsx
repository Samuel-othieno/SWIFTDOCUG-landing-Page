import React from 'react'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Nav from './Components/NavBar/NavBar';
import HeroSection from './Components/HeroSection/Hero';
import Teams from './Components/Teams/Teamsection';
import { FeaturesCards } from './Components/Features section/FeaturesCards';
import { FaqWithBg } from './Components/Frequently asked questions/FaqWithBg';
import { ContactUs } from './Components/Contact us section/ContactUs';
import { FooterSimple } from './Components/Footers/FooterSimple';
import Testimonies from './Components/Comments/Testimonies';


function App() {
  return (
    <MantineProvider >
       <Nav/>
       <HeroSection/>
       <FeaturesCards/>
       <Teams/>
       <Testimonies/>
       <ContactUs/>
       <FaqWithBg/>
       <FooterSimple/>
    </MantineProvider>
  )
}

export default App