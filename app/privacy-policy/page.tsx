"use client";

import React from "react";
import Image from "next/image";

const PrivacyPolicy = () => {
  const privacyPolicyContent = {
    header: {
      title: "Privacy Policy",
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
            src={privacyPolicyContent.images.headerDecoration}
            alt="Decorative element"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className="hidden md:inline absolute top-0 -left-4 z-10 w-[105px] aspect-[0.31]">
          <Image
            src={privacyPolicyContent.images.headerDecoration}
            alt="Decorative element"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <h2 className="text-[1.5625rem] font-semibold leading-none text-primary md:text-[3.5rem] text-center mt-10 font-lexend">
          {privacyPolicyContent.header.title}
        </h2>
        <p className="text-[0.75rem] font-lexend mt-7 md: text-lg leading-none text-center text-gray max-md:max-w-full">
          {privacyPolicyContent.header.subtitle}
        </p>
      </section>
      <section className="padding-container max-w-4xl m-auto font-lato box-border">
        <h2 className="font-lexend text-3xl md:text-4xl font-semibold mb-8">
          Privacy Policy
        </h2>

        <h3 className="font-lexend text-xl md:text-2xl font-semibold text-gray-800 mb-4">
          Introduction
        </h3>
        <p className="md:text-lg text-sm text-gray mb-6">
          At Arpan Khehra Fitness, your privacy is our priority. This Privacy
          Policy outlines how we collect, use, and protect your personal
          information.
        </p>

        <h3 className="font-lexend text-xl md:text-2xl font-semibold text-gray-800 mb-4">
          Information We Collect
        </h3>
        <ul className="list-disc list-inside pl-4 space-y-3 mb-6">
          <li className="text-gray md:text-lg text-sm">
            <strong>Personal Information:</strong> Name, email address, phone
            number, and payment information when you sign up or make a purchase.
          </li>
          <li className="text-gray md:text-lg text-sm">
            <strong>Usage Data:</strong> Information about how you use our
            website and services, including IP address, browser type, and page
            views.
          </li>
        </ul>

        <h3 className="font-lexend text-xl md:text-2xl font-semibold text-gray-800 mb-4">
          How We Use Your Information
        </h3>
        <p className="md:text-lg text-sm text-gray mb-6">
          We use your information to:
        </p>

        <ul className="list-disc list-inside pl-4 space-y-3 mb-6">
          <li className="text-gray md:text-lg text-sm">
            Provide and improve our services
          </li>
          <li className="text-gray md:text-lg text-sm">
            Process transactions and manage memberships
          </li>
          <li className="text-gray md:text-lg text-sm">
            Communicate with you about updates, promotions, and events
          </li>
          <li className="text-gray md:text-lg text-sm">
            Analyze website usage to enhance user experience
          </li>
        </ul>

        <h3 className="font-lexend text-xl md:text-2xl font-semibold text-gray-800 mb-4">
          Data Protection
        </h3>
        <p className="md:text-lg text-sm text-gray mb-6">
          We implement appropriate security measures to protect your personal
          data. However, no method of transmission over the internet is 100%
          secure. By using our services, you acknowledge that you understand
          these risks.
        </p>

        <h3 className="font-lexend text-xl md:text-2xl font-semibold text-gray-800 mb-4">
          Your Rights
        </h3>
        <ul className="list-disc list-inside pl-4 space-y-3 mb-6">
          <li className="text-gray md:text-lg text-sm">
            Access your personal information
          </li>
          <li className="text-gray md:text-lg text-sm">
            Request corrections to inaccurate data
          </li>
          <li className="text-gray md:text-lg text-sm">
            Opt-out of promotional communications
          </li>
        </ul>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
