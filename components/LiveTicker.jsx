'use client';
import { useEffect, useRef } from 'react';

const EVENTS = [
  'Infosys just enrolled 500 learners in AI & ML',
  'TCS completed Data Science cohort — 98% pass rate',
  'Wipro L&D Partnership renewed for 2025',
  'New batch starting: Cloud & DevOps — Feb 10',
  'Accenture team achieves IIT Delhi certification',
  'HCL upskilled 1,200 engineers in Q4 2024',
  'Amazon India signed 3-year enterprise agreement',
  'Microsoft Azure partnership announced',
];

export default function LiveTicker() {
  const doubled = [...EVENTS, ...EVENTS];
  return (
    <div className="overflow-hidden bg-gradient-to-r from-[#0f1e6e] via-[#1a3a8f] to-[#0d5c8f] py-2.5 relative">
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#0f1e6e] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[#0f1e6e] to-transparent pointer-events-none" />
      <div
        className="flex w-max"
        style={{ animation: 'ticker 30s linear infinite' }}
      >
        {doubled.map((event, i) => (
          <span
            key={i}
            className="whitespace-nowrap px-7 text-sm font-medium text-white/85 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 inline-block" />
            {event}
          </span>
        ))}
      </div>
      <style>{`@keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
    </div>
  );
}
