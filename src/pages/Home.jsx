import {React, useRef, useEffect} from 'react'
import '../components/Navbar.css'
import '../App.css'
import 'aos/dist/aos.css'
import ScrollUpButton from '../components/ScrollUpButton'
import { RxDoubleArrowDown } from 'react-icons/rx'
import { useNavigate } from 'react-router-dom'
import About from './About'
import bookbg from '../assets/bookbg.png'
import groupbg from '../assets/group-bg.jpeg'

function Home() {
  const navigate = useNavigate()
  const targetRef = useRef()
  return (
    <>
      <div className='w-full min-h-screen text-3xl'>
        <img src={groupbg} className='w-full h-full object-cover' />
        <div className=" text-white pt-10 lg:pt-[130px] w-full" style={{ backgroundImage: `url()`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className='flex flex-col'>
            <p className='text-center lg:text-left text-[44px] lg:text-[80px] font-extrabold lg:pl-[368px] pb-4 lg:pb-16' data-aos="zoom-out-up" data-aos-delay="300" >DJS</p>
            <p className='text-[75px] lg:text-[180px] font-bold text-center' data-aos="zoom-out-up" data-aos-delay="300">LITSOC</p>
          </div>
          <p className='pt-8 lg:pb-12 pb-10 lg:pt-28 text-center text-xl lg:text-2xl text-white' data-aos="fade-up" data-aos-delay="700">Only <span className="font-bold italic">Literature</span> society <span className="font-bold italic">spreading Art</span></p>
          <div className="w-full flex justify-center">
            <div
              ref={targetRef}
              className="hidden mb-14 text-md text-xl lg:inline-flex items-center gap-2 justify-start px-6 py-4 text-white hover:text-[#242424] hover:scale-110 rounded-full border-[2px] border-solid border-white font-semibold leading-normal button-2"
            >
              <a href= " https://chat.whatsapp.com/G4CRgTQhm1yE9gz2Br4Tp1 " className="text-bold">Registrations are now live for PreFace'25</a>
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
            <img src="./shake.png" className="ml-20 w-1/2 h-auto rounded-3xl" />
          </div>
            <div className="text-center lg:w-1/2 grid place-items-center px-3 text-red-800" data-aos="fade-right">
              <p>“Love looks not with the eyes <span className="font-bold italic">but with the mind</span> and therefore is <span className="italic font-bold">winged Cupid</span>painted blind<br/>
              <span className='text-lg text-red-800'>- Shakespeare</span>
              </p>
            </div>
            <div className='w-full lg:w-1/4 hidden lg:block' data-aos="fade-left">
              <img src={'./shake.png'} width={'280px'} className='rounded-3xl'/>
            </div>
          </div>
        </div>
        
        <div className="w-full pb-24">
          <div className="w-full h-[40vh] flex flex-col lg:flex-row justify-center items-center gap-8">
          <div className="w-full sm:w-1/2 md:w-1/4" data-aos="fade-right">
            <img src="./cb.png" className="ml-20 w-1/2 lg:w-[280px] h-auto rounded-3xl" />
          </div>
          <div className="text-center lg:w-1/2 grid place-items-center px-3 text-red-800" data-aos="fade-left">
            <p>“The world's most <span className="font-bold italic">sensible person and the biggest idiot </span>stays within us, The worst part is, you can't even tell <span className="italic font-bold">who is who.</span>.”<br/>
            <span className='text-lg'>- Chetan Bhagat</span></p>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home