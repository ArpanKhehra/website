"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  children,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 overflow-hidden", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-0 md:py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover-pause"
        )}
      >
        {items.map((item, idx) => (
          <li key={idx} className="flex-shrink-0">
            {children ? (
              children(item)
            ) : (
              <div className="w-[350px] max-w-full relative rounded-2xl border border-b-0 border-slate-700 px-8 py-6 md:w-[450px]">
                <blockquote>
                  <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                    {item.quote}
                  </span>
                  <div className="relative z-20 mt-6 flex flex-row items-center">
                    <span className="flex flex-col gap-1">
                      <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                        {item.name}
                      </span>
                      <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                        {item.title}
                      </span>
                    </span>
                  </div>
                </blockquote>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
