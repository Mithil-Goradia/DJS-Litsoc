import {React, useRef, useEffect} from 'react'
import '../components/Navbar.css'
import '../App.css'
import 'aos/dist/aos.css'
import ScrollUpButton from '../components/ScrollUpButton'
import { RxDoubleArrowDown } from 'react-icons/rx'
import { useNavigate } from 'react-router-dom'
import About from './About'

function Home() {
  const navigate = useNavigate()
  const targetRef = useRef()
  return (
    <>
      <div className='w-full min-h-screen text-3xl'>
        <div className='flex justify-center items-center w-full bg-cover lg:mt-0 sm:mt-0'>
          <img src="/group.jpg" className='relative object-contain max-w-full h-auto'></img>
        </div>
        <div className=" text-white pt-10 lg:pt-[180px] lg:pb-4 pb-20 w-full">
          <p className='text-center lg:text-left text-[44px] lg:text-[80px] font-extrabold lg:pl-[368px] pb-4 lg:pb-16' data-aos="zoom-out-up" data-aos-delay="300" >DJS</p>
          <p className='text-[75px] lg:text-[180px] font-bold text-center' data-aos="zoom-out-up" data-aos-delay="300">MUNSOC</p>
          <p className='pt-8 lg:pb-12 pb-10 lg:pt-28 text-center text-xl lg:text-2xl text-gray-300' data-aos="fade-up" data-aos-delay="700">A Platform where <span className="font-bold italic">Diplomacy</span> meets <span className="font-bold italic">Education</span></p>
          <div className="w-full flex justify-center">
            <div
              ref={targetRef}
              onClick={() => {navigate('/DJMUN24')}}
              className="hidden mb-28 text-md text-xl lg:inline-flex items-center gap-2 justify-start px-6 py-4 text-white hover:text-[#242424] hover:scale-110 rounded-full border-[2px] border-solid border-white font-semibold leading-normal button-2"
            >
              <p className="text-bold">Registrations are now live for DJMUN'24</p>
              <svg class="rtl:rotate-180 w-4.5 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div 
              data-aos="fade-up" 
              data-aos-delay="1300"
              onClick={() => {navigate('/DJMUN24')}}
              className="lg:hidden pointer text-[15px] w-[280px] lg:mb-32 mb-6 flex items-center justify-start gap-1 px-4 py-2 text-white hover:text-[#242424] hover:bg-white rounded-full border-[2px] border-solid border-white font-medium leading-normal">
              Check out our upcoming event
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </div>
          </div>
        </div>
        <About />

        {/* quotes */}
        <div className="w-full pb-40 lg:pt-16 lg:pb-8 pt-4">
          <div className="w-full h-[40vh] flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
          <div className="w-full sm:w-1/2 md:w-1/4 lg:hidden" data-aos="fade-left">
            <img src="./mlk.png" className="ml-20 w-1/2 h-auto rounded-3xl" />
          </div>
            <div className="text-center lg:w-1/2 grid place-items-center px-3" data-aos="fade-right">
              <p>“We are not the makers of <span className="font-bold italic">History</span>, <br/>We are made by <span className="italic font-bold">History</span>.”<br/>
              <span className='text-lg text-slate-400'>- Martin Luther King</span>
              </p>
            </div>
            <div className='w-full lg:w-1/4 hidden lg:block' data-aos="fade-left">
              <img src={'./mlk.png'} width={'280px'} className='rounded-3xl'/>
            </div>
          </div>
        </div>
        
        <div className="w-full pb-24">
          <div className="w-full h-[40vh] flex flex-col lg:flex-row justify-center items-center gap-8">
          <div className="w-full sm:w-1/2 md:w-1/4" data-aos="fade-right">
            <img src="./malala.png" className="ml-20 w-1/2 lg:w-[280px] h-auto rounded-3xl" />
          </div>
          <div className="text-center lg:w-1/2 grid place-items-center px-3" data-aos="fade-left">
            <p>
            “ I raise up my voice - not so that <span className="font-bold italic">I can shout</span>, but so that, those without a voice <span className="font-bold italic">can be heard...</span> ”
            <br/>
            <span className='text-lg text-slate-400'>- Malala Yousafzai</span></p>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home