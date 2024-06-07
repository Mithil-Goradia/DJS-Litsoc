import {React, useEffect} from 'react'
import 'aos/dist/aos.css'

function About() {

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
      })
  }, [])

  return (
    <div className='min-h-screen'>
      <div className='w-full text-center text-5xl lg:text-6xl font-bold font-Quicksand' data-aos="fade-in" data-aos-delay="300">
        ABOUT US
      </div>
      <div className="lg:w-2/3 py-12 mx-4 lg:mx-auto text-center text-lg lg:text-2xl" data-aos="fade-in" data-aos-delay="800">
        <p>DJS-MUNSOC, The Model United Nations Society of Dwarkadas J. Sanghvi College Of Engineering, Mumbai, is a dynamic platform where diplomacy meets education. Established in 2022 and entirely student-led, we take pride in nurturing a space that encourages critical thinking, global awareness, and leadership development.</p>
        <br/>
        <p>Our mission is to provide a platform for students to immerse themselves in the world of international relations through engaging MUN simulations, workshops, and conferences. We aim to empower students to become articulate, informed, and culturally aware leaders who can make a positive impact on the global stage.</p>
        <br/>
        <p>At DJS-MUNSOC, we're not just shaping leaders; we're cultivating a community dedicated to making a difference in the world.</p>
      </div>

    </div>
  )
}

export default About