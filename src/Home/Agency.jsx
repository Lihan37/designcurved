import React from "react";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";

const Agency = () => {
  return (
    <div className="container mx-auto my-10 ">
      <h2 className="text-4xl py-10 font-semibold text-center mb-6">
        Where Imagination Meets 
        <br />the Agency Innovation
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          imgSrc={img5}
          title="Content and Copywriting"
          description="non similique voluptatem"
          bgColor="#ebf8ff"
          imgWidth={400}
          imgHeight={300}
        />
        <Card
          imgSrc={img6}
          title="Content and Copywriting"
          description="consequatur excepturi magnam"
          bgColor="#f0fff4"
          imgWidth={400}
          imgHeight={300}
        />
        <Card
          imgSrc={img7}
          title="Social Media Strategy"
          description="consequatur excepturi magnam"
          bgColor="#fffbea"
          imgWidth={400}
          imgHeight={300}
        />
        <Card
          imgSrc={img8}
          title="Social Media Strategy"
          description="consequatur excepturi magnam"
          bgColor="#fff5f7"
          imgWidth={400}
          imgHeight={300}
        />
        <FullWidthCard
          imgSrc={img9}
          title="Brand Identity and Logo Design"
          description="consequatur excepturi magnam"
          imgHeight={400}
          bgColor="#f3e8ff"
        />
      </div>
    </div>
  );
};

const Card = ({ imgSrc, title, description, bgColor, imgWidth, imgHeight }) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="bg-white shadow-lg rounded-lg py-5 overflow-hidden flex flex-col justify-between"
    >
      <div className="flex justify-center">
        <img
          src={imgSrc}
          alt={title}
          style={{ width: imgWidth, height: imgHeight }}
          className="object-cover mt-5"
        />
      </div>
      <div className="p-2 flex flex-col justify-center">
        <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-2 text-center">
          {title}
        </h3>
        <p className="text-xs md:text-sm lg:text-base text-gray-600 text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

const FullWidthCard = ({
  imgSrc,
  title,
  description,
  bgColor,
  imgWidth,
  imgHeight,
}) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between md:col-span-2 lg:col-span-2"
    >
      <div className="flex justify-center">
        <img
          src={imgSrc}
          alt={title}
          style={{ width: imgWidth, height: imgHeight }}
          className="object-cover"
        />
      </div>
      <div className="p-2 flex flex-col justify-center py-5">
        <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-2 text-center">
          {title}
        </h3>
        <p className="text-xs md:text-sm lg:text-base text-gray-600 text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Agency;
