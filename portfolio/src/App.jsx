import React from 'react'
import {Element} from "react-scroll"
import Header from './components/Navbar/header.jsx'
import Page2 from './components/UI/Page2.jsx'
import Page3 from './components/UI/Page3.jsx'
import Page4 from './components/UI/Page4.jsx'
import Skills from './components/Skills/Skills.jsx'
import Experience from './components/Experience/Experience.jsx'



const App = () => {
  return (
    <>
   
      <>
      <Element name="home"><Header/></Element>
      <Element name="about"><Page2/></Element>
      <Element name="skills"><Skills/></Element>
      <Element name="projects"><Page3/></Element>
      <Element name='experience'><Experience/></Element>
      <Element name='contact'><Page4/></Element>
      </>
    </>

  )
}

export default App