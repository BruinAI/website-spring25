import React, { useEffect, useMemo, useRef, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { FiArrowRight } from 'react-icons/fi';

const stepsData = [
  {
    id: 1,
    label: '01',
    title: 'EAF',
    body: 'Engineering Activities Fair — come meet us and learn about Bruin AI.',
    when: 'Sep 22 · 12–3pm',
    tag: 'Week 0 · Mon'
  },
  {
    id: 2,
    label: '02',
    title: 'Info Session + Resume Slides',
    body: 'Overview of Bruin AI, Q&A, and resume slides. Networking immediately after.',
    when: 'Sep 25',
    tag: 'Week 0 · Thu'
  },
  {
    id: 3,
    label: '03',
    title: 'Research Paper Reading',
    body: 'Dive into an AI research paper with us — learn how we read and discuss research.',
    when: 'Sep 26',
    tag: 'Week 0 · Fri'
  },
  {
    id: 4,
    label: '04',
    title: 'Applications Due',
    body: 'Submit your application to join Bruin AI for the upcoming cycle.',
    when: 'Sep 26',
    tag: 'Week 0 · Fri'
  },
  {
    id: 5,
    label: '05',
    title: 'Coffee Chats',
    body: 'Casual conversations with members to learn more about tracks and culture.',
    when: 'Oct 1',
    tag: 'Week 1 · Wed'
  },
  {
    id: 6,
    label: '06',
    title: 'AWS Summit',
    body: 'Join us at the AWS Summit — learn, network, and explore industry trends.',
    when: 'Oct 4–5',
    tag: 'End of Week 1'
  },
  {
    id: 7,
    label: '07',
    title: 'Final Interviews',
    body: 'Selected candidates complete final round interviews.',
    when: 'Oct 8–9',
    tag: 'End of Week 2'
  },
  {
    id: 8,
    label: '08',
    title: 'First GM (New Interns)',
    body: 'Kickoff general meeting with newly selected interns.',
    when: 'Oct 14',
    tag: 'Week 3 · Tue'
  },
  {
    id: 9,
    label: '09',
    title: 'First Intern Training',
    body: 'Training session to onboard new interns and set up for success.',
    when: 'Oct 16',
    tag: 'Week 3 · Thu'
  }
];

export default function Join() {
  return (
    <>
      <Navbar />
      <main className="bg-black min-h-screen pt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-xl md:text-2xl font-[1000] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#7069EC] via-[#AD70DE] to-[#EE78D0]">
              2025 Recruitment Timeline
            </h1>
            <div className="flex items-center gap-2 bg-zinc-900/40 border border-white/10 rounded-full px-3 py-1 text-white text-xs select-none animate-pulse">
              <span className="text-gray-400">scroll</span>
              <FiArrowRight className="animate-pulse" />
            </div>
          </div>

          {/* Horizontal timeline */}
          <div className="relative h-[80vh] sm:h-[67vh] md:h-[75vh] min-h-[480px]">
            {/* Center dashed line */}
            <div className="pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2 border-t border-dashed border-[#AD70DE]/40 animate-pulse" />

            {/* Scroll container */}
            <div className="relative h-full overflow-x-auto overflow-y-hidden scrollbar-thin snap-x snap-mandatory">
              <div className="absolute inset-y-0 left-0 right-0">
                <div className="h-full w-max flex items-stretch gap-2 px-6">
                  {stepsData.map((step, idx) => (
                    <div key={step.id} className="relative snap-center flex-none w-[45vw] md:w-[40vw] lg:w-[30vw]">
                      {/* Node on the line */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-white/10 shadow-lg flex items-center justify-center">
                          <span className="text-black font-bold text-sm md:text-base">{step.label}</span>
                        </div>
                      </div>

                      {/* Main Card above/below */}
                      <div className={`absolute left-1/2 -translate-x-1/2 ${idx % 2 === 0 ? 'bottom-[52%]' : 'top-[52%]'} w-[90%] md:w-[78%] z-10`}>
                        <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-4 md:p-6">
                          <h2 className="text-white font-extrabold text-lg md:text-xl leading-tight">{step.title}</h2>
                          <p className="text-gray-300 mt-2 text-xs md:text-sm">{step.body}</p>
                          <div className="mt-4 h-px w-24 bg-gradient-to-r from-[#7069EC] to-[#EE78D0]" />
                        </div>
                      </div>

                      {/* Opposite-side small date/time pill(s) */}
                      <div className={`absolute left-1/2 -translate-x-1/2 ${idx % 2 === 0 ? 'top-[56%]' : 'bottom-[56%]'} z-10`}>
                        <div className="flex items-center gap-2">
                          <div className="px-3 py-1.5 rounded-full border border-white/10 bg-zinc-900/70 text-gray-200 text-xs md:text-sm whitespace-nowrap">
                            {step.when}
                          </div>
                          {step.tag && (
                            <div className="px-3 py-1.5 rounded-full border border-white/10 bg-zinc-900/70 text-gray-200 text-xs md:text-sm whitespace-nowrap">
                              {step.tag}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
