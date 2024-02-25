import React from "react";
import img10 from "../assets/img10.png";
import img11 from "../assets/img11.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import {
  faTrophy,
  faClipboardList,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";

const Quote = () => {
  return (
    <div className="relative mb-14">
      <div className="flex bg-[#FAF7F0] py-16 mx-auto justify-center items-center relative">
        <div className="w-1/3 lg:pl-64 mx-auto  lg:p-14">
          <div className="bg-blue-700 rounded-full flex items-center justify-center w-10 h-10 mb-4">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="text-white text-2xl"
            />
          </div>

          <div>
            <p className="text-lg lg:text-xl font-semibold">
              Creative agency encompasses wide range of services related in the
              creative and marketing. These agencies specialize in offering
              innovative solutions to clients' branding.
            </p>

            <p className="mt-4 text-base lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <p className="mt-4 font-semibold text-base lg:text-lg">
              - Michael Ramirez
            </p>
            <p className="text-sm lg:text-base">Marketing Manager</p>
          </div>
        </div>
        <div className="w-1/2 gap-5 flex flex-col lg:flex-row">
          <img src={img11} alt="Quote" className="w-1/4 h-1/4" />
          <img src={img10} alt="Signature" className="w-1/4 h-1/6 mt-6 " />
        </div>
        <div className="absolute -bottom-16 left-1/2 lg:w-[1000px] transform -translate-x-1/2 bg-blue-200 p-10 rounded-lg">
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-cyan-300 rounded-2xl p-4">
                <FontAwesomeIcon
                  icon={faTrophy}
                  className="text-blue-700 text-3xl"
                />
              </div>
              <h2>
                Winning award
                <br />
                200+
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-cyan-300 rounded-2xl p-4">
                <FontAwesomeIcon
                  icon={faClipboardList}
                  className="text-blue-700 text-3xl"
                />
              </div>
              <h2>
                Total Project
                <br />
                650+
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-cyan-300 rounded-2xl p-4">
                <FontAwesomeIcon
                  icon={faSmile}
                  className="text-blue-700 text-3xl"
                />
              </div>
              <h2>
                Happy clients
                <br />
                120+
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
