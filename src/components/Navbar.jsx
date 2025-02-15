import React, { useState } from 'react'
import { navLinks, email } from '../constants';
import lg_logo from '../assets/logo2.png'
import sm_logo from '../assets/logo_white.png'
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    const [isOpen, setisOpen] = useState(false);

  return (
    <div className="w-full fixed z-50 antialiased font-rubik bg-transparent backdrop-blur-sm border-white transition-colors duration-300">
  {/* Mobile View */}
  <div className="w-full flex flex-col px-4 relative md:hidden">
    <div className="w-full flex justify-between items-center z-50">
      <Link to="/">
        <img
          src="./litlogo.png"
          height={70}
          width={70}
          className="pt-2"
          alt="munsoc Logo"
          onClick={() => setisOpen(false)}
        />
      </Link>
      <button
        className="pointer-events-auto text-red-950 opacity-100 w-10 h-10 relative focus:outline-none mt-3"
        onClick={() => setisOpen(!isOpen)}
      >
        {/* Menu Icon */}
        <div className="block w-10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span
            className={`block rounded-full absolute h-0.5 w-9 bg-current transform transition duration-500 ease-in-out ${
              isOpen ? "-rotate-45" : "-translate-y-2.5"
            }`}
          ></span>
          <span
            className={`block rounded-full absolute h-0.5 w-9 bg-current transform transition duration-500 ease-in-out ${
              isOpen ? "translate-x-10 opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block rounded-full absolute h-0.5 w-9 bg-current transform transition duration-500 ease-in-out ${
              isOpen ? "rotate-45" : "translate-y-2.5"
            }`}
          ></span>
        </div>
      </button>
    </div>

    {/* Mobile Navigation Menu */}
    <div
      className={`w-full min-h-screen transition-all duration-500 flex flex-col items-center justify-center gap-6 absolute top-0 left-0 bg-orange-500 z-40 ${
        !isOpen && "translate-x-full"
      }`}
    >
      {navLinks.map(({ link, name }, index) => (
        <Link
          key={index}
          to={link}
          onClick={() => setisOpen(false)}
          className="nav-link nav-link-ltr text-3xl font-bold text-red-950 hover:scale-125 transition-all duration-200"
        >
          {name}
        </Link>
      ))}
    </div>
  </div>

  {/* Desktop View */}
  <nav className="w-full hidden md:flex pb-2">
    <div className="flex space-x-2 items-center justify-between lg:px-16 w-full">
      <div className="w-1/3 text-red-950 text-5xl font-bold flex items-center">
        <Link to="/" className="flex items-center">
          <img src="./litlogo.png" className="w-[80px]" />
          <p>LITSOC</p>
        </Link>
      </div>
      <div className="w-1/3 pt-3 flex space-x-7 items-start justify-center">
        {navLinks.map(({ link, name }, index) => (
          <Link
            key={index}
            to={link}
            className="nav-link nav-link-ltr text-xl font-bold leading-normal tracking-widest text-red-800 font-Quicksand"
          >
            {name}
          </Link>
        ))}
      </div>
      <div className="w-1/3 pt-4 flex md:justify-center lg:justify-end">
        <a target="_blank" rel="noopener noreferrer" href={`mailto:${email}`}>
          <div className="pointer flex items-center justify-start px-5 py-2 text-md text-red-950 hover:text-[#242424] rounded-full border-[2px] border-solid border-white font-bold leading-normal button-2">
            Contact Us
          </div>
        </a>
      </div>
    </div>
  </nav>
</div>

  )
}

export default Navbar