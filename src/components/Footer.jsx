import logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGlobe, BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
export default function Footer() {
  return (
    <div
      className="flex-col w-full py-4 px-2 sm:px-5 gap-8 text-white backdrop-blur-xl bg-transparent bottom-0"
      // style={{ background: "linear-gradient(180deg, #0e2038, black)" }}
    >
      <div className="md:-ml-20 w-full lg:grid grid-cols-3 md:px-12 md:gap-12 lg:gap-24 lg:px-20  overflow-x-hidden">
        <div className=" grid md:grid-cols-3 grid-cols-1 w-full justify-center items-start gap-2 sm:gap-8 col-span-5 pt-2 sm:py-6 lg:px-48 text-center lg:text-left">
          <div className="flex flex-wrap justify-center items-center gap-4  ">
            <div className="w-full flex justify-center border-white px-4">
              <Link
                to="/"
                className="flex flex-col sm:flex-row items-center sm:gap-x-3 text-center hover:cursor-pointer"
              >
                <img
                  className="w-20 sm:w-24 scale-125"
                  src={logo}
                  alt="LITSOC Logo"
                />
                <div className="font-bold font-sans text-3xl sm:text-[2.8rem] whitespace-nowrap">
                  DJ LITSOC
                </div>
              </Link>
            </div>

            <div className="md:visible w-full col-span-1 md:col-span-2 flex justify-center items-center py-4 gap-4 sm:gap-8">
              <a
                href="https://www.linkedin.com/company/dj-lit-literary-society-of-d-j-sanghvi-college-of-engineering/"
                target="_blank"
                className=" rounded-full p-4 border-[2px]"
                style={{ borderColor: "#fff" }}
                rel="noreferrer"
              >
                <div className="transition-all hover:scale-125 transition-ease">
                  <BsLinkedin
                    className="scale-[1.5]"
                    onMouseOver={({ target }) =>
                      (target.style.color = "#0a66c2")
                    }
                    onMouseOut={({ target }) => (target.style.color = "white")}
                  />
                </div>
              </a>
              <a
                href="mailto:djslitsoc@gmail.com"
                target="_blank"
                className=" rounded-full p-4 border-[2px]"
                style={{ borderColor: "#fff" }}
                rel="noreferrer"
              >
                <div className="transition-all scale-125 hover:scale-150 delay-75">
                  <MdEmail
                    className="scale-[1.5]"
                    onMouseOver={({ target }) => (target.style.color = "#fff")}
                    onMouseOut={({ target }) => (target.style.color = "white")}
                  />
                </div>
              </a>
              <a
                href="https://www.instagram.com/djs.litsoc/"
                target="_blank"
                className=" rounded-full p-4 border-[2px]"
                style={{ borderColor: "#fff" }}
                rel="noreferrer"
              >
                <div className="transition-all hover:scale-125 delay-75">
                  <BsInstagram
                    className="scale-[1.5]"
                    onMouseOver={({ target }) =>
                      (target.style.color = "#fd016e")
                    }
                    onMouseOut={({ target }) => (target.style.color = "white")}
                  />
                </div>
              </a>
            </div>
          </div>

          <div className=" flex w-full flex-col sm:gap-3 pb-4 md:pl-16 lg:pl-24">
            <h1 className=" text-3xl font-semibold text-white underline underline-offset-4 py-2 lg:py-0 ">
              INFO
            </h1>
            <div className="text-lg sm:text-lg">
              <p className="hover:translate-x-1 transition-all transition-ease">
                <Link to="/">Home</Link>
              </p>
              <p className="hover:translate-x-1 transition-all transition-ease">
                <Link to="/DJMUN24">DJS MUN 2024</Link>
              </p>
              <p className="hover:translate-x-1 transition-all transition-ease">
                <Link to="/events">Events</Link>
              </p>
              <p className="hover:translate-x-1 transition-all transition-ease">
                <Link to="/team">Team</Link>
              </p>
            </div>
          </div>

          <div className="">
            <h1 className=" text-2xl font-semibold text-white underline underline-offset-4 py-4 lg:py-0 mb-2">
              ADDRESS
            </h1>
            <p className="md:pt-3 mb-6">
              No. U-15, J.V.P.D. Scheme, Bhaktivedanta Swami Marg, Opp.Cooper
              Hospital, Vile Parle (West), Mumbai-400 056. India
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1885.0063298265954!2d72.8358360896312!3d19.10710054930386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sDwarkadas+J.+Sanghvi+College+of+Engineering!5e0!3m2!1sen!2sin!4v1511171768631"
              width={400}
              height={250}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
