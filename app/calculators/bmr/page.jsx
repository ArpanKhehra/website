"use client";
import React from "react";
import Image from "next/image";
import BMRCalculator from "../../../components/bmr-calculator";
import ConsultationBookingForm from "../../../components/book-consultation";

const BMR = () => {
  const aboutUsContent = {
    header: {
      title: "BMR Calculator",
      subtitle: "Ready to transform your lives? Choose the online nutrition",
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
        <p className="text-[0.75rem] font-lexend mt-7 text-lg leading-none text-center text-gray max-md:max-w-full">
          {aboutUsContent.header.subtitle}
        </p>
      </section>

      <section className="flex flex-col gap-8 margin-container padding-container">
        <div className="flex gap-8 lg-gap-2 flex-col-reverse lg:flex-row">
          <div className="flex flex-col items-start justify-start w-full lg:w-1/2 gap-4">
            <h2 className="text-dark font-lexend text-base md:text-[2.5rem] font-semibold leading-tight">
              What is BMR?
            </h2>
            <p className="text-gray font-lato text-xs md:text-[1.25rem] font-normal leading-relaxed">
              BMR, or Basal Metabolic Rate, represents the number of calories
              your body needs to perform basic functions while at rest. These
              functions include 
            </p>
            <ul
              className="flex flex-col gap-4 m-8 list-disc text-gray font-lato text-xs md:text-[1.25rem] font-normal leading-tight"
              style={{
                listStyle: "disc",
              }}
            >
              <li>Breathing</li>
              <li>Circulating blood</li>
              <li>Maintaining body temperature</li>
              <li>Metabolism</li>
              <li>Cell function, growth, and repair</li>
            </ul>
            <br />
            <h2 className="text-dark font-lexend text-base md:text-[2.5rem] font-semibold leading-tight">
              Ideal BMR for Men and Women
            </h2>
            <p className="text-gray font-lato text-xs md:text-[1.25rem] font-normal leading-relaxed">
              Check out the table below to know the ideal or normal BMR for
              women and men per hour:
            </p>
            <div className="overflow-x-auto mt-6 w-full mr-4 text-xs md:text-base font-lato">
              <table className="w-full border-collapse">
                <thead className="bg-[#FFF5E8]">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Age
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Male (cal/hr)
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Female (cal/hr)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">20-29</td>
                    <td className="border border-gray-300 px-4 py-2">39.5</td>
                    <td className="border border-gray-300 px-4 py-2">37.0</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">30-39</td>
                    <td className="border border-gray-300 px-4 py-2">39.5</td>
                    <td className="border border-gray-300 px-4 py-2">36.5</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">40-49</td>
                    <td className="border border-gray-300 px-4 py-2">38.5</td>
                    <td className="border border-gray-300 px-4 py-2">36.5</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">50-59</td>
                    <td className="border border-gray-300 px-4 py-2">37.5</td>
                    <td className="border border-gray-300 px-4 py-2">35.0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Calculator form  */}
          <div className="max-w-lg m-auto lg:max-w-none w-full lg:w-1/2 lg:ml-4 flex flex-col gap-8 lg:gap-4">
            <BMRCalculator />
            <ConsultationBookingForm />
          </div>
        </div>

        <div className="flex flex-col items-start justify-start w-full gap-4">
          <h2 className="text-dark font-lexend text-base md:text-[2.5rem] font-semibold leading-tight">
            CALCULATING YOUR BMR
          </h2>
          <p className="text-gray font-lato text-xs md:text-[1.25rem] font-normal leading-relaxed">
            It’s easy enough to find a rough estimate of your BMR. Though actual
            amounts will vary according to person—there are too many variables
            to take into account to be 100% accurate all the time—a simple BMR
            calculator will be able to put you in the right ballpark.  
            <br />
            <br />
            Alternatively, you can do it yourself using a simple enough
            equation. This is called the Harris-Benedict equation, and it goes
            like this:
            <br />
            <br />
            <strong>For women:</strong> BMR = 655 + (9.6 × weight in kg) + (1.8
            × height in cm) – (4.7 × age in years)
            <br />
            <br />
            <strong>For men:</strong> BMR = 66 + (13.7 × weight in kg) + (5 ×
            height in cm) – (6.8 × age in years)
          </p>
          <br />
        </div>

        <div className="flex flex-col items-start justify-start w-full gap-4">
          <h2 className="text-dark font-lexend text-base md:text-[2.5rem] font-semibold leading-tight">
            WHY YOUR BMR IS SO IMPORTANT
          </h2>
          <p className="text-gray font-lato text-xs md:text-[1.25rem] font-normal leading-relaxed">
            Whether your goal is to shed excess weight or gain muscle,
            understanding your BMR is vital. Here&apos;s how it can be applied
            to both scenarios:
            <br />
            <br />
            <strong>BMR Calculator to Lose Weight:</strong> To lose weight, you
            need to create a calorie deficit, meaning you consume fewer calories
            than your body needs. Knowing your BMR allows you to estimate your
            daily calorie needs accurately. You can then adjust your calorie
            intake and monitor your progress.
            <br />
            <br />
            <strong>BMR Calculator to Gain Weight:</strong> Conversely, if
            you&apos;re looking to gain weight, you&apos;ll want to consume more
            calories than your BMR. This surplus provides your body with the
            necessary energy to build muscle and increase your overall mass.
          </p>
          <br />
        </div>

        <div className="flex flex-col items-start justify-start w-full">
          <h2 className="text-dark font-lexend text-base md:text-[2.5rem] font-semibold leading-tight">
            Methods to Calculate BMR
          </h2>
          <p className="text-gray font-lato text-xs md:text-[1.25rem] font-normal leading-relaxed">
            The methods to calculate BMR have evolved. Here are a few methods
            listed below used to calculate BMR:
          </p>
          <ol className="flex flex-col gap-4 m-8 list-decimal text-xs md:text-[1.25rem] font-lato">
            <li>
              <strong>Equation-Based Methods:</strong>
            </li>
            <ul className="flex flex-col ml-8 list-circle">
              <li>
                Manual Calculations: Traditional equations like Harris-Benedict
                or Mifflin-St Jeor can be calculated manually using pen and
                paper.
              </li>
              <li>
                Online BMR Calculators: These calculators use established
                equations to provide quick estimates.
              </li>
            </ul>
            <li>
              <strong>Physiological Measurements:</strong> Indirect Calorimetry
              and Doubly Labeled Water Method provide highly accurate measures
              of metabolic rate.
            </li>
            <li>
              <strong>Body Composition Assessments:</strong> BIA, DEXA, and Bod
              Pod offer detailed insights into BMR through body composition
              measurements.
            </li>
            <li>
              <strong>Clinical Assessments:</strong> Resting Metabolic Rate
              (RMR) is another method of assessing metabolic rates, similar to
              BMR.
            </li>
          </ol>
          <br />
        </div>
      </section>
    </main>
  );
};

export default BMR;
