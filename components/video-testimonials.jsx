import React, { useRef, useEffect } from "react";

export default function VideoTestimonials() {
  const videoRefs = useRef([]); // Array to store video references

  const videos = [
    {
      id: 1,
      src: "/video1.mov",
      thumbnail: "/images/video1-thumbnail.jpg",
      title: "Arpan Khehra",
    },
    {
      id: 2,
      src: "/video-2.mov",
      thumbnail: "/images/video2-thumbnail.jpg",
      title: "Arpan Khehra",
    },
  ];

  useEffect(() => {
    // Autoplay both videos when the component mounts
    videoRefs.current.forEach((video) => {
      if (video) {
        video.play();
      }
    });
  }, []);

  return (
    <div className="mx-auto flex flex-col md:flex-row gap-8 items-center justify-center">
      {videos.map((video, index) => (
        <div
          key={video.id}
          className="relative w-full md:w-[500px] h-[500px] md:h-[600px] flex items-center justify-center" // Adjust height for mobile and desktop
        >
          <video
            ref={(el) => (videoRefs.current[index] = el)} // Store video reference
            className="w-full h-full object-cover rounded-lg shadow-lg"
            autoPlay
            loop
            muted
            playsInline
            src={video.src}
          />
          <p className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 text-sm">
            {video.title}
          </p>
        </div>
      ))}
    </div>
  );
}
