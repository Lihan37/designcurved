import React from "react";
import img1 from '../assets/img1.png';

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-[#e6d1ca] via-[#cbe1eb] to-[#ece9dc] px-2 py-4">
      <div className="flex flex-col sm:flex-row w-full mx-auto"> 
        <div className="mx-auto w-full text-gray-900 lg:pl-72 mb-4 sm:mb-0">
          <h2 className="text-6xl mb-3 font-semibold">
            Bring your <br />
            business into <br />
            creativity
          </h2>
          <p>
            Incorporating a business offers benefits tax limited <br />
            liability protection tax the
          </p>
          <button className="btn btn-primary my-3">Get Started</button>
        </div>
        <div className="w-1/2 lg:w-full lg:pl-72 mx-auto">
          <img src={img1} className="bg-blue-300 rounded-t-full" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
