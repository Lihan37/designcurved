import React, { useState } from "react";
import vector from "../assets/Vector.png";
import { FiPhone, FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#e6d1ca] via-[#cbe1eb] to-[#ece9dc] p-4 border border-b-slate-400">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={vector} alt="" />
          <span className="ml-2 mb-1 font-bold text-2xl text-gray-900">
            CloudFlow
          </span>
        </div>
        {/* Medium Devices */}
        <div className="md:flex items-center justify-center hidden">
          <NavLinkWithDropdown text="Home" />
          <NavLinkWithDropdown text="About Us" />
          <NavLinkWithDropdown text="Services" />
          <NavLinkWithDropdown text="Projects" />
          <NavLinkWithDropdown text="Blogs" />
          <NavLinkWithDropdown text="Page" />
          <a href="#" className="text-gray-900 font-semibold mx-4">
            Contact
          </a>
        </div>
        <div className="flex items-center">
          <div className="md:hidden">
            <button
              onClick={() => setShowLinks(!showLinks)}
              className="text-gray-900"
            >
              Menu
            </button>
            {showLinks && (
              <div className="absolute top-12 right-0 w-48 bg-white border border-gray-300 z-10">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-900 hover:bg-gray-200"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-900 hover:bg-gray-200"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-900 hover:bg-gray-200"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-900 hover:bg-gray-200"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-900 hover:bg-gray-200"
                >
                  Blogs
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-900 hover:bg-gray-200"
                >
                  Page
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-900 hover:bg-gray-200"
                >
                  Contact
                </a>
              </div>
            )}
          </div>
          <div className="hidden md:flex items-center">
            <a
              href="#"
              className="text-white flex items-center justify-center rounded-full bg-gray-900 p-2"
            >
              <FiPhone />
            </a>

            <div className="ml-2">
              <h2 className="text-sm text-gray-900 font-semibold">Need help?</h2>
              <h2 className="text-gray-900 font-bold text-xl">01716285196</h2>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLinkWithDropdown = ({ text }) => {
    return (
      <div className="flex items-center mx-2">
        <a href="#" className="text-gray-900 font-semibold">
          {text}
        </a>
        <FiChevronDown className="text-gray-900" />
      </div>
    );
  };
  
export default Navbar;
