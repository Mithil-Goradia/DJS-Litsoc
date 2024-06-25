import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import Team from './pages/Team'
import Events from './pages/Events'
import Navbar from './components/Navbar'
import AOS from 'aos'
import About from './pages/About'
import Footer from './components/Footer'
import EventDetails from './pages/EventDetails'
import ScrollToTop from './components/ScrollToTop'
import ScrollUpButton from './components/ScrollUpButton'
import DJMUN24 from './pages/DJMUN24'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease'
    })
  },[])

  return (
    <div className='lg:bg-[url(./assets/bg2.png)] bg-[url(./assets/bg3.png)] bg-fixed bg-center bg-repeat bg-contain w-full min-h-screen overflow-clip'>
      <Navbar/>
      <div className='pt-24'>
        <ScrollToTop>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/team' element={<Team/>}/>
            <Route path='/events' element={<Events/>}/>
            <Route path='/DJMUN24' element={<DJMUN24/>}/>
            <Route path='/aboutus' element={<About/>}/>
            <Route path='/event-details/:name' element={<EventDetails/>}/>
          </Routes>
        </ScrollToTop>
      </div>
      <ScrollUpButton/>
      <div className='bottom-0'>
        <Footer/>
      </div>
    </div>
  )
}

export default App
