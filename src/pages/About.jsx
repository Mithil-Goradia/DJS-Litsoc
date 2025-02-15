import { React, useEffect } from 'react';
import 'aos/dist/aos.css';

function About() {
  return (
    <div className="h-auto pb-12 text-red-950 mt-20">
      {/* ABOUT US Heading */}
      <div
        className="w-full text-center text-5xl lg:text-6xl font-bold font-Quicksand"
        data-aos="fade-in"
        data-aos-delay="300"
      >
        ABOUT US
      </div>

      {/* DJS-LITSOC Section */}
      <div
        className="lg:w-2/3 py-12 mx-4 lg:mx-auto text-center text-lg lg:text-2xl"
        data-aos="fade-in"
        data-aos-delay="1000"
      >
        <p>
          <strong>DJS-LITSOC</strong>, The Literature Society of Dwarkadas J. Sanghvi College of Engineering, Mumbai, is a vibrant community where creativity meets expression. Founded to celebrate the power of words, our society is a haven for literature enthusiasts, aspiring writers, poets, and storytellers.
        </p>
        <br />
        <p>
          Our mission is to foster a love for literature, language, and storytelling by providing a platform for students to explore their creative potential. Through engaging events, interactive workshops, book discussions, and writing competitions, we encourage critical thinking, artistic expression, and intellectual discourse.
        </p>
        <br />
        <p>
          At DJS-LITSOC, we believe that literature is more than just words on a page—it is a gateway to imagination, a tool for change, and a means of understanding the world. Join us as we embark on a journey of storytelling, poetry, and literary exploration, shaping voices that inspire and ideas that resonate.
        </p>
      </div>
    </div>
  );
}

export default About;
