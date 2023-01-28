import React from 'react'
import './App.css'
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import Membership from './Components/Membership'
import Testimonials from './Components/Testimonials'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
import Welcome from './Components/Welcome'

function App() {

  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <Welcome/>
      <Gallery/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App
