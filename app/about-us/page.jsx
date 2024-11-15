"use client";

import React from "react";
import Image from "next/image";
import InlineImageAndPara from "../../components/ui/inline-image-and-para";
import InlineImageAndParaAbout from "../../components/ui/inline-image-and-para-about";
import VisionMission from "../../components/our-vision";
import WellnessJourney from "../../components/wellness-journey";
import CertificationsCarousel from "../../components/certifications-carousel";
import ClientTestimonials from "../../components/client-testimonials";
import CTAGeneral from "../../components/ui/cta-general";
import FaqSection from "@/components/faq-section";
import VideoTestimonials from "@/components/video-testimonials";
import WhatsappTestimonialCarousel from "@/components/whatsapp-testimonials";
import { wpTestimonials } from "@/utilities/data";
import WPTestimonialSection from "@/components/wp-testimonial-section";

const AboutUs = () => {
  const aboutUsContent = {
    header: {
      title: "About AKF",
      subtitle: "Reform your Health with Arpan Khehra Fitness",
    },
    mainContent: {
      sectionTitle: "Who We Are",
      title: "Arpan Khehra Fitness",
      subtitle: "Transforming Lives Through Fitness and Nutrition",
      description:
        "Welcome to Arpan Khehra Fitness (AKF), where we are dedicated to transforming lives through our personalized diet and workout plans. Founded by Arpan Khehra, a seasoned fitness trainer from punjab, AKF is a transformative experience designed to help you reach your desired body.",
      philosophy: {
        title: "Our Philosophy",
        description:
          "At AKF, we believe that reaching your best health is more than just about workouts and weight loss. Our method brings together effective exercise, personalized nutrition plans, and support for a positive mindset. We know that everyone is unique, with different goals and needs, so we make sure our services are customized to suit you. Whether you're just starting out or looking to reach the next level, we're here to guide you step by step toward your fitness goals",
      },
    },
    images: {
      headerDecoration: "/ornament-dots.svg",
      mainImage: "/about-intro.svg",
      decorationExplosive: "/ornament-dots-explosive.svg",
    },
  };
  const visionContent = {
    mainContent: {
      sectionTitle: "The Visionary Behind AKF",
      title: "Arpan Khehra",
      subtitle: "",
      description:
        "With over 8 years of hands-on experience in the fitness and nutrition industry, Arpan Khehra has made a remarkable impact on the lives of over 1,000 clients. Known for his expertise in personal training and body nutrition, Arpan is committed to delivering customized solutions that fit each individual's unique needs. His passion for fitness and holistic health drives AKF’s mission to foster a healthier and happier world.",
    },
    images: {
      mainImage: "/arpan-vision.png",
    },
  };
  const expertiseContent = {
    mainContent: {
      sectionTitle: "Where We Serve",
      title: "Global Expertise",
      subtitle: "Fitness and Nutrition Tailored for You, Anywhere",
      description:
        "We are dedicated to delivering top-tier fitness and nutrition solutions to clients worldwide. Our services include personalized diet plans and customized training programs designed to meet your unique goals, regardless of your location. Whether you're in bustling cities or remote areas, our global reach ensures that you receive the highest quality of personal training and nutritional support, tailored specifically to your needs.",
      philosophy: {
        title:
          "Join our global community and transform your fitness journey today!",
      },
      button: {
        text: "Book Consultation",
        href: "/contact-us",
        variant: "primary",
        size: "md",
      },
    },
    images: {
      mainImage: "/map.svg",
    },
  };
  const ctaMainContent = {
    mainContent: {
      sectionTitle: "Our Best Tailored Plans",
      subtitle: "",
      description: "",
      philosophy: {
        title:
          "At AKF, we offer a variety of comprehensive plans designed to meet your unique fitness and nutrition needs.",
      },
      button: {
        text: "Explore Plans",
        href: "/consultation",
        variant: "primary",
        size: "md",
      },
    },
    images: {
      mainImage: "/aboutMainCTA.png",
    },
  };

  const recogCTAData = {
    image: "/random-cta.png",
    title: "Talk to our experts now!",
    description:
      "At AKF, we specialize in crafting personalized herbal formulations tailored to naturally boost your vitality and overall wellness.",
    buttonText: "Contact Us",
    buttonHref: "/contact-us", // Add the appropriate link
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
      {/* <div className="padding-container">
        <VideoTestimonials />
      </div> */}
      <div className="flex flex-col">
        <InlineImageAndParaAbout
          containerClassName="!mt-0 !mb-0"
          content={aboutUsContent.mainContent}
          images={aboutUsContent.images}
          useVideoCarousel={true} // Enable the video carousel
          videos={[
            { id: 1, src: "/video1.mov", title: "Arpan Khehra" },
            { id: 2, src: "/video-2.mov", title: "Transforming Lives" },
          ]}
          imageWidth={300}
          imageHeight={350}
        />
        <InlineImageAndPara
          containerClassName="!mt-0 !mb-0"
          content={visionContent.mainContent}
          images={visionContent.images}
          className="flex flex-row"
          imageWidth={575}
          imageHeight={350}
          sectionTitleClassName="font-semibold"
        />
      </div>
      <VisionMission />
      <WellnessJourney />
      <CertificationsCarousel />

      <InlineImageAndPara
        containerClassName="!mt-0 !mb-0"
        content={expertiseContent.mainContent}
        images={expertiseContent.images}
        philosophyTitleClassName="lg:text-2xl"
        imageWidth={700}
        // lottieAnimationUrl="https://lottie.host/d69e99ef-b278-4a48-8cf6-e9cecbe9748f/5EZbGebDm3.json"
        lottieAnimationUrl="https://res.cloudinary.com/delnrmdtb/raw/upload/v1728554466/global-animation_kqi8fh.json"
      />
      <InlineImageAndPara
        content={ctaMainContent.mainContent}
        images={ctaMainContent.images}
        philosophyTitleClassName="!text-[1.5625rem] !leading-[2.1875rem]"
        imageWidth={700}
        className="flex flex-row bg-[#FFF5E8]"
        containerClassName="bg-[#FFF5E8] !mt-0 !mb-0 !py-20"
        sectionTitleClassName="text-3xl md:text-5xl"
      />
      {/* <ClientTestimonials /> */}
      <WPTestimonialSection />
      <FaqSection />
      <CTAGeneral
        {...recogCTAData}
        containerClassName="my-20 bg-white border border-primary rounded-md flex-row-reverse"
        titleClassName="text-primary"
        descriptionClassName="text-gray text-left"
        buttonClassName="rounded-md bg-primary hover:bg-primary text-white transition-colors duration-300"
        imageClassName="flex flex-row items-center justify-end"
      />
    </main>
  );
};

export default AboutUs;
