import React from "react";
import { FaInstagram, FaWhatsapp, FaTelegram, FaYoutube } from "react-icons/fa";
import Asterix_Logo from "../images/Back.png";
import { MdFeedback } from "react-icons/md";
import Feedback from "../Pages/Feedback";

const Navigation = [
  { id: 1, name: "About Us", isActive: false, link: "/About" },
  { id: 2, name: "News", isActive: false, link: "/404" },
  { id: 3, name: "Resources", isActive: false, link: "/404" },
  { id: 4, name: "Sponsors", isActive: false, link: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      {/* Pre-Footer Section */}
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-3 font-mulish">About</h3>
            <p className="text-gray-400">
              Participating in SAE-BAJA, the most prestigious event in India
              since 2009. <br />
              Getting all the Related Engineering Skill-Set. <br />
              Challenging the other Teams Over the Indian Nation As well as All
              Over the Globe. <br />
              Designing , Manufacturing and Testing the Best in class All
              Terrain Vehicle(ATV).
            </p>
          </div>

          {/* Navigation Section */}
          <div>
            <h3 className="text-lg font-bold mb-3 font-mulish">Navigation</h3>
            <ul className="space-y-2 text-gray-400">
              {Navigation.map((item) => (
                <li key={item.id}>
                  <a href={item.link} className="hover:text-indigo-400">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Connected Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-3 font-mulish">
              Get Connected
            </h3>
            <div className="flex justify-center md:justify-start space-x-4 text-xl">
              <a href="#" className="hover:text-indigo-400">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-indigo-400">
                <FaWhatsapp />
              </a>

              <a
                href="/Feedback"
                onClick={() => {
                  window.open = "/Feedback";
                }}
              >
                <MdFeedback />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between border-t border-gray-700 pt-6">
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg font-mulish">TEAM ASTERIX</h4>
            <a href="#">
              <img
                src={Asterix_Logo}
                alt="Asterix Logo"
                className="mt-2 w-24 mx-auto md:mx-0"
              />
            </a>
          </div>
          <p className="mt-4 md:mt-0 text-gray-400 font-mulish">
            © 2025 TEAM ASTERIX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
