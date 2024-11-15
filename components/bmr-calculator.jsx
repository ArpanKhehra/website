"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "./ui/button";

const BMRCalculatorSchema = Yup.object().shape({
  unit: Yup.string().required("Required"),
  age: Yup.number().positive("Must be positive").required("Required"),
  gender: Yup.string().required("Required"),
  height: Yup.number().positive("Must be positive").required("Required"),
  weight: Yup.number().positive("Must be positive").required("Required"),
});

const BMRCalculator = () => {
  const [bmrResult, setBmrResult] = useState(null);

  const calculateBMR = (values) => {
    const { unit, age, gender, height, weight } = values;
    let bmr;

    const weightInKg = unit === "imperial" ? weight * 0.453592 : weight;
    const heightInCm = unit === "imperial" ? height * 2.54 : height;

    if (gender === "male") {
      bmr = 88.362 + 13.397 * weightInKg + 4.799 * heightInCm - 5.677 * age;
    } else {
      bmr = 447.593 + 9.247 * weightInKg + 3.098 * heightInCm - 4.33 * age;
    }

    return Math.round(bmr);
  };

  const formik = useFormik({
    initialValues: {
      unit: "imperial",
      age: "",
      gender: "",
      height: "",
      weight: "",
    },
    validationSchema: BMRCalculatorSchema,
    onSubmit: (values) => {
      const bmr = calculateBMR(values);
      setBmrResult(bmr);
    },
  });

  const handleCalculateAgain = () => {
    setBmrResult(null);
    formik.resetForm();
  };

  return (
    <div className="bg-white rounded-sm shadow-md border border-primary overflow-hidden">
      <h2 className="text-sm md:text-[1.75rem] flex items-center justify-center p-4 bg-[#FFF5E8] font-bold text-primary mb-4">
        {!bmrResult ? "BMR RANGES" : "YOUR BMR"}
      </h2>

      {!bmrResult ? (
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
                className="mr-2"
              />
              Metric
            </label>
          </div>
          <div>
            <label htmlFor="age" className="text-primary text-base mb-2 block">
              Age
            </label>
            <div className="flex items-center justify-start gap-0 flex-1">
              <input
                id="age"
                name="age"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.age}
                className="p-1 block border w-full border-primary shadow-sm focus:border-primary outline-none"
              />
              <span className="h-full p-1 min-w-[100px] text-primary inline-flex bg-[#FFEED8] border border-primary items-center justify-center">
                years
              </span>
            </div>
            {formik.touched.age && formik.errors.age && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.age}
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="gender"
              className="text-primary text-base mb-2 block"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.gender}
              className="p-1 block w-full border border-primary shadow-sm focus:border-primary outline-none"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {formik.touched.gender && formik.errors.gender && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.gender}
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="height"
              className="text-primary text-base mb-2 block"
            >
              Height
            </label>
            <div className="flex items-center justify-start gap-0 flex-1">
              <input
                id="height"
                name="height"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.height}
                className="p-1 block border w-full border-primary shadow-sm focus:border-primary outline-none"
              />
              <span className="h-full p-1 min-w-[100px] text-primary inline-flex bg-[#FFEED8] border border-primary items-center justify-center">
                {formik.values.unit === "imperial" ? "in" : "cm"}
              </span>
            </div>
            {formik.touched.height && formik.errors.height && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.height}
              </div>
            )}
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
              <span className="h-full p-1 min-w-[100px] text-primary inline-flex bg-[#FFEED8] border border-primary items-center justify-center">
                {formik.values.unit === "imperial" ? "lb" : "kg"}
              </span>
            </div>
            {formik.touched.weight && formik.errors.weight && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.weight}
              </div>
            )}
          </div>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full rounded-none py-4 text-base"
          >
            Calculate My BMR
          </Button>
        </form>
      ) : (
        <div className="text-center flex flex-col gap-8 items-center justify-center">
          <p className="text-2xl md:text-5xl py-5 px-6 font-bold text-white bg-primary max-w-max rounded-sm mb-2">
            {bmrResult} calories/day
          </p>
          <p className="mb-4 text-sm md:text-xl bg-[#FFF5E8] py-2 px-4 rounded-sm border border-black max-w-sm">
            Use this number to adjust your daily calories for your goals!
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-black font-semibold mb-4 text-xs md:text-base">
              For more details on your BMR
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

export default BMRCalculator;
