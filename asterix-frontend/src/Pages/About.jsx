import React from "react";
import Header from "../partials/Header";
import Logo_gcoej from "../images/logo-gcoej.png";
import Asterix_Logo from "../images/Dark version.png";
import Back from "../images/Back.png";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import video1 from "../images/video1.mp4";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];
const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];

export default function About() {
  return (
    <>
      {/* Breadcrumbs Section */}
      <section className="bg-gray-100 py-3">
        <div className="container w-full max-w-[1080px] mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-800 font-mulish">
            About
          </h2>
          <ul className="flex justify-center space-x-2 text-sm text-gray-600">
            <li>
              <a href="/" className="hover:text-blue-500 font-mulish">
                Home
              </a>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-blue-500 font-mulish">About</li>
          </ul>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 text-center py-10">
        <div className="container w-full max-w-[1080px] mx-auto">
          <h3 className="text-3xl font-bold text-gray-800 mb-5 font-mulish">
            TEAM ASTERIX MISSION
          </h3>
          <img
            src={Asterix_Logo}
            alt="Mission Image"
            className="mx-auto mb-5 rounded-lg shadow-md"
          />
          <p className="text-gray-700 font-mulish font-semibold">
            Getting all the Related Engineering Skill-Set. <br />
            Challenging the other Teams Over the Indian Nation As well as All
            Over the Globe. <br />
            Designing , Manufacturing and Testing the Best in class All Terrain
            Vehicle(ATV).
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-white text-center py-10">
        <div className="container w-full max-w-[1080px] mx-auto">
          <h3 className="text-3xl font-bold text-gray-800 mb-5 font-mulish">
            TEAM ASTERIX VISION
          </h3>
          <img
            src={Back}
            alt="Vision Image"
            className="mx-auto mb-5 rounded-lg shadow-md"
            style={{ backgroundColor: "black" }}
          />
          <p className="text-gray-700 font-mulish font-semibold">
            Redefining Engineering and Accelarating Towards Excellence in
            Competitive World Through Hands-On Experience
          </p>
        </div>
      </section>

      {/* BAJA SAEINDIA Section */}
      <section className="bg-gray-50 text-center py-10">
        <div className="container mx-auto w-full max-w-[1080px]">
          <h3 className="text-3xl font-bold text-gray-800 mb-5 font-mulish">
            BAJA SAEINDIA
          </h3>
          <img
            src="https://www.bajasaeindia.org/img/baja2025_1.png"
            alt="BAJA SAEINDIA"
            className="mx-auto mb-5 rounded-lg shadow-md"
            style={{ backgroundColor: "black" }}
          />
          <p className="text-gray-700 font-mulish font-semibold">
            SAEINDIA is an affiliate society of SAE International, registered as
            an Indian non-profit engineering and scientific society dedicated to
            the advancement of the mobility community in India. As an individual
            member driven society of mobility practitioners, SAEINDIA comprises
            members associated with transforming the transportation industry -
            which includes engineers, executives from the industry, government
            officials, academics and students. Principal emphasis is placed on
            industries such as automotive, aerospace and commercial vehicles.
            SAEINDIA promotes and undertakes initiatives for knowledge
            dissemination and advancement in mobility technologies catering to
            land, sea, air and space. Out of many student centered events, BAJA
            SAEINDIA is one of the grandest event falling under the umbrella of
            SAEINDIA.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-white text -center py-10">
        <div className="container mx-auto w-full max-w-[1080px]">
          <h3 className="text-3xl mx-auto text-center font-bold text-gray-800 mb-5 font-mulish">
            HISTORY
          </h3>
          <img
            src={img1}
            alt="img1"
            className="mx-auto mb-5 rounded-lg shadow-md"
          />
          <img
            src={img2}
            alt="img2"
            className="mx-auto mb-5 rounded-lg shadow-md"
          />
          <img
            src={img3}
            alt="img3"
            className="mx-auto mb-5 rounded-lg shadow-md"
          />

          <img
            src={img4}
            alt="img4"
            className="mx-auto mb-5 rounded-lg shadow-md"
          />
          <img
            src={img5}
            alt="img5"
            className="mx-auto mb-5 rounded-lg shadow-md"
          />
        </div>
      </section>

      <section className="bg-white text-center py-10">
        <div className="container mx-auto w-full max-h-[1080px]">
          <video className="w-full h-[1080px] rounded-lg shadow-lg" controls>
            <source src={video1} type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
}
