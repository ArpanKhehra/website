"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation"; // Correct client-side router import

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: "Silver",
    duration: "30 Days",
    tagline: "Kickstart Your Fitness Journey",
    description:
      "For basic use   and consultancy. Read Terms & Conditions to understand",
    features: [
      "Initial FREE Consultation",
      "AKF customized workout plan",
      "AKF customized diet plan",
      "Weekly Check-ins",
      "Lifestyle Tips",
    ],
    isPopular: false,
  },
  {
    name: "Gold",
    duration: "90 Days",
    tagline: "Commit to Transformation",
    description:
      "For basic use and consultancy. Read Terms & Conditions to understand",
    features: [
      "Initial FREE Consultation",
      "AKF customized diet plan",
      "Bi-Weekly Check-ins",
      "Call support availability",
      "Exercise technique guidance",
      "Supplement guidance",
    ],
    isPopular: true,
  },
  {
    name: "Platinum",
    duration: "180 Days",
    tagline: "Best For Long Term Growth",
    description:
      "For basic use and consultancy. Read Terms & Conditions to understand",
    features: [
      "Initial FREE  Consultation",
      "Daily instant messaging support",
      "Precise diet and workout plans",
      "Exclusive Content",
      "Supplement guidance",
      "Bi-weekly Progress Tracking",
    ],
    isPopular: false,
  },
];

const TickSVG = ({ color = "#DF9632" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 21 20"
    fill="none"
    className="mr-2 flex-shrink-0"
  >
    <path
      d="M10.2899 0C4.60693 0 0 4.47715 0 10C0 15.5228 4.60693 20 10.2899 20C15.9728 20 20.5797 15.5228 20.5797 10C20.5731 4.47982 15.97 0.00642897 10.2899 0Z"
      fill={color}
      fillOpacity="0.15"
    />
    <path
      d="M16.2297 6.83337L10.3602 14.5742C10.2202 14.7547 10.0115 14.873 9.78088 14.9024C9.55029 14.9319 9.3172 14.8701 9.13397 14.7309L4.94257 11.4742C4.5727 11.1866 4.51281 10.662 4.8088 10.3025C5.10479 9.94309 5.64456 9.88489 6.01443 10.1725L9.50955 12.89L14.8491 5.84754C15.0242 5.5922 15.3295 5.45103 15.6439 5.48007C15.9582 5.50912 16.2306 5.70368 16.3531 5.98652C16.4755 6.26935 16.4281 6.59469 16.2297 6.83337Z"
      fill="white"
    />
  </svg>
);

const PlanCard = ({ plan, isMiddle }) => {
  const router = useRouter(); // Use Next.js client-side routing
  const handleChoosePlan = () => {
    router.push("/contact-us"); // Client-side redirect on button click
  };

  const isGold = plan.name === "Gold";
  const cardClass = isGold
    ? "bg-primary text-white shadow-[0px_42px_34px_0px_rgba(223,150,50,0.30)]"
    : "bg-white/50 md:bg-transparent md:text-primary"; // Apply bg-white/50 for non-gold cards on small screens, primary on large screens

  const pillClass = isGold
    ? "border border-[#F9EBD9] text-[#FBF0E3]"
    : "border border-primary text-primary";

  return (
    <div
      className={`p-6 ${cardClass} relative transition-transform duration-300 transform hover:scale-105
        ${isMiddle ? "rounded-[26px] lg:-my-6 lg:z-10" : "lg:z-0"}
        ${
          isMiddle
            ? "lg:scale-100 relative min-h-[500px] -top-6"
            : "lg:scale-100"
        }
        flex flex-col justify-between h-full rounded-[26px] hover:shadow-[0px_8px_10px_rgba(0,0,0,0.15)] md:hover:shadow-none`}
    >
      {plan.isPopular && (
        <div className="ml-auto max-w-max bg-[#683C00] text-white text-center font-lato text-[10px] font-extrabold leading-norma py-1 px-3 rounded-[13.5px]">
          MOST POPULAR
        </div>
      )}
      <div className="flex justify-between items-center mb-4">
        <h3
          className={`font-lexend text-[1.375rem] md:text-[2.25rem] font-bold leading-[46px] ${
            isGold ? "text-white" : "text-primary"
          }`}
        >
          {plan.name}
        </h3>
        <div
          className={`${pillClass} rounded-full px-2 py-1 text-[10px] font-lexend font-normal`}
        >
          {plan.duration}
        </div>
      </div>
      <p
        className={`font-lexend text-xs md:text-base font-normal mt-1 ${
          isGold ? "text-white" : "text-primary"
        }`}
      >
        {plan.tagline}
      </p>

      <p
        className={`font-lato text-[0.8rem] md:text-base font-medium mt-2 ${
          isGold ? "text-white/80" : "text-[#424242]"
        }`}
      >
        {plan.description}
      </p>
      <ul className="mt-4 space-y-2 flex-grow">
        {plan.features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center font-lato text-[0.5625rem] md:text-base font-medium"
            style={{
              color: isGold ? "#FFF" : "#000",
            }}
          >
            <TickSVG color={isGold ? "#FFF" : "#DF9632"} />
            {feature}
          </li>
        ))}
      </ul>
      {/* Keep the button at the bottom of the card */}
      <button
        className={`mt-6 w-full py-2 rounded-[24px] font-lato text-[15px] font-medium ${
          isGold
            ? "bg-white bg-opacity-50 text-[#4C3030]"
            : "bg-primary bg-opacity-50 text-[#4C3030]"
        }`}
        style={{
          background: isGold ? "#FFFFFF" : "",
        }}
        onClick={handleChoosePlan}
      >
        Choose plan
      </button>
    </div>
  );
};

export default function Pricing() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardsRef = useRef(null);
  const mobileCardsRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;
    const cards = cardsRef.current;
    const mobileCards = mobileCardsRef.current;
    let currentIndex = 0;
    const autoScrollInterval = 3000;

    gsap.set([title, description], { x: -50, opacity: 0 });
    gsap.set(cards, { y: 50, opacity: 0 });

    const animateIn = () => {
      gsap.to([title, description], {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        ease: "power3.out",
      });
      gsap.to(cards, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.3,
      });
    };

    const animateOut = () => {
      gsap.to([title, description], {
        x: -50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "power3.in",
      });
      gsap.to(cards, {
        y: 50,
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      });
    };

    ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: animateIn,
      once: true,
      // onLeave: animateOut,
      // onEnterBack: animateIn,
      // onLeaveBack: animateOut,
    });

    // Auto-scroll logic for mobile cards
    const scrollCards = () => {
      if (mobileCards && mobileCards.children.length > 0) {
        const cards = mobileCards.children;
        currentIndex = (currentIndex + 1) % cards.length;
        mobileCards.scrollTo({
          left: cards[currentIndex].offsetLeft - 25,
          behavior: "smooth",
        });
      }
    };
    const intervalId = setInterval(scrollCards, autoScrollInterval);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      clearInterval(intervalId); // Cleanup auto-scroll interval
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="padding-container !px-0 margin-container bg-gradient-to-b from-[#F7E4CB] via-[#F7E4CB] to-[#DFA75B]"
    >
      <div className="max-w-7xl mx-auto padding-container px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl m-auto">
          {/* This shud come from left  */}
          <h2
            ref={titleRef}
            className="text-[1.5625rem] md:text-[3.5rem] font-semibold leading-none text-primary text-left"
          >
            Plans &amp; Pricing
          </h2>
          {/* This shud come from left  */}
          <p
            ref={descriptionRef}
            className="text-[0.75rem] mt-5 md:text-lg text-gray font-lato font-medium leading-normal text-left !mb-5 max-w-xl w-full ml-0"
          >
            AKF offers all sorts of plans that suit your requirements and goals.
            You can choose the plan that suits you best.
          </p>
          {/* For Large Screens */}
          <div
            ref={cardsRef}
            className="hidden md:grid max-w-5xl m-auto grid grid-cols-1 mt-68 md:grid-cols-3 gap-8 md:gap-0 md:p-4 align-middle justify-center !pt-7 bg-white/50 text-primary backdrop-filter backdrop-blur-[17.5px] rounded-[26px] scale-100"
          >
            {plans.map((plan, index) => (
              <PlanCard key={plan.name} plan={plan} isMiddle={index === 1} />
            ))}
          </div>
          {/* For Mobile screens */}
          <div
            ref={mobileCardsRef}
            className="md:hidden flex space-x-4 overflow-x-scroll hide-scrollbar"
          >
            {plans.map((plan, index) => (
              <div key={plan.name} className="flex-shrink-0 h-full w-[90%]">
                <PlanCard plan={plan} isMiddle={false} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
