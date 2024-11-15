"use client";

import React from "react";
import Image from "next/image";

const Terms = () => {
  const aboutUsContent = {
    header: {
      title: "Terms & Conditions",
      subtitle: "",
    },
    images: {
      headerDecoration: "/ornament-dots.svg",
      mainImage: "/about-intro.svg",
      decorationExplosive: "/ornament-dots-explosive.svg",
    },
  };

  return (
    <main className="relative overflow-hidden">
      <section className="relative overflow-hidden py-20 md:py-32 px-20 bg-orange-50 max-md:px-5 !pb-12">
        <div className="hidden md:inline absolute top-0 right-0 z-10 w-[105px] aspect-[0.31]">
          <Image
            src={aboutUsContent.images.headerDecoration}
            alt="Decorative element"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className="hidden md:inline absolute top-0 -left-4 z-10 w-[105px] aspect-[0.31]">
          <Image
            src={aboutUsContent.images.headerDecoration}
            alt="Decorative element"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <h2 className="text-[1.5625rem] font-semibold leading-none text-primary md:text-[3.5rem] text-center mt-10 font-lexend">
          {aboutUsContent.header.title}
        </h2>
        <p className="text-[0.75rem] font-lexend mt-7 md: text-lg leading-none text-center text-gray max-md:max-w-full">
          {aboutUsContent.header.subtitle}
        </p>
      </section>
      <section className="padding-container max-w-4xl m-auto font-lato box-border">
        <h2 className="font-lexend text-3xl md:text-4xl font-semibold mb-8">
          Terms and Conditions
        </h2>

        <h3 className="font-lexend text-xl md:text-2xl font-semibold text-gray-800 mb-4">
          About Me
        </h3>
        <p className="md:text-lg text-sm text-gray mb-6">
          At Arpan Khehra Fitness, I personally manage all aspects of your
          fitness journey. With a passion for health and wellness, I am
          dedicated to providing you with tailored training programs and support
          every step of the way.
        </p>

        <h3 className="font-lexend text-xl md:text-2xl font-semibold text-gray-800 mb-4">
          Code of Conduct
        </h3>
        <p className="md:text-lg text-sm text-gray mb-6">
          To ensure a positive experience for all members, I ask that everyone
          adheres to the following guidelines:
        </p>

        <ul className="list-disc list-inside pl-4 space-y-3 mb-6">
          <li className="text-gray md:text-lg text-sm">
            <strong>Respect:</strong> Treat each other with kindness and
            respect.
          </li>
          <li className="text-gray md:text-lg text-sm">
            <strong>Safety:</strong> Use equipment correctly and report any
            unsafe conditions.
          </li>
          <li className="text-gray md:text-lg text-sm">
            <strong>Commitment:</strong> Attend scheduled sessions consistently.
            If you need to cancel, please notify me in advance.
          </li>
          <li className="text-gray md:text-lg text-sm">
            <strong>Community:</strong> Engage with the community through
            challenges and events.
          </li>
        </ul>

        <h3 className="font-lexend text-xl md:text-2xl font-semibold text-gray-800 mb-4">
          Membership Conditions
        </h3>
        <ul className="list-disc list-inside pl-4 space-y-3 mb-6">
          <li className="text-gray md:text-lg text-sm">
            Memberships are non-transferable and cannot be shared.
          </li>
          <li className="text-gray md:text-lg text-sm">
            A health assessment must be completed before starting any training
            program.
          </li>
          <li className="text-gray md:text-lg text-sm">
            I reserve the right to terminate memberships if conduct guidelines
            are violated.
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Terms;
