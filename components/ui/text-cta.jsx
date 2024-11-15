"use client";

import React from "react";
import Button from "./button"; // Ensure Button is imported correctly
import Image from "next/image";
import { cn } from "@/lib/utils"; // Assuming you have this utility

export default function TextCTA({ ctaData }) {
  return (
    <section
      className="mx-[30px] relative !m-auto max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl box-border rounded-[16px] p-3 md:p-8 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-105 hover:shadow-[0px_8px_40px_rgba(0,0,0,0.15)]"
      style={{
        background: "linear-gradient(180deg, #DF9632 0%, #DBA760 100%)",
      }}
    >
      <div
        style={{
          zIndex: "-1",
        }}
        className="absolute -right-28 rotate-[0deg] -bottom-28 w-[873px] h-[738px]"
      >
        <Image
          src="/decorator-02.svg"
          alt="Decorative element"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div className={cn("flex flex-col items-center gap-5 max-md:flex-col")}>
        <h3 className="text-[1.125rem] md:text-[2.5rem] font-semibold text-center text-white text-lexend">
          {ctaData.title}
        </h3>
        <Button
          text={ctaData.buttonText}
          href={ctaData.buttonHref}
          className="bg-white text-primary rounded-md text-[0.75rem] md:text-base"
        >
          Become a Member
        </Button>
      </div>
    </section>
  );
}
