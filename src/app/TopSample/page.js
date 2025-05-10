// app/samples/page.js or components/TopSamples.js

'use client';

import Image from 'next/image';
import { useState } from 'react';

const filters = ['Tempo', 'Key', 'Genre', 'Instrument', 'License'];
const sortOptions = ['Popular', 'Newest', 'Trending'];

const samples = Array(10).fill({
  title: 'Using me',
  artist: '@theweeknd',
  bpm: '125 BPM',
  key: 'F# MINOR',
  image: '/album9.jpg',
  waveform: '/waveform.svg', // replace with real waveform
});

export default function TopSample() {
  const [selectedSort, setSelectedSort] = useState('Popular');

  return (
    <div className="p-4 md:p-8 bg-black min-h-screen text-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">
          Top <span className="text-red-500">Samples</span>
        </h1>

        <div className="flex flex-wrap gap-2">
          {filters.map((filter, i) => (
            <button
              key={i}
              className="bg-white/10 border border-white/20 text-sm px-3 py-1 rounded-full hover:bg-white/20"
            >
              {filter}
            </button>
          ))}

          <div className="relative">
            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
              className="bg-white/10 border border-white/20 px-3 py-1 text-sm rounded-full appearance-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Sample List */}
      <div className="space-y-4">
        {samples.map((sample, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition"
          >
            {/* Cover Image */}
            <Image
              src={sample.image}
              alt="Album"
              width={50}
              height={50}
              className="rounded-md"
            />

            {/* Waveform + Play */}
            <div className="relative flex-1 h-12 flex items-center">
              <Image
                src={sample.waveform}
                alt="Waveform"
                fill
                className="object-contain opacity-60"
              />
              <button className="absolute left-2 z-10 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center shadow hover:scale-105 transition">
                ▶
              </button>
            </div>

            {/* Info */}
            <div className="flex flex-col text-sm w-32 md:w-40 truncate">
              <span className="font-semibold truncate">{sample.title}</span>
              <span className="text-gray-400 truncate">{sample.artist}</span>
            </div>

            {/* BPM / Key */}
            <div className="text-right w-20 text-sm leading-tight text-red-400 hidden md:block">
              <p>{sample.bpm}</p>
              <p>{sample.key}</p>
            </div>

            {/* Actions */}
            <div className="flex gap-3 text-red-400 text-lg">
              <button title="Like">❤️</button>
              <button title="Download">⬇</button>
              <button title="Share">🔗</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
