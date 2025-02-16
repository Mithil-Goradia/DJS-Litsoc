import React from 'react';
import { useLocation } from 'react-router-dom';
import { GoChevronRight } from "react-icons/go";
import { MdLocationOn, MdAccessTime } from "react-icons/md";
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
  };

  return (
    <>
      <div 
        className="flex lg:flex-row flex-col items-start justify-between pr-3 mb-8"
        style={{
          backgroundImage: 'url("/images/bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="text-white lg:w-1/2 min-h-screen flex flex-col items-start lg:pl-12 pt-8 lg:pr-6 px-6" data-aos="fade-right">
          {/* Event Title */}
          <h1 className="lg:text-8xl text-red-800 text-6xl font-bold text-center lg:text-left mb-8 leading-tight">
            {state.name}
          </h1>
          
          {/* Event Details Card */}
          <div className="w-full p-6 backdrop-blur-md bg-white/10 rounded-2xl mb-8">
            <div className="space-y-4">
              <p className="text-3xl font-bold">{state.date}</p>
              <div className="flex items-center gap-3 text-xl">
                <MdLocationOn className="text-2xl text-red-800" />
                <span>{state.venue}</span>
              </div>
              <div className="flex items-center gap-3 text-xl">
                <MdAccessTime className="text-2xl text-red-800" />
                <span>{state.time}</span>
              </div>
            </div>
          </div>

          {/* Event Description */}
          <div className="w-full p-6 backdrop-blur-md bg-white/10 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold mb-4 text-red-800">About the Event</h2>
            <p className="text-lg leading-relaxed mb-6">{state.fullDescription}</p>
          </div>

          {/* Event Highlights */}
          <div className="w-full p-6 backdrop-blur-md bg-white/10 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-red-800">Event Highlights</h2>
            <div className="space-y-4">
              {state.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <GoChevronRight className="mt-1 text-red-800 transform group-hover:translate-x-1 transition-transform" />
                  <p className="text-lg leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="lg:w-[45%] w-full h-auto mb-12 pb-6 relative lg:pt-20 pt-6">
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
            {state.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Event image ${index + 1}`}
                className="block object-cover h-full w-full lg:ml-[60px] ml-4 px-2 rounded-3xl shadow-lg"
              />
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default EventDetails;