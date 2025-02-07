import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import Logo_gcoej from "../images/logo-gcoej.png";
import Asterix_Logo from "../images/Dark version.png";

import "../output.css";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { id: 1, name: "About Us", link: "/about" },
    { id: 2, name: "Team Structure", link: "/People" },
    { id: 3, name: "Sponsors", link: "/Sponsors" },
    { id: 4, name: "Quick Links", link: "#" },
  ];

  const quickLinks = [
    { name: "GCOEJ", link: "https://www.gcoej.ac.in/" },
    { name: "TEAM ASTERIX", link: "/Header" },
    { name: "SAE-BAHA", link: "https://www.bajasaeindia.org/" },
    { name: "Gallary", link: "/About" },
  ];

  return (
    <header className="bg-gradient-to-b from-gray-300 to-black shadow-lg sticky top-0 z-10 backdrop-filter backdrop-blur-md">
      <nav className="flex flex-wrap items-center justify-between px-4 py-3 md:flex-nowrap">
        {/* GCOEJ Logo */}
        <div className="flex items-center space-x-4 flex-shrink-0">
          <a
            href="https://www.gcoej.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Logo_gcoej}
              alt="GCOEJ Logo"
              className="h-12 md:h-16 object-contain"
            />
          </a>
        </div>

        {/* Team Asterix Logo */}
        <div className="flex-grow flex justify-center items-center">
          <Link to="/">
            <img
              src={Asterix_Logo}
              alt="Team Asterix Logo"
              className="h-16 md:h-20 object-contain"
            />
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-4">
          <ul className="flex space-x-4 text-white text-sm md:text-base font-bold">
            {navItems.map((item) => (
              <li key={item.id}>
                {item.name === "Quick Links" ? (
                  <Menu as="div" className="relative inline-block text-left">
                    <MenuButton
                      className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm bg-stone-600 text-white"
                      aria-label="Quick Links"
                    >
                      Quick Links
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="ml-2 h-5 w-5"
                      />
                    </MenuButton>
                    <MenuItems className="absolute right-0 z-10 mt-2 w-56 bg-white text-black rounded-md shadow-lg ring-1 ring-black ring-opacity-5 ">
                      {quickLinks.map((option) => (
                        <MenuItem key={option.name}>
                          <Link
                            to={option.link}
                            className="block px-4 py-2 text-sm hover:bg-yellow-500"
                          >
                            {option.name}
                          </Link>
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>
                ) : (
                  <Link
                    to={item.link}
                    className={`px-3 py-2 rounded-lg ${
                      location.pathname === item.link
                        ? "bg-yellow-500 text-white"
                        : "hover:bg-lime-500 transition"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
