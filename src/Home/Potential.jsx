import React from "react";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BsAward } from "react-icons/bs";

const Potential = () => {
  return (
    <div className="w-full lg:w-[1600px] my-6 lg:pl-16 mx-auto flex flex-col lg:flex-row items-center bg-white">
      <div className="w-full lg:w-1/2 lg:pl-40">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-2">
          <img className="bg-yellow-300 rounded-t-full w-full lg:w-auto" src={img3} alt="" />
          <div className="w-full lg:w-2/4 mt-8 lg:mt-0 text-center lg:text-left items-center">
            <img src={img4} alt="" className="mx-auto lg:mx-0 mb-4 lg:mb-0" />
            <div className="bg-white w-2/3 shadow-lg flex items-center mt-2 px-2 py-1 rounded-md ml-16 lg:ml-2">
              <div className="bg-cyan-400 p-4 rounded-full">
                <AiOutlineUsergroupAdd className="text-gray-900" />
              </div>
              <div className="text-gray-600 justify-center">
                <span className="text-2xl font-semibold block lg:inline">5000+</span>
                <span className="block lg:inline">Satisfied clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 pl-5">
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl mb-2 font-bold">
            Unleash Your Brand's Creative Potential the agency
          </h1>
          <p>
            Nulla vitae ex nunc. Morbi quis purus convallis, fermentum metus
            volutpat, sodales purus. Nunc quis maurodales purus. Nunc quis
            mauris et eros vulputate mattis Nulla vitae ex nunc.
          </p>
        </div>
        <div className="flex items-center ml-16 lg:ml-2 mt-5">
          <div className="bg-cyan-400 z-10 relative right-6 lg:left-7 rounded-full p-3 mr-2">
            <BsAward className="text-gray-900" />
          </div>
          <div className="border py-4 px-4 lg:px-6 absolute lg:static border-black items-center rounded-lg">
            <span className="text-gray-900"><span className="text-2xl font-semibold">20+</span> winning awards</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Potential;
