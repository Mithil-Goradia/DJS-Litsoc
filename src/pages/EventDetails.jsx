import React from 'react'
import { useLocation } from 'react-router-dom'
import { GoChevronRight } from "react-icons/go";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function EventDetails() {
  const { state } = useLocation();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 120 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 30 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30 
    }
  }

  return (
    <>
      <div className="flex lg:flex-row flex-col items-start justify-between pr-3 mb-8">
        <div className="text-white max-w-2/3 min-h-screen flex flex-col items-start lg:pl-6 pt-6 lg:pr-1 pl-4 pr-4" data-aos="fade-right">
          <h1 className="lg:text-8xl text-6xl font-semibold text-center lg:text-left mb-4">{state.name}</h1>
          <div className="text-2xl lg:text-3xl font-extrabold mb-8 lg:pl-1 pl-3">
            <p className='w-full text-center lg:text-left'>Date: {state.date}</p>
          </div>
          <div className="text-left w-full">
            <h2 className="text-2xl font-bold mb-2">Committees:</h2>
            {state.committees.map((item) => {
                return(
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold flex -ml-2"><span><GoChevronRight style={{marginTop:"5px"}}/></span>{item.name}</h3>
                        <ul className='list-disc pl-5'>
                            {item.description.map((point) => {
                                return <li className='lg:text-xl text-lg'>{point}</li>
                            })}
                        </ul>
                    </div>
                )
            })}
          </div>
       </div>
       
       <div className='lg:w-[45%] w-full h-auto mb-12 pb-6 relative lg:pt-20 pt-6'>
       <Carousel
          partialVisible={true}
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={5000}
          centerMode={false}
          className=""
          containerClass="container rounded-2xl"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {state.images.map((image) => {
            return(
              <img
                src={image}
                className='block object-cover h-full w-full lg:ml-[60px] ml-4 px-2 rounded-3xl'
              />
            )
          })}
        </Carousel>
       </div>
      </div>
    </>
  )
}

export default EventDetails