import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import Team from './pages/Team'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import Navbar from './components/Navbar'
import AOS from 'aos'
import About from './pages/About'
import Footer from './components/Footer'

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
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/aboutus' element={<About/>}/>
        </Routes>
      </div>
      <div className='bottom-0'>
        <Footer/>
      </div>
    </div>
  )
}

export default App
