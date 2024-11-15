"use client";

import Image from "next/image";
import React from "react";

const CertificationCard = ({
  image,
  title,
  organization,
  issueDate,
  description,
}) => {
  return (
    <article className="flex flex-col pb-4 text-base leading-6 text-black bg-white rounded-2xl shadow-[0px_0px_40px_rgba(0,0,0,0.12)] transition-all duration-300 ease-in-out hover:shadow-[0px_0px_60px_rgba(0,0,0,0.18)] hover:scale-105 transform">
      <div className="relative w-full aspect-[1.41] rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={`${title} certification`}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="flex flex-col items-start px-5 mt-4 w-full">
        <h2 className="font-semibold leading-none font-lato text-lg md:text-[1.25rem]">
          {title}
        </h2>
        <p className="mt-3.5 font-lato text-[1rem]">
          <strong>Issuing Organization:</strong> {organization}
        </p>
        <p className="mt-2.5 leading-loose font-lexend text-lg">
          <strong>Issue Date:</strong> {issueDate}
        </p>
        {/* <p className="self-stretch mt-2.5 font-lato text-[1rem]">
          {description}
        </p> */}
      </div>
    </article>
  );
};

export default CertificationCard;
