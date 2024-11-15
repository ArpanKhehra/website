"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";
import Button from "./ui/button"; // Assuming you have a Button component

const PersonalTrainingSection = () => {
  return (
    <section className="padding-container">
      <div className="hidden lg:inline absolute -top-48 left-0 z-10 w-[105px] aspect-[0.31]">
        <Image
          src="/ornament-dots.svg"
          alt="Decorative element"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center mb-8">
        <h2 className="text-[1.5625rem] md:text-[3.5rem] font-semibold leading-none text-primary text-center">
          Focused Plans,Great Results
        </h2>
        <p className="my-5 text-gray font-lato text-[0.75rem] mt-5 md:text-lg text-center">
          At AKF, we offer a range of flexible and comprehensive plans
        </p>
      </div>
      <div className="mx-auto my-4 md:my-16">
        <div className="flex flex-col gap-8 max-w-7xl m-auto">
          {/* Image */}
          <div className="w-full flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-[40%]">
              <Image
                src="/personal-training.png" // Replace with your actual image path
                alt="Personal Training"
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            {/* Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-primary font-lexend font-bold text-lg md:text-[1.875rem] mb-2">
                1-1 Personal Training
              </h2>
              <h3
                className={cn(
                  "font-lexend self-stretch mr-6 text-xl md:text-[1.375rem] font-semibold leading-none text-dark mb-2",
                  "max-md:mr-2.5 max-md:max-w-full text-lato"
                )}
              >
                Transform Your Body with Personalized Training.
              </h3>
              <p className="text-primary font-lexend font-semibold mb-4 text-[0.6875rem] md:text-2xl">
                Get the One-on-One Attention You Deserve
              </p>
              <p
                className={cn(
                  "self-stretch mt-3 text-base md:text-lg leading-tight md:leading-8 text-gray mb-6",
                  "max-md:max-w-full font-lato"
                )}
              >
                Achieve optimal health and performance with our variety of
                specialized diet plans. Each plan is designed to fit different
                lifestyles and dietary needs. Achieve optimal health and
                performance with our variety of specialized diet plans. Each
                plan is designed to fit different lifestyles and dietary needs.
                Each plan is designed to fit different lifestyles and dietary
                needs.
              </p>
              <Button
                href={"/contact-us"}
                variant="primary"
                size="lg"
                className="text-[0.75rem] md:text-base font-lexend rounded-md transition-transform duration-300 transform hover:scale-105 hover:shadow-[0px_8px_40px_rgba(0,0,0,0.15)]"
              >
                BECOME A MEMBER
              </Button>
            </div>
          </div>
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-0">
            {[
              {
                title: "Twice a Week Planning",
                description:
                  "Structured and consistent training sessions scheduled twice a week.",
              },
              {
                title: "On-Site Visits",
                description:
                  "We come to your location for convenience and comfort.",
              },
              {
                title: "24/7 Availability",
                description:
                  "Access to your trainer anytime for questions and support via calls.",
              },
              {
                title: "Outdoor Cardio and Training",
                description:
                  "Engaging outdoor sessions to keep your workouts exciting and varied.",
              },
              {
                title: "Customized Diet/Meal Plans",
                description:
                  "Tailored meal plans to complement your fitness routine.",
              },
              {
                title: "Customized Diet/Meal Plans",
                description:
                  "Tailored meal plans to complement your fitness routine.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-start p-2 md:p-8 border-b border-primary border-t-0 border-l-0 border-r-0"
              >
                <CheckCircle
                  className="text-primary flex-shrink-0 mr-2 mt-1"
                  size={20}
                />
                <div>
                  <h4 className="font-semibold mb-1 text-[1.125rem] leading-tight md:text-2xl font-lexend">
                    {feature.title}
                  </h4>
                  <p className="text-gray text-base md:text-2xl mt-2 md:mt-4 font-lato">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto my-16">
        <div className="flex flex-col gap-8 max-w-7xl m-auto">
          {/* Image */}
          <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-8">
            <div className="w-full lg:w-1/2">
              <Image
                src="/custom-diet.png" // Replace with your actual image path
                alt="Personal Training"
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            {/* Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-primary font-lexend font-bold text-lg md:text-[1.875rem] mb-2">
                Customized Diet Plans
              </h2>
              <h3
                className={cn(
                  "font-lexend self-stretch mr-6 text-xl md:text-[1.375rem] font-semibold leading-none text-dark mb-2",
                  "max-md:mr-2.5 max-md:max-w-full text-lato"
                )}
              >
                Transform Your Body with Personalized Training.
              </h3>
              <p className="text-primary font-lexend font-semibold mb-4 text-[0.6875rem] md:text-2xl">
                Get the One-on-One Attention You Deserve
              </p>
              <p
                className={cn(
                  "self-stretch mt-3 text-base md:text-lg leading-tight md:leading-8 text-gray mb-6",
                  "max-md:max-w-full font-lato"
                )}
              >
                Achieve optimal health and performance with our variety of
                specialized diet plans. Each plan is designed to fit different
                lifestyles and dietary needs.Achieve optimal health and
                performance with our variety of specialized diet plans. Each
                plan is designed to fit different lifestyles and dietary needs.
                Each plan is designed to fit different lifestyles and dietary
                needs.
              </p>
              <Button
                href={"/contact-us"}
                variant="primary"
                size="lg"
                className="text-[0.75rem] md:text-base font-lexend rounded-md transition-transform duration-300 transform hover:scale-105 hover:shadow-[0px_8px_40px_rgba(0,0,0,0.15)]"
              >
                BECOME A MEMBER
              </Button>
            </div>
          </div>
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-0">
            {[
              {
                title: "Keto Diet",
                description:
                  "A low-carb, high-fat diet to help you burn fat more effectively.",
              },
              {
                title: "Vegan Diet",
                description:
                  "Plant-based meal plans for a healthy, ethical, and environmentally-friendly lifestyle.",
              },
              {
                title: "One Meal a Day (OMAD)",
                description:
                  "Simplify eating with one substantial meal a day for weight loss and metabolic health.",
              },
              {
                title: "Low FODMAP Diet for IBS",
                description:
                  "Specialized diet to alleviate symptoms of irritable bowel syndrome.",
              },
              {
                title: "AKF-Customized Plan",
                description:
                  "Personalized diet plans tailored to your unique nutritional needs and preferences.",
              },
              {
                title: "Intermittent Fasting",
                description:
                  "Structured fasting periods to boost metabolism and promote weight loss.",
              },
              {
                title: "Carb Cycling",
                description:
                  "Alternating carb intake to maximize fat loss and muscle gain.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-start p-2 md:p-8 border-b border-primary border-t-0 border-l-0 border-r-0"
              >
                <CheckCircle
                  className="text-primary flex-shrink-0 mr-2 mt-1"
                  size={20}
                />
                <div>
                  <h4 className="font-semibold mb-1 text-[1.125rem] leading-tight md:text-2xl font-lexend">
                    {feature.title}
                  </h4>
                  <p className="text-gray text-base md:text-2xl mt-2 md:mt-4 font-lato">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto my-16">
        <div className="flex flex-col gap-8 max-w-7xl m-auto">
          {/* Image */}
          <div className="w-full flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2">
              <Image
                src="/workout-plans.png" // Replace with your actual image path
                alt="Personal Training"
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            {/* Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-primary font-lexend font-bold text-lg md:text-[1.875rem] mb-2">
                Workout Plans
              </h2>
              <h3
                className={cn(
                  "font-lexend self-stretch mr-6 text-xl md:text-[1.375rem] font-semibold leading-none text-dark mb-2",
                  "max-md:mr-2.5 max-md:max-w-full text-lato"
                )}
              >
                Get Performance with Expertly Designed Workout Plans
              </h3>
              <p className="text-primary font-lexend font-semibold mb-4 text-[0.6875rem] md:text-2xl">
                Work Hard, Train Smart
              </p>
              <p
                className={cn(
                  "self-stretch mt-3 text-base md:text-lg leading-tight md:leading-8 text-gray mb-6",
                  "max-md:max-w-full font-lato"
                )}
              >
                Enhance your fitness journey with our diverse range of workout
                plans, designed to cater to different goals and fitness
                levels.Enhance your fitness journey with our diverse range of
                workout plans, designed to cater to different goals and fitness
                levels.
              </p>
              <Button
                href={"/contact-us"}
                variant="primary"
                size="lg"
                className="text-[0.75rem] md:text-base font-lexend rounded-md transition-transform duration-300 transform hover:scale-105 hover:shadow-[0px_8px_40px_rgba(0,0,0,0.15)]"
              >
                BECOME A MEMBER
              </Button>
            </div>
          </div>
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-0">
            {[
              {
                title: "AKF-Customized Plan",
                description:
                  "A personalized workout plan tailored to your specific fitness goals and needs.",
              },
              {
                title: "Strength and Conditioning Training",
                description: "Improve overall strength, power, and endurance.",
              },
              {
                title: "Hypertrophy",
                description:
                  "Focused on muscle growth and increased muscle mass.",
              },
              {
                title: "MRT (Metabolic Resistance Training)",
                description:
                  "Combines resistance training with high-intensity cardio for maximum fat burning.",
              },
              {
                title: "Sarcoplasmic Stimulating Training",
                description:
                  "A specialized technique to increase muscle size and endurance.",
              },
              {
                title: "Athlete Development Programs",
                description:
                  "Specialized training plans for athletes focused on improving performance in specific sports.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-start p-2 md:p-8 border-b border-primary border-t-0 border-l-0 border-r-0"
              >
                <CheckCircle
                  className="text-primary flex-shrink-0 mr-2 mt-1"
                  size={20}
                />
                <div>
                  <h4 className="font-semibold mb-1 text-[1.125rem] leading-tight md:text-2xl font-lexend">
                    {feature.title}
                  </h4>
                  <p className="text-gray text-base md:text-2xl mt-2 md:mt-4 font-lato">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalTrainingSection;
