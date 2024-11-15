"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  // const containerRef = useRef(null);
  // const elementsRef = useRef([]);

  // useEffect(() => {
  //   const container = containerRef.current;
  //   const elements = elementsRef.current;

  //   gsap.set(elements, { x: 50, opacity: 0 });

  //   ScrollTrigger.create({
  //     trigger: container,
  //     start: "top bottom",
  //     onEnter: () => {
  //       gsap.to(elements, {
  //         x: 0,
  //         opacity: 1,
  //         duration: 0.5,
  //         stagger: 0.1,
  //         ease: "power3.out",
  //       });
  //     },
  //     onLeaveBack: () => {
  //       gsap.to(elements, {
  //         x: 50,
  //         opacity: 0,
  //         duration: 0.5,
  //         stagger: 0.1,
  //         ease: "power3.in",
  //       });
  //     },
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  return (
    <section
      // ref={containerRef}
      className="flex flex-col-reverse md:flex-col text-sm sm:text-base font-medium text-gray-900 gap-12 md:gap-0"
    >
      <div className="flex flex-col items-center lg:items-start w-full space-y-6">
        <h3
          // ref={(el) => (elementsRef.current[0] = el)}
          className="text-base sm:text-lg font-bold leading-loose text-gray-900"
        >
          Contact us
        </h3>
        <div
          // ref={(el) => (elementsRef.current[1] = el)}
          className="flex gap-3 leading-6 text-gray"
        >
          <img
            loading="lazy"
            src="/call-icon.svg"
            alt="call"
            className="object-contain shrink-0 self-start w-4 aspect-square"
          />
          <p>+91 7986458650</p>
        </div>
        <div
          // ref={(el) => (elementsRef.current[2] = el)}
          className="flex gap-3 whitespace-nowrap text-gray"
        >
          <img
            loading="lazy"
            src="/mail-icon.svg"
            alt="mail"
            className="object-contain shrink-0 my-auto w-4 aspect-[1.23]"
          />
          <a
            href="mailto:arpankhehrafitness4@gmail.com"
            className="flex-auto break-all"
          >
            arpankhehrafitness4@gmail.com
          </a>
        </div>
        <div
          // ref={(el) => (elementsRef.current[3] = el)}
          className="text-gray m-auto lg:ml-0 flex gap-3 items-center lg:items-start self-stretch mt-3 sm:mt-3.5"
        >
          <img
            loading="lazy"
            src=" /location-icon.svg"
            alt="location"
            className="object-contain shrink-0 self-start w-4 aspect-[0.7]"
          />
          <address className="flex-auto not-italic items-center lg:items-start">
            Chandigarh, India
          </address>
        </div>
      </div>
      <div className="flex flex-col items-center lg:items-start w-full space-y-2">
        <h4
          // ref={(el) => (elementsRef.current[4] = el)}
          className="mt-3 sm:mt-5 text-base sm:text-lg font-bold leading-loose text-slate-800"
        >
          Follow us
        </h4>
        <div className="flex flex-row gap-6 justify-start items-start mb-2 mt-2">
          <a
            href="https://m.facebook.com/61562429537933/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              loading="lazy"
              src="/fb-icon.svg"
              alt="Facebook"
              className="object-contain max-w-full cursor-pointer"
            />
          </a>
          <a
            target="_blank"
            href="https://wa.me/917986458650?text=Hello, I'm interested in learning more!"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M17.0508 2.91005C16.1338 1.98416 15.0418 1.25002 13.8383 0.750416C12.6348 0.250812 11.3439 -0.00426317 10.0408 5.38951e-05C4.58078 5.38951e-05 0.130781 4.45005 0.130781 9.91005C0.130781 11.6601 0.590781 13.3601 1.45078 14.8601L0.0507812 20.0001L5.30078 18.6201C6.75078 19.4101 8.38078 19.8301 10.0408 19.8301C15.5008 19.8301 19.9508 15.3801 19.9508 9.92005C19.9508 7.27005 18.9208 4.78005 17.0508 2.91005ZM10.0408 18.1501C8.56078 18.1501 7.11078 17.7501 5.84078 17.0001L5.54078 16.8201L2.42078 17.6401L3.25078 14.6001L3.05078 14.2901C2.22833 12.9771 1.79171 11.4593 1.79078 9.91005C1.79078 5.37005 5.49078 1.67005 10.0308 1.67005C12.2308 1.67005 14.3008 2.53005 15.8508 4.09005C16.6184 4.85392 17.2267 5.7626 17.6404 6.76338C18.0541 7.76417 18.265 8.83714 18.2608 9.92005C18.2808 14.4601 14.5808 18.1501 10.0408 18.1501ZM14.5608 11.9901C14.3108 11.8701 13.0908 11.2701 12.8708 11.1801C12.6408 11.1001 12.4808 11.0601 12.3108 11.3001C12.1408 11.5501 11.6708 12.1101 11.5308 12.2701C11.3908 12.4401 11.2408 12.4601 10.9908 12.3301C10.7408 12.2101 9.94078 11.9401 9.00078 11.1001C8.26078 10.4401 7.77078 9.63005 7.62078 9.38005C7.48078 9.13005 7.60078 9.00005 7.73078 8.87005C7.84078 8.76005 7.98078 8.58005 8.10078 8.44005C8.22078 8.30005 8.27078 8.19005 8.35078 8.03005C8.43078 7.86005 8.39078 7.72005 8.33078 7.60005C8.27078 7.48005 7.77078 6.26005 7.57078 5.76005C7.37078 5.28005 7.16078 5.34005 7.01078 5.33005H6.53078C6.36078 5.33005 6.10078 5.39005 5.87078 5.64005C5.65078 5.89005 5.01078 6.49005 5.01078 7.71005C5.01078 8.93005 5.90078 10.1101 6.02078 10.2701C6.14078 10.4401 7.77078 12.9401 10.2508 14.0101C10.8408 14.2701 11.3008 14.4201 11.6608 14.5301C12.2508 14.7201 12.7908 14.6901 13.2208 14.6301C13.7008 14.5601 14.6908 14.0301 14.8908 13.4501C15.1008 12.8701 15.1008 12.3801 15.0308 12.2701C14.9608 12.1601 14.8108 12.1101 14.5608 11.9901Z"
                fill="#cd892d"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/arpan_khehra_fitness/profilecard/?igsh=MXRiOHU3ZzB6eDBlcQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              loading="lazy"
              src="/insta-icon.svg"
              alt="Instagram"
              className="object-contain max-w-full cursor-pointer"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
