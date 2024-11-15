"use client";

import React from "react";
import Image from "next/image";
import openLink from "../../utilities/open-link";

const HerbalCard = ({ image, title, description, points, buttonText }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-[0px_8px_40px_rgba(0,0,0,0.15)]">
      <div className="relative h-48">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-primary mb-2 font-lexend">
          {title}
        </h3>
        <p className="text-gray mb-4 flex-grow font-lato font-medium text-sm leading[28px]">
          {description}
        </p>
        <ul className="list-disc pl-5 mb-4 text-gray flex-grow">
          {points.map((point, index) => (
            <li key={index} className="mb-1 font-lato text-sm">
              {point}
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            openLink("/contact-us", true);
          }}
          className="text-primary font-semibold hover:underline text-left text-sm"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default HerbalCard;
