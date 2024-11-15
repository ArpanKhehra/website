"use client";
import React from "react";

import ConsultationBookingForm from "../../../components/book-consultation";
import Image from "next/image";
import LBMCalculator from "../../../components/lbm-calculator";

const LBM = () => {
  const aboutUsContent = {
    header: {
      title: "LBM Calculator",
      subtitle: "Ready to transform your lives? Choose the online nutrition ",
    },
    images: {
      headerDecoration: "/ornament-dots.svg",
      mainImage: "/about-intro.svg",
      decorationExplosive: "/ornament-dots-explosive.svg",
    },
  };

  return (
    <main className="relative overflow-hidden">
      <section className="relative overflow-hidden py-20 md:py-40 pl-20 bg-orange-50 max-md:pl-5 !pb-12">
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

      <section className="flex flex-col gap-8 margin-container padding-container">
        <div className="flex gap-8 lg-gap-2 flex-col-reverse lg:flex-row">
          <div className="flex flex-col items-start justify-start w-full lg:w-1/2 gap-4">
            <h2 className="text-dark font-lexend text-base md:text-[2.5rem] font-semibold leading-tight">
              WHAT IS LBM ?
            </h2>
            <p className="text-gray font-lato text-xs md:text-[1.25rem] font-normal leading-relaxed">
              Lean body mass is your overall weight minus your weight from body
              fat. Basically, if you subtract the weight that comes from fat
              (your body fat percentage) from your total weight, you will have
              your lean body mass.
              <br />
              Knowing this can help those looking to lose weight maintain their
              weight loss purely from fat. If you can keep your lean body mass
              stable whilst bringing your overall weight down, you will know
              that you’re only losing fat- not muscle or bone density, as is
              often the case.
            </p>
            <br />
            <h2 className="text-dark font-lexend text-base md:text-[2.5rem] font-semibold leading-tight">
              Benefits of knowing your LBM
            </h2>
            <p className="text-gray font-lato text-xs md:text-[1.25rem] font-normal leading-relaxed">
              Knowing your lean body mass can help you:
            </p>
            <ul
              className="flex flex-col gap-2 ml-8 list-circle text-gray"
              style={{
                listStyle: "disc",
              }}
            >
              <li className="text-xs md:text-[1.25rem] leading-tight text-gray font-lato">
                <strong className="text-black">
                  Set realistic fitness goals:
                </strong>{" "}
                By knowing your LBM, you can set realistic goals for muscle
                gain, fat loss, and overall body composition.
              </li>
              <li className="text-xs md:text-[1.25rem] leading-tight font-lato">
                <strong className="text-black">Monitor progress:</strong>{" "}
                Tracking changes in your LBM over time can help you evaluate the
                effectiveness of your fitness program and make adjustments as
                needed.
              </li>
              <li className="text-xs md:text-[1.25rem] leading-tight font-lato">
                <strong className="text-black">Assess health risks:</strong> Low
                LBM has been linked to various health conditions such as
                osteoporosis, sarcopenia, and frailty. Knowing your LBM can help
                you assess your risk of these conditions and take preventive
                measures.
              </li>
              <li className="text-xs md:text-[1.25rem] leading-tight font-lato">
                <strong className="text-black">Plan nutrient intake:</strong>{" "}
                LBM is a major determinant of basal metabolic rate (BMR), which
                is the amount of energy the body needs to do the basic functions
                at rest.
              </li>
              <li className="text-xs md:text-[1.25rem] leading-tight font-lato">
                <strong className="text-black">Make informed decisions:</strong>{" "}
                Knowing your LBM can help you make informed decisions about your
                fitness, such as choosing appropriate exercise routines,
                selecting the right diet, and evaluating the effectiveness of
                supplements or other interventions.
              </li>
            </ul>
          </div>
          {/* Calculator form  */}
          <div className="max-w-lg m-auto lg:max-w-none w-full lg:w-1/2 lg:ml-4 flex flex-col gap-8 lg:gap-4">
            <LBMCalculator />
            <ConsultationBookingForm />
          </div>
        </div>

        <div className="flex flex-col items-start justify-start w-full">
          <h2 className="text-dark font-lexend text-base md:text-[2.5rem] font-semibold leading-tight"></h2>
          <p className="text-gray font-lato text-xs md:text-[1.25rem] font-normal leading-relaxed">
            There are two main ways in which lean body mass is calculated. There
            is often a trade-off between accessibility and accuracy, with the
            most accurate methods being beyond many people.
          </p>
          <br />
          <ol className="flex flex-col gap-4 m-8 list-decimal text-gray gap-2">
            <li className="text-xs md:text-[1.25rem] leading-tight font-lato">
              <strong className="text-black">
                USING YOUR WEIGHT AND HEIGHT
              </strong>
              <br /> This is arguably the most accessible, crudest way of
              finding out your lean body mass. There is a simple formula you can
              use for which you will only need your weight and height. Use the
              equations below, with all weights in kg and all heights in cm.  
              <br />
              <br />
              <ul
                className="flex flex-col ml-8 list-circle"
                style={{
                  listStyle: "disc",
                }}
              >
                <li className="text-xs md:text-[1.25rem] leading-tight font-lato">
                  <strong className="text-black">For men:</strong>&nbsp;Lean
                  body mass = (0.32810 × W) + (0.33929 × H) − 29.5336
                </li>
                <br />
                <li className="text-xs md:text-[1.25rem] leading-tight font-lato">
                  <strong className="text-black">For women:</strong>&nbsp;Lean
                  body mass = (0.29569 × W) + (0.41813 × H) − 43.2933 It should
                  be noted that this will be quite inaccurate but may work well
                  as a rule of thumb or best guess in the first instance.
                </li>
              </ul>
              <br />
              <br />
              For an easier version of this, you can always choose an online
              calculator for lean body mass like the one below.
            </li>

            <li className="text-xs md:text-[1.25rem] leading-tight font-lato">
              <strong className="text-black">
                USING YOUR BODY FAT PERCENTAGE
              </strong>
              <br />
              You can also use your body fat percentage to work out your lean
              body mass, as mentioned above. Divide your percent body fat by 100
              to make it a decimal. Then multiply this number by your total
              weight.
              <br />
              <br />
              For example, if you weigh 80kg and have learned that your body fat
              percentage is 15%, multiply 80 x 0.15. This is your fat mass in
              kilograms (800 x 0.15 = 12kg). Then simply subtract this from your
              total weight to get your lean body mass. Here, we are looking at
              80 - 12 = 68kg of lean body mass.
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
};

export default LBM;
