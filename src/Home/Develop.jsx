import React from "react";
import img12 from "../assets/img12.png";
import { faMagic, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Develop = () => {
  return (
    <div className="max-w-screen-lg mx-auto my-24 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img src={img12} alt="" className="w-full" />
        </div>
        <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-semibold text-center lg:text-left mb-4">
            We develop products that people love to use
          </h2>
          <p className="text-base lg:text-lg text-center lg:text-left mb-6">
            Creative agencies encompass a wide range of services related to creative
            and strategic marketing. These agencies specialize in offering innovative
            solutions to clients' branding and communication needs.
          </p>
          <div className="flex flex-col items-center lg:items-start w-full">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-300 rounded-full p-4">
                <FontAwesomeIcon
                  icon={faMagic}
                  className="text-blue-700 text-3xl"
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Content Wizards</h2>
                <p className="text-base">
                  Creative agencies encompass a wide range of services related
                  to creative and strategic marketing.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-green-300 rounded-full py-4 px-5">
                <FontAwesomeIcon
                  icon={faLightbulb}
                  className="text-blue-700 text-3xl"
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Idea Makers</h2>
                <p className="text-base">
                  Creative agencies encompass a wide range of services related
                  to creative and strategic marketing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Develop;
