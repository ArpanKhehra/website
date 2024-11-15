"use client";

import React from "react";
import { Star } from "lucide-react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    name: "Nick Weimann",
    title: "District Directives Representative",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    image: "/nick.png",
    rating: 5,
  },
  // Add more testimonials here
];

const TestimonialCard = ({ testimonial }) => (
  <div className="relative bg-white p-6 flex flex-col md:flex-row w-[350px] md:w-[820px]">
    <div
      className="w-full md:w-[410px] flex flex-col items-center p-6 py-12 justify-between"
      style={{
        boxShadow: "0px 57.867px 123.121px 0px rgba(21, 21, 21, 0.15)",
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
            <Star className="w-4 h-4 text-white" />
          </div>
          <span className="text-primary font-semibold">Testimonial</span>
        </div>
        <h3 className="font-lato text-2xl font-bold mb-1 text-center">
          {testimonial.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 text-center">
          {testimonial.title}
        </p>
        <p className="text-gray-800 text-sm text-center">
          {testimonial.content}
        </p>
      </div>
      <div className="flex mt-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
    </div>
    <div className="relative right-0 top-0 md:relative md:right-4 md:-top-28 w-full md:w-[370px]">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-full object-cover"
      />
    </div>
  </div>
);

export default function ClientTestimonials() {
  const galleryImages = [
    "/whatsapp-chat-01.png",
    "/whatsapp-chat-02.png",
    "/whatsapp-chat-03.png",
    "/whatsapp-chat-04.png",
    "/whatsapp-chat-05.png",
    "/whatsapp-chat-05.png",
    // Add more image paths as needed
  ];
  return (
    <section className="bg-white overflow-hidden">
      <div className="mx-auto">
        <div className="padding-container py-0">
          <h2 className="text-[1.5625rem] font-semibold leading-none text-primary md:text-[3.5rem] text-left lg:text-center">
            Client Testimonials
          </h2>
          <p className="text-[0.75rem] mt-5 md:text-lg text-left lg:text-center text-gray mx-0 lg:mx-auto">
            Here&apos;s what some of our happy clients have to say
          </p>
        </div>
        <div className="relative">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="fast"
            className="py-4 md:py-12"
            pauseOnHover={true}
          >
            {(testimonial) => <TestimonialCard testimonial={testimonial} />}
          </InfiniteMovingCards>
        </div>
      </div>
    </section>
  );
}
