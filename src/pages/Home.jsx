import React from 'react'

function Home() {
  return (
    <div className='w-full min-h-screen text-3xl border-red-500 border-2 border-solid'>
        <div className=" text-white pt-32 pb-48 w-full">
          <p className='text-[80px] font-extrabold pl-[365px] pb-6'>DJS</p><br/>
          <p className='text-[180px] font-bold text-center'>MUNSOC</p>
          <p className='pt-28 text-center text-2xl'>A Platform where <span className="font-bold italic">Diplomacy</span> meets <span className="font-bold italic">Education</span></p>
        </div>
        
        <div className="w-full pb-20">
          <div className="w-full h-[40vh] flex justify-center gap-16">
            <div className="text-center w-1/2 grid place-items-center">
              <p>“ We are not the makers of <span className="font-bold italic">History</span>, <br/>We are made by <span className="italic font-bold">History</span>. ”<br/>
              <span className='text-lg'>- Martin Luther King</span>
              </p>
            </div>
            <div className='w-1/4'>
              <img src={'./mlk.png'} width={'280px'} className='rounded-3xl'/>
            </div>
          </div>
        </div>
        
        <div className="w-full pb-16">
          <div className="w-full h-[40vh] flex justify-center gap-12">
          <div className='w-1/4'>
              <img src={'./malala.png'} width={'280px'} className='rounded-3xl'/>
            </div>
            <div className="text-center w-1/2 grid place-items-center">
              <p>
              “ I raise up my voice - not so that <span className="font-bold italic">I can shout</span>, but so that, those without a voice <span className="font-bold italic">can be heard...</span> ”
              <br/>
              <span className='text-lg'>- Malala Yousafzai</span></p>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Home