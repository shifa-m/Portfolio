import React from 'react'
import {Element} from "react-scroll"
import Header from './components/Navbar/header.jsx'
import Page2 from './components/UI/Page2.jsx'
import Page3 from './components/UI/Page3.jsx'
import Page4 from './components/UI/Page4.jsx'
import Process from './components/Card/Process.jsx'
import Experience from './components/Experience/Experience.jsx'



const App = () => {
  return (
    <div className='overflow-hidden cursor-pointer'>
   
      <div>
      <Element name="home"><Header/></Element>
      <Element name="about"><Page2/></Element>
      <Element name="process"><Process/></Element>
      <Element name="projects"><Page3/></Element>
      <Element name='experience'><Experience/></Element>
      <Element name='contact'><Page4/></Element>
      </div>
    </div>

  )
}

export default App