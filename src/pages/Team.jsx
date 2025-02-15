import {React, useEffect} from 'react'
import { coreMembers } from '../constants/index.js';
import { BsLinkedin, BsGlobe, BsInstagram, BsGithub } from "react-icons/bs";
import defaultProfile from "../constants/default-profile.jpg";
import 'aos/dist/aos.css'

function Team() {
  return (
    <>
      <div className='w-full text-center text-6xl lg:text-7xl font-bold font-Quicksand' data-aos="fade-down" data-aos-delay="300">
        OUR TEAM
      </div>
      <div className="lg:w-1/2 pt-8 pb-12 mx-3 lg:mx-auto text-center lg:text-xl text-lg" data-aos="fade-down" data-aos-delay="300">
        <p>Meet the driving force behind LitSoc, our core team brings creativity, dedication, and leadership to curate inspiring literary events, 
          discussions, and initiatives. United by a love for literature, we strive to build a thriving community of storytellers and poets!
        </p>
      </div>
      <div className='w-full lg:mx-auto flex flex-col items-center gap-36 pb-40' data-aos="fade-in" data-aos-delay="800">
        { coreMembers.map( (row , index) => {
            return (
              <TeamRow members={row} key={index} />
          );
        })}
      </div>
    </>
  )
}

function TeamRow({ members }) {
  return (
    <>
      <div className="w-[80%] gap-8 lg:gap:8 lg:w-full lg:h-[28rem] flex flex-col lg:flex-row justify-around items-center space-y-28 lg:space-y-0" >
        {members.map((item, index) => {
          return <TeamCard {...item} key={index} />;
        })}
      </div>
    </>
  );
}

function TeamCard({ name, description, image, links }) {
  const linkCategories = ['linkedin', 'instagram'];

  return (
    <div className="w-full sm:w-[20rem] h-[25rem] sm:h-full bg-black rounded-xl relative border-[3px] border-white/20 ">
      <img
        className="w-full h-full object-cover rounded-xl"
        /* //! this is temporary placeholder, remove after getting all images */
        src={image || defaultProfile}
        alt="core_member"
      />
      <div className="w-full bottom-0 flex items-end">
        <div className="w-full h-[27.5%] flex flex-col justify-between items-start text-white pt-2 pb-4">
          <div>
            <p className="text-3xl font-bold capitalize">{name}</p>
            <p className="text-xl font-medium uppercase text-white/50 mb-2">
              {description}
            </p>
          </div>
          <div className="w-full flex justify-between items-center pt-1">
            <div className="flex space-x-5 sm:space-x-10 px-2">
              {linkCategories.map((item, index) => {
                return (
                  links[item] && (
                    <TeamLink link={links[item]} key={index} type={item} />
                  )
                );
              })}
            </div>
            <div>
              {links.website && (
                //eslint-disable-next-line
                <a
                  href={links.website}
                  target="_blank"
                  rel="noopener"
                  className="font-extrabold text-xl flex items-center space-x-3 pr-2 animate-text-bg "
                >
                  <p>Website</p>
                  <BsGlobe className="scale-[1.7] sm:scale-[2]" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

function TeamLink({ link, type }) {
  return (
    //eslint-disable-next-line
    <a href={link} target="_blank" rel="noopener">
      {type === "linkedin" ? (
        <BsLinkedin 
          className="scale-[1.7] sm:scale-[2]" 
          onMouseOver={({ target }) => (target.style.color = '#0a66c2')}
          onMouseOut={({ target }) => (target.style.color = 'white')} 
        />
      ) : (
        <BsInstagram 
          className="scale-[1.7] sm:scale-[2]"
          onMouseOver={({ target }) => (target.style.color = '#fd016e')}
          onMouseOut={({ target }) => (target.style.color = 'white')} 
        />
      )}
    </a>
  );
}

export default Team