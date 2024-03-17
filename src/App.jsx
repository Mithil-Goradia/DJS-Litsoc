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

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    })
  },[])

  return (
    <div className=''>
      <Navbar/>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
