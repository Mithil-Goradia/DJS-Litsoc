import React from 'react'
import 'aos/dist/aos.css'
import ScrollUpButton from '../components/ScrollUpButton'
import { RxDoubleArrowDown } from 'react-icons/rx'

function Home() {
  return (
    <>
      <div className='w-full min-h-screen text-3xl'>
        <div className=" text-white pt-36 lg:pt-24 lg:pb-4 pb-20 w-full">
          <p className='text-center lg:text-left text-[44px] lg:text-[80px] font-extrabold lg:pl-[368px] pb-4 lg:pb-16' data-aos="zoom-out-up">DJS</p>
          <p className='text-[75px] lg:text-[180px] font-bold text-center' data-aos="zoom-out-up">MUNSOC</p>
          <p className='pt-12 lg:pt-28 text-center text-xl lg:text-2xl text-gray-300' data-aos="fade-up" data-aos-delay="1000">A Platform where <span className="font-bold italic">Diplomacy</span> meets <span className="font-bold italic">Education</span></p>
          <div className='lg:opacity-0 w-full flex justify-center animate-bounce mt-40'>
            <RxDoubleArrowDown size={50}/>
          </div>
        </div>
        
        {/* quotes */}
        <div className="w-full pb-40 lg:pb-8 pt-4">
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