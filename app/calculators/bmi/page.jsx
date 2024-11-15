"use client";
import React from "react";
import BMICalculator from "../../../components/bmi-calculator";
import ConsultationBookingForm from "../../../components/book-consultation";
import Image from "next/image";

const BMI = () => {
  const aboutUsContent = {
    header: {
      title: "BMI Calculator",
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
              What is BMI?
            </h2>
            <p className="text-gray font-lato text-xs md:text-[1.25rem] font-normal leading-relaxed">
              Body Mass Index (BMI) is a widely used metric for assessing
              whether an individual&apos;s weight is within a healthy range for
              their height. It is a straightforward and useful tool that
              provides a general idea of whether you are underweight, normal
              weight, overweight, or obese based on your weight and height.
            </p>
            <br />
            <h2 className="text-dark font-lexend text-base md:text-[2.5rem] font-semibold leading-tight">
              BMI RANGES
            </h2>
            <p className="text-gray font-lato text-xs md:text-[1.25rem] font-normal leading-relaxed">
              A healthy BMI is in the 18.5 to 24.9 range for the majority of
              adults. This is definitely the case in individuals with a normal
              musculature.
            </p>

            <div className="overflow-x-auto mt-6 w-full mr-4 text-xs md:text-base font-lato">
              <table className="w-full border-collapse">
                <thead className="bg-[#FFF5E8]">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      BMI
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      WEIGHT STATUS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Below 18.5
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Underweight
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      18.5 - 24.9
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Healthy
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      25.0 - 29.9
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Overweight
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      30.0 - and Above
                    </td>
                    <td className="border border-gray-300 px-4 py-2">Obese</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Calculator form  */}
          <div className="max-w-lg m-auto lg:max-w-none w-full lg:w-1/2 lg:ml-4 flex flex-col gap-8 lg:gap-4">
            <BMICalculator />
            <ConsultationBookingForm />
          </div>
        </div>

        <div className="flex flex-col items-start justify-start w-full gap-4">
          <h2 className="text-dark font-lexend text-base md:text-[2.5rem] font-semibold leading-tight">
            HOW TO CALCULATE BMI?
          </h2>
          <p className="text-gray font-lato text-xs md:text-[1.25rem] font-normal leading-relaxed">
            Simply put, the body mass index (BMI) is a measure that uses your
            height and weight to work out if you are a healthy size and
            calculate your BMI measurement.
            <br /> <br /> Your BMI is found by dividing an adult’s weight in
            kilograms by their height in meters squared. The resulting
            number—usually between about 15-40—shows whether that person is
            underweight, a healthy weight, overweight, or obese.
            <br /> <br /> For those aged 2 to 18, the BMI calculation doesn’t
            just take into account their height and weight. Their age and gender
            are incorporated into the equation as well.
          </p>
          <br />
        </div>

        <div className="flex flex-col items-start justify-start w-full gap-4">
          <h2 className="text-dark font-lexend text-base md:text-[2.5rem] font-semibold leading-tight">
            ACCURACY OF BMI MEASUREMENTS
          </h2>
          <p className="text-gray font-lato text-xs md:text-[1.25rem] font-normal leading-relaxed">
            There are some great benefits to the BMI formula. It takes natural
            variations in people&apos;s body shapes into account, allowing a
            healthy weight range according to their height. In giving an
            absolute reading that can be applied across the board in this way,
            BMI measurements supply very useful data from which healthcare and
            fitness professionals can take their cues.
            <br /> <br /> That being said, there are several other factors that
            need to be taken into account when deciding how overweight
            individuals actually are. For many people, a BMI reading may not
            prove an accurate testament to their body fat levels.
            <br /> <br /> Muscle is far denser than fat. As a result, very
            muscular people, such as bodybuilders and certain athletes, may have
            healthy body fat levels even though they would be classed as obese
            by their BMI measurements. This is because they will have extra
            weight in the form of muscle.
            <br /> <br /> People with above-average levels of muscle mass should
            therefore be cautious when working out their BMI—it will no doubt be
            higher than their body fat levels might suggest.
            <br /> <br /> In addition, BMI should not be used as a measure of
            weight during pregnancy—when you’re expecting, you’re meant to be
            heavier than normal in relation to your height!
            <br /> <br /> Always seek the advice of a qualified healthcare
            practitioner if you&apos;re in any way concerned about your weight.
          </p>
          <br />
        </div>

        <div className="flex flex-col items-start justify-start w-full ">
          <h2 className="text-dark font-lexend text-base md:text-[2.5rem] font-semibold leading-tight">
            WHAT ARE THE HEALTH RISKS OF BEING OVERWEIGHT?
          </h2>
          <p className="text-gray font-lato text-xs md:text-[1.25rem] font-normal leading-relaxed">
            Being overweight or obese can increase the risk of various health
            problems, including:
          </p>
          <ol className="flex flex-col gap-4 m-8 list-decimal text-xs md:text-[1.25rem] leading-tight font-lato">
            <li className="text-xs md:text-[1.25rem] leading-tight font-lato">
              Cardiovascular Disease: Excess weight can lead to high blood
              pressure, high cholesterol levels, and an increased risk of heart
              disease and stroke.
            </li>
            <li className="text-xs md:text-[1.25rem] leading-tight font-lato">
              Type 2 Diabetes: Obesity is a major risk factor for type 2
              diabetes. It can lead to insulin resistance and impaired glucose
              metabolism.
            </li>
            <li className="text-xs md:text-[1.25rem] leading-tight font-lato">
              Joint Problems: Carrying excess weight puts added stress on the
              joints, increasing the risk of conditions like osteoarthritis.
            </li>
            <li className="text-xs md:text-[1.25rem] leading-tight font-lato">
              Sleep Apnea: Obesity is a common cause of sleep apnea, a condition
              characterized by interruptions in breathing during sleep.
            </li>
            <li className="text-xs md:text-[1.25rem] leading-tight font-lato">
              Certain Cancers: Obesity has been linked to an increased risk of
              certain cancers, including breast, colorectal, and kidney cancer.
            </li>
            <li className="text-xs md:text-[1.25rem] leading-tight font-lato">
              Mental Health Issues: Weight-related stigma and body image
              concerns can contribute to mental health problems like depression
              and anxiety.
            </li>
          </ol>
          <br />
        </div>

        <div className="flex flex-col items-start justify-start w-full ">
          <h2 className="text-dark font-lexend text-base md:text-[2.5rem] font-semibold leading-tight">
            WHAT ARE THE HEALTH RISKS OF BEING UNDERWEIGHT?
          </h2>
          <p className="text-gray font-lato text-xs md:text-[1.25rem] font-normal leading-relaxed">
            Being underweight can also pose health risks, including:
          </p>
          <ol className="flex flex-col gap-4 m-8 list-decimal">
            <li className="text-xs md:text-[1.25rem] leading-tight font-lato">
              Nutritional Deficiencies: Underweight individuals may not be
              getting enough essential nutrients, leading to deficiencies in
              vitamins and minerals.
            </li>
            <li className="text-xs md:text-[1.25rem] leading-tight font-lato">
              Weakened Immune System: A lack of proper nutrition can weaken the
              immune system, making the body more susceptible to infections and
              illnesses.
            </li>
            <li className="text-xs md:text-[1.25rem] leading-tight font-lato">
              Decreased Bone Health: Inadequate weight and nutrition can lead to
              decreased bone density and an increased risk of fractures and
              osteoporosis.
            </li>
            <li className="text-xs md:text-[1.25rem] leading-tight font-lato">
              Fertility Issues: Being underweight can disrupt hormonal balance,
              potentially leading to fertility problems in both men and women.
            </li>
            <li className="text-xs md:text-[1.25rem] leading-tight font-lato">
              Reduced Muscle Mass: Lack of muscle mass can result in weakness
              and decreased physical performance.
            </li>
          </ol>
          <br />
        </div>
      </section>
    </main>
  );
};

export default BMI;
