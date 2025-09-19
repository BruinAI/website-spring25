import React, { useEffect, useRef } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { FiChevronRight } from 'react-icons/fi';

const stepsData = [
  {
    id: 1,
    label: '22',
    title: 'EAF',
    body: 'Come meet us and learn about what Bruin AI does!',
    when: 'Mon, Sep 22 · 12–3pm'
  },
  {
    id: 2,
    label: '25',
    title: 'Info Session + Networking Night',
    body: 'Overview, Q&A, resume help, and networking',
    when: 'Thu, Sep 25'
  },
  {
    id: 3,
    label: '26',
    title: 'Research Paper Reading',
    body: 'Dive into an AI research paper with us',
    when: 'Fri, Sep 26'
  },
  {
    id: 4,
    label: '29',
    title: 'Data Science Club Showcase',
    body: 'Joint info session with Data Science Union, DataRes, Statistics Club, and more',
    when: 'Mon, Sep 29'
  },
  {
    id: 5,
    label: '01',
    title: 'Applications Due',
    body: 'Submit your application!',
    when: 'Wed, Oct 1 · 11:45pm'
  },
  {
    id: 6,
    label: '03',
    title: 'AWS Summit',
    body: 'Join us at the AWS Summit — learn, network, and explore industry trends',
    when: 'Fri-Sat, Oct 3-4'
  },
  {
    id: 7,
    label: '--',
    title: 'Coffee Chats',
    body: 'Invite Only',
    when: 'TBD'
  },
  {
    id: 8,
    label: '--',
    title: 'Final Interviews',
    body: 'Invite Only',
    when: 'TBD'
  }
];

export default function Join() {
  const timelineRef = useRef(null);
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);

  useEffect(() => {
    const timelineScroll = timelineRef.current;
    const topRow = topRowRef.current;
    const bottomRow = bottomRowRef.current;
    
    if (timelineScroll && topRow && bottomRow) {
      const handleScroll = () => {
        const scrollLeft = timelineScroll.scrollLeft;
        const maxScroll = timelineScroll.scrollWidth - timelineScroll.clientWidth;
        const scrollPercent = maxScroll > 0 ? scrollLeft / maxScroll : 0;
        
        // move bg images based on timeline scroll
        const topRowTransform = -scrollPercent * 40; // left, max 40%
        const bottomRowTransform = -50 + (scrollPercent * 40); // start at -50% and move right, max 40%
        
        topRow.style.transform = `translateX(${topRowTransform}%)`;
        bottomRow.style.transform = `translateX(${bottomRowTransform}%)`;
      };
      
      timelineScroll.addEventListener('scroll', handleScroll);
      
      return () => {
        timelineScroll.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <>
      <Navbar className="z-50"/>
      
      {/* app deadline */}
      <div className="sticky z-30 top-36 sm:top-28 md:top-20 right-4 md:right-8 max-w-48 sm:max-w-xs ml-auto">
        <a 
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:scale-105 transition-transform duration-200"
        >
          <div className="bg-gradient-to-r from-[#7069EC]/20 via-[#AD70DE]/20 to-[#EE78D0]/20 p-0.5 rounded-2xl shadow-lg backdrop-blur-sm animate-pulse">
            <div className="filter backdrop-blur-sm rounded-2xl p-2 px-3 text-center">
              <div className="text-white font-semibold text-xs">applications coming soon ...</div>
            </div>
          </div>
        </a>
      </div>

      <main className="bg-black min-h-screen pt-12">
        <div className="max-w-[97vw] sm:max-w-[90vw] mx-auto px-6">
          <div className="flex items-center justify-start mb-10">
            <h1 className="text-xl md:text-2xl font-[1000] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#7069EC] via-[#AD70DE] to-[#EE78D0]">
              2025 Recruitment Timeline
            </h1>
          </div>

          {/* timeline */}
          <div className="relative h-[60vh] sm:h-[67vh] md:h-[75vh] overflow-hidden rounded-md">
            {/* bg images 2 rows */}
            <div className="absolute inset-0 opacity-30">
              <div ref={topRowRef} className="absolute top-0 left-0 right-0 h-1/2 flex animate-scroll-left">
                <img src="/assets/joins/yachtjoin11.jpeg" alt="" className="h-full w-auto object-cover flex-shrink-0" />
                <img src="/assets/joins/sairsjoin12.jpeg" alt="" className="h-full w-auto object-cover flex-shrink-0" />
                <img src="/assets/joins/execjoin13.jpeg" alt="" className="h-full w-auto object-cover flex-shrink-0" />
                <img src="/assets/joins/aspjoin14.jpeg" alt="" className="h-full w-auto object-cover flex-shrink-0" />
                <img src="/assets/joins/bsjdemodayjoin15.jpeg" alt="" className="h-full w-auto object-cover flex-shrink-0" />
              </div>
              
              <div ref={bottomRowRef} className="absolute bottom-0 left-0 right-0 h-1/2 flex animate-scroll-right" style={{ transform: 'translateX(-50%)' }}>
                <img src="/assets/joins/retreat23join21.jpeg" alt="" className="h-full w-auto object-cover flex-shrink-0" />
                <img src="/assets/joins/sbsyachtjoin22.jpeg" alt="" className="h-full w-auto object-cover flex-shrink-0" />
                <img src="/assets/joins/team23join23.jpeg" alt="" className="h-full w-auto object-cover flex-shrink-0" />
                <img src="/assets/joins/ajjhyachtjoin24.jpeg" alt="" className="h-full w-auto object-cover flex-shrink-0" />
                <img src="/assets/joins/beachjoin25.jpeg" alt="" className="h-full w-auto object-cover flex-shrink-0" />
                <img src="/assets/joins/guitar.jpeg" alt="" className="h-full w-auto object-cover flex-shrink-0" />
              </div>
            </div>
            
            <div className="pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2 border-t border-dashed border-[#AD70DE]/40 animate-pulse z-10" />

            {/* scroll container */}
            <div ref={timelineRef} className="relative h-full overflow-x-auto overflow-y-hidden scrollbar-thin snap-x snap-mandatory">
              <div className="absolute inset-y-0 left-0 right-0">
                <div className="h-full w-max flex items-stretch gap-2 px-6">
                  {stepsData.map((step, idx) => (
                    <div key={step.id} className="relative snap-center flex-none w-[45vw] md:w-[40vw] lg:w-[30vw]">
                      {/* nodes */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-white/10 shadow-lg flex items-center justify-center">
                          <span className="text-black font-bold text-sm md:text-base">{step.label}</span>
                        </div>
                      </div>

                      {/* main cards */}
                      <div className={`absolute left-1/2 -translate-x-1/2 ${idx % 2 === 0 ? 'bottom-[52%]' : 'top-[52%]'} w-[90%] md:w-[78%] z-10`}>
                        <div className="rounded-xl border border-white/10 bg-zinc-900/80 p-4 md:p-6 backdrop-blur-sm">
                          <h2 className="text-white font-extrabold text-lg md:text-xl leading-tight">{step.title}</h2>
                          <p className="text-gray-200 mt-2 text-xs md:text-sm">{step.body}</p>
                          <div className="mt-4 h-px w-24 bg-gradient-to-r from-[#7069EC] to-[#EE78D0]" />
                        </div>
                      </div>

                      {/* small cards */}
                      <div className={`absolute left-1/2 -translate-x-1/2 ${idx % 2 === 0 ? 'top-[56%]' : 'bottom-[56%]'} z-10`}>
                        <div className="px-3 py-1.5 rounded-full border border-white/10 bg-zinc-900/80 text-gray-200 text-xs md:text-sm whitespace-nowrap">
                          {step.when}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* scroll indicator */}            
            <button 
              onClick={() => {
                if (timelineRef.current) {
                  timelineRef.current.scrollBy({
                    left: 300,
                    behavior: 'smooth'
                  });
                }
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 bg-black/40 hover:bg-black/60 rounded-full z-20 transition-all duration-200 cursor-pointer animate-bounce-side"
              aria-label="Scroll timeline right"
            >
              <FiChevronRight className="text-white/70 hover:text-white drop-shadow-xl" size={16} />
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
