import { React, useEffect } from "react";
import "../components/Navbar.css";

const DJMUN24 = () => {
  const cardsInfo = [
    {
      title: "OPEC: Political Club vs. Economic Cartel",
      content:
        "Assessing the global oil market implications when member nations prioritize leveraging OPEC as a platform for geopolitical influence over its economic functions.",
      logo: "./icons/opec.png",
    },
    {
      title: "UNSC: The Nagorno-Karabakh Conflict",
      content:
        "Addressing the historical claims, influence of regional powers and their strategic interests and the efficacy of international ceasefire agreements.",
      logo: "./icons/unsc.png",
    },
    {
      title: "LOK SABHA: Reservation: A Baggage carried too far?",
      content:
        "Debating on caste-based reservations, the extension of reservations to economically weaker sections (EWS), and the implications of these policies on social justice.",
      logo: "./icons/loksabha.jpg",
    },
    {
      title: "UNCSW: Where are the Women Leaders?",
      content:
        "Discussing the lack of women representation in political leadership with a special emphasis on the MENA region.",
      logo: "./icons/uncsw.png",
    },
    {
      title: "Continuous Crisis Committee",
      content: "",
      logo: "./icons/crisis.jpg",
    },
    { title: "International Press (IP)", content: "", logo: "./icons/ip.png" },
  ];

  return (
    <>
      <div className="w-full lg:pt-6 pt-6 min-h-screen flex-col justify-center items-center">
        <div
          className="text-center text-6xl lg:text-[120px] font-bold font-Quicksand lg:pb-8 pb-5"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          DJMUN'24
        </div>
        <div className="w-full text-xl lg:text-3xl font-bold lg:font-extrabold mb-10 lg:pl-1 pl-3" data-aos="fade-down" data-aos-delay="300">
          <p className='w-full text-center'>Date: 27th and 28th July, 2024 </p>
        </div>
        <div
          className="w-full lg:px-44 px-[14px] text-2xl text-center pb-10"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <p>
            Join us for an exhilarating journey of diplomacy and debate at the
            DJMUN 2024 Conference! With six engaging committees tackling
            critical global issues, this is your opportunity to step into the
            shoes of international diplomats, collaborate with peers, and make
            your voice heard on the world stage. <br /> <br />Registrations are now live –
            don't miss out on being a part of this transformative experience.
            Sharpen your negotiation skills, expand your global perspective, and
            contribute to impactful resolutions
          </p>
        </div>

        <div
          className="w-full flex flex-col justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <a
            // data-aos="fade-up"
            // data-aos-delay="1300"
            href="https://forms.gle/oixGAK8QfDbL69LWA"
            target="_blank"
            className="pointer text-center text-[24px] w-[225px] lg:mb-10 mb-6 flex items-center justify-start gap-1 px-4 py-2 text-white hover:text-[#242424] hover:bg-white hover:scale-110 rounded-full border-[2px] border-solid border-white font-medium leading-normal button-2"
          >
            Register here!
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-full p-4 pt-20">
            <h1
              className="text-5xl font-bold text-center text-white mb-12"
              data-aos="fade-in"
              data-aos-delay="300"
            >
              COMMITTEES
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cardsInfo.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  content={card.content}
                  logo={card.logo}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Card = ({ title, content, logo }) => (
  <div
    className="border-solid border-2 border-white text-white lg:p-6 p-4 rounded-xl shadow-md w-full mb-6 flex-row lg:flex justify-center items-center lg:gap-5"
    data-aos="fade-up"
    data-aos-delay="100"
  >
    <div className="lg:hidden w-full lg:w-1/4 ml-[90px] lg:ml-0">
      <div className='w-32 h-32 lg:w-36 lg:h-36 bg-gray-300 rounded-full lg:mx-4'>
        {logo && <img src={logo} className="h-full w-full object-cover rounded-full" />}
      </div>
    </div>
    <div className="w-full lg:w-3/4 flex-col items-center gap-1 mb-4 pt-3 text-center">
      <h2 className="text-2xl font-bold pb-3">{title}</h2>
      <p className="lg:text-lg text-sm">{content}</p>
    </div>
    <div className="hidden lg:block w-full lg:w-1/4">
      <div className='w-36 h-36 lg:w-36 lg:h-36 rounded-full lg:mx-4'>
        {logo && <img src={logo} className="h-full w-full object-cover rounded-full" />}
      </div>
    </div>
  </div>
);

export default DJMUN24;
