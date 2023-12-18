import React from 'react'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Nav from './Components/NavBar/NavBar';
import HeroSection from './Components/HeroSection/Hero';
import Contact from './Components/Contact/ContactSection';
import Newsletter from './Components/NewsLetter/Newsletter Sections';
import Blogs from './Components/Blogs/Blogsection';
import Teams from './Components/Teams/Teamsection';

function App() {
  return (
    <MantineProvider>
       <Nav/>
       <HeroSection/>
       <Blogs/>
       <Teams/>
       {/* <Contact/> */}
       <Newsletter/>
    </MantineProvider>
  )
}

export default App