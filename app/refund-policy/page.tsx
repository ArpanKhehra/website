"use client";

import React from "react";
import Image from "next/image";

const RefundPolicy = () => {
  const refundPolicyContent = {
    header: {
      title: "Refund Policy",
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
            src={refundPolicyContent.images.headerDecoration}
            alt="Decorative element"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className="hidden md:inline absolute top-0 -left-4 z-10 w-[105px] aspect-[0.31]">
          <Image
            src={refundPolicyContent.images.headerDecoration}
            alt="Decorative element"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <h2 className="text-[1.5625rem] font-semibold leading-none text-primary md:text-[3.5rem] text-center mt-10 font-lexend">
          {refundPolicyContent.header.title}
        </h2>
        <p className="text-[0.75rem] font-lexend mt-7 md: text-lg leading-none text-center text-gray max-md:max-w-full">
          {refundPolicyContent.header.subtitle}
        </p>
      </section>
      <section className="padding-container max-w-4xl m-auto font-lato box-border">
        <h2 className="font-lexend text-3xl md:text-4xl font-semibold mb-8">
          Refund Policy
        </h2>

        <h3 className="font-lexend text-xl md:text-2xl font-semibold text-gray-800 mb-4">
          Overview
        </h3>
        <p className="md:text-lg text-sm text-gray mb-6">
          At Arpan Khehra Fitness, we strive to provide a positive experience.
          If you are not satisfied with our services, our refund policy outlines
          your options.
        </p>

        <h3 className="font-lexend text-xl md:text-2xl font-semibold text-gray-800 mb-4">
          Refund Conditions
        </h3>
        <ul className="list-disc list-inside pl-4 space-y-3 mb-6">
          <li className="text-gray md:text-lg text-sm">
            <strong>Membership Fees:</strong> Membership fees are non-refundable
            after the first 14 days of purchase. If you cancel within this
            period, you will receive a full refund.
          </li>
          <li className="text-gray md:text-lg text-sm">
            <strong>Personal Training Sessions:</strong> If you cancel a session
            with less than 24 hours&apos; notice, the session will be forfeited.
            Cancellations made more than 24 hours in advance may be rescheduled
            or refunded.
          </li>
          <li className="text-gray md:text-lg text-sm">
            <strong>Merchandise:</strong> Unused and unopened merchandise can be
            returned within 30 days for a full refund. Please retain your
            receipt for proof of purchase.
          </li>
        </ul>

        <h3 className="font-lexend text-xl md:text-2xl font-semibold text-gray-800 mb-4">
          How to Request a Refund
        </h3>
        <p className="md:text-lg text-sm text-gray mb-6">
          To request a refund, please contact our customer service team via
          email or phone. Provide your order details and reason for the refund
          request.
        </p>
      </section>
    </main>
  );
};

export default RefundPolicy;
