"use client";
import React from "react";
import Image from "next/image";

const FertilityCard = ({
  iconSrc,
  title,
  subtitle,
  description,
  benefits,
  isHovered,
}) => {
  return (
    <article
      className={`rounded-[15px] overflow-hidden transition-all duration-300 min-h-max md:min-h-[24rem] flex flex-col h-full transform hover:scale-105 hover:shadow-[0px_8px_40px_rgba(0,0,0,0.15)]`}
      style={{
        background:
          "linear-gradient(335deg, #FFCD89 4.32%, #FEE6C7 43.75%, #FFF5E8 72.91%)",
      }}
    >
      <div className="relative p-6 px-8 flex-grow flex flex-col justify-center">
        <div className="absolute -top-44 -right-8 z-10 w-[105px] aspect-[0.31]">
          <Image
            src="/ornament6.svg"
            alt="Decorative element"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className="flex flex-col items-center justify-center mb-4">
          <div className="w-8 mb-2">
            <Image
              src={iconSrc}
              alt={`${title} icon`}
              width={48}
              height={48}
              layout="responsive"
            />
          </div>
          <h3 className="text-lg font-extrabold text-center text-primary font-lato">
            {title}
          </h3>
        </div>
        <h4 className="text-[1rem] font-bold mb-2 text-center text-gray-800 font-lato">
          {subtitle}
        </h4>
        <p className="text-sm mb-4 flex-grow text-gray-700 font-lato">
          {description}
        </p>
        <ul className="text-sm space-y-2">
          {benefits.map((benefit, index) => (
            <li
              key={index}
              className="flex items-start text-gray-700 font-lato text-sm"
            >
              <span className="mr-2 text-primary">•</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default FertilityCard;
