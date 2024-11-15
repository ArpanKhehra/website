"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "./ui/button";

const BMICalculatorSchema = Yup.object().shape({
  unit: Yup.string().required("Required"),
  weight: Yup.number().positive("Must be positive").required("Required"),
  heightFeet: Yup.number().when("unit", {
    is: "metric",
    then: () =>
      Yup.number()
        .positive("Must be positive")
        .required("Height in cm is required"),
    otherwise: () =>
      Yup.number().positive("Must be positive").required("Feet is required"),
  }),
  heightInches: Yup.number().when("unit", {
    is: "metric",
    then: () => Yup.number().nullable(),
    otherwise: () =>
      Yup.number()
        .min(0, "Must be 0 or greater")
        .max(11, "Must be 11 or less")
        .required("Inches is required"),
  }),
});

const BMICalculator = () => {
  const [bmiResult, setBmiResult] = useState(null);

  const calculateBMI = (values) => {
    const { unit, weight, heightFeet, heightInches } = values;
    let bmi;

    if (unit === "imperial") {
      const heightInInches = heightFeet * 12 + heightInches;
      bmi = (weight / (heightInInches * heightInInches)) * 703;
    } else {
      // Convert total centimeters to meters for BMI calculation
      const heightInMeters = heightFeet / 100;
      bmi = weight / (heightInMeters * heightInMeters);
    }

    return bmi.toFixed(2);
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi < 25) return "Healthy";
    if (bmi >= 25 && bmi < 30) return "Overweight";
    return "Obese";
  };

  const formik = useFormik({
    initialValues: {
      unit: "imperial",
      weight: "",
      heightFeet: "",
      heightInches: "",
    },
    validationSchema: BMICalculatorSchema,
    onSubmit: (values) => {
      const bmi = calculateBMI(values);
      setBmiResult(bmi);
    },
  });

  const handleCalculateAgain = () => {
    setBmiResult(null);
    formik.resetForm();
  };

  // Reset height fields when switching units
  React.useEffect(() => {
    formik.setFieldValue("heightFeet", "");
    formik.setFieldValue("heightInches", "");
  }, [formik.values.unit]);

  return (
    <div className="bg-white rounded-sm shadow-md border border-primary overflow-hidden">
      <h2 className="text-sm  md:text-[1.75rem] flex items-center justify-center p-4 bg-[#FFF5E8] font-bold text-primary mb-4">
        {!bmiResult ? "  BMI RANGES" : "YOUR BMI"}
      </h2>

      {!bmiResult ? (
        <form
          onSubmit={formik.handleSubmit}
          className="space-y-4 px-6 py-4 md:px-12 md:py-8"
        >
          <div className="flex items-center justify-start gap-4">
            <label className="text-primary text-base flex items-center justify-center">
              <input
                type="radio"
                name="unit"
                value="imperial"
                checked={formik.values.unit === "imperial"}
                onChange={formik.handleChange}
                className="mr-2"
              />
              Imperial
            </label>

            <label className="text-primary text-base flex items-center justify-center">
              <input
                type="radio"
                name="unit"
                value="metric"
                checked={formik.values.unit === "metric"}
                onChange={formik.handleChange}
              />
              Metric
            </label>
          </div>
          <div>
            <label
              htmlFor="weight"
              className="text-primary text-base mb-2 block"
            >
              Weight
            </label>
            <div className="flex items-center justify-start gap-0 flex-1">
              <input
                id="weight"
                name="weight"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.weight}
                className="p-1 block border w-full border-primary shadow-sm focus:border-primary outline-none"
              />
              <span className="h-full p-1 min-w-[100px] text-primary inline-flex bg-[#FFEED8] border border-primary items-center justify-center ">
                {formik.values.unit === "imperial" ? "lb" : "kg"}
              </span>
            </div>
            {formik.touched.weight && formik.errors.weight && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.weight}
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="heightFeet"
              className="text-primary text-base mb-2 block"
            >
              Height
            </label>
            {formik.values.unit === "imperial" ? (
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-start gap-0 flex-1">
                  <input
                    id="heightFeet"
                    name="heightFeet"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.heightFeet}
                    className="p-1 block border w-full border-primary shadow-sm focus:border-primary outline-none"
                  />
                  <span className="h-full p-1 min-w-[100px] text-primary inline-flex bg-[#FFEED8] border border-primary items-center justify-center">
                    ft
                  </span>
                </div>
                <div className="flex items-center justify-start gap-0 flex-1">
                  <input
                    id="heightInches"
                    name="heightInches"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.heightInches}
                    className="p-1 block w-full border border-primary shadow-sm focus:border-primary outline-none"
                  />
                  <span className="h-full p-1 min-w-[100px] text-primary inline-flex bg-[#FFEED8] border border-primary items-center justify-center">
                    in
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-start gap-0 flex-1">
                <input
                  id="heightFeet"
                  name="heightFeet"
                  type="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.heightFeet}
                  className="p-1 block border w-full border-primary shadow-sm focus:border-primary outline-none"
                  placeholder=""
                />
                <span className="h-full p-1 min-w-[100px] text-primary inline-flex bg-[#FFEED8] border border-primary items-center justify-center">
                  cm
                </span>
              </div>
            )}
            {(formik.touched.heightFeet && formik.errors.heightFeet) ||
            (formik.touched.heightInches && formik.errors.heightInches) ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.heightFeet || formik.errors.heightInches}
              </div>
            ) : null}
          </div>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full rounded-none py-4 text-base"
          >
            Calculate My BMI
          </Button>
        </form>
      ) : (
        <div className="text-center flex flex-col gap-8 items-center justify-center">
          <p className="text-2xl md:text-5xl py-5 px-6 font-bold text-white bg-primary max-w-max rounded-sm mb-2">
            {bmiResult} {formik.values.unit === "imperial" ? "lb" : "kg"}
          </p>
          <p className="mb-4 text-sm md:text-xl bg-[#FFF5E8] py-2 px-4 rounded-sm border border-black">
            You Fall in{" "}
            <span className="text-primary font-bold">
              {getBMICategory(parseFloat(bmiResult))}
            </span>{" "}
            Category
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-black font-semibold mb-4 text-xs md:text-base">
              For more details on your BMI
              <br />
              Book Free Consultation with Arpan Khehra Fitness
            </p>
            <Button
              variant="primary"
              size="lg"
              className="rounded-sm text-sm md:text-lg"
            >
              GET YOUR FIRST CONSULTATION FREE
            </Button>
            <Button
              variant="secondary"
              size="md"
              onClick={handleCalculateAgain}
              className="text-primary bg-transparent border-none font-semibold hover:underline text-left"
            >
              Calculate Again
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
