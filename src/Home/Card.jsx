import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faUser,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import img13 from "../assets/img13.png";
import img14 from "../assets/img14.png";
import img15 from "../assets/img15.png";

const Card = () => {
  return (
    <div className="lg:w-[1400px] mx-auto mt-10">
      <div className="flex mb-10 justify-between">
        <h2 className="text-xl lg:text-3xl px-4 lg:px-0 lg:pl-5 font-bold">
          Crafting Brands That Stand <br /> Out from the Crowd
        </h2>
        <div className="lg:pr-16">
          <FontAwesomeIcon
            className="bg-gray-300 rounded-full p-4 text-blue-800 mr-2"
            icon={faArrowLeft}
          />
          <FontAwesomeIcon
            className="bg-blue-800 rounded-full p-4 text-white"
            icon={faArrowRight}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:pl-5 pl-2 mb-10 mx-auto">
        <div className="card w-96 bg-base-100 shadow-xl relative">
          <figure className="relative">
            <img src={img13} alt="Shoes" />
            <div className="date-bg">
              <p className="text-white font-bold absolute bg-blue-600 p-1 -bottom-1 left-1">
                Feb 10, 2023
              </p>
            </div>
          </figure>
          <div className="card-body">
            <div className="flex justify-between">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-blue-800 mr-2"
                />
                <p>By admin</p>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faComments}
                  className="text-blue-800 mr-2"
                />
                <p>Comments</p>
              </div>
            </div>
            <h2 className="card-title">
              Creativity Unleashed the a Success Attained
            </h2>
            <div className="card-actions justify-start items-center">
              Read More{" "}
              <FontAwesomeIcon className=" text-black" icon={faArrowRight} />
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl relative">
          <figure className="relative">
            <img src={img14} alt="Shoes" />
            <div className="date-bg">
              <p className="text-white font-bold absolute bg-blue-600 p-1 -bottom-1 left-1">
                Feb 12, 2023
              </p>
            </div>
          </figure>
          <div className="card-body">
            <div className="flex justify-between">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-blue-800 mr-2"
                />
                <p>By admin</p>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faComments}
                  className="text-blue-800 mr-2"
                />
                <p>Comments</p>
              </div>
            </div>
            <h2 className="card-title">
              Empowering Brands the a through Creative
            </h2>
            <div className="card-actions justify-start items-center">
              Read More{" "}
              <FontAwesomeIcon className=" text-black" icon={faArrowRight} />
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl relative">
          <figure className="relative">
            <img src={img15} alt="Shoes" />
            <div className="date-bg">
              <p className="text-white font-bold absolute bg-blue-600 p-1 -bottom-1 left-1">
                Feb 15, 2023
              </p>
            </div>
          </figure>
          <div className="card-body">
            <div className="flex justify-between">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-blue-800 mr-2"
                />
                <p>By admin</p>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faComments}
                  className="text-blue-800 mr-2"
                />
                <p>Comments</p>
              </div>
            </div>
            <h2 className="card-title">
              The Rise of Plant-Based Diets Rise of Plant
            </h2>
            <div className="card-actions justify-start items-center">
              Read More{" "}
              <FontAwesomeIcon className=" text-black" icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
