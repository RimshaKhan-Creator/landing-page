'use client';

import { useRef } from 'react';
import Image from 'next/image';
import {  FiSearch,FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const sampleList = new Array(10).fill({
  title: 'Glvde & Kish - Asmara...',
  artist: '@maroon 5',
  img: '/album9.jpg',
  bpm: '135 BPM',
  key: 'F# MINOR',
  likes: 12,
});

export default function TopnewSamples() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -150, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 150, behavior: 'smooth' });
  };

  return (
    <section className="bg-[#121212] text-white p-6 md:p-10 rounded-xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-2xl md:text-4xl font-bold">
          Top new <span className="text-orange-500">samples</span>
        </h2>
        
            <div className="flex items-center gap-2">
              {/* Search input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for samples, presets..."
                  className="pl-10 pr-4 py-2  border border-gray-200 focus:outline-none placeholder-gray-400 text-sm"
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
        
              {/* Back button */}
              <button className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
                <FiArrowLeft className="text-white" />
              </button>
        
              {/* Forward button */}
              <button className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
                <FiArrowRight className="text-white" />
              </button>
            </div>
      </div>


      {/* Featured Track */}
<div className="flex items-center bg-[#1e1e1e] p-4 rounded-xl mb-6 gap-4">
  <Image src="/photo.jpg" alt="Featured" width={60} height={60} className="rounded" />

  {/* Waveform + Play Button */}
  <div className="relative flex-1 h-14 flex items-center">

    {/* Play button */}
    <button className="absolute left-2 z-10 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg hover:scale-105 transition">
      ▶
    </button>
        {/* Background waveform layer */}
    <Image
      src="/wave.png" // Replace with your actual waveform image (SVG/PNG)
      alt="Waveform"
      fill
      className="object-contain opacity-60"
    />
    {/* Song title over waveform */}
    <div className="ml-14">
      <p className="font-semibold truncate">Glvde & Kish - Asmara...</p>
      <p className="text-sm text-gray-400">@maroon 5</p>
    </div>
  </div>

  {/* BPM / Key */}
  <div className="text-right text-sm leading-tight">
    <p className="text-orange-400 font-semibold">135 BPM</p>
    <p className="text-orange-400">F# MINOR</p>
  </div>

  {/* Track Number */}
  <p className="text-4xl font-bold text-orange-500">01</p>
</div>


      {/* Scrollable List */}
      <div
        ref={scrollRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto no-scrollbar"
      >
        {sampleList.map((item, index) => (
          <div key={index} className="flex items-center bg-[#1e1e1e] p-3 rounded-lg gap-3 min-w-[250px]">
            <Image src={item.img} alt="sample" width={50} height={50} className="rounded" />
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium truncate">{item.title}</p>
              <p className="text-xs text-gray-400">{item.artist}</p>
              <div className="text-red-500 text-xs mt-1">❤️ {item.likes}</div>
            </div>
            <p className="text-orange-500 font-bold text-lg">
              {String(index + 2).padStart(2, '0')}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
