
import logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div
      className="flex-col w-full py-4 px-2 sm:px-5 gap-8 text-white backdrop-blur-xl bg-transparent"
      // style={{ background: "linear-gradient(180deg, #0e2038, black)" }}
    >
      <div className="md:-ml-20 w-full lg:grid grid-cols-3 md:px-12 md:gap-12 lg:gap-24 lg:px-20  overflow-x-hidden">
        <div className=" grid md:grid-cols-3 grid-cols-1 w-full justify-center items-start gap-2 sm:gap-8 col-span-5 pt-2 sm:py-6 lg:px-48 text-center lg:text-left">
          
          <div className="flex flex-wrap justify-center items-center gap-4  ">
            <div className="w-full flex justify-center border-white">
              <div className=" sm:flex h-full justify-center items-center hover:cursor-pointer">
                <Link to="/">
                  <img className="scale-150 w-52" src={logo} alt="MUNSOC Logo" />
                </Link>
              </div>
            </div>

            <div className="md:visible w-full col-span-1 md:col-span-2 flex justify-center items-center py-4 gap-4 sm:gap-8">
            <a
              href="https://www.linkedin.com/company/djs-munsoc/"
              target="_blank"
              className=" rounded-full p-4 border-[2px]"
              style={{ borderColor: "#fff" }}
              rel="noreferrer"
            >
              <div className="transition-all hover:scale-125 delay-75">
                <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#fff]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </span>
              </div>
            </a>
            <a
              href="mailto:djsmunsoc@gmail.com"
              target="_blank"
              className=" rounded-full p-5 border-[2px]"
              style={{ borderColor: "#fff" }}
              rel="noreferrer"
            >
            <div className="transition-all scale-125 hover:scale-150 delay-75">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.33em" height="1em" viewBox="0 0 256 193">
                <path 
                  fill="#fff" 
                  d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z"/>
                <path 
                  fill="#fff" 
                  d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z"/>
                <path 
                  fill="#fff" 
                  d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"/>
                <path 
                  fill="#fff" 
                  d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z"/>
                <path 
                  fill="#fff" 
                  d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z"/>
              </svg>
              </div>
            </a>
            <a
              href="https://www.instagram.com/djs.munsoc/"
              target="_blank"
              className=" rounded-full p-4 border-[2px]"
              style={{ borderColor: "#fff" }}
              rel="noreferrer"
            >
              <div className="transition-all hover:scale-125 delay-75">
                <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#fff]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </span>
              </div>
            </a>
          </div>
          </div>
          
          <div className=" flex w-full flex-col sm:gap-3 pb-4 md:pl-16 lg:pl-24">
            <h1 className=" text-2xl font-semibold text-white underline underline-offset-4 py-2 lg:py-0 ">INFO</h1>
            <div className="text-md sm:text-lg">
              <p>
                <Link
                  to="/events"
                >
                  Events
                </Link>
              </p>
              <p>
                <Link
                  to="/team"
                >
                  Team
                </Link>
              </p>
              <p>
                <Link
                  to="/gallery"
                >
                  Gallery
                </Link>
              </p>
              <p>
                <Link
                  to="/aboutus"
                >
                  About Us
                </Link>
              </p>
            </div>
          </div>
          
          <div className="">
              <h1 className=" text-2xl font-semibold text-white underline underline-offset-4 py-4 lg:py-0 mb-2">ADDRESS</h1>
              <p className="md:pt-3 mb-6">
                No. U-15, J.V.P.D. Scheme, Bhaktivedanta Swami Marg, Opp.Cooper Hospital, Vile Parle (West), Mumbai-400 056. India
              </p>
              <iframe 
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1885.0063298265954!2d72.8358360896312!3d19.10710054930386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sDwarkadas+J.+Sanghvi+College+of+Engineering!5e0!3m2!1sen!2sin!4v1511171768631'
                width={400}
                height={250}
              ></iframe>
            </div>

        </div>
      </div>
    </div>
  );
}
