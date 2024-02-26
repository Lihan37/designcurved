import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="lg:w-[1000px] mb-10 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="col-span-3 lg:col-span-1 items-center px-5 lg:px-0  ">
          <h2 className="text-2xl font-bold">Contact For Urgent Service</h2>
          <p>
            Creative agency encompasses a wide range of services related to the
            design creative and strategic
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon icon={faPhone} className="text-blue-500 mr-2" />
            +(201) 555-0124
          </p>
        </div>
        <div className="col-span-3 lg:col-span-2 lg:ml-10 px=5">
          <form>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-5 lg:px-0">
              <div className="lg:col-span-1">
                <label htmlFor="name" className="block mb-1">Your Name:</label>
                <input type="text" id="name" className="border border-gray-300 px-3 py-2 rounded-md w-full lg:w-auto" />
              </div>
              <div className="lg:col-span-1">
                <label htmlFor="email" className="block mb-1">Email:</label>
                <input type="email" id="email" className="border border-gray-300 px-3 py-2 rounded-md w-full lg:w-auto" />
              </div>
              <div className="lg:col-span-1">
                <label htmlFor="date" className="block mb-1">Date:</label>
                <input type="date" id="date" className="border border-gray-300 px-3 py-2 rounded-md w-full lg:w-auto" />
              </div>
              <div className="lg:col-span-1">
                <label htmlFor="address" className="block mb-1">Your Address:</label>
                <textarea id="address" rows="2" className="border border-gray-300 px-3 py-2 rounded-md w-full lg:w-auto"></textarea>
              </div>
              <div className="lg:col-span-1">
                <label htmlFor="phone" className="block mb-1">Phone Number:</label>
                <input type="tel" id="phone" className="border border-gray-300 px-3 py-2 rounded-md w-full lg:w-auto" />
              </div>
              <div className="lg:col-span-1">
                <label htmlFor="option" className="block mb-1">Choose an Option:</label>
                <select id="option" className="border border-gray-300 px-3 py-2 rounded-md w-full lg:w-auto">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              <div className="lg:col-span-3">
                <label htmlFor="message" className="block mb-1">Your Message:</label>
                <textarea id="message" rows="4" className="border border-gray-300 px-3 py-2 rounded-md w-full"></textarea>
              </div>
              <div className="lg:col-span-3">
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full lg:w-auto">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
