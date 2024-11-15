import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="md:flex hidden absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-white/80 shadow-md hover:bg-white z-10"
  >
    <ChevronRight className="w-6 h-6" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="md:flex hidden absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-white/80 shadow-md hover:bg-white z-10"
  >
    <ChevronLeft className="w-6 h-6" />
  </button>
);

const VideoCarousel = ({ videos }) => {
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 2000);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Original desktop functionality
  useEffect(() => {
    if (!isMobile) {
      const activeVideo = videoRefs.current[activeIndex];
      if (activeVideo) {
        activeVideo.play();
        activeVideo.onended = () => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % videos.length);
        };
      }
      return () => {
        if (activeVideo) {
          activeVideo.onended = null;
        }
      };
    }
  }, [activeIndex, videos.length, isMobile]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // if (isMobile) {
  //   return (
  //     <div className="relative mx-auto w-full max-h-[500px] max-w-[500px] mt-4 md:mt-0">
  //       <Slider {...sliderSettings}>
  //         {videos.map((video, index) => (
  //           <div key={video.id} className="px-2">
  //             <div className="relative">
  //               <video
  //                 className="h-auto max-h-[500px] w-full md:h-full object-cover rounded-lg shadow-lg"
  //                 muted
  //                 playsInline
  //                 loop
  //                 autoPlay
  //                 src={video.src}
  //               />
  //               <p className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 text-sm">
  //                 {video.title}
  //               </p>
  //             </div>
  //           </div>
  //         ))}
  //       </Slider>
  //     </div>
  //   );
  // }

  // Original desktop layout
  return (
    // <div className="relative mx-auto w-full h-[600px] md:w-[500px] flex items-center justify-center">
    //   {videos.map((video, index) => (
    //     <div
    //       key={video.id}
    //       className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
    //         index === activeIndex ? "opacity-100" : "opacity-0"
    //       }`}
    //     >
    //       <video
    //         ref={(el) => (videoRefs.current[index] = el)}
    //         className="w-full h-full object-cover rounded-lg shadow-lg"
    //         muted
    //         playsInline
    //         src={video.src}
    //       />
    //       <p className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 text-sm">
    //         {video.title}
    //       </p>
    //     </div>
    //   ))}
    // </div>
    <div className="relative mx-auto w-full max-h-[500px] max-w-[500px] mt-4 md:mt-0">
      <Slider {...sliderSettings}>
        {videos.map((video, index) => (
          <div key={video.id} className="px-2">
            <div className="relative">
              <video
                className="h-auto max-h-[500px] w-full md:h-full object-cover rounded-lg shadow-lg"
                muted
                playsInline
                loop
                autoPlay
                src={video.src}
              />
              <p className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                {video.title}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoCarousel;
