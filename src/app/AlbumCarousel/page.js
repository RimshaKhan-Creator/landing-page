'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import {  FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const tabs = ['Top picks', 'Hip-Hop', 'Pop', 'R&B', 'Trap', 'Afrobeat', 'Latin', 'Rock'];

const albumData = {
  'Top picks': [
    { title: 'Moonbirds', artist: '@maroon 5', img: '/1s.png', likes: 12 },
    { title: 'Moonbirds', artist: '@maroon 5', img: '/2s.png', likes: 12 },
    { title: 'Moonbirds', artist: '@maroon 5', img: '/3s.png', likes: 12 },
    { title: 'Moonbirds', artist: '@maroon 5', img: '/4s.png', likes: 12 },
    { title: 'Moonbirds', artist: '@maroon 5', img: '/5s.png', likes: 12 },
  ],
  'Hip-Hop': [
    { title: 'Rap King', artist: '@jayz', img: '/album6.jpg', likes: 20 },
    { title: '808 Waves', artist: '@kanye', img: '/album7.jpg', likes: 18 },
  ],
  Pop: [
    { title: 'Pop Vibes', artist: '@dua', img: '/album8.jpg', likes: 22 },
  ],
};

export default function AlbumCarousel() {
  const [activeTab, setActiveTab] = useState('Top picks');
  const tabRef = useRef(null);

  const scrollLeft = () => {
    tabRef.current?.scrollBy({ left: -150, behavior: 'smooth' });
  };

  const scrollRight = () => {
    tabRef.current?.scrollBy({ left: 150, behavior: 'smooth' });
  };

  return (
    <section className="p-4 md:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-2xl md:text-4xl font-bold">
          New On <span className="text-red-500">Sample this</span>
        </h2>
        <div className="flex items-center gap-2">
      {/* Search input */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search for samples, presets..."
          className="pl-10 pr-4 py-2  border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E33C12] placeholder-gray-400 text-sm"
        />
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      {/* Back button */}
      <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-gray-100 transition">
        <FiArrowLeft className="text-black" />
      </button>

      {/* Forward button */}
      <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-gray-100 transition">
        <FiArrowRight className="text-black" />
      </button>
    </div>
      </div>

      {/* Tabs (Horizontally Scrollable) */}
     <div
  ref={tabRef}
  className="flex gap-2 mb-4 overflow-x-auto no-scrollbar whitespace-nowrap"
>
  {tabs.map((tab) => (
    <button
      key={tab}
      className={`px-4 py-2 text-sm rounded-full border ${
        tab === activeTab
          ? 'bg-[#E33C12] text-white border-[#E33C12]'
          : 'text-[#E33C12] border-[#E33C12] hover:bg-[#E33C12]/10'
      }`}
      onClick={() => setActiveTab(tab)}
    >
      {tab}
    </button>
  ))}
</div>

      {/* Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {(albumData[activeTab] || []).length > 0 ? (
          albumData[activeTab].map((album, index) => (
            <div key={index} className="bg-slate-100 rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src={album.img}
                  alt={album.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-3">
                <p className="font-semibold">{album.title}</p>
                <p className="text-sm text-gray-500">{album.artist}</p>
                <div className="flex items-center text-sm text-red-500 mt-2">
                  ❤️ {album.likes}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 text-lg py-8">
            No albums found in <span className="font-semibold">{activeTab}</span>.
          </div>
        )}
      </div>
    </section>
  );
}
