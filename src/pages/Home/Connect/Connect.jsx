import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card/Card.jsx';

const cardData = [
  {
    image: '/assets/events/sairs2025group.jpeg',
    title: 'SAIRS 2025',
    description: "Southern California's largest AI conference"
  },
  {
    image: '/assets/baidemoday.jpeg',
    title: 'Demo Days',
    description: 'Presenting to VCs and investors'
  },
  {
    image: '/assets/events/baiyacht.jpeg',
    title: 'Team Bonding',
    description: 'ft. our year-end celebration'
  },
  {
    image: '/assets/insight.jpeg',
    title: 'Career Talks',
    description: 'recruitment events and workshops with leading companies'
  },
];

function Connect() {
    const itemRefs = useRef([]);

    useEffect(() => {
        const els = itemRefs.current.filter(Boolean);
        if (els.length === 0) return;

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        els.forEach((el, idx) => {
            el.style.transitionDelay = `${(idx % 4) * 70}ms`;
            io.observe(el);
        });

        return () => io.disconnect();
    }, []);

    return (
        <div className="relative w-[88vw] lg:w-[77vw] py-8">
            {/* right - sticky */}
            <div className="sticky top-20 right-12 md:right-16 max-w-[30vw] pr-2 sm:pr-8 z-10 flex items-start mt-16 float-right">
                <div className="text-left">
                    <span className="absolute left-0 text-[7rem] md:text-[10rem] font-black text-white/10 select-none leading-none -z-10">02</span>
                    <div className="relative ml-0 mt-10 md:ml-5">
                        <span className="inline-block mb-4 text-[#EE78D0] font-bold tracking-widest text-lg uppercase border-t-2 border-[#EE78D0] pt-2 pr-6">Connect</span>
                        <h2 className="text-xl md:text-4xl font-extrabold mb-6 text-white">Bringing opportunity, building community</h2>
                        <Link 
                          to="/events" 
                          className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-[#7069EC]/40 to-[#EE78D0]/40 text-white font-medium rounded-full text-xs sm:text-sm md:text-base hover:from-[#5a54d4]/60 hover:to-[#d665b8]/60 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                          see events
                          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                    </div>
                </div>
            </div>

            {/* left cards */}
            <div className="ml-0 sm:ml-8">
                <div className="py-16 px-8 pb-16">
                    <div className="flex flex-col gap-4 md:gap-8">
                        {cardData.map((card, idx) => (
                            <div key={idx} className="flex justify-left md:justify-center">
                                <div ref={(el) => (itemRefs.current[idx] = el)} className="reveal max-w-[40vw] sm:max-w-full w-[275px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] h-[250px] sm:h-[300px] md:h-[350px]">
                                    <Card 
                                        image={card.image} 
                                        title={card.title} 
                                        description={card.description} 
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Connect;