import React from "react";
import { events } from "../constants";
import { MdDateRange, MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Events() {
  const navigate = useNavigate();

  const clickHandler = (item) => {
    navigate(`/event-details/${item.name}`, { state: item });
  };
  

  return (
    <div className="min-h-screen pb-16">
      <div
        className="text-red-800 w-full text-center text-6xl lg:text-7xl font-bold font-Quicksand underline underline-offset-[10px]"
        data-aos="fade-down"
        data-aos-delay="300"
      >
        EVENTS
      </div>

      <div
        className="w-full mt-12 px-4 lg:px-24"
        data-aos="fade-in"
        data-aos-delay="800"
      >
        {events.map((event_year, index) => (
          <div key={index} className="mb-16">
            <div className="text-center mb-8">
              <p className="text-4xl lg:text-6xl font-bold text-red-800">
                {event_year.year}
              </p>
            </div>

            <div className="flex lg:flex-row flex-col justify-center items-center gap-8">
              {event_year.events.map((item, itemIndex) => (
                
                <div
                  key={itemIndex}
                  className="shadow-md shadow-zinc-600 bg-transparent backdrop-blur-md rounded-xl max-w-sm w-full hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onClick={() => clickHandler(item)}
                >
                  <div className="relative p-3">
                    <img
                      className="rounded-xl w-full h-[22rem] object-cover"
                      src={item.thumbnail}
                      alt={item.name}
                    />
                  </div>

                  <div className="px-5 py-4">
                    <h5 className="text-red-800 font-bold text-3xl tracking-tight mb-2">
                      {item.name}
                    </h5>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <MdDateRange size="25px" color="#C62828" />
                        <p className="font-normal text-xl">
                          {item.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <MdLocationOn size="25px" color="#C62828" />
                        <p className="font-normal text-xl">
                          {item.venue}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;