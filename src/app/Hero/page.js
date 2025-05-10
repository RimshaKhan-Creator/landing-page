"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    title: "Connections",
    artist: "The Weeknd",
    description:
      "Jacinth by UNKWN contains 10 original gospel compositions. UNKWN, along with a team of session players, has recorded a majority of each composition using live instruments such as the upright piano, bass guitar, and original vocals.",
    image: "/herosection.png",
  },
  {
    title: "Vibes",
    artist: "Drake",
    description:
      "A mix of mellow and vibrant compositions with live instruments and vocals.",
    image: "/slide2.jpg",
  },
  {
    title: "Echoes",
    artist: "Billie Eilish",
    description:
      "Dark, ambient textures with original vocals and minimalist instruments.",
    image: "/slide3.jpg",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Optional auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-black">
      {/* Slide */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="flex h-full items-center justify-between px-10 text-white">
            <div className="max-w-lg">
              <h1 className="text-4xl font-bold">{slide.title}</h1>
                <div className="flex gap-1">
               <img
              src={slide.image}
              alt={slide.title}
              className="w-[60px] h-[60px] object-cover rounded-lg shadow-lg"
            />
              <p className="mt-6 font-semibold text-red-500">{slide.artist}</p>
              </div>
              <p className="mt-4 text-lg">{slide.description}</p>
             

<div>

                   {/* Buttons Overlay */}
          <div className="absolute bottom-8 right-4 flex gap-3">
            <button className="px-5 py-2 border border-white rounded-md text-white text-sm hover:bg-white hover:text-black transition">
              Browse Pack ↗
            </button>
           
            <button className="px-5 py-2 bg-red-500 rounded-full text-white text-sm hover:bg-red-600 transition">
  ▶ Play Demo
</button>

          </div>
        </div>
            </div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-[300px] h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col space-y-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-red-500" : "bg-orange-200"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
