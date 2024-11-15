import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const VerticalInfiniteStrips = ({
  imageSets,
  speed = "normal",
  pauseOnHover = true,
  className,
}) => {
  const [start, setStart] = useState(false);

  const Strip = ({ images, direction = "up" }) => {
    const containerRef = React.useRef(null);
    const scrollerRef = React.useRef(null);

    useEffect(() => {
      if (containerRef.current && scrollerRef.current) {
        // Clone the content for seamless loop
        const scrollerContent = Array.from(scrollerRef.current.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          scrollerRef.current.appendChild(duplicatedItem);
        });

        // Set animation duration based on speed prop
        if (containerRef.current) {
          const duration =
            speed === "fast" ? "30s" : speed === "slow" ? "60s" : "45s";
          containerRef.current.style.setProperty(
            "--animation-duration",
            duration
          );
        }

        setStart(true);
      }
    }, []);

    return (
      <div ref={containerRef} className="relative h-full overflow-hidden">
        <ul
          ref={scrollerRef}
          className={cn(
            "flex flex-col gap-2",
            start && "animate-scroll-vertical",
            direction === "up" ? "animate-scroll-up" : "animate-scroll-down",
            pauseOnHover && "hover:pause-animation"
          )}
        >
          <div className="scrolling-strip">
            {images.map((image, idx) => (
              <Image
                key={idx}
                src={image}
                alt={`Image ${idx + 1}`}
                width={210}
                height={210}
                className="w-[210px] h-[210px] object-cover aspect-[1]"
              />
            ))}
          </div>
        </ul>
      </div>
    );
  };

  return (
    <div className={cn("flex gap-2 h-[700px]", className)}>
      {imageSets.map((images, idx) => (
        <Strip
          key={idx}
          images={images}
          direction={idx % 2 === 0 ? "up" : "down"}
        />
      ))}
    </div>
  );
};

export default VerticalInfiniteStrips;
