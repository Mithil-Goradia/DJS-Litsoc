import {React, useEffect} from 'react'
import { events } from '../constants'
import { MdDateRange } from "react-icons/md";
import { RxDoubleArrowDown } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

function Events() {

  const navigate = useNavigate();
  const clickHandler = (item) => {
    navigate(`/event-details/${item.name}`,{ state : item })
  }

  return (
   <>
      <div className='w-full text-center text-6xl lg:text-7xl font-bold font-Quicksand underline underline-offset-[10px]' data-aos="fade-down" data-aos-delay="300">
        EVENTS
      </div>
      <div className='w-full mt-12 px-4 lg:px-24' data-aos="fade-in" data-aos-delay="800">
        { events.map((event_year) => {
          return(
            <>
              <p className='text-center text-4xl lg:text-6xl lg:mb-4 mb-2 font-bold pl-4'>{event_year.year}</p>
              <div className='flex lg:flex-row flex-col justify-center items-center gap-8 mb-16'>
                {event_year.events.map((item) => { 
                  return(
                    <div class="shadow-md shadow-zinc-600 bg-transparent backdrop-blur-md rounded-xl max-w-sm h-auto p-3 cursor-pointer" onClick={() => {clickHandler(item)}}>  
                      <img class="rounded-xl" src={item.thumbnail} alt="" />
                      <div class="px-2 py-4">
                          <h5 class="text-gray-900 font-bold text-3xl tracking-tight mb-2 dark:text-white">{item.name}</h5>
                          <div className='flex items-center gap-3'>
                            <MdDateRange size="25px" style={{marginBottom:'5px'}}/>
                            <p class="font-normal text-xl text-gray-700 mb-1 dark:text-gray-400">{item.date}</p>
                          </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </>
          )
        })}

      </div>
   </>
  )
}

export default Events