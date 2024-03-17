import React, { useState } from 'react'
import { navLinks, email } from '../constants';
import lg_logo from '../assets/logo2.png'
import sm_logo from '../assets/logo_white.png'
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    const [isOpen, setisOpen] = useState(false);

  return (
    <div className="w-full fixed z-50 antialiased font-rubik backdrop-blur-sm bg-transparent border-white transition-colors duration-300">
    <div className="w-full flex flex-col px-4 relative md:hidden">
      <div className="w-full flex justify-between items-center z-50">
        <Link to="/">
          <img
            src={sm_logo} // mobile screen
            height={70}
            width={70}
            className='pt-2'
            alt="munsoc Logo"
            onClick={() => {
              setisOpen(false);
            }}
          />
        </Link>
        <button
          className="pointer-events-auto text-white opacity-100 w-10 h-10 relative focus:outline-none"
          onClick={() => {
            setisOpen(!isOpen);
          }}>
          {/* menu icon */}
          <div className="block w-10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <span
              className={`block rounded-full absolute h-0.5 w-9 bg-current transform transition duration-500 ease-in-out ${
                isOpen ? "-rotate-45" : "-translate-y-2.5"
              }`}></span>
            <span
              className={`block rounded-full absolute  h-0.5 w-9 bg-current   transform transition duration-500 ease-in-out ${
                isOpen ? "translate-x-10 opacity-0" : ""
              }`}></span>
            <span
              className={`block rounded-full absolute  h-0.5 w-9 bg-current transform  transition duration-500 ease-in-out ${
                isOpen ? "rotate-45" : "translate-y-2.5"
              }`}></span>
          </div>
        </button>
      </div>
      <div
        className={`w-full h-screen transition-all duration-500 ${
          !isOpen && "translate-x-full"
        } top-0 left-0 bg-black z-40 absolute px-5 flex flex-col pt-36 gap-5`}>
        {navLinks.map(({ link, name }, index) => {
          return (
            <div 
                className={`transition-all ease-out duration-500 delay-500 ${
                  !isOpen && "translate-x-full"
                } w-full pointer btn flex justify-center px-5 -py-4 rounded-full text-3xl font-bold leading-normal text-white font-quicksand`}
            >
              <Link
                  to={link}
                  key={index}
                  onClick={() => {
                      setisOpen(false);
                  }}
                  className={`nav-link nav-link-ltr hover:scale-125 transition-all duration-200`}
              >
                {name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
    <nav className="w-full hidden md:flex">
      <div className="flex space-x-2 items-center justify-between lg:px-16 w-full">
        <div className="w-full">
          <Link to="/">
            <img
              src={lg_logo} // Route of the image file
            //   height={80} // Desired size with correct aspect ratio
              width={300} // Desired size with correct aspect ratio
              className='pt-3 pr-3'
              alt="Your Name"
            />
          </Link>
        </div>
        <div className="flex space-x-7 items-start justify-center w-full">
          {navLinks.map(({ link, name }, index) => {
            return (
              <Link
                to={link}
                key={index}
                className="nav-link nav-link-fade-up text-xl font-bold leading-normal tracking-widest text-gray-300 font-Quicksand">
                {name}
              </Link>
            );
          })}
        </div>
        <div className="w-full flex md:justify-center lg:justify-end">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={
              "https://docs.google.com/document/d/1BA4kyww5gYWBKA-UaOSGXi3ROmiwsUYS3qrDsbAzzj8"
            }>
            <div className="pointer flex items-center justify-start px-5 py-2 text-md text-white hover:text-[#242424] hover:bg-[#ffffff] rounded-full border-[2px] border-solid border-white font-bold leading-normal transition-all duration-150">
            <a href={`mailto:${email}`}>
              Contact Us
            </a>
            </div>
          </a>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default Navbar