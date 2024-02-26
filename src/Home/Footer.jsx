import React from "react";
import vector from "../assets/Vector.png";
import {
  FaApple,
  FaAndroid,
  FaWindows,
  FaArrowRight,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white lg:w-[1200px] mx-auto text-gray-900 py-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center">
          <div className="w-1/2 h-1 hidden lg:block bg-gray-200"></div>
          <div className="lg:mx-4 text-2xl font-semibold hidden lg:flex items-center lg:ml-3 lg:pl-2 lg:px-5 text-gray-800">
            <img src={vector} alt="" /> CloudFlow
          </div>
          <div className="w-1/2 h-1 hidden lg:block bg-gray-200"></div>
        </div>
        <div className="mt-8 px-5 lg:px-0 lg:my-5">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="justify-start text-start">
              <h3 className="text-lg font-bold">Newsletter</h3>
              <p className="">
                Creative agency encompasses a widesbr <br />
                range of services related to
                <br />
                the design creative and strategic
              </p>
              <div className="flex gap-3 mt-4">
                <FaApple size={30} />
                <FaAndroid size={30} />
                <FaWindows size={30} />
              </div>
            </div>
            <div>
              <h3 className="text-lg text-start font-semibold">Service</h3>
              <ul className="text-start">
                <li className="flex items-center gap-4 mt-2">
                  <FaArrowRight /> Ui Design
                </li>
                <li className="flex items-center gap-4 mt-2">
                  <FaArrowRight /> Web Design
                </li>
                <li className="flex items-center gap-4 mt-2">
                  <FaArrowRight /> Digital Marketing
                </li>
                <li className="flex items-center gap-4 mt-2">
                  <FaArrowRight /> Video Editing
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg text-start font-semibold">About Us</h3>
              <ul className="text-start">
                <li className="flex items-center gap-4 mt-2">
                  <FaArrowRight /> Home
                </li>
                <li className="flex items-center gap-4 mt-2">
                  <FaArrowRight /> Testimonial
                </li>
                <li className="flex items-center gap-4 mt-2">
                  <FaArrowRight /> portfolio
                </li>
                <li className="flex items-center gap-4 mt-2">
                  <FaArrowRight /> Blog details
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg text-start font-semibold">Contact</h3>
              <ul className="text-start flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <li>Old city Street, Usa</li>
              </ul>
              <ul className="text-start flex items-center">
                <FaPhone className="mr-2 " />
                <li>(+888) 123 456 765</li>
              </ul>
              <ul className="text-start flex items-center">
                <FaPhone className="mr-2" />
                <li>(+888) 123 987 765</li>
              </ul>
            </div>
          </div>
          <div className="w-full hidden lg:block my-10 h-1 bg-gray-200"></div>
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row justify-between">
        <p>© DesignCurved 2024 | All Rights Reserved</p>
        <ul className="flex gap-4">
          <li>Terms & Condition</li>
          <li>Privacy Policy</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
