import React from "react";
import img16 from "../assets/img16.png";

const Passion = () => {
  return (
    <div className="lg:w-full mt-40 mx-auto mb-5 bg-[#F5F5F7]">
      <div className="flex flex-col lg:flex-row justify-evenly items-center">
        <div className="relative -top-32">
          <img src={img16} alt="" />
        </div>
        <div className="text-center  lg:text-start">
          <h2 className="text-2xl lg:text-4xl mb-4 font-semibold lg:pr-16">
            Your Vision, Our Passion <br />
            Outstanding Results
          </h2>
          <div className="flex items-center gap-2">
            <input
              type="text"
              className="p-4 rounded-xl w-64 mt-5 shadow-lg"
              placeholder="Enter your email"
            />
            <br />
            <button className="btn mt-5 btn-primary">SubScribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passion;
