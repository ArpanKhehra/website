"use client";

import React from "react";
import { Plus, Minus } from "lucide-react";

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="">
      <button
        className="flex rounded-md justify-between items-center w-full py-4 px-6 text-left transition-colors duration-300 ease-in-out bg-white transition-transform duration-300 transform hover:scale-105 hover:shadow-[0px_8px_40px_rgba(0,0,0,0.15)]"
        onClick={onClick}
      >
        <span className="font-medium text-dark text-sm md:text-lg font-lexend">
          {question}
        </span>
        {isOpen ? (
          <Minus
            className="flex-shrink-0 ml-2 text-primary hover:text-primary transition-transform duration-300 ease-in-out"
            size={20}
          />
        ) : (
          <Plus
            className="flex-shrink-0 ml-2 text-gray hover:text-primary transition-transform duration-300 ease-in-out"
            size={20}
          />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4">
          <div className="text-gray font-lato mt-2 text-xs md:text-base">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
