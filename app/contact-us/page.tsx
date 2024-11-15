"use client";

import React from "react";
import Image from "next/image";
import WelcomeSection from "../../components/welcome-section";
import ContactForm from "../../components/contact-form";
import CTAGeneral from "../../components/ui/cta-general";
import ClientTestimonials from "../../components/client-testimonials";
import WPTestimonialSection from "@/components/wp-testimonial-section";

const ContactUs = () => {
  const recogCTAData = {
    image: "/random-cta.png",
    title: "Talk to our experts now!",
    description:
      "At AKF, we specialize in crafting personalized herbal formulations tailored to naturally boost your vitality and overall wellness.",
    buttonText: "Contact Us",
    buttonHref: "/contact-us", // Add the appropriate link
  };
  return (
    <main className="relative overflow-hidden mb-16">
      <section className="relative overflow-hidden py-20 md:py-32 px-20 bg-[url('/bg-contactus.svg')] bg-cover bg-no-repeat bg-center max-md:px-5 !pb-12">
        <div className="hidden md:inline absolute top-0 right-0 z-10 w-[105px] aspect-[0.31]">
          <Image
            src="/ornament-dots.svg"
            alt="Decorative element"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className="hidden md:inline absolute top-0 -left-4 z-10 w-[105px] aspect-[0.31]">
          <Image
            src="/ornament-dots.svg"
            alt="Decorative element"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <h2 className="text-6xl font-semibold leading-none max-md:text-4xl text-center mt-10 font-lexend text-white">
          Contact Us
        </h2>
        <p className="font-lexend mt-7 text-lg leading-none text-center text-white max-md:max-w-full">
          Ready to transform your lives? Contact us now!
        </p>
      </section>

      <ContactForm />
      <WelcomeSection />
      {/* <ClientTestimonials /> */}
      <WPTestimonialSection />
      <CTAGeneral
        {...recogCTAData}
        containerClassName="my-20 bg-white border border-primary rounded-md flex-row-reverse"
        titleClassName="text-primary"
        descriptionClassName="text-gray text-left"
        buttonClassName="rounded-md bg-primary hover:bg-primary text-white transition-colors duration-300"
        imageClassName="flex flex-row items-center justify-end"
        contentClassName={""}
      />
    </main>
  );
};

export default ContactUs;
