"use client";
import React from "react";
import Image from "next/image";

export default function RecogIntro() {
  return (
    <section className="flex flex-col justify-center items-center padding-container bg-white">
      <div className="w-full max-container max-md:max-w-full">
        <div className="flex gap-5 max-lg:flex-col">
          <div className="relative gap-0 grid grid-cols-2 items-start justify-start lg:flex-row gap-0 md:items-center md:justify-center lg:w-1/2 max-md:ml-0 w-full">
            <Image
              src="/recog-intro-01.png"
              alt="Fitness Team"
              width={400}
              height={400}
              objectFit="cover"
              className="relative lg:absolute z-10 lg:-right-40 lg:-left-32"
            />
            <Image
              src="/recog-intro-02.png"
              alt="Fitness Team"
              width={500}
              height={500}
              objectFit="cover"
              className="relative lg:absolute top-0 z-0 right-12 lg:-right-2"
            />
          </div>
          <div className="flex flex-col ml-5 w-full lg:w-1/2 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <h2 className="text-base md:text-[1.5625rem] font-bold text-left text-primary font-lexend">
                The Value of Our Credentials
              </h2>
              <h1 className="self-stretch text-[1.5625rem] md:text-4xl font-lexend font-bold leading-none text-dark max-md:max-w-full mt-4">
                Professional Certifications
              </h1>
              <p className="mt-6 text-xl font-lexend font-semibold leading-tight md:leading-9 text-left text-primary max-md:max-w-full">
                Pioneering High Standards in Fitness and Nutrition
              </p>
              <p className="self-stretch font-lato mt-3 text-[0.75rem] md:text-lg leading-tight md:leading-8 text-gray max-md:max-w-full">
                Our certifications and recognitions represent a commitment to
                maintaining high standards in fitness and nutrition. Each
                credential is earned through rigorous training and continuous
                professional development, ensuring that we provide expert
                guidance tailored to your needs.
              </p>
              <ul className="mt-4 flex flex-col gap-2 font-lato list-disc ml-4 text-[0.75rem] md:text-lg">
                <li className="text-[0.75rem] md:text-lg">
                  <strong>Expertise:</strong>&nbsp;Validates our advanced skills
                  and knowledge.
                </li>
                <li className="text-[0.75rem] md:text-lg">
                  <strong>Quality:</strong>&nbsp;Assures adherence to top
                  industry standards.
                </li>
                <li className="text-[0.75rem] md:text-lg">
                  <strong>Trust:</strong>&nbsp;Builds client confidence in our
                  professional capabilities.
                </li>
                <li className="text-[0.75rem] md:text-lg">
                  <strong>Holistic Approach:</strong>&nbsp;Covers diverse areas
                  of fitness and nutrition.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
