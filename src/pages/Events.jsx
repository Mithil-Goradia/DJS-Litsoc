import {React, useEffect} from 'react'

function Events() {
  
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
      })
  }, [])

  return (
   <>
      <div className='w-full text-center text-6xl lg:text-7xl font-bold font-Quicksand' data-aos="fade-down" data-aos-delay="300">
        EVENTS
      </div>
   </>
  )
}

export default Events