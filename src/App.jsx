import React from 'react'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Nav from './Components/NavBar/NavBar';
import HeroSection from './Components/HeroSection/Hero';
import Teams from './Components/Teams/Teamsection';
import { FeaturesCards } from './Components/Features section/FeaturesCards';
import { FaqWithBg } from './Components/Frequently asked questions/FaqWithBg';
import { ContactUs } from './Components/Contact us section/ContactUs';


function App() {
  return (
    <MantineProvider>
       <Nav/>
       <HeroSection/>
       <FeaturesCards/>
       <Teams/>
       <ContactUs/>
       <FaqWithBg/>
    </MantineProvider>
  )
}

export default App