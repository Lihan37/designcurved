import React from "react";
import {
  AiOutlineCloud,
  AiOutlineUser,
  AiOutlineDatabase,
  AiOutlineTool,
} from "react-icons/ai";
import cloud from "../assets/CLOUD.png";

const Services = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Simplify your business with
          <br />
          the SaaS{" "}
          <img
            src={cloud}
            alt="Cloud"
            className="inline-block w-12 h-12 mx-2"
          />{" "}
          services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-4">
          <ServiceCard
            title="Creative Pixel"
            description="Creative agency encom a wide the range of services related to creative "
            colorClass="bg-sky-100"
            icon={
              <div className="rounded-full bg-[#95D5EE] p-3">
                <AiOutlineCloud />
              </div>
            }
          />
          <ServiceCard
            title="Artistic Wave"
            description="Creative agency encom a wide the range of services related to creative "
            colorClass="bg-[#FAF7F0]"
            icon={
              <div className="rounded-full bg-[#F9A78F] p-3">
                <AiOutlineUser />
              </div>
            }
          />
          <ServiceCard
            title="Design Forge"
            description="Creative agency encom a wide the range of services related to creative "
            colorClass="bg-[#FAF7F0]"
            icon={
              <div className="rounded-full bg-[#F9A78F] p-3">
                <AiOutlineDatabase />
              </div>
            }
          />
          <ServiceCard
            title="Innovation Hub"
            description="Creative agency encom a wide the range of services related to creative "
            colorClass="bg-sky-100"
            icon={
              <div className="rounded-full bg-[#F9E58F] p-3">
                <AiOutlineTool />
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, description, colorClass, icon }) => {
  return (
    <div
      className={`p-4 md:w-2/4 lg:w-3/4 text-gray-800 mx-auto rounded-md shadow-lg ${colorClass} flex items-center`}
    >
      <div className="mr-4">{icon}</div>
      <div>
        <h3 className="text-xl text-gray-800 font-semibold mb-2">{title}</h3>
        <p className="text-gray-800">{description}</p>
      </div>
    </div>
  );
};

export default Services;
