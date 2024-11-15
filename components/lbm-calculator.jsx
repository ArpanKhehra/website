"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "./ui/button";

const LBMCalculatorSchema = Yup.object().shape({
  unit: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
  weight: Yup.number().positive("Must be positive").required("Required"),
  bodyFat: Yup.number()
    .min(0, "Must be 0 or greater")
    .max(100, "Must be 100 or less")
    .required("Required"),
});

const LBMCalculator = () => {
  const [lbmResult, setLbmResult] = useState(null);

  const calculateLBM = (values) => {
    const { unit, gender, weight, bodyFat } = values;
    const weightInKg = unit === "imperial" ? weight * 0.453592 : weight;
    const lbm = weightInKg * (1 - bodyFat / 100);
    return lbm.toFixed(2);
  };

  const formik = useFormik({
    initialValues: {
      unit: "imperial",
      gender: "",
      weight: "",
      bodyFat: "",
    },
    validationSchema: LBMCalculatorSchema,
    onSubmit: (values) => {
      const lbm = calculateLBM(values);
      setLbmResult(lbm);
    },
  });

  const handleCalculateAgain = () => {
    setLbmResult(null);
    formik.resetForm();
  };

  return (
    <div className="bg-white rounded-sm shadow-md border border-primary overflow-hidden">
      <h2 className="text-sm md:text-[1.75rem] flex items-center justify-center p-4 bg-[#FFF5E8] font-bold text-primary mb-4">
        {!lbmResult ? "LBM RANGES" : "YOUR LBM"}
      </h2>

      {!lbmResult ? (
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
          <div>
            <label
              htmlFor="bodyFat"
              className="text-primary text-base mb-2 block"
            >
              Body Fat Percentage
            </label>
            <div className="flex items-center justify-start gap-0 flex-1">
              <input
                id="bodyFat"
                name="bodyFat"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.bodyFat}
                className="p-1 block border w-full border-primary shadow-sm focus:border-primary outline-none"
              />
              <span className="h-full p-1 min-w-[100px] text-primary inline-flex bg-[#FFEED8] border border-primary items-center justify-center">
                %
              </span>
            </div>
            {formik.touched.bodyFat && formik.errors.bodyFat && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.bodyFat}
              </div>
            )}
          </div>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full rounded-none py-4 text-base"
          >
            Calculate My LBM
          </Button>
        </form>
      ) : (
        <div className="text-center flex flex-col gap-8 items-center justify-center">
          <p className="text-2xl md:text-5xl py-5 px-6 font-bold text-white bg-primary max-w-max rounded-sm mb-2">
            {lbmResult} {formik.values.unit === "imperial" ? "lb" : "kg"}
          </p>
          <p className="mb-4 text-sm md:text-xl bg-[#FFF5E8] py-2 px-4 rounded-sm border border-black">
            Your Muscle Mass Estimate
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-black font-semibold mb-4 text-xs md:text-base">
              For more details on your LBM
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

export default LBMCalculator;
