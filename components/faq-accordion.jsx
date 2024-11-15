"use client";

import React, { useState } from "react";
import AccordionItem from "./accordion-item";

const FAQAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null); // Keep track of the currently open accordion

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle between opening and closing the accordion
  };

  return (
    <div className="w-full max-w-2xl flex flex-col gap-4">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index} // Check if this accordion is open
          onClick={() => toggleAccordion(index)} // Handle the click to open/close
        />
      ))}
    </div>
  );
};

export default FAQAccordion;
